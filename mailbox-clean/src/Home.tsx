import React, { useState, type CSSProperties } from "react";
import {
  ArrowUp,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Fingerprint,
  Mail,
  ShieldCheck,
  Star,
  XCircle,
} from "lucide-react";
import ServiceImage from "./components/ServiceImage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
const storefrontMain =
  "/attached_assets/fa69cb6a-0bc0-481e-8737-890e8cfc3980_1769780630700.jpeg";
const storefrontAlt =
  "/attached_assets/59c50600-0bc9-4a38-828e-6dc045dc448d_1769780630696.jpeg";
const storefrontSide =
  "/attached_assets/ba542133-2daf-4468-99ad-f7ffea59c145_1769780630700.jpeg";
const mailboxRentals1 =
  "/attached_assets/128c2070-808f-4520-a689-2da69fcf2912_1769780630700.jpeg";
const mailboxRentals2 =
  "/attached_assets/9cfd3cd2-61b8-45eb-bda6-1b30835b6958_1769780630700.jpeg";
const fd258Card =
  "/attached_assets/f37505e5-ff1d-4f17-bf12-492c0f324f52_1769945882738.jpeg";
const workstation =
  "/attached_assets/fingerscanner.jpg";

const video2 =
  "/attached_assets/1afe9cf8-8a68-47e1-9f7c-db8addad4039_1769780630700.mp4";
const video3 =
  "/attached_assets/ed6b9bee-1ad5-459d-854a-f6a36d4b5e53_1769780630700.mp4";

const business = {
  name: "Mobile Lifescan & The Mailbox Store",
  subtitle: "Business Solutions",
  address: "3200 NW 62nd Ave, Margate, FL 33063",
  phone1: "(954) 323-3802",
  phone2: "(954) 278-9005",
  email1: "info@mobillifescan.com",
  email2: "mailboxmargate@gmail.com",
  hoursWeekdays: "9:00 AM - 7:00 PM",
  hoursSaturday: "10:00 AM - 2:00 PM",
  hoursSunday: "Closed",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.0!2d-80.2!3d26.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3200+NW+62nd+Ave%2C+Margate%2C+FL+33063!5e0!3m2!1sen!2sus!4v1",
};

const primaryServices = [
  {
    title: "FD-258 FBI Fingerprint Cards",
    description:
      "Professional ink and digital fingerprinting for FBI background checks, immigration, visa applications, professional licensing, and employment verification.",
    image: fd258Card,
    features: [
      "Ink & digital fingerprinting",
      "FBI background checks",
      "Immigration & visa use",
      "Professional licensing",
    ],
  },
{
  title: "Live Scan Fingerprinting",
  description:
    "Fast and accurate Level 2 background checks with FDLE and FBI submissions from a licensed provider.",
  image: workstation,
  features: [
    "Level 2 background checks",
    "FDLE & FBI submissions",
    "Walk-ins welcome",
    "Results in minutes",
  ],
},
  {
    title: "Private Mailbox Rentals",
    description:
      "Secure private mailbox with a real street address for personal and business use with mail receiving, holding, and forwarding services.",
    image: mailboxRentals2,
    features: [
      "Real street address",
      "Personal & business use",
      "Mail receiving & holding",
      "Package acceptance",
    ],
  },
];

const whyChooseUs = [
  {
    title: "FDLE Licensed Provider",
    text: "Approved by the Florida Department of Law Enforcement",
  },
  {
    title: "Fast & Accurate",
    text: "Average printing time around 10 minutes per person",
  },
  {
    title: "Professional Service",
    text: "Well-trained agents with state-of-the-art equipment",
  },
];



const gallery = [
  storefrontMain,
  storefrontAlt,
  storefrontSide,
  mailboxRentals1,
  mailboxRentals2,
  workstation,
];



const videos = [
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/uYUfwsE9axo",
    title: "Live Scan Fingerprinting Process",
  },
  {
    type: "file",
    src: video2,
    title: "Our Business Services",
  },
  {
    type: "file",
    src: video3,
    title: "Mailbox & Shipping Solutions",
  },
] as const;

