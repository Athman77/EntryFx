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
        <article className="large-article index-0  post tag-reviews tag-hash-import-2023-11-22-03-40">
    	                                                <h1 className="title medium"><a href="/airo/classNameic/">What are airports going to do about drones in the future?</a></h1>
    	                               
    	                                                <div className="featured-image hover-effect grid-50 tablet-grid-50 grid-parent">
    	                               
    	                               <a href="/airo/classNameic/" className="thumb cover">
    	                        {post.videoType === "upload" ? (
                <video
                  className="img thumb cover"
                  
                  src={post?.videoUrl}
                />
              ) : (
                <Vid
                  className="img thumb cover"
                  id={post.youtube || "Thumbnail"}
                />
              )}   
</a>
{/* <a href="/airo/classNameic/" className="thumb cover"
    	                                         //style="background: url(images/samuel-schwendener-tF2rITQWkNY-unsplash.jpg) no-repeat;"
    	                                         ></a>*/}
    	                                                </div>
    	                               
    	                                                <div className="excerpt grid-50 tablet-grid-50 grid-parent">
    	                                                  For the second time in less than a month, flights at a major London airport have been...
    	                                                  <div className="clear"></div>
    	                                                  <div className="meta">
    	                                                    <a href="/airo/author/estudio/" className="author-meta" title="Estudio Patagon">
    	                                                      <span className="author-image cover"
    	                                          //style="background-image: url( https://www.gravatar.com/avatar/26263d3127afcbc9393ba1d98bb510f7?s=250&amp;r=x&amp;d=mp );"
    	                                          ></span>
    	                                                      <span className="author-name">Estudio Patagon</span>
    	                                                    </a>
    	                                                    <a href="/airo/classNameic/#comments" className="comments meta-info alignright"><i className="remixicon remixicon-chat-2-line"></i> <span className="disqus-comment-count" data-disqus-url="https://ghost.estudiopatagon.com/airo/airo/classNameic/" data-disqus-identifier="5d39fcde48d02a0592b82fb5">0</span></a>
    	                                                    <div className="clear"></div>
    	                                                  </div>
    	                                                  <a href="/airo/classNameic/" className="button small">Read More</a>
    	                                                </div>
    	                               
    	                                                <div className="clear"></div>
    	                               
    	                                              </article>
    
    
    
    
    
    
    
    
    
   
    </>
  );
}
