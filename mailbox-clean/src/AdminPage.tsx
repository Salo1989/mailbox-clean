import { useEffect, useState } from "react";

type ContactMessage = {
  id?: number;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type Appointment = {
  id?: number;
  fullName: string;
  email: string;
  phone: string;
  appointmentDate: string;
  appointmentTime: string;
  notes: string;
};

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    if (isLoggedIn) {
      fetch("http://localhost:8080/api/contact")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch messages");
          }
          return res.json();
        })
        .then((data) => {
          setMessages(data);
        })
        .catch((err) => {
          console.error("Error fetching messages:", err);
          setError("Could not load messages.");
        });

      fetch("http://localhost:8080/api/appointments")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch appointments");
          }
          return res.json();
        })
        .then((data) => {
          setAppointments(data);
        })
        .catch((err) => {
          console.error("Error fetching appointments:", err);
          setError("Could not load appointments.");
        });
    }
  }, [isLoggedIn]);

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:8080/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  } catch (err) {
    console.error(err);
    setError("Server error");
  }
};

  const handleDeleteMessage = async (id?: number) => {
    if (!id) return;

    try {
      const response = await fetch(`http://localhost:8080/api/contact/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete message");
      }

      setMessages(messages.filter((message) => message.id !== id));
    } catch (err) {
      console.error("Error deleting message:", err);
      alert("Could not delete message.");
    }
  };

  const handleDeleteAppointment = async (id?: number) => {
    if (!id) return;

    try {
      const response = await fetch(
        `http://localhost:8080/api/appointments/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete appointment");
      }

      setAppointments(
        appointments.filter((appointment) => appointment.id !== id)
      );
    } catch (err) {
      console.error("Error deleting appointment:", err);
      alert("Could not delete appointment.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f1f5f9",
          padding: "20px",
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "16px",
            width: "100%",
            maxWidth: "400px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            display: "grid",
            gap: "16px",
          }}
        >
          <h2 style={{ margin: 0 }}>Admin Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
            }}
          />

          {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}

          <button
            type="submit"
            style={{
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background: "#0f172a",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <h1 style={{ marginBottom: "10px" }}>Admin Dashboard</h1>
            <p style={{ margin: 0 }}>You are logged in ✅</p>
          </div>

          <button
            onClick={() => setIsLoggedIn(false)}
            style={{
              padding: "12px 20px",
              borderRadius: "12px",
              border: "none",
              background: "#0f172a",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>

        {error && (
          <p style={{ color: "red", marginBottom: "20px" }}>{error}</p>
        )}

        <h2 style={{ marginBottom: "20px" }}>Messages</h2>

        {messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          <div style={{ display: "grid", gap: "20px", marginBottom: "50px" }}>
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "16px",
                  border: "1px solid #cbd5e1",
                }}
              >
                <p><strong>Name:</strong> {message.fullName}</p>
                <p><strong>Email:</strong> {message.email}</p>
                <p><strong>Phone:</strong> {message.phone}</p>
                <p><strong>Subject:</strong> {message.subject}</p>
                <p><strong>Message:</strong> {message.message}</p>

                <button
                  onClick={() => handleDeleteMessage(message.id)}
                  style={{
                    marginTop: "10px",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#ef4444",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <h2 style={{ marginBottom: "20px" }}>Appointments</h2>

        {appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <div style={{ display: "grid", gap: "20px" }}>
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "16px",
                  border: "1px solid #cbd5e1",
                }}
              >
                <p><strong>Name:</strong> {appointment.fullName}</p>
                <p><strong>Email:</strong> {appointment.email}</p>
                <p><strong>Phone:</strong> {appointment.phone}</p>
                <p><strong>Date:</strong> {appointment.appointmentDate}</p>
                <p><strong>Time:</strong> {appointment.appointmentTime}</p>
                <p><strong>Notes:</strong> {appointment.notes}</p>

                <button
                  onClick={() => handleDeleteAppointment(appointment.id)}
                  style={{
                    marginTop: "10px",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#ef4444",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}