const styles = {
  page: {
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: "#0f172a",
    background:
      "radial-gradient(circle at 12% 4%, rgba(14, 165, 233, 0.13), transparent 28%), linear-gradient(180deg, #f8fbff 0%, #eef5fb 46%, #f8fafc 100%)",
    minHeight: "100vh",
  } as const,
  container: {
    width: "min(1180px, calc(100% - 32px))",
    margin: "0 auto",
  } as const,
  section: {
    padding: "88px 0",
  } as const,
  card: {
    background: "rgba(255,255,255,0.94)",
    border: "1px solid rgba(148,163,184,0.22)",
    borderRadius: "18px",
    boxShadow: "0 20px 55px rgba(15,23,42,0.09)",
    backdropFilter: "blur(12px)",
  } as const,
  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f766e 0%, #0369a1 100%)",
    color: "#fff",
    padding: "13px 20px",
    borderRadius: "999px",
    fontWeight: 700,
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 14px 28px rgba(3,105,161,0.24)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease",
  } as const,
  outlineBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.92)",
    color: "#0f172a",
    padding: "13px 20px",
    borderRadius: "999px",
    border: "1px solid rgba(148,163,184,0.36)",
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: "0 10px 24px rgba(15,23,42,0.07)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
  } as const,
  serviceCard: {
    background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
    border: "1px solid rgba(148,163,184,0.24)",
    borderRadius: "18px",
    padding: "28px 20px",
    textAlign: "center",
    fontWeight: 600,
    boxShadow: "0 16px 38px rgba(15,23,42,.08)",
  } as const,
};

const inputStyle: CSSProperties = {
  width: "100%",
  border: "1px solid rgba(148,163,184,0.36)",
  borderRadius: "14px",
  padding: "14px 15px",
  font: "inherit",
  background: "#f8fafc",
  boxSizing: "border-box",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
};

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    
    <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
      <h2
        style={{
          fontSize: "clamp(2rem, 4vw, 3.15rem)",
          lineHeight: 1.05,
          margin: "0 0 14px",
          letterSpacing: 0,
        }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          style={{
            margin: 0,
            color: "#526176",
            fontSize: "1.08rem",
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showServices, setShowServices] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const previousGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const nextGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % gallery.length);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus({ type: "", message: "" });

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields before sending your message.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("http://13.60.60.33:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      await response.json();

      setSubmitStatus({
        type: "success",
        message: "Your message was sent successfully.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAppointmentSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const appointmentData = {
      fullName: (form.elements.namedItem("appointmentFullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("appointmentEmail") as HTMLInputElement).value,
      phone: (form.elements.namedItem("appointmentPhone") as HTMLInputElement).value,
      appointmentDate: (form.elements.namedItem("appointmentDate") as HTMLInputElement).value,
      appointmentTime: (form.elements.namedItem("appointmentTime") as HTMLSelectElement).value,
      notes: (form.elements.namedItem("appointmentNotes") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("http://13.60.60.33:8080/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (!response.ok) {
        throw new Error("Failed to save appointment");
      }

      setSuccessMessage("Appointment request submitted successfully!");
      setTimeout(() => setSuccessMessage(""), 4000);
      form.reset();
    } catch (error) {
      console.error("Error saving appointment:", error);
      setErrorMessage("Could not submit appointment");
      setTimeout(() => setErrorMessage(""), 4000);
    }
  };

  return (
    <div style={styles.page}>
     <Header />
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>

      {successMessage && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            minWidth: "280px",
            maxWidth: "350px",
            background: "linear-gradient(135deg, #22c55e, #16a34a)",
            color: "#fff",
            borderRadius: "12px",
            padding: "14px 18px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            zIndex: 9999,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            animation: "slideIn 0.4s ease",
          }}
        >
          <CheckCircle2 size={20} />
          <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            right: "20px",
            minWidth: "280px",
            maxWidth: "350px",
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
            color: "#fff",
            borderRadius: "12px",
            padding: "14px 18px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            zIndex: 9999,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            animation: "slideIn 0.4s ease",
          }}
        >
          <XCircle size={20} />
          <span>{errorMessage}</span>
        </div>
      )}
      
<Navbar
  showMessage={showMessage}
  setShowMessage={setShowMessage}
  showServices={showServices}
  setShowServices={setShowServices}
  business={business}
  styles={styles}
/>
      <section
  style={{
    position: "relative",
    width: "100%",
    height: "clamp(560px, 72vh, 760px)",
    overflow: "hidden",
    isolation: "isolate",
  }}
>
  {/* BACKGROUND IMAGE */}
  <img
    src={storefrontMain}
    alt="Storefront"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "saturate(1.05) contrast(1.05)",
    }}
  />

  {/* DARK OVERLAY */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(90deg, rgba(2,6,23,0.86) 0%, rgba(2,6,23,0.58) 48%, rgba(2,6,23,0.2) 100%)",
    }}
  />
  <div
    style={{
      position: "absolute",
      inset: "auto 0 0",
      height: "42%",
      background: "linear-gradient(0deg, rgba(248,250,252,0.95), transparent)",
      pointerEvents: "none",
    }}
  />

  {/* CONTENT */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "max(32px, 8vw)",
      transform: "translateY(-50%)",
      color: "#fff",
      maxWidth: "780px",
      textShadow: "0 2px 18px rgba(0,0,0,0.34)",
    }}
  >
    <div
      style={{
        background: "rgba(255,255,255,0.16)",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 14px",
        borderRadius: "999px",
        fontSize: "14px",
        fontWeight: 800,
        marginBottom: "18px",
        border: "1px solid rgba(255,255,255,0.28)",
        backdropFilter: "blur(10px)",
      }}
    >
      <ShieldCheck size={16} />
      FDLE Licensed Provider
    </div>

    <h1
      style={{
        fontSize: "clamp(2.6rem, 5.6vw, 5.3rem)",
        fontWeight: 800,
        lineHeight: 0.98,
        marginBottom: "20px",
        letterSpacing: 0,
      }}
    >
      Comprehensive Fingerprinting & Business Solutions
    </h1>

    <p
      style={{
        fontSize: "clamp(1rem, 1.4vw, 1.22rem)",
        marginBottom: "25px",
        color: "#e6eef8",
        lineHeight: 1.68,
        maxWidth: 720,
      }}
    >
      Professional FD-258 FBI fingerprint cards, Live Scan Level 2 background
      checks, and private mailbox rentals in Margate, Florida. Walk-ins welcome.
    </p>

    {/* BUTTONS */}
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <a href={`tel:${business.phone1}`} style={styles.primaryBtn}>
        Call Now
      </a>

      <a href="#contact" style={styles.outlineBtn}>
        Contact Us
      </a>

      <a href="#services" style={styles.outlineBtn}>
        View Services
      </a>
    </div>
  </div>
