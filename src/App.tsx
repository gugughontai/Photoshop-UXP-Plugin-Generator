function App() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#111827",
        color: "white",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          height: 60,
          background: "#1F2937",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          fontSize: 22,
          fontWeight: 700,
          borderBottom: "1px solid #374151",
        }}
      >
        Photoshop UXP Plugin Generator
      </header>

      <div
        style={{
          flex: 1,
          display: "flex",
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            width: 250,
            background: "#1F2937",
            borderRight: "1px solid #374151",
            padding: 20,
          }}
        >
          <h3>Navigation</h3>

          <br />

          <p>🏠 Dashboard</p>
          <p>🎨 Style Analyzer</p>
          <p>📚 Style Library</p>
          <p>🔌 Plugin Builder</p>
          <p>⚙ Settings</p>
        </aside>

        {/* Main Area */}
        <main
          style={{
            flex: 1,
            padding: 25,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
        >
          <div
            style={{
              border: "2px dashed #4B5563",
              borderRadius: 10,
              padding: 30,
            }}
          >
            <h2>Upload Artwork</h2>

            <br />

            <p>Drag & Drop</p>

            <p>or</p>

            <button>Choose Artwork</button>
          </div>

          <div
            style={{
              border: "1px solid #374151",
              borderRadius: 10,
              padding: 30,
            }}
          >
            <h2>Style Preview</h2>
          </div>

          <div
            style={{
              border: "1px solid #374151",
              borderRadius: 10,
              padding: 30,
            }}
          >
            <h2>Analysis</h2>
          </div>

          <div
            style={{
              border: "1px solid #374151",
              borderRadius: 10,
              padding: 30,
            }}
          >
            <h2>Plugin Builder</h2>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;