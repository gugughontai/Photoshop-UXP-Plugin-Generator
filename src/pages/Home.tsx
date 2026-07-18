import PageTitle from "../components/common/PageTitle";
import UploadDropZone from "../components/Upload/UploadDropZone";
import StylePreview from "../components/Preview/StylePreview";
import AnalysisPanel from "../components/Analysis/AnalysisPanel";
import PluginBuilder from "../components/PluginBuilder/PluginBuilder";

export default function Home() {
  return (
    <>
      <PageTitle
        title="Photoshop UXP Plugin Generator"
        subtitle="Analyze artwork and generate Photoshop UXP plugins."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 20,
        }}
      >
        <UploadDropZone />

        <StylePreview />

        <AnalysisPanel />

        <PluginBuilder />
      </div>
    </>
  );
}