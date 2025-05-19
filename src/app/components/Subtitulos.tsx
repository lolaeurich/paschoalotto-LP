import React from "react";

interface SubtituloProps {
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function Subtitulo({ children, align = "center", className = "" }: SubtituloProps) {
  return (
    <h2
      className={`
        font-bold text-azul-escuro
        ${align === "center" ? "text-center" : "text-left"}
        ${className}
      `}
      style={{
        fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
        lineHeight: "1.2",
      }}
    >
      {children}
    </h2>
  );
}
