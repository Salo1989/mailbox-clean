import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080";

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
  notes?: string;
};

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        setError("Wrong username or password.");
        return;
      }

      setIsLoggedIn(true);
    } catch {
      setError("Could not connect to backend.");
    }
  }

  useEffect(() => {
    if (!isLoggedIn) return;

    fetch(`${API_URL}/api/contact`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch contacts");
        return res.json();
      })
      .then((data) => setContacts(data))
      .catch(() => setError("Could not load contact messages."));

    fetch(`${API_URL}/api/appointments`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch appointments");
        return res.json();
      })
      .then((data) => setAppointments(data))
      .catch(() => setError("Could not load appointments."));
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div style={styles.page}>
        <form onSubmit={handleLogin} style={styles.loginBox}>
          <h1 style={styles.title}>Admin Login</h1>

          <input
            style={styles.input}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            style={styles.input}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1>Admin Dashboard</h1>

        <button
          style={styles.logoutBtn}
          onClick={() => {
            setIsLoggedIn(false);
            setUsername("");
            setPassword("");
          }}
        >
          Logout
        </button>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      <section style={styles.section}>
        <h2>Appointments</h2>

        {appointments.length === 0 ? (
          <p>No appointments yet.</p>
        ) : (
          appointments.map((appt) => (
            <div key={appt.id} style={styles.card}>
              <h3>{appt.fullName}</h3>
              <p>
                <strong>Email:</strong> {appt.email}
              </p>
              <p>
                <strong>Phone:</strong> {appt.phone}
              </p>
              <p>
                <strong>Date:</strong> {appt.appointmentDate}
              </p>
              <p>
                <strong>Time:</strong> {appt.appointmentTime}
              </p>
              <p>
                <strong>Notes:</strong> {appt.notes || "None"}
              </p>
            </div>
          ))
        )}
      </section>

      <section style={styles.section}>
        <h2>Contact Messages</h2>

        {contacts.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          contacts.map((msg) => (
            <div key={msg.id} style={styles.card}>
              <h3>{msg.subject}</h3>
              <p>
                <strong>Name:</strong> {msg.fullName}
              </p>
              <p>
                <strong>Email:</strong> {msg.email}
              </p>
              <p>
                <strong>Phone:</strong> {msg.phone}
              </p>
              <p>{msg.message}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px",
    background: "#f8fafc",
    color: "#0f172a",
    fontFamily: "Arial, Helvetica, sans-serif",
  } as const,

  loginBox: {
    maxWidth: "420px",
    margin: "90px auto",
    background: "#fff",
    padding: "32px",
    borderRadius: "18px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    border: "1px solid #e2e8f0",
  } as const,

  title: {
    marginBottom: "22px",
    textAlign: "center",
  } as const,

  input: {
    width: "100%",
    padding: "13px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    boxSizing: "border-box",
    fontSize: "1rem",
  } as const,

  button: {
    width: "100%",
    padding: "13px",
    borderRadius: "10px",
    border: "none",
    background: "#0369a1",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "1rem",
  } as const,

  logoutBtn: {
    padding: "10px 16px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    background: "#fff",
    cursor: "pointer",
    fontWeight: 600,
  } as const,

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  } as const,

  section: {
    marginTop: "36px",
  } as const,

  card: {
    background: "#fff",
    padding: "20px",
    marginBottom: "16px",
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
  } as const,

  error: {
    color: "#dc2626",
    fontWeight: 600,
  } as const,
};