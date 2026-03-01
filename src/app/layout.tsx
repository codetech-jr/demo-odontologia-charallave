import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odontología Premium en Charallave | Ortodoncia y Estética Dental",
  description:
    "Consultorio odontológico de alta especialidad en Charallave, Valles del Tuy. Ortodoncia, diseño de sonrisa, implantes y limpiezas. Aceptamos Cashea — pague en cuotas sin interés.",
  keywords: [
    "odontología charallave",
    "ortodoncia valles del tuy",
    "diseño de sonrisa",
    "dentista charallave",
    "cashea odontología",
  ],
  openGraph: {
    title: "Odontología Premium en Charallave | Ortodoncia y Estética Dental",
    description:
      "Especialistas en ortodoncia y estética dental en Charallave. Agenda tu evaluación gratuita hoy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} font-[family-name:var(--font-inter)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
