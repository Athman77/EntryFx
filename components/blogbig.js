//
//
//

import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import ReactPlayer from "react-player";
import Vid from "@/components/vid";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";

export default function BlogBig({
  post,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  chapter,
  fontWeight,
}) {
  const imageProps = post?.mainImage ? urlForImage(post.mainImage) : null;
  const AuthorimageProps = post?.author?.image ?
    urlForImage(post.author.image) :
    null;
  return (
    <>
     <article className="post-card post-card-small">
       <Link
                  href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                    post.slug.current
                  }`}
                >
  <a>
    {imageProps ? (
                     <img loading="lazy"  src={imageProps.src} alt="s" />
                    ) : (
                      <span classNameName="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                        <PhotoIcon />
                      </span>
                    )}
  </a>
  </Link>
  <div className="post-info-wrap">
    <h2 className="h5 post-title">
      <Link
                  href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                    post.slug.current
                  }`}
                >
      <a>{post.title}</a>
      </Link>
    </h2>
  </div>
</article> 
      
      
      
      
      
      
   
    </>
  );
}
