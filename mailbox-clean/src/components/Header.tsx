import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        marginBottom: "24px",
        padding: "18px",
      }}
    >
      <div
        style={{
          minHeight: "260px",
          borderRadius: "26px",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1d4ed8 45%, #2563eb 100%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "30px",
          boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
          gap: "24px",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ flex: 1.4 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.15)",
              padding: "8px 14px",
              borderRadius: "999px",
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            📍 Local Mailbox & Shipping Center
          </div>

          <h1
            style={{
              fontSize: "44px",
              margin: "0 0 14px",
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Mailbox Store
          </h1>

          <p
            style={{
              fontSize: "21px",
              marginBottom: "20px",
              maxWidth: "720px",
            }}
          >
            📦 Shipping • 🖨 Printing • 📄 Notary • 🔐 Private Mailboxes
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {["UPS", "FedEx", "USPS", "Amazon Returns", "Live Scan"].map(
              (item) => (
                <span
                  key={item}
                  style={{
                    background: "white",
                    color: "#1d4ed8",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
     <Link
  to="/spanish"
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
>
  {/* RIGHT IMAGE */}
  <div
    style={{
      flex: 0.8,
      background: "white",
      borderRadius: "24px",
      padding: "18px",
      boxShadow: "0 14px 30px rgba(0,0,0,0.25)",
      transform: "rotate(2deg)",
    }}
  >
    <img
      src="/spanish.png"
      alt="Hablamos Español"
      style={{
        width: "100%",
        maxHeight: "210px",
        objectFit: "contain",
        display: "block",
      }}
    />

    <p
      style={{
        marginTop: "12px",
        textAlign: "center",
        fontWeight: 700,
        color: "#1d4ed8",
        fontSize: "16px",
      }}
    >
      ⬆️ Haga clic en la foto para ver el sitio en español 🇪🇸
    </p>
  </div>
</Link>
      </div>
    </header>
  );
}