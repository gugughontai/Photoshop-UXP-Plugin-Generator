import {
  LayoutDashboard,
  Palette,
  Library,
  Package,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    icon: Palette,
    label: "Style Analyzer",
  },
  {
    icon: Library,
    label: "Style Library",
  },
  {
    icon: Package,
    label: "Plugin Builder",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 260,
        background: "#1E293B",
        color: "#ffffff",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #334155",
      }}
    >
      <h2
        style={{
          marginBottom: 40,
          fontSize: 22,
          fontWeight: 700,
        }}
      >
        Photoshop UXP
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "transparent",
                border: "none",
                color: "#E2E8F0",
                padding: "12px 14px",
                borderRadius: 10,
                cursor: "pointer",
                fontSize: 16,
                textAlign: "left",
              }}
            >
              <Icon size={20} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div
        style={{
          marginTop: "auto",
          fontSize: 13,
          color: "#94A3B8",
        }}
      >
        Version 0.1.0
      </div>
    </aside>
  );
}