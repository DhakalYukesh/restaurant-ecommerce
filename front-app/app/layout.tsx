import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joofi Restaurant - A Culinary Delight",
  description:
    "Welcome to Joofi Restaurant, where culinary excellence meets unforgettable experiences. Explore our exquisite menu, indulge in delectable dishes, and savor the ambiance of our restaurant. Join us for a memorable dining journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${raleway.className}`}
      >
        {children}
      </body>
    </html>
  );
}
