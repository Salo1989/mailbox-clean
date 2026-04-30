import { Link } from "react-router-dom";
import ServicesSection from "./ServicesSection";

type NavbarProps = {
  showMessage: boolean;
  setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
  showServices: boolean;
  setShowServices: React.Dispatch<React.SetStateAction<boolean>>;
  business: {
    phone1: string;
  };
  styles: any;
};

const hoverEffect = {
  transition: "all 0.2s ease",
};

export default function Navbar({
  showMessage,
  setShowMessage,
  showServices,
  setShowServices,
  business,
  styles,
}: NavbarProps) {
  const handleMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow =
      "0 10px 22px rgba(15,23,42,.18)";
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <nav
      style={{
        background: "#fff",
        borderBottom: "1px solid #e2e8f0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
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
        {/* LOGO */}
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            height: "110px",
            maxWidth: "220px",
            objectFit: "contain",
          }}
        />

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* SHOW INFO */}
          <button
            type="button"
            onClick={() => {
              setShowMessage((prev) => !prev);
              setShowServices(false);
            }}
            style={{
              ...styles.outlineBtn,
              ...hoverEffect,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {showMessage ? "Hide Info" : "Show More Info"}
          </button>

          {/* SHOW SERVICES */}
          <button
            type="button"
            onClick={() => {
              setShowServices((prev) => !prev);
              setShowMessage(false);
            }}
            style={{
              ...styles.outlineBtn,
              ...hoverEffect,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {showServices ? "Hide Services" : "Show Services"}
          </button>

          {/* SERVICES */}
          <a
            href="#services"
            style={{
              ...styles.outlineBtn,
              ...hoverEffect,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Services
          </a>

          {/* HOURS */}
          <a
            href="#hours"
            style={{
              ...styles.outlineBtn,
              ...hoverEffect,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Hours
          </a>

          {/* CONTACT */}
          <a
            href="#contact"
            style={{
              ...styles.outlineBtn,
              ...hoverEffect,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contact
          </a>

          {/* CALL NOW */}
          <a
            href={`tel:${business.phone1}`}
            style={{
              ...styles.primaryBtn,
              ...hoverEffect,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Call Now
          </a>

          {/* ADMIN */}
          <Link
            to="/admin"
            style={{
              ...styles.outlineBtn,
              ...hoverEffect,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Admin
          </Link>
        </div>
      </div>

      {/* SHOW INFO IMAGE */}
      {showMessage && (
        <div style={{ ...styles.container, padding: "20px 0" }}>
          <img
            src="/showinfo.png"
            alt="More Info"
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

      {/* SERVICES DROPDOWN */}
      <ServicesSection showServices={showServices} />
    </nav>
  );
}