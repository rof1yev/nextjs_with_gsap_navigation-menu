import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";

const poppinsFont = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navigation Menu",
  description: "Navigation Menu - Nextjs with GSAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppinsFont.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
