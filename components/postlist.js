
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

                    
                    
                    
                    
                    
                    
                    
          <div className="nc-Card10V2 relative flex flex-col h-full">
            <div className="block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden z-0">
              <div>
                <div className="nc-PostFeaturedMedia relative w-full h-full">
                  {imageProps ? (
                  <img src={imageProps.src} sizes="(max-width: 600px) 480px, 800px" className="object-cover object-cover absolute inset-0 w-full h-full" alt="featured" />
                    ) : (
              <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <PhotoIcon />
              </span>
            )}    
                  <span className="absolute inset-0 flex items-center justify-center ">
                    <div className="nc-PostTypeFeaturedIcon hover:scale-105 transform cursor-pointer transition-transform" data-nc-id="PostTypeFeaturedIcon">
                      <span className="bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-11 h-11">
                        <svg className="w-6 h-6" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg></span>
                    </div>
                  </span>
                    <Link href={`/post/${post.slug.current}`}> 
                  <a className="block absolute inset-0 "></a>
                  </Link>
                </div>
              </div>
                <Link href={`/post/${post.slug.current}`}> 
              <a className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"></a>
              </Link>
            </div>
            <div className="absolute top-3 inset-x-3 flex justify-between items-start space-x-4">
              <div className="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                <Link href={`/post/${post.slug.current}`}> 
                <a className="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 hover:bg-yellow-800">Industrial</a>
                </Link>
              </div>
              <div className="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ">
                <button className="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700" title="Save to reading list">
                  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" className="w-[18px] h-[18px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                  </svg></button>
              </div>
            </div>
            <div className="space-y-2.5 mt-4 px-4">
            
            
              <div className="nc-PostCardMetaV2 inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
                <div className="relative flex items-center space-x-2">
                  <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-9 w-9 text-base ring-1 ring-white dark:ring-neutral-900">
                    <img sizes="100px" src="https://cdn.sanity.io/images/11ognen8/production/f271a0e60dc0ec7a41a2992e5ce28a4bb65c0ced-400x400.jpg" className="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full" alt="Foulcher Nathanil" />
                    <span className="wil-avatar__name">F</span>
                  </div>
                  <div>
                    <h2 className="block font-semibold text-base"
                    
                >
                  <Link href={`/post/${post.slug.current}`}> 
                <a className="line-clamp-1" >{post.title} </a>
                </Link>
                </h2>
                    <a className="flex mt-1.5" href="/author/the-demo-author-slug"><span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">Gaucho</span><span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span className="text-neutral-500 dark:text-neutral-400 font-normal">May 20, 2021</span></a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
    </>
  );
}
