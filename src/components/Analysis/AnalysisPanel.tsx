import Card from "../common/Card";

const items = [
  "Brush Stroke Detection",
  "Texture Analysis",
  "Lighting Analysis",
  "Palette Extraction",
  "Edge Detection",
];

export default function AnalysisPanel() {
  return (
    <Card title="🧠 Analysis">
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}