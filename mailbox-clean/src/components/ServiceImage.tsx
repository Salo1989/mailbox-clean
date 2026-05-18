type Props = {
  src: string;
  alt: string;
  isWorkstation?: boolean;
};

export default function ServiceImage({ src, alt, isWorkstation }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(18px, 3vw, 30px)",
        height: "100%",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          maxWidth: isWorkstation ? "380px" : "100%",
          height: isWorkstation ? "auto" : "100%",
          maxHeight: "360px",
          objectFit: isWorkstation ? "contain" : "cover",
          borderRadius: "18px",
          display: "block",
          boxShadow: "0 18px 36px rgba(15,23,42,0.16)",
          border: "1px solid rgba(255,255,255,0.72)",
        }}
      />
    </div>
  );
}
