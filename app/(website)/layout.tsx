
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
      default: settings?.title || "snapIman - Best Islamic App",
      template: "%s | snapIman",
    },
    description: " Engage in educational content covering diverse topics such as Islamic history, jurisprudence, and theology, fostering continuous learning and personal growth",
    keywords: ["Quran", "Islamic Stories", "Dua & Prayer"],
    authors: [{ name: "Gaucho" }],
    canonical: settings.url,
    openGraph: {
      images: [
        {
          url: "https://cdn.sanity.io/images/11ognen8/production/43b6dfdd28d8361732c19bfaf576028b20ef7aac-719x842.jpg",
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
