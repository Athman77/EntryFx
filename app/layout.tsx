
//import "@/styles/tail wind.css"; 
import "@/styles/screen.css";
import "@/styles/cards.min.css";
import "@/styles/sportx.css";
//import "@/styles/sport.css";
//import "@/styles/bottom.css";
import { Analytics } from '@vercel/analytics/react';
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-layout="narrow" 
      data-theme="light"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable, "light")}>
      <body className=" home-template global-cover-homepage global-alternative-buttons">
        <Providers>
          {children}
        <Analytics />
        </Providers>
        
      </body>
    </html>
  );
}
