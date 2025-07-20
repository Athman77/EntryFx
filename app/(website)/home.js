//
//
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import BlogOne from "@/components/blogone";
import BlogBig from "@/components/blogbig";
import BlogSmall from "@/components/blogsmall";
import BlogTwo from "@/components/blogtwo";
import BlogLast from "@/components/bloglast";
import BlogPages from "@/components/blogpage";
import Subscribe from "@/components/subscribe";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
export default function Post({ posts }) {
  return (
    <>
     <div className="site-wrap">
       
       <main className="main">
           <div className="site-hero home-intro-one">
      <div className="container">
        <div className="hero-content-wrap">
          <h1 className="intro-title text-center">
            Hey, We're <span>Sucharu</span>, Explore our Thoughts, Stories, Ideas.
          </h1>
          <div className="intro-description text-center">
            This Ghost theme is perfect for <strong>magazine, newsletter, professional and personal blog</strong> publishing. Crafted readers in mind. <strong>Customizable features</strong> tailored to your creative vision.
          </div>
          <div className="hero-search flex justify-space-between" data-ghost-search="">
            <span className="hero-search-placeholder">Search post, tags, and authors</span>
            <span className="hero-search-icon"><svg>
                
              </svg></span>
          </div>
        </div>
      </div>
    </div>
    

  <section className="featured-posts">
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          
          {/*** article one ***/}
   {posts.slice(0, 1).map((post, index) => (
              <BlogOne
                key={post._id}
                chapter={posts.length - index}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
        </div>
        
        <div className="col-md-5">
          {/***** article 2 ***/}
          {posts.slice(1, 2).map((post, index) => (
              <BlogTwo
                key={post._id}
                chapter={posts.length - index}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
      </div>
    </div>
  </section>
   
   
   <section className="editors-choice">
  <div className="container">
    <h2 className="section-title">Editor's <span>choice</span></h2>
    <div className="row">
      <div className="col-md-6 card-large-wrap">
        {/**** first bkog **/}
         {posts.slice(1, 2).map((post, index) => (
              <PostList
                key={post._id}
                chapter={posts.length - index}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
      </div>
      <div class="col-md-6">
         {posts.slice(0, 3).map((post, index) => (
              <BlogLast
                key={post._id}
                chapter={posts.length - index}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
        </div>
    </div>
  </div>
 </section>
 
  <section className="post-by-tag">
                <div className="container">
                    <div className="tag-posts-tabs-wrapper">
                              <div className="inner-wrapper">
                            <div className="tag-button-wrap">
                                <button className="btn-tag active">Inspiration</button>
                                
                            </div>
                        </div>
                      
                      {/*****/}
                            <div className="inner-wrapper">
                            <div className="tab-content active">
                              
                              
                                {posts.slice(0, 3).map((post, index) => (
              <BlogPages
                key={post._id}
                chapter={posts.length - index}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}

                  {posts.slice(0, 4).map((post, index) => (
              <BlogSmall
                key={post._id}
                //chapter={posts.length - index}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
                              
                              </div>
                              </div>
                              
                      
                      </div>
                      </div>
                      </section>
                      
                      
                  <section className="latest-posts">
                <div className="container">
                    <h2 className="section-title">
                        Latest <span>Article</span>
                    </h2>
                    <div className="latest-posts-cards-wrap loop-post-cards-wrap grid">
                    {posts.slice(0, 10).map((post, index) => (  
                 <BlogBig
                key={post._id}
                //chapter={posts.length - index}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}     
                      
            </div>
            </div>
            </section>
   
         </main>
       </div>
    </>
  );
}
