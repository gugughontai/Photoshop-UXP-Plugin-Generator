import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div
      style={{
        background: "#1E293B",
        border: "1px solid #334155",
        borderRadius: 12,
        padding: 20,
        color: "#F8FAFC",
        minHeight: 220,
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: 18,
        }}
      >
        {title}
      </h2>

      {children}
    </div>
  );
}