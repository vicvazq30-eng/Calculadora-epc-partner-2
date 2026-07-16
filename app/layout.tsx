import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HQS Calculadora Partner",
  description: "Calculadora interna de EPC y comisión de HQS Energy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
