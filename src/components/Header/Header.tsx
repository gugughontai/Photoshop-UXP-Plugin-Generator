export default function Header() {
  return (
    <header
      style={{
        height: 70,
        background: "#111827",
        borderBottom: "1px solid #334155",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            color: "#F8FAFC",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          Photoshop UXP Plugin Generator
        </h1>

        <p
          style={{
            margin: 0,
            marginTop: 4,
            color: "#94A3B8",
            fontSize: 14,
          }}
        >
          Analyze artwork • Build Photoshop plugins • Export UXP packages
        </p>
      </div>

      <div
        style={{
          color: "#22C55E",
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        ● Ready
      </div>
    </header>
  );
}