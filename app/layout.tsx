import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jack Hammerton | Data Scientist",
  description: "Data Scientist specializing in Machine Learning and Data Engineering",
  keywords: ["Data Scientist", "Machine Learning", "Data Engineering", "Cloud Infrastructure"],
  authors: [{ name: "Jack Hammerton" }],
  openGraph: {
    title: "Jack Hammerton | Data Scientist",
    description: "Data Scientist specializing in Machine Learning and Data Engineering",
    type: "website",
    url: "https://jimmybentley.github.io",
    siteName: "James Bentley Portfolio",
    images: [
      {
        url: "https://jimmybentley.github.io/VLSI_poster.png",
        width: 1200,
        height: 630,
        alt: "James Bentley - Software Engineer Portfolio",
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
