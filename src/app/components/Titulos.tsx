import React from "react";

interface TituloProps {
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function Titulo({ children, align = "left", className = "" }: TituloProps) {
  return (
    <h2
      className={`
        font-bold text-azul-principal font-inter
        ${align === "center" ? "text-center" : "text-left"}
        ${className}
      `}
      style={{
        fontSize: 'clamp(3rem, 8vw, 7.5rem)',
        lineHeight: '0.8',
      }}
    >
      {children}
    </h2>
  );
}
