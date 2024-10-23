import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/Sidebar";
import ReduxProvider from "@/components/ReduxProvider";
import BodyStyled from "@/components/BodyStyled";

const font = Open_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Kanban Task Manager",
  description: "Kanban Task Manager created with Next and Typescript",
  icons: {
    icon: "/assets/board.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.variable}`}>
      <ReduxProvider>
        <BodyStyled>
          <SideBar />
          {children}
        </BodyStyled>
      </ReduxProvider>
    </html>
  );
}
