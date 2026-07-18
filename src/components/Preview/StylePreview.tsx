import Card from "../common/Card";

export default function StylePreview() {
  return (
    <Card title="🖼 Style Preview">
      <div
        style={{
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#94A3B8",
        }}
      >
        No preview yet
      </div>
    </Card>
  );
}