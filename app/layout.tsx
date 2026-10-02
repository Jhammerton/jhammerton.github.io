import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jack Hammerton | Aspiring Data Scientist",
  description: "Business Analytics student at Bradley University building experience in analytics, forecasting, and machine learning through internships and projects.",
  keywords: ["Business Analytics", "Aspiring Data Scientist", "Machine Learning", "Forecasting"],
  authors: [{ name: "Jack Hammerton" }],
  openGraph: {
    title: "Jack Hammerton | Aspiring Data Scientist",
    description: "Business Analytics student at Bradley University building experience in analytics, forecasting, and machine learning through internships and projects.",
    type: "website",
    url: "https://jhammerton.github.io",
    siteName: "Jack Hammerton Portfolio",
    images: [
      {
        url: "https://jhammerton.github.io/VLSI_poster.png",
        width: 1200,
        height: 630,
        alt: "Jack Hammerton - Aspiring Data Scientist Portfolio",
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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
