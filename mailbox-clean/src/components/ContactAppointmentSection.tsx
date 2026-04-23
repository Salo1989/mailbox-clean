import { useMemo, useState } from "react";

type MessageFormData = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type AppointmentFormData = {
  fullName: string;
  email: string;
  phone: string;
  appointmentDate: string;
  appointmentTime: string;
  notes: string;
};

export default function ContactAppointmentSection() {
  const [messageData, setMessageData] = useState<MessageFormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [appointmentData, setAppointmentData] = useState<AppointmentFormData>({
    fullName: "",
    email: "",
    phone: "",
    appointmentDate: "",
    appointmentTime: "",
    notes: "",
  });

  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [isBookingAppointment, setIsBookingAppointment] = useState(false);

  const [messageStatus, setMessageStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const [appointmentStatus, setAppointmentStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "16px 18px",
    borderRadius: 16,
    border: "1px solid #cbd5e1",
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box",
    background: "#fff",
  };

  const cardStyle: React.CSSProperties = {
    background: "#fff",
    border: "1px solid #dbeafe",
    borderRadius: 24,
    padding: 36,
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
  };

  const primaryButtonStyle: React.CSSProperties = {
    width: "100%",
    padding: "16px 20px",
    borderRadius: 16,
    border: "none",
    background: "#0b74af",
    color: "#fff",
    fontWeight: 700,
    fontSize: "1rem",
    cursor: "pointer",
  };

  const today = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  }, []);

  const availableTimes = useMemo(() => {
    if (!appointmentData.appointmentDate) return [];

    const selectedDate = new Date(`${appointmentData.appointmentDate}T00:00:00`);
    const day = selectedDate.getDay(); // 0 Sunday, 1 Monday, ..., 6 Saturday

    if (day === 0) return [];

    let startHour = 9;
    let endHour = 19;

    if (day === 6) {
      startHour = 10;
      endHour = 14;
    }

    const times: string[] = [];

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minutes = 0; minutes < 60; minutes += 15) {
        const h = `${hour}`.padStart(2, "0");
        const m = `${minutes}`.padStart(2, "0");
        times.push(`${h}:${m}`);
      }
    }

    return times;
  }, [appointmentData.appointmentDate]);

  const handleMessageChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMessageData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAppointmentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "appointmentDate") {
      const selectedDate = new Date(`${value}T00:00:00`);
      const selectedDay = selectedDate.getDay();

      if (selectedDay === 0) {
        setAppointmentStatus({
          type: "error",
          message: "Appointments are not available on Sundays.",
        });
        setAppointmentData((prev) => ({
          ...prev,
          appointmentDate: "",
          appointmentTime: "",
        }));
        return;
      }

      setAppointmentStatus({
        type: "",
        message: "",
      });

      setAppointmentData((prev) => ({
        ...prev,
        appointmentDate: value,
        appointmentTime: "",
      }));

      return;
    }

    setAppointmentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSendingMessage(true);
    setMessageStatus({ type: "", message: "" });

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setMessageStatus({
        type: "success",
        message: "Your message was sent successfully.",
      });

      setMessageData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Message error:", error);
      setMessageStatus({
        type: "error",
        message: "Could not send your message. Please try again.",
      });
    } finally {
      setIsSendingMessage(false);
    }
  };

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingAppointment(true);
    setAppointmentStatus({ type: "", message: "" });

    try {
      const selectedDate = new Date(`${appointmentData.appointmentDate}T00:00:00`);
      const selectedDay = selectedDate.getDay();

      if (selectedDay === 0) {
        setAppointmentStatus({
          type: "error",
          message: "Appointments are not available on Sundays.",
        });
        return;
      }

      if (!appointmentData.appointmentTime) {
        setAppointmentStatus({
          type: "error",
          message: "Please choose an available appointment time.",
        });
        return;
      }

      const response = await fetch("http://localhost:8080/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (!response.ok) {
        throw new Error("Failed to save appointment");
      }

      setAppointmentStatus({
        type: "success",
        message: "Appointment booked successfully.",
      });

      setAppointmentData({
        fullName: "",
        email: "",
        phone: "",
        appointmentDate: "",
        appointmentTime: "",
        notes: "",
      });
    } catch (error) {
      console.error("Appointment error:", error);
      setAppointmentStatus({
        type: "error",
        message: "Could not book appointment. Please try again.",
      });
    } finally {
      setIsBookingAppointment(false);
    }
  };

  return (
    <section style={{ padding: "20px 0 40px" }}>
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 28,
            alignItems: "start",
          }}
        >
          <div style={cardStyle}>
            <h2
              style={{
                marginTop: 0,
                marginBottom: 28,
                fontSize: "2rem",
                color: "#0f172a",
              }}
            >
              Get In Touch
            </h2>

            <div style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.6 }}>
              <div style={{ marginBottom: 22 }}>
                <div style={{ color: "#64748b", fontSize: ".95rem" }}>Main Line</div>
                <div style={{ fontSize: "1.2rem", color: "#0f172a" }}>(954) 323-3802</div>
              </div>

              <div style={{ marginBottom: 22 }}>
                <div style={{ color: "#64748b", fontSize: ".95rem" }}>Secondary</div>
                <div style={{ fontSize: "1.2rem", color: "#0f172a" }}>(954) 278-9005</div>
              </div>

              <div style={{ marginBottom: 22 }}>
                <div style={{ color: "#64748b", fontSize: ".95rem" }}>General Inquiries</div>
                <div style={{ fontSize: "1.2rem", color: "#0f172a" }}>
                  info@mobillifescan.com
                </div>
              </div>

              <div style={{ marginBottom: 22 }}>
                <div style={{ color: "#64748b", fontSize: ".95rem" }}>Mailbox Store</div>
                <div style={{ fontSize: "1.2rem", color: "#0f172a" }}>
                  mailboxmargate@gmail.com
                </div>
              </div>

              <div>
                <div style={{ color: "#64748b", fontSize: ".95rem" }}>Address</div>
                <div style={{ fontSize: "1.15rem", color: "#0f172a" }}>
                  3200 NW 62nd Ave, Margate, FL 33063
                </div>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <h2
              style={{
                marginTop: 0,
                marginBottom: 28,
                fontSize: "2rem",
                color: "#0f172a",
              }}
            >
              Send Us a Message
            </h2>

            <form style={{ display: "grid", gap: 18 }} onSubmit={handleMessageSubmit}>
              <input
                style={inputStyle}
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={messageData.fullName}
                onChange={handleMessageChange}
                required
              />

              <input
                style={inputStyle}
                type="email"
                name="email"
                placeholder="Email"
                value={messageData.email}
                onChange={handleMessageChange}
                required
              />

              <input
                style={inputStyle}
                type="text"
                name="phone"
                placeholder="Phone"
                value={messageData.phone}
                onChange={handleMessageChange}
                required
              />

              <select
                style={inputStyle}
                name="subject"
                value={messageData.subject}
                onChange={handleMessageChange}
                required
              >
                <option value="" disabled>
                  Select subject
                </option>
                <option value="Fingerprinting Services">Fingerprinting Services</option>
                <option value="Live Scan Inquiry">Live Scan Inquiry</option>
                <option value="Mailbox Rental">Mailbox Rental</option>
                <option value="Shipping & Packing">Shipping & Packing</option>
                <option value="Other">Other</option>
              </select>

              <textarea
                style={{ ...inputStyle, minHeight: 180, resize: "vertical" }}
                name="message"
                placeholder="How can we help you?"
                value={messageData.message}
                onChange={handleMessageChange}
                required
              />

              {messageStatus.message ? (
                <div
                  style={{
                    borderRadius: 14,
                    padding: "12px 14px",
                    fontWeight: 600,
                    background:
                      messageStatus.type === "success" ? "#dcfce7" : "#fee2e2",
                    color: messageStatus.type === "success" ? "#166534" : "#991b1b",
                    border:
                      messageStatus.type === "success"
                        ? "1px solid #86efac"
                        : "1px solid #fca5a5",
                  }}
                >
                  {messageStatus.message}
                </div>
              ) : null}

              <button
                type="submit"
                style={{
                  ...primaryButtonStyle,
                  opacity: isSendingMessage ? 0.7 : 1,
                }}
                disabled={isSendingMessage}
              >
                {isSendingMessage ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div style={cardStyle}>
            <h2
              style={{
                marginTop: 0,
                marginBottom: 16,
                fontSize: "2rem",
                color: "#0f172a",
              }}
            >
              LifeScan Appointment
            </h2>

            <p
              style={{
                marginTop: 0,
                marginBottom: 24,
                color: "#64748b",
                fontSize: "1.05rem",
                lineHeight: 1.5,
              }}
            >
              Monday through Friday: 9:00 AM to 7:00 PM. Saturday: 10:00 AM to
              2:00 PM.
            </p>

            <form style={{ display: "grid", gap: 18 }} onSubmit={handleAppointmentSubmit}>
              <input
                style={inputStyle}
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={appointmentData.fullName}
                onChange={handleAppointmentChange}
                required
              />

              <input
                style={inputStyle}
                type="email"
                name="email"
                placeholder="Email"
                value={appointmentData.email}
                onChange={handleAppointmentChange}
                required
              />

              <input
                style={inputStyle}
                type="text"
                name="phone"
                placeholder="Phone"
                value={appointmentData.phone}
                onChange={handleAppointmentChange}
                required
              />

              <input
                style={inputStyle}
                type="date"
                name="appointmentDate"
                min={today}
                value={appointmentData.appointmentDate}
                onChange={handleAppointmentChange}
                required
              />

              <select
                style={inputStyle}
                name="appointmentTime"
                value={appointmentData.appointmentTime}
                onChange={handleAppointmentChange}
                required
                disabled={!appointmentData.appointmentDate || availableTimes.length === 0}
              >
                <option value="" disabled>
                  {appointmentData.appointmentDate
                    ? availableTimes.length > 0
                      ? "Select a time"
                      : "No appointments available for this day"
                    : "Choose a date first"}
                </option>

                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>

              <textarea
                style={{ ...inputStyle, minHeight: 150, resize: "vertical" }}
                name="notes"
                placeholder="Notes"
                value={appointmentData.notes}
                onChange={handleAppointmentChange}
              />

              {appointmentStatus.message ? (
                <div
                  style={{
                    borderRadius: 14,
                    padding: "12px 14px",
                    fontWeight: 600,
                    background:
                      appointmentStatus.type === "success" ? "#dcfce7" : "#fee2e2",
                    color:
                      appointmentStatus.type === "success" ? "#166534" : "#991b1b",
                    border:
                      appointmentStatus.type === "success"
                        ? "1px solid #86efac"
                        : "1px solid #fca5a5",
                  }}
                >
                  {appointmentStatus.message}
                </div>
              ) : null}

              <button
                type="submit"
                style={{
                  ...primaryButtonStyle,
                  opacity: isBookingAppointment ? 0.7 : 1,
                }}
                disabled={isBookingAppointment}
              >
                {isBookingAppointment ? "Booking..." : "Book Appointment"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}