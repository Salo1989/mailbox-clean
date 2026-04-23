type Props = {
  showServices: boolean;
  shippingServices: string[];
  additionalServices: string[];
  styles: any;
};

export default function ServicesSection({
  showServices,
  shippingServices,
  additionalServices,
  styles,
}: Props) {
  if (!showServices) return null;

  return (
    <section style={{ ...styles.section, background: "#fff" }}>
      <div style={styles.container}>
        <h2
  style={{
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2rem",
    color: "#0f172a",
  }}
>
  Shipping & Business Services
</h2>
        <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
          Shipping Carriers
        </h3>

        <div
          style={{
            display: "grid",
            gap: 18,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            marginBottom: 40,
          }}
        >
          {shippingServices.map((name) => (
            <div
  key={name}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "translateY(-5px)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "translateY(0)")
  }
  style={{
    ...styles.card,
    padding: 26,
    textAlign: "center",
    transition: "transform 0.2s ease",
    cursor: "pointer",
  }}
>
              <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>
  {name.includes("FedEx") && "🚚"}
  {name.includes("UPS") && "📦"}
  {name.includes("DHL") && "✈️"}
  {name.includes("USPS") && "📬"}
</div>
              <h4>{name}</h4>
            </div>
          ))}
        </div>

        <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
          Additional Services
        </h3>

        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {additionalServices.map((name) => (
           <div
  key={name}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "translateY(-5px)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "translateY(0)")
  }
  style={{
    ...styles.card,
    padding: 26,
    textAlign: "center",
    transition: "transform 0.2s ease",
    cursor: "pointer",
  }}
>
              <span>✔</span>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}