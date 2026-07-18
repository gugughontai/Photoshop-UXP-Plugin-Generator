import { useRef, useState } from "react";
import { Upload, Image as ImageIcon, Trash2 } from "lucide-react";

export default function UploadPanel() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  function openFileDialog() {
    inputRef.current?.click();
  }

  function onFileSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    setFileName(file.name);
    setFileSize((file.size / 1024 / 1024).toFixed(2) + " MB");

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  function removeImage() {
    setImage(null);
    setFileName("");
    setFileSize("");

    if (inputRef.current) inputRef.current.value = "";
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
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Upload size={22} />
        Upload Artwork
      </h2>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={onFileSelected}
      />

      {!image && (
        <div
          onClick={openFileDialog}
          style={{
            marginTop: 20,
            border: "2px dashed #475569",
            borderRadius: 12,
            height: 280,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
          }}
        >
          <ImageIcon size={60} color="#94A3B8" />

          <h3>Click to upload artwork</h3>

          <p>Watercolor • Oil • Pencil • Ink • Charcoal • Acrylic</p>
        </div>
      )}

      {image && (
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
              marginTop: 20,
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
                padding: "10px 16px",
                borderRadius: 8,
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