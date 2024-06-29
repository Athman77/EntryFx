import "@/styles/tailwind.css";
import "@/styles/screen.css";
import "@/styles/cards.min.css";
import "@/styles/sportx.css";
import "@/styles/sport.css";
import "@/styles/bottom.css";
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
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <body className="antialiased dark dark-mode home page-template page-template-homepage page-template-homepage-php page page-id-32 theme-voiceful woocommerce-js page-template-default page page-id-4810 wp-custom-logo theme-influencers woocommerce-no-js bt-orbit-enable bt-bg-pattern-enable bt-bg-buble-enable bt-bg-scroll-enable bt-img-zoom-enable e-lazyload elementor-default elementor-template-full-width elementor-kit-1850 page-template-default page page-id-4695 wp-custom-logo theme-influencers woocommerce-no-js bt-orbit-enable bt-bg-pattern-enable bt-bg-buble-enable bt-bg-scroll-enable bt-img-zoom-enable e-lazyload elementor-default elementor-template-full-width elementor-kit-1850 elementor-page elementor-page-4695">
        <Providers>
          {children}
        <Analytics />
        </Providers>
        
      </body>
    </html>
  );
}
