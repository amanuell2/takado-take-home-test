import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Takado home take project",
  description: "Takado home take project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${lato.variable} dark:bg-dark-500`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
