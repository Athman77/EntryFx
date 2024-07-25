//

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
  <nav className="mobile main-nav hide-on-desktop-lg">
    <ul className="menu">
      <li className=" nav-home current-menu-item"><a href="https://ghost.estudiopatagon.com/groovy/">Home</a></li>
      <li className=" nav-membership"><a href="https://ghost.estudiopatagon.com/groovy/membership/">Membership</a></li>
      <li className=" nav-style-guide"><a href="https://ghost.estudiopatagon.com/groovy/style-guide/">Style Guide ✨</a></li>
      <li className=" nav-tag"><a href="https://ghost.estudiopatagon.com/groovy/tag/getting-started/">#Tag</a></li>

      <li className="nav-more menu-item-has-children">
        <a href="javascript:void(0)">More</a>
        <ul className="sub-menu border-left-effect">
          <li><a href="https://ghost.estudiopatagon.com/groovy/masonry/">Home - Masonry</a></li>
          <li><a href="https://ghost.estudiopatagon.com/groovy/standard/">Vertical Post (default)</a></li>
          <li><a href="https://ghost.estudiopatagon.com/groovy/classNameic/">classNameic Post</a></li>
          <li><a href="https://ghost.estudiopatagon.com/groovy/fullwidth/">Fullwidth Post</a></li>
          <li><a href="https://ghost.estudiopatagon.com/groovy/nosidebar/">No Sidebar Post</a></li>
          <li><a href="https://ghost.estudiopatagon.com/groovy/apps-integrations/">Text Only Post</a></li>
          <li><a href="https://ghost.estudiopatagon.com/groovy/authors/">Meet the Authors</a></li>
          <li><a href="https://ghost.estudiopatagon.com/groovy/author/jonathan-doe/">Single Author Page</a></li>
          <li><a href="https://ghost.estudiopatagon.com/groovy/404/">404 Page</a></li>
          <li><a href="https://themes.estudiopatagon.com/selector/groovy-ghost/">Home Demos 🚀</a></li>
        </ul>
      </li>

      <li className="hide-on-mobile hide-on-tablet hide-on-desktop-sm"><a href="javascript:void(0)" data-ghost-search=""><i className="fa fa-search"></i></a></li>

      <li className="nav-login"><a href="https://ghost.estudiopatagon.com/groovy/signin" className="login epcl-button dark" data-title="Sign In">Sign In</a></li>
    </ul>


  </nav>

    
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
