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
  title: "Smile Dent GM | Odontología en Charallave",
  description:
    "Consultorio odontológico Smile Dent GM en Charallave. Ortodoncia, prótesis, extracciones, restauraciones y limpieza. Aceptamos Cashea.",
  keywords: [
    "smile dent gm",
    "odontología charallave",
    "ortodoncia smile dent",
    "dentista charallave",
    "cashea odontología",
  ],
  openGraph: {
    title: "Smile Dent GM | Odontología General y Ortodoncia",
    description:
      "Especialistas en odontología general, ortodoncia y prótesis en Charallave. ¡Agenda tu cita hoy!",
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
