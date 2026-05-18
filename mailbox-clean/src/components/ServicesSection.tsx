import {
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  ClipboardList,
  FileText,
  KeyRound,
  Monitor,
  Package,
  Plane,
  Printer,
  ScanLine,
  Truck,
} from "lucide-react";

const shippingServices = [
  { label: "FedEx Shipping", Icon: Package },
  { label: "UPS Shipping", Icon: Truck },
  { label: "DHL Shipping", Icon: Plane },
  { label: "USPS Shipping", Icon: Package },
];

const businessServices = [
  { label: "Notary Public", Icon: BadgeCheck },
  { label: "Passport Photos", Icon: Camera },
  { label: "Document Scanning & Imaging", Icon: ScanLine },
  { label: "Fax Send & Receive", Icon: FileText },
  { label: "Copy & Print Services", Icon: Printer },
  { label: "Business Cards, Flyers & Brochures", Icon: BriefcaseBusiness },
  { label: "Banner & Poster Printing", Icon: ClipboardList },
  { label: "Packing Services", Icon: Package },
  { label: "Custom Box Making & Crating", Icon: Package },
  { label: "Key Duplication", Icon: KeyRound },
  { label: "Office & Business Supplies", Icon: ClipboardList },
  { label: "Computer Rental", Icon: Monitor },
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
            padding: 38px 18px 48px;
            background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,251,255,0.96));
            max-width: 1200px;
            margin: 0 auto;
            border-top: 1px solid rgba(148,163,184,0.18);
          }

          .services-title {
            text-align: center;
            font-size: clamp(2rem, 4vw, 2.6rem);
            margin-bottom: 20px;
            color: #0f172a;
          }

          .services-subtitle {
            text-align: center;
            font-size: 1.5rem;
            margin-bottom: 20px;
            color: #334155;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 22px;
            margin-bottom: 38px;
          }

         .service-card {
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  border: 1px solid rgba(148,163,184,0.24);
  border-radius: 18px;
  padding: 28px 20px;
  text-align: center;
  font-weight: 700;
  box-shadow: 0 16px 38px rgba(15,23,42,.08);
  transition: all 0.25s ease;
  cursor: pointer;
  color: #102033;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 96px;
}

.service-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 22px 46px rgba(15,23,42,0.15);
  border-color: #0f766e;
}

.service-card svg {
  color: #0369a1;
  flex: 0 0 auto;
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
        {shippingServices.map(({ label, Icon }) => (
          <div key={label} className="service-card">
            <Icon size={22} />
            {label}
          </div>
        ))}
      </div>

      <h3 className="services-subtitle">Additional Services</h3>

      <div className="services-grid">
        {businessServices.map(({ label, Icon }) => (
          <div key={label} className="service-card">
            <Icon size={22} />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
