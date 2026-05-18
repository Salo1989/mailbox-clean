import { Link } from "react-router-dom";
import { Languages, MapPin, Package, Printer, ShieldCheck } from "lucide-react";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        marginBottom: "18px",
        padding: "18px 18px 10px",
      }}
    >
      <div
        style={{
          minHeight: "300px",
          borderRadius: "24px",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #07111f 0%, #075985 48%, #0f766e 100%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "clamp(24px, 4vw, 42px)",
          boxShadow: "0 24px 70px rgba(2,6,23,0.28)",
          gap: "24px",
          border: "1px solid rgba(255,255,255,0.14)",
          position: "relative",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ flex: 1.4 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.14)",
              padding: "8px 14px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 800,
              marginBottom: "18px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <MapPin size={16} /> Local Mailbox & Shipping Center
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.75rem)",
              margin: "0 0 14px",
              fontWeight: 800,
              lineHeight: 0.98,
              letterSpacing: 0,
            }}
          >
            Mailbox Store
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 1.7vw, 1.28rem)",
              marginBottom: "20px",
              maxWidth: "720px",
              color: "#e6eef8",
              lineHeight: 1.55,
            }}
          >
            Shipping, printing, notary, and private mailbox services
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {[
              { item: "UPS", Icon: Package },
              { item: "FedEx", Icon: Package },
              { item: "USPS", Icon: Package },
              { item: "Printing", Icon: Printer },
              { item: "Live Scan", Icon: ShieldCheck },
            ].map(({ item, Icon }) => (
                <span
                  key={item}
                  style={{
                    background: "rgba(255,255,255,0.94)",
                    color: "#075985",
                    padding: "10px 14px",
                    borderRadius: "999px",
                    fontWeight: 700,
                    fontSize: "14px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    boxShadow: "0 10px 24px rgba(2,6,23,0.14)",
                  }}
                >
                  <Icon size={16} />
                  {item}
                </span>
              ))}
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
      flex: "0 1 360px",
      background: "rgba(255,255,255,0.96)",
      borderRadius: "22px",
      padding: "18px",
      boxShadow: "0 22px 48px rgba(2,6,23,0.24)",
      border: "1px solid rgba(255,255,255,0.65)",
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
        filter: "drop-shadow(0 8px 16px rgba(15,23,42,0.12))",
      }}
    />

    <p
      style={{
        marginTop: "12px",
        textAlign: "center",
        fontWeight: 800,
        color: "#075985",
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <Languages size={18} /> Haga clic en la foto para ver el sitio en español
    </p>
  </div>
</Link>
      </div>
    </header>
  );
}
