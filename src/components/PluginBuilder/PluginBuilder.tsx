import Card from "../common/Card";

export default function PluginBuilder() {
  return (
    <Card title="📦 Plugin Builder">
      <button
        style={{
          padding: "12px 20px",
          borderRadius: 8,
          border: "none",
          background: "#2563EB",
          color: "white",
          cursor: "pointer",
        }}
      >
        Generate Photoshop UXP Plugin
      </button>
    </Card>
  );
}