</section>
<section style={{ ...styles.section, padding: "42px 0 58px" }}>
  <div
    style={{
      ...styles.container,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "22px",
    }}
  >
    {[
      { label: "FD-258 FBI Fingerprint Cards", Icon: Fingerprint },
      { label: "Live Scan Fingerprinting", Icon: ShieldCheck },
      { label: "Private Mailbox Rentals", Icon: Mail },
    ].map(({ label, Icon }) => (
      <div
        key={label}
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
          border: "1px solid rgba(148,163,184,0.24)",
          borderRadius: "18px",
          padding: "34px 22px",
          textAlign: "center",
          boxShadow: "0 18px 42px rgba(15,23,42,.08)",
          transition: "all 0.25s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 24px 54px rgba(15,23,42,.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 14px 30px rgba(15,23,42,.06)";
        }}
      >
        <div
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            marginBottom: "14px",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              width: 66,
              height: 66,
              margin: "0 auto",
              borderRadius: 18,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #e0f2fe, #ccfbf1)",
              color: "#0369a1",
            }}
          >
            <Icon size={34} strokeWidth={1.9} />
          </span>
        </div>

        <h3
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
            margin: 0,
            color: "#102033",
          }}
        >
          {label}
        </h3>
      </div>
    ))}
  </div>
