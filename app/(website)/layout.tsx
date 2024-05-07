
import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

export async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    //metadataBase: new URL(settings.url),
    manifest: "/manifest.json",
    title: {
      default: settings?.title || "Exsport - Get Live Football Scores and Real-Time Football Results with LiveScore!",
      template: "%s | exSport",
    },
    description: " Get Live Football Scores and Real-Time Football Results with LiveScore!",
    keywords: ["Highlights", "Football", "Champions League"],
    authors: [{ name: "Gaucho" }],
    canonical: settings.url,
    openGraph: {
      images: [
        {
          url: "https://cdn.sanity.io/images/wusctyxy/production/862609bc9723a18d494f3d85f26a10cfb94df443-1440x1781.jpg",
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
//export const revalidate = 10;
