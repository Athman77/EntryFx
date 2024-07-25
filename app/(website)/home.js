

import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import BlogOne from "@/components/blogone";
import BlogTwo from "@/components/blogtwo";
import BlogLast from "@/components/bloglast";
import BlogPages from "@/components/blogpage";
import Subscribe from "@/components/subscribe";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function Post({ posts }) {
  return (
    <>
       <div className="menu-overlay hide-on-desktop-lg"></div>
  
    
    <div id="wrapper">
      <main id="home" className="main grid-container">
  
      
        <div className="content-wrapper">
          
          
    {/*-- start: .intro-text --*/}
              <div className="intro-text textcenter section np-bottom grid-container grid-medium np-mobile np-tablet">
                <h1 className="title ularge">Welcome to Wavy, a fast 🚀and modern theme fully compatible with Ghost!</h1>
                <p>Rich right us federal alone degree issue professor. Form crime tough effect least store day. Deep range they modern.</p>
                <p><a href="https://ghost.estudiopatagon.com/wavy/membership" className="epcl-button gradient-button wave-button icon"><svg className="icon large">
                      <use xlink:href="#credit-icon"></use>
                    </svg> View Plans</a></p>
              </div>
              {/******* into ***/}
        </div>
      </main>
    </div>
              
 

      {/*  <div className="bg-[#f8f8f8] text-base darkG:bg-neutral-900/95G text-neutral-900 dark:text-neutral-200 font-body">
         <div className="container ">
   <div className="nc-SectionMagazine8 relative py-16 lg:py-28">
     <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-14 text-neutral-900 darkG:text-neutral-50">
       <div className="max-w-2xl">
         <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Listen to podcasts live</h2>
         <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 darkG:text-neutral-400">Click on music icon and enjoy music or podcast</span>
       </div>
     </div>

     <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 md:gap-8">
       {posts.slice(0, 10).map((post) => (
                  <BlogOne
                    key={post._id}
                    post={post}
                    aspect="landscape"
                    preloadImage={true}
                  />
                ))}
                </div>
                </div>
                </div>
                </div>
                
      */}

      {/* <!------ post card------>*/}
      <Header
        account="css-ta1yzo"
        tv="css-ta1yzo"
        explore="css-ta1yzo"
        home="css-t8d8hp"
        search="css-ta1yzo"
      />
      {/***** end *****/}
    </>
  );
}
