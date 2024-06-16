//
//
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PostList from "@/components/postlist";
import Subscribe from "@/components/subscribe";
import CategoryLabel from "@/components/blog/category";
import AuthorCard from "@/components/blog/authorCard";
import Video from "@/components/video";

export default function Post(props) {
  const { loading, post } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage
    ? urlForImage(post?.mainImage)
    : null;
  const cover = post?.videoCover
    ? urlForImage(post?.videoCover)
    : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  return (
    <>



     <div className="bg-[#f8f8f8] text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200 font-body">
    <div className="global-cover"></div>
    {/**** ***/}
     <div className="nc-PageSingle pt-8 lg:pt-16">
      <header className="container rounded-xl">
       <div className="max-w-screen-md mx-auto">
        <div className="nc-SingleHeader ">
         <div className="space-y-5">
          <div className="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
           <a className="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs !px-3 text-red-800 bg-red-100 hover:bg-red-800" href="/archive/the-demo-archive-slug">Highlights</a>
          </div>
          <h1 className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100 max-w-4xl " title="Trending web &amp; landing page designs in 2023">{post.title}</h1>
          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis tempora obcaecati error ipsum voluptatibus sed adipisci ut maiores nesciunt quam.</span>
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5">
           <div className="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
            <a className="flex items-center space-x-2" href="/author/the-demo-author-slug">
             <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full shadow-inner h-10 w-10 sm:h-11 sm:w-11 text-xl ring-1 ring-white dark:ring-neutral-900">
               {AuthorimageProps && 
              <img sizes="100px"    src={AuthorimageProps.src} className="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full" alt="Foulcher Nathanil" />
              }
              <span className="wil-avatar__name">F</span>
             </div></a>
            <div className="ml-3">
             <div className="flex items-center">
              <a className="block font-semibold" href="/author/the-demo-author-slug">        {post.author.name}</a>
             </div>
             <div className="text-xs mt-[6px]">
              <span className="text-neutral-700 dark:text-neutral-300">  <time>
                        {format(
                          parseISO(
                            post?.publishedAt || post._createdAt
                          ),
                          "MMMM dd, yyyy"
                        )}{" "}
                       
                      </time></span>
              <span className="mx-2 font-semibold">·</span>
              <span className="text-neutral-700 dark:text-neutral-300"> {post.estReadingTime || "5"} minutes read</span>
             </div>
            </div>
           </div>
           <div className="nc-SingleMetaAction2 ">
            <div className="flex flex-row space-x-2.5 items-center">
             <div className="nc-PostCardLikeAndComment flex items-center space-x-2 !space-x-2.5">
              <button className="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-4 h-9 text-sm text-neutral-700 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 hover:bg-rose-50 dark:hover:bg-rose-100 hover:text-rose-600 dark:hover:text-rose-500" title="Liked">
               <svg width="24" height="24" fill="none" viewbox="0 0 24 24">
                <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
               </svg><span className="ml-1 text-neutral-900 dark:text-neutral-200">34</span></button>
              <a href="#comments" className="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-4 h-9 text-sm " title="Comments">
               <svg width="24" height="24" fill="none" viewbox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"></path>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"></path>
               </svg><span className="ml-1 text-neutral-900 dark:text-neutral-200">110</span></a>
             </div>
             <div className="px-1">
              <div className="border-l border-neutral-200 dark:border-neutral-700 h-6"></div>
             </div>
             <button className="nc-NcBookmark relative rounded-full flex items-center justify-center h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200" title="Save to reading list">
              <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" stroke-width="1.5" fill="none" stroke="currentColor" className="w-[18px] h-[18px]">
               <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
              </svg></button>
             <div className="relative inline-block text-left" data-headlessui-state="">
              <button className="flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full" title="More" id="headlessui-menu-button-:ra:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
               </svg></button>
             </div>
             <div>
              <div className="relative inline-block text-left" data-headlessui-state="">
               <button className="text-neutral-500 dark:text-neutral-400 flex items-center justify-center rounded-full  h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 focus:outline-none" title="More" id="headlessui-menu-button-:rb:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="h-5 w-5">
                 <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"></path>
                </svg></button>
              </div>
              <div className="nc-NcModal"></div>
              <div className="nc-NcModal"></div>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </header>
      <div className="container my-10 sm:my-12">
     {/*  <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg" width="1260" height="750" alt="single" sizes="(max-width: 1024px) 100vw, 1280px" className="w-full rounded-xl" />*/}
       {post.videoType === "upload" ? (
                    <video
                      className="vida"
                      id="my-video"
                      controls
                      poster={cover?.src}
                      // autoPlay
                      playsInline>
                      <source
                        type="video/mp4"
                        data-quality="720p"
                        title="720p"
                        label="720p"
                        res="720"
                        size="720"
                        src={post?.videoUrl}
                      />
                    </video>
                  ) : (
                    <Video id={post.youtube || "Thumbnail"} />
                  )}
      </div>
     </div>
      <div class="container mt-10">
      <div class="relative">
       <div class="nc-SingleContent space-y-10">
        <div id="single-entry-content" class="prose lg:prose-lg !max-w-screen-md mx-auto dark:prose-invert">
         {post.body && <PortableText value={post.body} />}
         </div>
                    <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div> <
div className = "max-w-screen-md mx-auto " >
<div className="nc-SingleAuthor flex">
          <a href="/author/the-demo-author-slug">
           <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-12 w-12 text-lg sm:text-xl sm:h-24 sm:w-24 ring-1 ring-white dark:ring-neutral-900">
           {AuthorimageProps && 
            <img sizes="100px" src={AuthorimageProps.src}  className="absolute inset-0 w-full h-full object-cover object-cover absolute inset-0 w-full h-full" alt="Birrell Chariot" />}
            <span className="wil-avatar__name">B</span>
           </div></a>
          <div className="flex flex-col ml-3 max-w-lg sm:ml-5">
           <span className="text-xs text-neutral-400 uppercase tracking-wider">WRITTEN BY</span>
           <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200"><a href="/author/the-demo-author-slug">{post.author.name}</a></h2>
           <span className="block mt-1 text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
           {post.author.bio && <PortableText value={post.author.bio} />}
           <a className="text-primary-6000 font-medium ml-1" href="/author/the-demo-author-slug">Read more</a></span>
          </div>
         </div> 
         </div>
    
         </div>
         </div>
         </div>
         
     {/*****end***/}
   </div>

    
    
         
                        <Header
        account="css-ta1yzo"
        tv="css-ta1yzo"
        explore="css-ta1yzo"
        home="css-ta1yzo"
        search="css-ta1yzo"
      />
      {/***** end *****/}
    
        
    </>
  );
}

const MainImage = ({ image }) => {
  return (
    <div className="mb-12 mt-12 ">
      <Image {...urlForImage(image)} alt={image.alt || "Thumbnail"} />
      <figcaption className="text-center ">
        {image.caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {image.caption}
          </span>
        )}
      </figcaption>
    </div>
  );
};
