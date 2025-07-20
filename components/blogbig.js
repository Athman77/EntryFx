//
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
      
    <article className="post-card post-card-overlapped">
        <Link
                  href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                    post.slug.current
                  }`}
                >
     <a className="post-img-wrap" aria-label="featured image placeholder">
        {imageProps ? (
                     <img loading="lazy" 
                     sizes="(max-width:432px) 400px, (max-width:696px) 600px, (max-width:767px) 671px, 600px"
                     src={imageProps.src} alt="s" />
                    ) : (
                      <span classNameName="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                        <PhotoIcon />
                      </span>
                    )}
   
                            </a>
                            </Link>
                            <div className="post-info-wrap">
                                <div className="tag-list flex">
                                    <span className="post-visibility" data-tooltip="members">
                                        <svg>
                                           {/* <use xlink:href="#i-lock"></use>*/}
                                        </svg>
                                    </span>
                                    <a href="/tag/health/"><span>Forex</span></a>
                                </div>
                                <h2 className="h4 post-title">
                        
          <Link
                  href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                    post.slug.current
                  }`}
                >                
  <a>{post.title}</a></Link>
                                </h2>
                                <div className="post-meta text-s flex align-center">
                                    <div className="author-avatars flex">
                                        <a href="/" className="author-image-wrap" title="Harini Banerjee">
                                            { post?.author?.image && ( 
       <img src = { AuthorimageProps.src } alt = { post?.author?.name } />
     )
   }                  </a>
                                    </div>
                                    <div className="author-names">
                                        <a href="/author/harini/">{post?.author?.name}</a>
                                    </div>
                                    <span className="read-time">2 min read</span>
                                </div>
                            </div>
                        </article>   
      
      
      
      
      
      
     
    </>
  );
}
