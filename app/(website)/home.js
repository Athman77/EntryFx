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
import Navbar from "@/components/navbar";
export default function Post({ posts }) {
  return (
    <>

    <div className="global-cover"></div>
<div className="global-wrap">
  <div className="global-content">
    <Navbar />
      <main class="global-main">
    <div className="hero-section">
   <div className="hero-wrap hero-wrap-center">
     <h1 className="hero-title global-title-medium global-title-offset header-center">
       Explorations in <span>joyful</span> internet business
     </h1>

     <a href="https://forest.quest/trailhead/" className="hero-button global-button">Enter The Forest</a>
   </div>
 </div>
  {/**** hero *****/}

    </main>
    
  </div>
</div>
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