</section>

      <section id="services" style={styles.section}>
        <div style={styles.container}>
          <SectionTitle
            title="Our Primary Services"
            subtitle="We specialize in professional fingerprinting services and private mailbox solutions for individuals and businesses."
          />

          <div style={{ display: "grid", gap: 28 }}>
            {primaryServices.map((service, index) => (
              <div
                key={service.title}
                style={{
                  ...styles.card,
                  display: "flex",
                  flexDirection: index % 2 === 1 ? "row-reverse" : "row",
                  overflow: "hidden",
                  flexWrap: "wrap",
                  border: "1px solid rgba(14,165,233,0.16)",
                }}
              >
                <div
                  style={{
                    flex: "1 1 320px",
                    minHeight: 340,
                    background:
                      "linear-gradient(135deg, rgba(224,242,254,0.88), rgba(240,253,250,0.88))",
                  }}
                >
                  <ServiceImage
                  src={service.image}
                  alt={service.title}
                  isWorkstation={service.image === workstation}
                  />
                  
                </div>

                <div style={{ flex: "2 1 420px", padding: "clamp(28px, 4vw, 44px)" }}>
                  <h3 style={{ marginTop: 0, fontSize: "clamp(1.7rem, 3vw, 2.25rem)" }}>
                    {service.title}
                  </h3>
                  <p
                    style={{
                      color: "#526176",
                      fontSize: "1.08rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </p>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "24px 0",
                      display: "grid",
                      gap: 12,
                    }}
                  >
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        style={{
                          display: "flex",
                          gap: 10,
                          alignItems: "center",
                        }}
                      >
                        <CheckCircle2 size={18} color="#0f766e" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a href="#contact" style={styles.primaryBtn}>
                      Book Appointment
                    </a>
                    <a href={`tel:${business.phone1}`} style={styles.outlineBtn}>
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          ...styles.section,
          background:
            "linear-gradient(135deg, #063047 0%, #075985 48%, #0f766e 100%)",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={styles.container}>
          <div
            style={{
              textAlign: "center",
              maxWidth: 760,
              margin: "0 auto 44px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                margin: "0 0 14px",
              }}
            >
              Why Choose Us?
            </h2>
            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,.86)",
                fontSize: "1.08rem",
                lineHeight: 1.6,
              }}
            >
              Accurate, reliable fingerprinting is a necessity for the safety
              and security of you and your business.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: 18,
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(255,255,255,.13)",
                  border: "1px solid rgba(255,255,255,.2)",
                  borderRadius: 18,
                  padding: 28,
                  textAlign: "center",
                  boxShadow: "0 18px 38px rgba(2,6,23,0.16)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    width: 58,
                    height: 58,
                    margin: "0 auto 14px",
                    borderRadius: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.16)",
                  }}
                >
                  <Star size={28} />
                </div>
                <h3>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,.86)", lineHeight: 1.6 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <SectionTitle
            title="Our Location & Services in Action"
            subtitle="Browse our storefront, service area, mailbox rentals, and workspace."
          />

          <div
            style={{
              position: "relative",
              maxWidth: 980,
              margin: "0 auto",
              padding: 10,
              borderRadius: 24,
              background: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(148,163,184,0.24)",
              boxShadow: "0 22px 60px rgba(15,23,42,0.12)",
            }}
          >
            <img
              src={gallery[currentGalleryIndex]}
              alt="Gallery"
              onClick={() => setSelectedImage(gallery[currentGalleryIndex])}
              style={{
                width: "100%",
                height: "clamp(330px, 48vw, 520px)",
                objectFit: "cover",
                borderRadius: 18,
                boxShadow: "0 14px 30px rgba(15,23,42,.12)",
                cursor: "pointer",
              }}
            />

            <button
              onClick={previousGalleryImage}
              aria-label="Previous image"
              style={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                background: "rgba(2,6,23,0.68)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: "50%",
                width: 46,
                height: 46,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextGalleryImage}
              aria-label="Next image"
              style={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                background: "rgba(2,6,23,0.68)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: "50%",
                width: 46,
                height: 46,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              flexWrap: "wrap",
              marginTop: 18,
            }}
          >
            {gallery.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setCurrentGalleryIndex(index)}
                style={{
                  width: 78,
                  height: 78,
                  objectFit: "cover",
                  borderRadius: 14,
                  cursor: "pointer",
                  boxShadow:
                    currentGalleryIndex === index
                      ? "0 10px 24px rgba(3,105,161,0.24)"
                      : "0 8px 18px rgba(15,23,42,0.08)",
                  border:
                    currentGalleryIndex === index
                      ? "3px solid #0f766e"
                      : "2px solid rgba(226,232,240,0.96)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, background: "#fff" }}>
        <div style={styles.container}>
          <SectionTitle
            title="See Us in Action"
            subtitle="Watch our professional fingerprinting and business services in action."
          />

          <div
            style={{
              display: "grid",
              gap: 18,
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {videos.map((video) => (
              <div key={video.title} style={{ ...styles.card, overflow: "hidden" }}>
                {video.type === "youtube" ? (
                  <iframe
                    width="100%"
                    style={{
                      aspectRatio: "16/9",
                      border: "none",
                    }}
                    src={video.src}
                    title={video.title}
                    allowFullScreen
                  />
                ) : (
                  <video
                    controls
                    style={{
                      width: "100%",
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                )}

                <div style={{ padding: 14 }}>
                  <p
                    style={{
                      textAlign: "center",
                      margin: 0,
                      color: "#475569",
                      fontWeight: 600,
                    }}
                  >
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hours" style={styles.section}>
        <div style={{ width: "min(840px, calc(100% - 32px))", margin: "0 auto" }}>
          <SectionTitle
            title="Store Hours"
            subtitle="Walk-ins welcome. Call ahead for Live Scan availability."
          />

          <div style={{ ...styles.card, padding: 28 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                fontSize: "1.3rem",
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              <Clock3 size={24} color="#0f766e" />
              <span>Hours of Operation</span>
            </div>

            {[
              { day: "Monday - Friday", time: business.hoursWeekdays },
              { day: "Saturday", time: business.hoursSaturday },
              { day: "Sunday", time: business.hoursSunday },
            ].map((item, index, arr) => (
              <div
                key={item.day}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "15px 0",
                  borderBottom:
                    index === arr.length - 1 ? "none" : "1px solid #e2e8f0",
                  flexWrap: "wrap",
                }}
              >
                <span>{item.day}</span>
                <strong
                  style={{
                    color: item.time === "Closed" ? "#dc2626" : "#0369a1",
                  }}
                >
                  {item.time}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ ...styles.section, background: "#fff" }}>
        <div style={styles.container}>
          <SectionTitle
            title="Contact Us"
            subtitle="Have questions? Reach out by phone, email, message, or visit us in person."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 22,
            }}
          >
            <div style={{ ...styles.card, padding: 28 }}>
              <h3 style={{ marginTop: 0 }}>Get In Touch</h3>

              <div style={{ display: "grid", gap: 16 }}>
                <div>
                  <div style={{ color: "#64748b", fontSize: ".85rem" }}>
                    Main Line
                  </div>
                  <div>{business.phone1}</div>
                </div>

                <div>
                  <div style={{ color: "#64748b", fontSize: ".85rem" }}>
                    Secondary
                  </div>
                  <div>{business.phone2}</div>
                </div>

                <div>
                  <div style={{ color: "#64748b", fontSize: ".85rem" }}>
                    General Inquiries
                  </div>
                  <div>{business.email1}</div>
                </div>

                <div>
                  <div style={{ color: "#64748b", fontSize: ".85rem" }}>
                    Mailbox Store
                  </div>
                  <div>{business.email2}</div>
                </div>

                <div>
                  <div style={{ color: "#64748b", fontSize: ".85rem" }}>
                    Address
                  </div>
                  <div>{business.address}</div>
                </div>
              </div>
            </div>

            <div style={{ ...styles.card, padding: 28 }}>
              <h3 style={{ marginTop: 0 }}>Send Us a Message</h3>

              <form style={{ display: "grid", gap: 14 }} onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gap: 14,
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  }}
                >
                  <input
                    style={inputStyle}
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <input
                    style={inputStyle}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gap: 14,
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  }}
                >
                  <input
                    style={inputStyle}
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <select
                    style={inputStyle}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select subject
                    </option>
                    <option value="Fingerprinting Services">
                      Fingerprinting Services
                    </option>
                    <option value="Live Scan Inquiry">Live Scan Inquiry</option>
                    <option value="Mailbox Rental">Mailbox Rental</option>
                    <option value="Shipping & Packing">Shipping & Packing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <textarea
                  style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                />

                {submitStatus.message ? (
                  <div
                    style={{
                      borderRadius: 12,
                      padding: "12px 14px",
                      fontWeight: 600,
                      background:
                        submitStatus.type === "success" ? "#dcfce7" : "#fee2e2",
                      color:
                        submitStatus.type === "success" ? "#166534" : "#991b1b",
                      border:
                        submitStatus.type === "success"
                          ? "1px solid #86efac"
                          : "1px solid #fca5a5",
                    }}
                  >
                    {submitStatus.message}
                  </div>
                ) : null}

                <button
                  type="submit"
                  style={{
                    ...styles.primaryBtn,
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div style={{ ...styles.card, padding: 28 }}>
              <h3 style={{ marginTop: 0 }}>LifeScan Appointment</h3>
              <p style={{ color: "#64748b", marginTop: 0, marginBottom: 16 }}>
                Monday through Friday: 9:00 AM to 7:00 PM. Saturday: 10:00 AM to
                2:00 PM.
              </p>

              <form style={{ display: "grid", gap: 14 }} onSubmit={handleAppointmentSubmit}>
                <div
                  style={{
                    display: "grid",
                    gap: 14,
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  }}
                >
                  <input
                    style={inputStyle}
                    type="text"
                    name="appointmentFullName"
                    placeholder="Full Name"
                    required
                  />
                  <input
                    style={inputStyle}
                    type="email"
                    name="appointmentEmail"
                    placeholder="Email"
                    required
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gap: 14,
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  }}
                >
                  <input
                    style={inputStyle}
                    type="text"
                    name="appointmentPhone"
                    placeholder="Phone"
                    required
                  />
                  <input
                    style={inputStyle}
                    type="date"
                    name="appointmentDate"
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <select style={inputStyle} name="appointmentTime" required>
                  <option value="">Select Time</option>

                  <optgroup label="Monday - Friday">
                    <option>09:00 AM</option>
                    <option>09:15 AM</option>
                    <option>09:30 AM</option>
                    <option>09:45 AM</option>
                    <option>10:00 AM</option>
                    <option>10:15 AM</option>
                    <option>10:30 AM</option>
                    <option>10:45 AM</option>
                    <option>11:00 AM</option>
                    <option>11:15 AM</option>
                    <option>11:30 AM</option>
                    <option>11:45 AM</option>
                    <option>12:00 PM</option>
                    <option>12:15 PM</option>
                    <option>12:30 PM</option>
                    <option>12:45 PM</option>
                    <option>01:00 PM</option>
                    <option>01:15 PM</option>
                    <option>01:30 PM</option>
                    <option>01:45 PM</option>
                    <option>02:00 PM</option>
                    <option>02:15 PM</option>
                    <option>02:30 PM</option>
                    <option>02:45 PM</option>
                    <option>03:00 PM</option>
                    <option>03:15 PM</option>
                    <option>03:30 PM</option>
                    <option>03:45 PM</option>
                    <option>04:00 PM</option>
                    <option>04:15 PM</option>
                    <option>04:30 PM</option>
                    <option>04:45 PM</option>
                    <option>05:00 PM</option>
                    <option>05:15 PM</option>
                    <option>05:30 PM</option>
                    <option>05:45 PM</option>
                    <option>06:00 PM</option>
                    <option>06:15 PM</option>
                    <option>06:30 PM</option>
                    <option>06:45 PM</option>
                    <option>07:00 PM</option>
                  </optgroup>

                  <optgroup label="Saturday">
                    <option>10:00 AM</option>
                    <option>10:15 AM</option>
                    <option>10:30 AM</option>
                    <option>10:45 AM</option>
                    <option>11:00 AM</option>
                    <option>11:15 AM</option>
                    <option>11:30 AM</option>
                    <option>11:45 AM</option>
                    <option>12:00 PM</option>
                    <option>12:15 PM</option>
                    <option>12:30 PM</option>
                    <option>12:45 PM</option>
                    <option>01:00 PM</option>
                    <option>01:15 PM</option>
                    <option>01:30 PM</option>
                    <option>01:45 PM</option>
                    <option>02:00 PM</option>
                  </optgroup>
                </select>

                <textarea
                  style={{ ...inputStyle, minHeight: 110, resize: "vertical" }}
                  name="appointmentNotes"
                  placeholder="Notes"
                />

                <button type="submit" style={styles.primaryBtn}>
                  Book Appointment
                </button>
              </form>
            </div>

            <div
  style={{
    ...styles.card,
    padding: 0,
    overflow: "hidden",
    height: "450px",
    borderRadius: "20px",
    gridColumn: "1 / -1",
  }}
>
  <iframe
    src={business.mapEmbedUrl}
    style={{
      width: "100%",
      height: "100%",
      border: "0",
      display: "block",
    }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Store Location"
  />
</div>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: "linear-gradient(135deg, #07111f 0%, #0f172a 100%)",
          color: "#cbd5e1",
          padding: "42px 0",
        }}
      >
        <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
        margin: "0 auto 24px",
        padding: "11px 18px",
        background: "rgba(255,255,255,0.1)",
        color: "white",
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: 999,
        cursor: "pointer",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: 8,
        }}
>
  Back to Top <ArrowUp size={16} />
</button>
        <div style={{ ...styles.container, textAlign: "center" }}>
          <p style={{ color: "#fff", fontWeight: 700, marginBottom: 8 }}>
            {business.name}
          </p>
          <p>{business.address}</p>
          <p>
            {business.phone1} - {business.email1}
          </p>
          <p style={{ marginTop: 14, color: "#94a3b8", fontSize: ".9rem" }}>
            Copyright {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            zIndex: 999,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="Expanded gallery"
            style={{
              maxWidth: "95%",
              maxHeight: "90%",
              borderRadius: 16,
              boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
            }}
          />
        </div>
      )}
    </div>
  );
}
