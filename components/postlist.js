
import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";

export default function PostList({
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
      <article className="bt-post post-5179 podcast type-podcast status-publish has-post-thumbnail hentry podcast_categories-comedy podcast_categories-humor">
                      <div className="bt-post--inner">
                        <div className="bt-post--thumbnail">
                          <div className="bt-post--featured"> 
                          <Link href={`/post/${post.slug.current}`}>
                          <a>
                              <div className="bt-cover-image"> 
                              
                          {imageProps ? (
              <img
              decoding="async" width="768" height="1150" className="attachment-medium_large size-medium_large wp-post-image" alt=""  sizes="(max-width: 768px) 100vw, 768px" 
                src={imageProps.src}
                {...(post.mainImage.blurDataURL && {
                  placeholder: "blur",
                  blurDataURL: post.mainImage.blurDataURL
                })}
                alt={post.mainImage.alt || "Thumbnail"}
                
              />
            ) : (
              <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <PhotoIcon />
              </span>
            )}    
                              
                              </div>
                            </a>
                            </Link>
                            </div>
                          <div className="bt-post--pod-link"> 
                         <Link href={`/post/${post.slug.current}`}> 
                          
                          <a><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path>
                              </svg> Watch Now</a>
                              </Link></div>
                        </div>
                        <div className="bt-post--infor">
                          <div className="bt-post--infor-inner">
                            <div className="bt-post--category"><a href="/" rel="tag">Football</a> - <a href="" rel="tag">Highlights</a></div>
                            <h3 className="bt-post--title"> 
                            <Link href={`/post/${post.slug.current}`}>
                            <a>  {post.title} </a>
                            </Link></h3>
                          </div>
                        </div>
                      </div>
                    </article>
    </>
  );
}
