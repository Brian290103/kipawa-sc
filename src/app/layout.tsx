import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kipawa Soccer Academy",
  description:
    "Kipawa Soccer Academy is a dedicated organization committed to developing young football talent. We provide a supportive and challenging environment where players can grow their skills, build character, and pursue their dreams. Our focus extends beyond the field, as we aim to empower our athletes to become leaders in their communities..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title className=""></title>
        <link
          href="https://db.onlinewebfonts.com/c/4c4c08af466e9ad071b6d69cf44093df?family=SaolDisplay-Regular"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Sirin+Stencil&family=Syne:wght@400..800&family=Tangerine:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-body antialiased`}>
        <Toaster richColors={true} />
        {children}
      </body>
    </html>
  );
}
