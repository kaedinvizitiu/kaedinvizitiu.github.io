import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaedinvizitiu.github.io"),
  title: {
    default: "Kaedin Vizitiu | Business Student & Emerging Leader",
    template: "%s | Kaedin Vizitiu",
  },
  description:
    "The personal portfolio of Kaedin Vizitiu, a California Baptist University business student and emerging leader.",
  keywords: [
    "Kaedin Vizitiu",
    "business student",
    "leadership",
    "entrepreneurship",
    "California Baptist University",
  ],
  authors: [{ name: "Kaedin Vizitiu" }],
  openGraph: {
    title: "Kaedin Vizitiu's Personal Portfolio",
    description:
      "Business student and emerging leader exploring entrepreneurship, finance, AI, and service.",
    type: "website",
    images: [
      {
        url: "/kaedin-og-card.jpg",
        width: 1200,
        height: 630,
        alt: "Abstract blue-gray mountain path representing Kaedin Vizitiu's next climb",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaedin Vizitiu's Personal Portfolio",
    description:
      "Business student and emerging leader exploring entrepreneurship, finance, AI, and service.",
    images: ["/kaedin-og-card.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
