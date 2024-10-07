import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/Sidebar";

const font = DM_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.variable}`}>
      <body>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
