import React, { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import ServiceImage from "./components/ServiceImage";
import Header from "./components/Header";
import ServicesSection from "./components/ServicesSection";

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
const workstation = "/attached_assets/fingerscanner.jpg";

const video2 =
  "/attached_assets/1afe9cf8-8a68-47e1-9f7c-db8addad4039_1769780630700.mp4";
const video3 =
  "/attached_assets/ed6b9bee-1ad5-459d-854a-f6a36d4b5e53_1769780630700.mp4";

const business = {
  name: "Mobile Lifescan & The Mailbox Store",
  address: "3200 NW 62nd Ave, Margate, FL 33063",
  phone1: "(954) 323-3802",
  phone2: "(954) 278-9005",
  email1: "info@mobillifescan.com",
  email2: "mailboxmargate@gmail.com",
  hoursWeekdays: "9:00 AM - 7:00 PM",
  hoursSaturday: "10:00 AM - 2:00 PM",
  hoursSunday: "Cerrado",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.0!2d-80.2!3d26.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3200+NW+62nd+Ave%2C+Margate%2C+FL+33063!5e0!3m2!1sen!2sus!4v1",
};

const primaryServices = [
  {
    title: "Tarjetas de Huellas FD-258 del FBI",
    description:
      "Servicios profesionales de huellas digitales con tinta y formato digital para verificaciones del FBI, inmigración, visas, licencias profesionales y empleo.",
    image: fd258Card,
    features: [
      "Huellas con tinta y digitales",
      "Verificaciones del FBI",
      "Uso para inmigración y visas",
      "Licencias profesionales",
    ],
  },
  {
    title: "Huellas Digitales Live Scan",
    description:
      "Verificaciones de antecedentes Nivel 2 rápidas y precisas con envíos a FDLE y FBI por un proveedor autorizado.",
    image: workstation,
    features: [
      "Verificaciones Nivel 2",
      "Envíos a FDLE y FBI",
      "Se aceptan clientes sin cita",
      "Resultados rápidos",
    ],
  },
  {
    title: "Alquiler de Buzones Privados",
    description:
      "Buzón privado seguro con dirección física real para uso personal o comercial, con recepción, retención y manejo de paquetes.",
    image: mailboxRentals2,
    features: [
      "Dirección física real",
      "Uso personal y comercial",
      "Recepción y retención de correo",
      "Aceptación de paquetes",
    ],
  },
];

const whyChooseUs = [
  {
    title: "Proveedor autorizado por FDLE",
    text: "Aprobado por el Florida Department of Law Enforcement",
  },
  {
    title: "Rápido y preciso",
    text: "Tiempo promedio de servicio alrededor de 10 minutos por persona",
  },
  {
    title: "Servicio profesional",
    text: "Agentes capacitados con equipo moderno y confiable",
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
    title: "Proceso de huellas Live Scan",
  },
  {
    type: "file",
    src: video2,
    title: "Nuestros servicios comerciales",
  },
  {
    type: "file",
    src: video3,
    title: "Soluciones de buzón y envíos",
  },
] as const;

const styles = {
  page: {
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#0f172a",
    background: "#f8fafc",
  } as const,
  container: {
    width: "min(1120px, calc(100% - 32px))",
    margin: "0 auto",
  } as const,
  section: {
    padding: "80px 0",
  } as const,
  card: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: "22px",
    boxShadow: "0 10px 25px rgba(15,23,42,0.06)",
  } as const,
  primaryBtn: {
    display: "inline-block",
    background: "#0369a1",
    color: "#fff",
    padding: "13px 18px",
    borderRadius: "10px",
    fontWeight: 700,
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
  } as const,
  outlineBtn: {
    display: "inline-block",
    background: "#fff",
    color: "#0f172a",
    padding: "13px 18px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    fontWeight: 700,
    textDecoration: "none",
  } as const,
};

