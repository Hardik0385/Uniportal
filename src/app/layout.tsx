import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/store/AuthContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UniPortal - University Query Management",
  description: "A premium student query management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased bg-[#FCFBF8] text-stone-900`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
