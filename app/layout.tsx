import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juliu's Burgers | Parque Imperial",
  description: "Hambúrgueres, combos e delivery no Parque Imperial, em Barueri. Peça a Juliu's Burgers pelo iFood.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
