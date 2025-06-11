import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Brasika Asta Dharma I",
    template: "%s | Brasika Asta Dharma I",
  },
  description: "Website resmi Karang Taruna Brasika Asta Dharma I.",
  metadataBase: new URL("https://brasika1.vercel.app"), 
  openGraph: {
    title: "Brasika Asta Dharma I",
    description: "Website resmi Karang Taruna Brasika Asta Dharma I.",
    url: "https://brasika1.vercel.app",
    siteName: "Brasika Asta Dharma I",
    images: [
      {
        url: "/logo-p.jpg", 
        width: 1200,
        height: 630,
        alt: "Brasika Asta Dharma I",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/logo-p.jpg",
    shortcut: "/logo-p.jpg",
    apple: "/logo-p.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
