import PostList from "@/components/postlist";
import Pagination from "@/components/blog/pagination";
import BlogOne from "@/components/blogone";
import BlogTwo from "@/components/blogtwo";
import Footer from "@/components/footer";
import Header from "@/components/header";
//import PostList from "@/components/postlist";
import Subscribe from "@/components/subscribe";
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
    limit: pageIndex * POSTS_PER_PAGE
  };

  const posts = await getPaginatedPosts(params);
  const quran = posts.filter(post => post.videoType === 'youtube');
 
  // Check if the current page is the first or the last
  const isFirstPage = pageIndex < 2;
  const isLastPage = quran.length < POSTS_PER_PAGE;

  return (
    <>
  <div className="global-cover"></div>

      <div className="global-wrap">
        <div className="global-content">
          <Header />
    

    
 <main className="global-main">
            <div className="archive-section">
              <h1 className="global-title-large">Latest</h1>
              <span className="archive-counter">Articles & News</span>
              <p className="archive-description">
        
              </p>
            </div>

    
      {quran && quran?.length === 0 && (
        <div className="flex h-40 items-center justify-center">
          <span className="text-lg text-gray-500">
            End of the result!
          </span>
        </div>
      )}


       {/** ==.hhd ==**/}
            <div className="loop-section">
              <div className="loop-wrap">
                {/*** blog **/}
                {quran && quran?.length === 0 && (
                  <div className="flex h-40 items-center justify-center">
                    <span className="text-lg text-gray-500">
                      End of the result!
                    </span>
                  </div>
                )}
               {quran.slice(0, 1).map((post) => (
                      <BlogOne
                        key={post._id}
                        post={post}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    ))}
                    {quran.slice(1, 5000).map((post) => (
                      <BlogTwo
                        key={post._id}
                        post={post}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    ))}
              
              </div>
            </div>


      

      <Pagination
        pageIndex={pageIndex}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
                     <Subscribe />
          </main>
          <Footer />
                 </div>
                          </div>
    </>
  );
}
