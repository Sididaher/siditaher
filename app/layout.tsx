import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sidtaher-portfolio.vercel.app"),
  title: "Sid'Taher Oumar | Full-Stack Developer",
  description:
    "Portfolio et CV de Sid'Taher Oumar, développeur full-stack à Nouakchott : applications Flutter, React, Next.js, NestJS, Supabase, parcours et certifications.",
  openGraph: {
    title: "Sid'Taher Oumar | Full-Stack Developer",
    description:
      "Applications Flutter, plateformes web modernes et interfaces responsives pour des projets freelance internationaux.",
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
