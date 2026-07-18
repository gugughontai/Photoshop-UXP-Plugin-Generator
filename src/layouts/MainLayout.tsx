import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#0F172A",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        <main
          style={{
            flex: 1,
            padding: 24,
            overflow: "auto",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}