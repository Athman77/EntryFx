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

  // Check if the current page is the first or the last
  const isFirstPage = pageIndex < 2;
  const isLastPage = posts.length < POSTS_PER_PAGE;

  return (
    <>
  <div className="global-cover"></div>

      <div className="global-wrap">
        <div className="global-content">
          <Header />
    

    
 <main className="global-main">
 <div className="custom-archive-section">
 <h1 id="post-title" className="custom-archive-title global-title-big">Explore our <span>tags</span></h1>
 <div className="custom-archive-wrap loop-wrap">
   <div className="custom-archive-item">
     <a href="/tag/creative/" className="global-image">
       <img src="images/veronika-jorjobert-UU62Fwb5VxQ-unsplash-1.jpg" loading="lazy" alt="Creative" /> </a>
     <h2><a href="/tag/creative/">Creative</a></h2>
     <span>10 posts</span>
   </div>
   <div className="custom-archive-item">
     <a href="/tag/art/" className="global-image">
       <img src="images/allec-gomes-6J2zxXbjcxo-unsplash.jpg" loading="lazy" alt="Art" /> </a>
     <h2><a href="/tag/art/">Art</a></h2>
     <span>10 posts</span>
   </div>
   <div className="custom-archive-item">
     <a href="/tag/lifestyle/" className="global-image">
       <img src="images/laura-adai-eHdRLiazcww-unsplash.jpg" loading="lazy" alt="Lifestyle" /> </a>
     <h2><a href="/tag/lifestyle/">Lifestyle</a></h2>
     <span>9 posts</span>
   </div>
   <h3 className="custom-archive-heading global-title-small"><span>See also</span></h3>
   <div className="custom-archive-item bottom">
     <a href="/tag/review/" className="global-image">
       <img src="images/photo-1612599316791-451087c7fe15.jpeg" loading="lazy" alt="Review" /> </a>
     <h2><a href="/tag/review/">Review</a></h2>
     <span>6 posts</span>
   </div>
   <div className="custom-archive-item bottom">
     <a href="/tag/people/" className="global-image">
       <img src="images/photo-1585007600263-71228e40c8d1.jpeg" loading="lazy" alt="People" /> </a>
     <h2><a href="/tag/people/">People</a></h2>
     <span>5 posts</span>
   </div>
   <div className="custom-archive-item bottom">
     <a href="/tag/idea/" className="global-image">
       <img src="images/photo-1611095564350-2cbe940a8d99.jpeg" loading="lazy" alt="Idea" /> </a>
     <h2><a href="/tag/idea/">Idea</a></h2>
     <span>4 posts</span>
   </div>
 </div>
</div>
          </main>
          <Footer />
                 </div>
                          </div>
    </>
  );
}
