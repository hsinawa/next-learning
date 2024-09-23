import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import FooterSection from "@/components/Footer/FooterSection";
import FooterAccordian from "@/components/Footer/FooterAccordian";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awanish Mishra Portfolio",
  description:
    "Fullstack Developer Portfolio, Awanish Mishra, Software Engineer, React, Next.js, Node.js, Tailwind CSS, TypeScript",

    icons:{
      icon: ["/icon.png"],
      apple:["/icon.png"],
      shortcut:["/icon.png"],
    }
 

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <FooterAccordian />
        <TooltipProvider>
          <FooterSection />
        </TooltipProvider>
      </body>
    </html>
  );
}
