
import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
 //    metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        "NextApp - Blog Template for Next.js & Sanity CMS",
      template: "%s | Stablo"
    },
    description:
      settings?.description ||
      "NextApp - popular open-source next.js and sanity blog template",
    keywords: ["Next.js", "Sanity", "Tailwind CSS"],
    authors: [{ name: "Surjith" }],
    canonical: settings?.url,
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
      title: settings?.title || "Stablo Template",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      {/* <Navbar {...settings} />*/}

      <div>{children}</div>

      {/*<Footer {...settings} />*/}
    </>
  );
}
// enable revalidate for all pages in this layout
export const revalidate = 10;