const inputStyle: CSSProperties = {
  width: "100%",
  border: "1px solid #cbd5e1",
  borderRadius: "12px",
  padding: "14px",
  font: "inherit",
  background: "#fff",
  boxSizing: "border-box",
};

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 44px" }}>
      <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0 0 14px" }}>
        {title}
      </h2>
      {subtitle ? (
        <p
          style={{
            margin: 0,
            color: "#475569",
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

export default function SpanishPage() {
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
        message: "Por favor complete todos los campos antes de enviar su mensaje.",
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
        message: "Su mensaje fue enviado correctamente.",
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
        message: "Algo salió mal al enviar su mensaje.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAppointmentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      setSuccessMessage("¡Solicitud de cita enviada correctamente!");
      setTimeout(() => setSuccessMessage(""), 4000);
      form.reset();
    } catch (error) {
      console.error("Error saving appointment:", error);
      setErrorMessage("No se pudo enviar la cita");
      setTimeout(() => setErrorMessage(""), 4000);
    }
  };

  return (
    <div style={styles.page}>
      <Header />

      <nav style={{ background: "#fff", borderBottom: "1px solid #e2e8f0" }}>
        <div
          style={{
            ...styles.container,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 0",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              height: "150px",
              maxWidth: "250px",
              objectFit: "contain",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setShowMessage((prev) => !prev);
                setShowServices(false);
              }}
              style={styles.outlineBtn}
            >
              {showMessage ? "Ocultar información" : "Ver más información"}
            </button>

            <button
              type="button"
              onClick={() => {
                setShowServices((prev) => !prev);
                setShowMessage(false);
              }}
              style={styles.outlineBtn}
            >
              {showServices ? "Ocultar servicios" : "Ver servicios"}
            </button>

            <a href="#services" style={styles.outlineBtn}>
              Servicios
            </a>
            <a href="#hours" style={styles.outlineBtn}>
              Horario
            </a>
            <a href="#contact" style={styles.outlineBtn}>
              Contacto
            </a>

            <a href={`tel:${business.phone1}`} style={styles.primaryBtn}>
              Llamar ahora
            </a>

            <Link to="/" style={styles.outlineBtn}>
              English
            </Link>

            <Link to="/admin" style={styles.outlineBtn}>
              Admin
            </Link>
          </div>
        </div>

        {showMessage && (
          <div style={{ ...styles.container, padding: "20px 0" }}>
            <img
              src="/showinfo.png"
              alt="Más información"
              style={{
                width: "100%",
                maxWidth: "900px",
                display: "block",
                margin: "0 auto",
                borderRadius: "16px",
                boxShadow: "0 14px 30px rgba(15,23,42,.16)",
              }}
            />
          </div>
        )}

        <ServicesSection showServices={showServices} />
      </nav>

      <section
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          overflow: "hidden",
        }}
      >
        <img
          src={storefrontMain}
          alt="Tienda"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "8%",
            transform: "translateY(-50%)",
            color: "#fff",
            maxWidth: "700px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            Proveedor autorizado por FDLE
          </div>

          <h1
            style={{
              fontSize: "48px",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Soluciones completas de huellas digitales y servicios comerciales
          </h1>

          <p
            style={{
              fontSize: "18px",
              marginBottom: "25px",
              color: "#e2e8f0",
            }}
          >
            Tarjetas profesionales FD-258 del FBI, Live Scan para verificaciones
            de antecedentes Nivel 2, y alquiler de buzones privados en Margate,
            Florida. Se aceptan clientes sin cita.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href={`tel:${business.phone1}`} style={styles.primaryBtn}>
              Llamar ahora
            </a>
            <a href="#contact" style={styles.outlineBtn}>
              Contáctenos
            </a>
            <a href="#services" style={styles.outlineBtn}>
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, padding: "35px 0" }}>
        <div
          style={{
            ...styles.container,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {[
            "Tarjetas FD-258 del FBI",
            "Huellas digitales Live Scan",
            "Alquiler de buzones privados",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#fff",
                border: "1px solid #dbe4ee",
                borderRadius: "22px",
                padding: "35px 20px",
                textAlign: "center",
                boxShadow: "0 14px 30px rgba(15,23,42,.06)",
              }}
            >
              <div style={{ fontSize: "clamp(32px, 5vw, 52px)", marginBottom: 14 }}>
                ⭐
              </div>
              <h3 style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)", margin: 0 }}>
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section id="services" style={styles.section}>
        <div style={styles.container}>
          <SectionTitle
            title="Nuestros servicios principales"
            subtitle="Nos especializamos en servicios profesionales de huellas digitales y soluciones de buzones privados para individuos y negocios."
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
                }}
              >
                <div style={{ flex: "1 1 100px", minHeight: 320 }}>
                  <ServiceImage
                    src={service.image}
                    alt={service.title}
                    isWorkstation={service.image === workstation}
                  />
                </div>

                <div style={{ flex: "2 1 420px", padding: 34 }}>
                  <h3 style={{ marginTop: 0, fontSize: "2rem" }}>
                    {service.title}
                  </h3>

                  <p
                    style={{
                      color: "#475569",
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
                        <span style={{ color: "#0369a1" }}>✔</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a href="#contact" style={styles.primaryBtn}>
                      Reservar cita
                    </a>
                    <a href={`tel:${business.phone1}`} style={styles.outlineBtn}>
                      Llamar ahora
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, background: "#0369a1", color: "#fff" }}>
        <div style={styles.container}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 44px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0 0 14px" }}>
              ¿Por qué elegirnos?
            </h2>
            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,.86)",
                fontSize: "1.08rem",
                lineHeight: 1.6,
              }}
            >
              Las huellas digitales precisas y confiables son importantes para la
              seguridad de usted y de su negocio.
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
                  background: "rgba(255,255,255,.12)",
                  border: "1px solid rgba(255,255,255,.12)",
                  borderRadius: 22,
                  padding: 26,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>✅</div>
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
            title="Nuestra ubicación y servicios en acción"
            subtitle="Vea nuestra tienda, área de servicio, alquiler de buzones y espacio de trabajo."
          />

          <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
            <img
              src={gallery[currentGalleryIndex]}
              alt="Galería"
              onClick={() => setSelectedImage(gallery[currentGalleryIndex])}
              style={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                borderRadius: 20,
                boxShadow: "0 14px 30px rgba(15,23,42,.14)",
                cursor: "pointer",
              }}
            />

            <button
              onClick={previousGalleryImage}
              aria-label="Imagen anterior"
              style={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: 40,
                height: 40,
                cursor: "pointer",
              }}
            >
              ◀
            </button>

            <button
              onClick={nextGalleryImage}
              aria-label="Imagen siguiente"
              style={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: 40,
                height: 40,
                cursor: "pointer",
              }}
            >
              ▶
            </button>
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, background: "#fff" }}>
        <div style={styles.container}>
          <SectionTitle
            title="Véanos en acción"
            subtitle="Mire nuestros servicios profesionales de huellas digitales y servicios comerciales en acción."
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
                    style={{ aspectRatio: "16/9", border: "none" }}
                    src={video.src}
                    title={video.title}
                    allowFullScreen
                  />
                ) : (
                  <video
                    controls
                    style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                )}

                <div style={{ padding: 14 }}>
                  <p style={{ textAlign: "center", margin: 0, color: "#475569", fontWeight: 600 }}>
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
            title="Horario de atención"
            subtitle="Se aceptan clientes sin cita. Llame antes para confirmar disponibilidad de Live Scan."
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
              <span style={{ color: "#0369a1" }}>🕒</span>
              <span>Horario</span>
            </div>

            {[
              { day: "Lunes - Viernes", time: business.hoursWeekdays },
              { day: "Sábado", time: business.hoursSaturday },
              { day: "Domingo", time: business.hoursSunday },
            ].map((item, index, arr) => (
              <div
                key={item.day}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "15px 0",
                  borderBottom: index === arr.length - 1 ? "none" : "1px solid #e2e8f0",
                  flexWrap: "wrap",
                }}
              >
                <span>{item.day}</span>
                <strong style={{ color: item.time === "Cerrado" ? "#dc2626" : "#0369a1" }}>
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
            title="Contáctenos"
            subtitle="¿Tiene preguntas? Llámenos, envíenos un correo, un mensaje, o visítenos en persona."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 22,
            }}
          >
            <div style={{ ...styles.card, padding: 28 }}>
              <h3 style={{ marginTop: 0 }}>Información de contacto</h3>

              <div style={{ display: "grid", gap: 16 }}>
                <div>
                  <div style={{ color: "#64748b", fontSize: ".85rem" }}>Teléfono principal</div>
                  <div>{business.phone1}</div>
                </div>

                <div>
                  <div style={{ color: "#64748b", fontSize: ".85rem" }}>Teléfono secundario</div>
                  <div>{business.phone2}</div>
                </div>

                <div>
                  <div style={{ color: "#64748b", fontSize: ".85rem" }}>Consultas generales</div>
                  <div>{business.email1}</div>
                </div>

                <div>
                  <div style={{ color: "#64748b", fontSize: ".85rem" }}>Mailbox Store</div>
                  <div>{business.email2}</div>
                </div>

                <div>
                  <div style={{ color: "#64748b", fontSize: ".85rem" }}>Dirección</div>
                  <div>{business.address}</div>
                </div>
              </div>
            </div>

            <div style={{ ...styles.card, padding: 28 }}>
              <h3 style={{ marginTop: 0 }}>Envíenos un mensaje</h3>

              <form style={{ display: "grid", gap: 14 }} onSubmit={handleSubmit}>
                <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
                  <input style={inputStyle} type="text" name="fullName" placeholder="Nombre completo" value={formData.fullName} onChange={handleChange} />
                  <input style={inputStyle} type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} />
                </div>

                <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
                  <input style={inputStyle} type="text" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} />
                  <select style={inputStyle} name="subject" value={formData.subject} onChange={handleChange}>
                    <option value="" disabled>Seleccione un tema</option>
                    <option value="Fingerprinting Services">Servicios de huellas digitales</option>
                    <option value="Live Scan Inquiry">Consulta sobre Live Scan</option>
                    <option value="Mailbox Rental">Alquiler de buzón</option>
                    <option value="Shipping & Packing">Envíos y empaque</option>
                    <option value="Other">Otro</option>
                  </select>
                </div>

                <textarea
                  style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
                  name="message"
                  placeholder="¿Cómo podemos ayudarle?"
                  value={formData.message}
                  onChange={handleChange}
                />

                {submitStatus.message ? (
                  <div
                    style={{
                      borderRadius: 12,
                      padding: "12px 14px",
                      fontWeight: 600,
                      background: submitStatus.type === "success" ? "#dcfce7" : "#fee2e2",
                      color: submitStatus.type === "success" ? "#166534" : "#991b1b",
                    }}
                  >
                    {submitStatus.message}
                  </div>
                ) : null}

                <button type="submit" style={{ ...styles.primaryBtn, opacity: isSubmitting ? 0.7 : 1 }} disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            </div>

            <div style={{ ...styles.card, padding: 28 }}>
              <h3 style={{ marginTop: 0 }}>Cita de LifeScan</h3>
              <p style={{ color: "#64748b", marginTop: 0, marginBottom: 16 }}>
                Lunes a viernes: 9:00 AM a 7:00 PM. Sábado: 10:00 AM a 2:00 PM.
              </p>

              <form style={{ display: "grid", gap: 14 }} onSubmit={handleAppointmentSubmit}>
                <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
                  <input style={inputStyle} type="text" name="appointmentFullName" placeholder="Nombre completo" required />
                  <input style={inputStyle} type="email" name="appointmentEmail" placeholder="Correo electrónico" required />
                </div>

                <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
                  <input style={inputStyle} type="text" name="appointmentPhone" placeholder="Teléfono" required />
                  <input style={inputStyle} type="date" name="appointmentDate" required min={new Date().toISOString().split("T")[0]} />
                </div>

                <select style={inputStyle} name="appointmentTime" required>
                  <option value="">Seleccione una hora</option>
                  <optgroup label="Lunes - Viernes">
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

                  <optgroup label="Sábado">
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
                  placeholder="Notas"
                />

                <button type="submit" style={styles.primaryBtn}>
                  Reservar cita
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
                style={{ width: "100%", height: "100%", border: "0", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la tienda"
              />
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: "#0f172a", color: "#cbd5e1", padding: "40px 0" }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            marginTop: 20,
            marginLeft: 20,
            padding: "10px 20px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Volver arriba ↑
        </button>

        <div style={{ ...styles.container, textAlign: "center" }}>
          <p style={{ color: "#fff", fontWeight: 700, marginBottom: 8 }}>
            {business.name}
          </p>
          <p>{business.address}</p>
          <p>
            {business.phone1} • {business.email1}
          </p>
          <p style={{ marginTop: 14, color: "#94a3b8", fontSize: ".9rem" }}>
            © {new Date().getFullYear()} {business.name}. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {successMessage && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "linear-gradient(135deg, #22c55e, #16a34a)",
            color: "#fff",
            borderRadius: "12px",
            padding: "14px 18px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            zIndex: 9999,
            fontWeight: 600,
          }}
        >
          ✔ {successMessage}
        </div>
      )}

      {errorMessage && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            right: "20px",
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
            color: "#fff",
            borderRadius: "12px",
            padding: "14px 18px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            zIndex: 9999,
            fontWeight: 600,
          }}
        >
          ✖ {errorMessage}
        </div>
      )}

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
            alt="Galería ampliada"
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