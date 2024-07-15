import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "microsite",
  description: "This is a microsite",
  keywords: "keyword1, keyword2, keyword3",
  openGraph: {
    title: "Microsite",
    description: "Description of the microsite",
    images: [
      {
        url: "/path/to/image.jpg",
        width: 800,
        height: 600,
        alt: "Image Alt",
      },
    ],
    url: "https://www.microsite.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.microsite.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
