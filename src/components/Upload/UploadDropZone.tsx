import { useRef } from "react";
import { ImagePlus, Trash2 } from "lucide-react";
import { useImageStore } from "../../store/imageStore";

export default function UploadDropZone() {
  const fileInput = useRef<HTMLInputElement>(null);

  const {
    image,
    fileName,
    fileSize,
    setImage,
    clearImage,
  } = useImageStore();

  function chooseFile() {
    fileInput.current?.click();
  }

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    const size = (file.size / 1024 / 1024).toFixed(2) + " MB";

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string, file.name, size);
    };

    reader.readAsDataURL(file);
  }

  function removeImage() {
    clearImage();

    if (fileInput.current) {
      fileInput.current.value = "";
    }
  }

  return (
    <div
      style={{
        background: "#1E293B",
        border: "1px solid #334155",
        borderRadius: 12,
        padding: 20,
        color: "white",
      }}
    >
      <h2>Upload Artwork</h2>

      <input
        ref={fileInput}
        hidden
        type="file"
        accept="image/*"
        onChange={handleFile}
      />

      {!image ? (
        <div
          onClick={chooseFile}
          style={{
            marginTop: 20,
            height: 320,
            border: "2px dashed #475569",
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            gap: 15,
          }}
        >
          <ImagePlus size={64} />

          <h3>Click to Upload</h3>

          <p>Watercolor • Oil • Pencil • Ink • Charcoal</p>
        </div>
      ) : (
        <>
          <img
            src={image}
            alt=""
            style={{
              width: "100%",
              marginTop: 20,
              borderRadius: 10,
              maxHeight: 420,
              objectFit: "contain",
            }}
          />

          <div
            style={{
              marginTop: 15,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div>{fileName}</div>
              <small>{fileSize}</small>
            </div>

            <button
              onClick={removeImage}
              style={{
                background: "#DC2626",
                color: "white",
                border: "none",
                borderRadius: 8,
                padding: "10px 16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Trash2 size={18} />
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  );
}