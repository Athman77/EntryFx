import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

export async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // metadataBase: new URL(settings.url),
    title: {
      default: settings?.title || "BigTech - Forex Trading Blog & Trading Analysis",
      template: "%s | BigTech",
    },
    description: "Stay updated with the latest news and analysis in Forex trading. Learn strategies, get insights, and make informed decisions",
    keywords: ["Trading Blog", "Trading Strategies", "Trading Analysis"],
    authors: [{ name: "Gaucho" }],
    canonical: settings.url,
    openGraph: {
      images: [
        {
          url: "https://cdn.sanity.io/images/cwzkjmps/production/a03cf28eead83f5e47e9a3eb309616d7e1b6fb97-1014x760.png",
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      title: settings?.title,
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      

      <div>{children}</div>

      
    </>
  );
}
// enable revalidate for all pages in this layout
 export const revalidate = 10;
