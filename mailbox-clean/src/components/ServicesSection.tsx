const shippingServices = [
  "📦 FedEx Shipping",
  "🚚 UPS Shipping",
  "✈️ DHL Shipping",
  "📬 USPS Shipping",
];

const businessServices = [
  "📝 Notary Public",
  "📸 Passport Photos",
  "📄 Document Scanning & Imaging",
  "📠 Fax Send & Receive",
  "🖨 Copy & Print Services",
  "💼 Business Cards, Flyers & Brochures",
  "📢 Banner & Poster Printing",
  "📦 Packing Services",
  "📦 Custom Box Making & Crating",
  "🔑 Key Duplication",
  "📎 Office & Business Supplies",
  "💻 Computer Rental",
];

type Props = {
  showServices: boolean;
};

export default function ServicesSection({ showServices }: Props) {
  if (!showServices) return null;

  return (
    <section className="services-section">
      <style>
        {`
          .services-section {
            padding: 35px 18px 45px;
            background: #fff;
            max-width: 1200px;
            margin: 0 auto;
          }

          .services-title {
            text-align: center;
            font-size: 2.4rem;
            margin-bottom: 20px;
          }

          .services-subtitle {
            text-align: center;
            font-size: 1.5rem;
            margin-bottom: 20px;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 22px;
            margin-bottom: 38px;
          }

         .service-card {
  background: #fff;
  border: 1px solid #dbe4ee;
  border-radius: 22px;
  padding: 28px 20px;
  text-align: center;
  font-weight: 700;
  box-shadow: 0 14px 30px rgba(15,23,42,.06);
  transition: all 0.25s ease;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  border-color: #2563eb;
}

          @media (max-width: 768px) {
            .services-title {
              font-size: 1.8rem;
            }

            .services-subtitle {
              font-size: 1.25rem;
            }

            .services-grid {
              grid-template-columns: 1fr;
              gap: 14px;
            }

            .service-card {
              padding: 20px 14px;
              font-size: 15px;
            }
          }
        `}
      </style>

      <h2 className="services-title">Shipping & Business Services</h2>

      <h3 className="services-subtitle">Shipping Carriers</h3>

      <div className="services-grid">
        {shippingServices.map((service) => (
          <div key={service} className="service-card">
            {service}
          </div>
        ))}
      </div>

      <h3 className="services-subtitle">Additional Services</h3>

      <div className="services-grid">
        {businessServices.map((service) => (
          <div key={service} className="service-card">
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}