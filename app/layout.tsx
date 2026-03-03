import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./hamburguer.css";
import "./animations.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Orbitar 360",
  description:
    "Orbitar 360 crée des accès numériques à des biens immobiliers et des espaces réels pour permettre aux personnes de les visiter en profondeur, à distance, prendre des mesures et projeter librement avant de contacter un commercial.",

  icons: {
    icon: "/assets/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://orbitar360.com",
    title: "Orbitar 360",
    description:
      "Orbitar 360 crée des accès numériques à des biens immobiliers et des espaces réels pour permettre aux personnes de les visiter en profondeur, à distance, prendre des mesures et projeter librement avant de contacter un commercial.",
    images: [
      {
        url: "/images/cover.jpg",
        width: 1080,
        height: 1080,
        alt: "Orbitar 360",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} antialiased`}>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
