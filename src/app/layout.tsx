import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Themeconfig } from "@/config/theme.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prueba tecnica",
  description: "Crear una página usando Next, MUI y SASS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Themeconfig>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </Themeconfig>
  );
}
