//.

import PostList from "@/components/postlist";
import Pagination from "@/components/blog/pagination";
import BlogOne from "@/components/blogone";
import BlogBig from "@/components/blogbig";
import BlogTwo from "@/components/blogtwo";
import Footer from "@/components/footer";
import Header from "@/components/header";
//import PostList from "@/components/postlist";
import Subscribe from "@/components/subscribe";
import Navbar from "@/components/navbar";
import { getPaginatedPosts } from "@/lib/sanity/client";

export default async function Post({ searchParams }) {
  // Fetch the current page from the query parameters, defaulting to 1 if it doesn't exist
  const page = searchParams.page;
  const pageIndex = parseInt(page, 10) || 1;

  // Set the number of posts to be displayed per page
  const POSTS_PER_PAGE = 7;

  // Define the parameters for fetching posts based on the current page
  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  };

  const posts = await getPaginatedPosts(params);

  // Check if the current page is the first or the last
  const isFirstPage = pageIndex < 2;
  const isLastPage = posts.length < POSTS_PER_PAGE;

  return (
    <>
      <main className="main">
    <div className="container">
  <div className="archive-cover flex align-center">
    <div className="tag-image-wrap">
      <img className="cover-image lazy" loading="lazy" src="https://cdn.sanity.io/images/wusctyxy/production/720d11cb3a112908533d81c10d9bc3dc455bcd4f-661x691.png" alt="tag Inspiration: feature image" />
    </div>
    
    <div className="cover-content-wrapper">
      <div className="tag-info-wrap text-center">
        <h1 className="tag-name h3">Inspiration</h1>
        <div className="tag-meta flex align-center justify-center">
          <span className="post-count">9 posts</span>
        </div>
        <div className="tag-description">
          Spark for creativity, motivation, and dreams
        </div>
      </div>
    </div>
  </div>
</div>

<section className="latest-posts">
  <div className="container">
    <div className="latest-posts-cards-wrap loop-post-cards-wrap grid">
      
       {
   posts &&
     posts.map((post, index) => ( <
       BlogBig key = { post._id } post = { post }
       //  chapter={posts.length - index}
       aspect = "landscape"
       preloadImage = { true }
       />
     ))
 }
    </div>
  </div>
</section>
  </main>
    
    
    
    
    
    
      
           
           
        {posts && posts?.length === 0 && (
          <div className="flex h-40 items-center justify-center">
            <span className="text-lg text-gray-500">End of the result!</span>
          </div>
        )}
    
         <div className="mb-5">
              <Pagination
                pageIndex={pageIndex}
                isFirstPage={isFirstPage}
                isLastPage={isLastPage}
                tag="archive"
              />
            </div>
    
    
     
    
    
    
    
    
    
    
     

    

   
      
      {/***** end *****/}
    </>
  );
}
