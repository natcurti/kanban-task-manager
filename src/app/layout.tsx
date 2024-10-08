import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/Sidebar";
import ReduxProvider from "@/components/ReduxProvider";

const font = DM_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Kanban Task Manager",
  description: "Kanban Task Manager created with Next and Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.variable}`}>
      <ReduxProvider>
        <body>
          <SideBar />
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
