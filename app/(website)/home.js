//.
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
import Navbar from "@/components/navbar";
export default function Post({ posts }) {
  return (
    <>

	<div id="wrapper" className="grid-container grid-large grid-parent">
	
	  <header id="header" className="grid-20">
	  
	    <div className="menu-mobile">
	      <i className="fa fa-bars"></i>
	    </div>
	  
	    
	    <div className="menu-wrapper">
	  
	      <div className="">
	  
	        <div className="logo"><a href="https://ghost.estudiopatagon.com/airo"><img src="images/logo-airo.png" alt="Airo" /></a></div>
	  
	  
	        
	        <nav className="main-nav grid-container grid-parent" role="navigation">
	  
	          <ul id="menu-header" className="menu">
	            <li className="nav-home current-menu-item"><a href="https://ghost.estudiopatagon.com/airo/"><i className="remixicon remixicon-file-list-line"></i> Home</a></li>
	            <li className="nav-classNameic-post"><a href="https://ghost.estudiopatagon.com/airo/classNameic/"><i className="remixicon remixicon-file-list-line"></i> classNameic Post</a></li>
	            <li className="nav-fullwidth-post"><a href="https://ghost.estudiopatagon.com/airo/fullwidth/"><i className="remixicon remixicon-file-list-line"></i> Fullwidth Post</a></li>
	            <li className="nav-tag"><a href="https://ghost.estudiopatagon.com/airo/tag/dji/"><i className="remixicon remixicon-file-list-line"></i> Tag</a></li>
	            <li className="nav-author"><a href="https://ghost.estudiopatagon.com/airo/author/jane-robertson/"><i className="remixicon remixicon-file-list-line"></i> Author</a></li>
	            <li className="nav-features"><a href="https://ghost.estudiopatagon.com/airo/style-guide/"><i className="remixicon remixicon-file-list-line"></i> Features</a></li>
	            <li className="nav-subscribe"><a href="https://ghost.estudiopatagon.com/airo/subscribe/"><i className="remixicon remixicon-file-list-line"></i> Subscribe</a></li>
	          </ul>
	  
	        </nav>
	       
	  
	        <form action="" method="get" className="hide-on-tablet hide-on-mobile hide-on-desktop-sm search-form">
	          <input type="text" name="s" value="" className="search-field" placeholder="Enter your search..." required="" />
	          <button type="submit" className="submit"><i className="remixicon-search-line"></i></button>
	        </form>
	  
	        <div className="clear"></div>
	  
	      </div>
	  
	      <div className="clear"></div>
	  
	    </div>
	    
	  
	    <div className="clear"></div>
	  
	    <p className="copyright hide-on-mobile hide-on-tablet">Airo © 2019<br />Published with <a href="https://ghost.org/" target="_blank">Ghost</a></p>
	  
	  </header>
	  
	  
  </div>
   
      {/* <!------ post card------>*/}
  {/*  <Header
        account="css-ta1yzo"
        tv="css-ta1yzo"
        explore="css-ta1yzo"
        home="css-t8d8hp"
        search="css-ta1yzo"
      />*/}
      {/***** end *****/}
    </>
  );
}
