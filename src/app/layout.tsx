import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Carrega a fonte Inter como variável CSS
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paschoalotto",
  description: "Paschoalotto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
