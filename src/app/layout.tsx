import type { Metadata } from "next";
import { Heebo, Montserrat } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://slimdviper.com"),
  title: "SLIM D’VIPER | The Money Man – Official Website | Untouchable Empire",
  description:
    "Official website of SLIM D’VIPER (The Money Man), Sierra Leonean Afro-Hip-Hop artist living in Antwerp, Belgium. CEO of Untouchable Empire. Stream GLORY, Bend Down Low, and official music videos.",
  keywords: [
    "Slim D'Viper",
    "The Money Man",
    "GLORY",
    "Antwerp Belgium African Artist",
    "Untouchable Empire",
    "Sierra Leone Afro Hip Hop",
    "Bend Down Low",
    "Koidu Kingtom Freetown",
  ],
  authors: [{ name: "Untouchable Empire Records" }],
  openGraph: {
    title: "SLIM D’VIPER – The Money Man | Official Website",
    description: "Sierra Leonean Afro-Hip-Hop Icon living in Antwerp, Belgium. Official music, videos, and bookings.",
    url: "https://slimdviper.com",
    siteName: "SLIM D’VIPER Official",
    images: [
      {
        url: "/images/slim-d-viper-glory.jpg",
        width: 1200,
        height: 1200,
        alt: "SLIM D’VIPER – GLORY Official Artwork",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLIM D’VIPER – The Money Man | Official Website",
    description: "Living in Antwerp, Belgium • Untouchable Empire",
    images: ["/images/slim-d-viper-glory.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "SLIM D’VIPER",
    alternateName: "The Money Man",
    genre: "Afro-Hip-Hop",
    description: "Sierra Leonean Afro-Hip-Hop artist based in Antwerp, Belgium, and founder of Untouchable Empire.",
    url: "https://www.youtube.com/@slimdviper6752",
    telephone: "+32492327851",
    location: "Antwerp, Belgium",
    recordLabel: {
      "@type": "RecordLabel",
      name: "Untouchable Empire",
    },
    sameAs: [
      "https://www.youtube.com/@slimdviper6752",
      "https://www.facebook.com/slimdviper",
      "https://open.spotify.com/artist/slimdviper",
      "https://audiomack.com/slim-g-the-viper",
    ],
  };

  return (
    <html lang="en" className={`${heebo.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#fbfbfd] text-[#09090b] min-h-screen selection:bg-[#d4af37] selection:text-black antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
