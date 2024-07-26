
import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import ReactPlayer from "react-player";
import Vid from "@/components/vid";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";

export default function BlogOne({
  post,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight,
}) {
  const imageProps = post?.mainImage ? urlForImage(post.mainImage) : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;
  return (
    <>
    
    <article className="item global-image post tag-joyful-business tag-work-in-public featured">
    {/*  <Link
              href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                post.slug.current
              }`}
            >
           <a className="global-link" aria-label="A more joyful business"></a></Link>*/}
           
             {post.videoType === "upload" ? (
                <video
                  className="img"
                  
                  src={post?.videoUrl}
                />
              ) : (
                <Vid
                  className="img"
                  id={post.youtube || "Thumbnail"}
                />
              )}
           
           
           {/*<img srcset="images/a-more-joyful-business_1.jpg 400w, images/a-more-joyful-business.jpg 800w" sizes="(max-width:480px) 400px, 800px" src="images/a-more-joyful-business.jpg" loading="lazy" alt="A more joyful business">*/}
           <div className="item-content global-mask is-image">
             <div className="item-lock">
             </div>
     
             <div className="item-other">
     
               <h2 className="item-title">
               <Link
              href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                post.slug.current
              }`}
            >
               <a>{post.title}</a></Link>
               
               </h2>
     
     
               <div className="item-excerpt global-excerpt text-italic">
                 
               </div>
     
               <div className="item-tags global-tags global-pointer is-image">
               <Link
              href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                post.slug.current
              }`}
            >
                 <a>Joyful Business</a></Link>
               </div>
             </div>
           </div>
         </article>
    
    
    
    
    
    
    
    
    
    
    
    </>
  );
}
