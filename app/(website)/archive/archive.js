
import PostList from "@/components/postlist";
import Pagination from "@/components/blog/pagination";
import BlogOne from "@/components/blogone";
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
    
       <div id="header" className="header-wrap header-wrap-home">
            <Navbar />
            </div>
            <main className="main-content-area">
                <div className="site-content-wrap">
                
                 <div className="container-fluid">
                        <div className="cover-wrap bg  has-image" data-animation="fade-in">
                          <div className="cover-inner text-center">
                            <h1 className="name d-inline-flex">Our Posts</h1>
                            <div className="post-count">{posts.length}</div>
                          
                          </div>
                        </div>
                      </div>
                {/*********/}
                
                 <div className="post-list">
                           {posts &&
                  posts.map((post, index) => (
                    <BlogOne
                      key={post._id}
                      post={post}
                      chapter={posts.length - index}
                      aspect="landscape"
                      preloadImage={true}
                    />
                  ))}
                          </div>
                
                </div>
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
    
    
     <Footer />
    
    
    
    
    
    
    
     

    

   
      
      {/***** end *****/}
    </>
  );
}
