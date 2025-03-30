import Navbar from "@/components/navbar";
import PostList from "@/components/postlist";
import Pagination from "@/components/blog/pagination";
import BlogOne from "@/components/blogone";
import BlogTwo from "@/components/blogtwo";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Subscribe from "@/components/subscribe";
import { getPaginatedPosts } from "@/lib/sanity/client";

export default async function Post({ searchParams }) {
  // Fetch the current page from the query parameters, defaulting to 1 if it doesn't exist
  
  const page = searchParams.page;
  const search = searchParams.search;
  const pageIndex = parseInt(page, 10) || 1;

  // Set the number of posts to be displayed per page
  const POSTS_PER_PAGE = 114;

  // Define the parameters for fetching posts based on the current page
  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  };

  const posts = await getPaginatedPosts(params);
 // const router = useRouter();
  

  
// const { q } = router.q;
  const filteredProducts = posts?.filter((val) => {
    if (search === "") {
      return val;
    } else if (val?.mainImage?.alt?.toLowerCase().includes(search?.toLowerCase())) {
      return val;
    }
  });

  // Check if the current page is the first or the last
  const isFirstPage = pageIndex < 2;
  const isLastPage = filteredProducts.length < POSTS_PER_PAGE;

  
  return (
    <>
      <div id="header" className="header-wrap">
        <Navbar />
      </div>
      <main className="main-content-area">
        <div className="site-content-wrap">
          <div className="container-fluid">
            <div className="cover-wrap has-image">
              <div className="cover-inner text-center">
                <h1 className="name d-inline-flex">Quran</h1>
                <div className="post-count">Posts</div>
                <div className="description">
                  Experience the guidance, wisdom, and peace of Allah’s words. Start your journey today.
                </div>
              </div>
            </div>
          </div>

          <div className="post-list">
            {filteredProducts && filteredProducts.length === 0 && (
              <div className="flex h-40 items-center justify-center">
                <span className="text-lg text-gray-500">Nothing Found!</span>
              </div>
            )}

            {filteredProducts &&
              filteredProducts.slice(0, 1).map((post) => (
                <BlogOne
                  key={post._id}
                  post={post}
                  aspect="landscape"
                  preloadImage={true}
                />
              ))}
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col text-center">
                    {/*<Pagination
                  pageIndex={pageIndex}
                  isFirstPage={isFirstPage}
                  isLastPage={isLastPage}
                  tag="archive"
                />*/}
                <div className="d-none end-message js-end-message">
                  That's all. No more posts to display.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
