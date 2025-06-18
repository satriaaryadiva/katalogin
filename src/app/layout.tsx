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
  title: "Katalogin",
  description: "Platform digitalisasi UMKM untuk katalog produk , lebih mudah dan cepat,langkah lebih jauh dengan katalogin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased items-center justify-items-center min-h-screen  font-[var(--font-geist-sans)]`}
        style={{
          backgroundColor: "#f8f9fa", // Light gray background
          color: "#212529", // Dark text color
        }}
      >
        {children}
      </body>
    </html>
  );
}
