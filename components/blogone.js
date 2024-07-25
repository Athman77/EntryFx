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
      <article className="post-card post tag-science tag-hash-import-2024-04-21-17-09 tag-hash-import-2024-07-05-06-08 featured">
     <div className="entry-thumbnail box-wrap box-thumbnail">
       <a className="thumb-link" href="/what-we-think-we-become/" title="What We Think, We Become">
         <div className="thumb-container thumb-75">
    {/*   {post.videoType === "upload" ? (
                      <video className="thumb-image img" src={post?.videoUrl} />
                    ) : (
                      <Vid
                        className="thumb-image img"
                        id={post.youtube || "Thumbnail"}
                      />
                    )}
*/}
       <img className="thumb-image"  sizes="(max-width: 767px) 100vw, (max-width: 880px) 50vw, (max-width: 1024px) 33vw, 600px" src="https://vozzy.tmrwstudio.net/content/images/size/w800/format/webp/2024/02/v15.jpeg" alt="Good Things Come in Good Time" loading="lazy" />
         </div>
       </a>
       <div className="thumb-info info-center">
       </div>
     </div>
  
     <div className="post-desc post-desc2 text-center">
       <div className="box-wrap box-post post-desc-inner space-more">
         <div className="entry-meta meta-top">
           <a href="https://vozzy.tmrwstudio.net/featured/" className="meta-featured meta-item" aria-label="Featured">
             <span className="info-icon"><span className="icon-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 6.99999C16.4183 6.99999 20 10.5817 20 15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15C4 10.5817 7.58172 6.99999 12 6.99999ZM12 8.99999C8.68629 8.99999 6 11.6863 6 15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15C18 11.6863 15.3137 8.99999 12 8.99999ZM12 10.5L13.3225 13.1797L16.2798 13.6094L14.1399 15.6953L14.645 18.6406L12 17.25L9.35497 18.6406L9.86012 15.6953L7.72025 13.6094L10.6775 13.1797L12 10.5ZM18 1.99999V4.99999L16.6366 6.13755C15.5305 5.5577 14.3025 5.17884 13.0011 5.04948L13 1.99899L18 1.99999ZM11 1.99899L10.9997 5.04939C9.6984 5.17863 8.47046 5.55735 7.36441 6.13703L6 4.99999V1.99999L11 1.99899Z"></path>
                 </svg>
               </span></span>
             <span className="info-text">Featured</span>
           </a>
         </div>
  
         <div className="entry-header">
           <h2 className="entry-title head3">
             <a className="title-text" href="/what-we-think-we-become/">
               What We Think, We Become
             </a>
           </h2>
         </div>
  
         <div className="entry-excerpt">
           I don’t want to leave this planet until I achieve everything that I was put here to do.
         </div>
  
         <div className="entry-meta meta-bottom">
           <div className="meta-author meta-item">
             <span className="info-icon"><span className="icon-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                   <path d="M28 4C21 4 11 9.89 8 16c-1.96 3.99-2.89 7.25-2.99 12H5v4l7 28h8l-7-28v-7.5C13 15.4 20.4 8 29.5 8 40.61 8 50 17.62 50 29l4 16h4l-4-16C54 15.21 43.01 4 29.5 4H28zm21 41v3c0 3.31-2.69 6-6 6h-7v6h4v-2h3c5.51 0 10-4.49 10-10v-3h-4z"></path>
                 </svg>
               </span></span>
             <span className="info-text">By�&nbsp;<a href="/author/eileen/">Eileen Dover</a></span>
           </div>
         </div>
  
         <div className="read-more-icon">
           <a href="/what-we-think-we-become/" title="What We Think, We Become" className="post-more-icon button btn-content_icon btn-white">
             <span className="icon-svg">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                 <path fill="none" d="M0 0h24v24H0z"></path>
                 <path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
               </svg>
             </span>
           </a>
         </div>
       </div>
     </div>
   </article>
    </>
  );
}
