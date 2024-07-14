//
//.
//
//
import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import ReactPlayer from "react-player";
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
   
     
       <div className="nc-Card16Podcast relative flex flex-col sm:col-span-3 lg:col-span-2">
       
    {/*    {post?.videoType === "youtube" ? (
       <Link
              href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                post.slug.current
              }`}
            >
         <a className="block flex-shrink-0 relativeT w-full rounded-3xl overflow-hidden aspect-w-3 xl:aspect-w-4 aspect-h-3">
          <ReactPlayer
        url={post?.youtube || "Thumbnail"}
       
        controls
              className="object-cover object-cover absolute inset-0 w-full h-full"
            
        width="100%"
    
      />
           <span className="bg-neutral-900G bg-opacity-30G"></span></a>
           </Link>
    ) : (
      <Link
              href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                post.slug.current
              }`}
            >
         <a className="block flex-shrink-0 relativeT w-full rounded-3xl overflow-hidden aspect-w-3 xl:aspect-w-4 aspect-h-3">
           <video 
                               
                 className="object-cover object-cover absolute inset-0 w-full h-full"
                       
src={post?.videoUrl}
                            />
           <span className="bg-neutral-900G bg-opacity-30G"></span></a>
           </Link>
    )}  */}
           <img 
    sizes="(max-width: 600px) 480px, 800px"
      src="https://images.pexels.com/photos/6843304/pexels-photo-6843304.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
      className="object-cover object-cover absolute inset-0 w-full h-full"
      alt="" />
           
         
         <Link
              href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                post.slug.current
              }`}
            >
         <a className="absolute inset-0" ></a></Link>
         <span className="absolute top-3 inset-x-3">
           <div className="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
            <Link
              href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                post.slug.current
              }`}
            >
             <a className="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100 hover:bg-yellow-800">StreamLab</a>
             </Link>
           </div>
         </span>
         <div className="w-11/12 transform -mt-32 ">
           <div className="px-5 flex items-center space-x-4 ">
             <div className="flex-grow ">
                 
               
             </div>
             <Link
              href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                post.slug.current
              }`}
            >

             <div className="nc-ButtonPlayMusicPlayer select-none ">
               <div className="w-14 h-14 flex items-center justify-center rounded-full bg-neutral-50 text-primary-500 cursor-pointer">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="ml-0.5 w-8 h-8">
                   <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd"></path>
                 </svg>
               </div>
             </div>
             </Link>
           </div>
           <div className="shadow-lg dark:shadow-2xl p-5 mt-5 bg-white darkT:bg-neutral-900 shadow-xl dark:shadow-2xl rounded-3xl rounded-tl-none flex flex-col flex-grow ">
             <h2 className="nc-card-title block sm:text-lg lg:text-xl font-semibold text-neutral-900 darkT:text-neutral-100 ">
              <Link
              href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                post.slug.current
              }`}
            >

             <a className="line-clamp-1" title="Lenovo’s smarter devices ">{post.title} </a>
             </Link>
             </h2>
             <span className="block text-sm text-neutral-500 darkT:text-neutral-400 mt-3 mb-5"><span className="line-clamp-2">Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.</span></span>
             <div className="flex items-end justify-between mt-auto">
               <div className="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
               
               
               
                   
                    {/*<PostMainLikes post={post} />*/}
                 <a className="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs " title="Comments" href="/single/demo-slug#comments">
                   <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
                   </svg><span className="ml-1 text-neutral-900 dark:text-neutral-200">110</span></a>
               </div>
               <div className="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
               
             
                        <button className="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700" title="Save to reading list">
                                             
                              
                                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" className="w-[18px] h-[18px]">
                                                 <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                                               </svg></button>
                       
                  
               
                 
               </div>
             </div>
           </div>
         </div>
       </div>
    
    
    
    
    
    
    
    
      
    </>
  );
}
