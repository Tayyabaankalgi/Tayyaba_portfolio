import type { Metadata } from "next";
import "./globals.css";
import { Qwitcher_Grypen } from "next/font/google";

export const metadata: Metadata = {
  title: "Tayyaba — Portfolio",
  description: "Portfolio of Tayyaba",
};

const calligraphy = Qwitcher_Grypen({
  subsets: ["latin"],
  weight: ["700","700"],      // pick 400 for lighter, 700 for bolder strokes
  variable: "--font-calligraphy",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${calligraphy.variable} min-h-screen bg-[#F5FAFF] text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
