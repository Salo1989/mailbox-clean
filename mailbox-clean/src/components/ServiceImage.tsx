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
        padding: "20px",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          maxWidth: isWorkstation ? "350px" : "100%", // 🔥 only workstation smaller
          height: "auto",
          objectFit: "contain",
          borderRadius: "16px",
          display: "block",
        }}
      />
    </div>
  );
}