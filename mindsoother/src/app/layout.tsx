import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindSoother",
  description:
    "A tool that recommends users psychologic techniques dependent on their situation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${inter.variable} antialiased`}>
        {/* @ts-ignore */}
        <Header />
        <main className="pt-[80px] min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
