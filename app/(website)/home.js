
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
	  
	  <div className="right-content grid-80">
	  <main id="home" className="main grid-container" role="main">
	  
	         <div className="">
	           
	             {/***  <!-- start: .latest-post --> ***/}
	               <div className="latest-post section">
	           
	            <div class="right grid-60">
	                                <div class="bg-white">
	                                    <h2 class="title small no-margin">Latest Article</h2>
	                                    
	                             <article className="large-article index-0  post tag-reviews tag-hash-import-2023-11-22-03-40">
	                                                <h1 className="title medium"><a href="/airo/classNameic/">What are airports going to do about drones in the future?</a></h1>
	                               
	                                                <div className="featured-image hover-effect grid-50 tablet-grid-50 grid-parent">
	                                                  <a href="/airo/classNameic/" className="thumb cover"
	                                         //style="background: url(images/samuel-schwendener-tF2rITQWkNY-unsplash.jpg) no-repeat;"
	                                         ></a>
	                                                </div>
	                               
	                                                <div className="excerpt grid-50 tablet-grid-50 grid-parent">
	                                                  For the second time in less than a month, flights at a major London airport have been...
	                                                  <div className="clear"></div>
	                                                  <div className="meta">
	                                                    <a href="/airo/author/estudio/" className="author-meta" title="Estudio Patagon">
	                                                      <span className="author-image cover"
	                                          //style="background-image: url( https://www.gravatar.com/avatar/26263d3127afcbc9393ba1d98bb510f7?s=250&amp;r=x&amp;d=mp );"
	                                          ></span>
	                                                      <span className="author-name">Estudio Patagon</span>
	                                                    </a>
	                                                    <a href="/airo/classNameic/#comments" className="comments meta-info alignright"><i className="remixicon remixicon-chat-2-line"></i> <span className="disqus-comment-count" data-disqus-url="https://ghost.estudiopatagon.com/airo/airo/classNameic/" data-disqus-identifier="5d39fcde48d02a0592b82fb5">0</span></a>
	                                                    <div className="clear"></div>
	                                                  </div>
	                                                  <a href="/airo/classNameic/" className="button small">Read More</a>
	                                                </div>
	                               
	                                                <div className="clear"></div>
	                               
	                                              </article>        
	                  </div> 
	                  </div>
	               </div>
	               {/******* end ****/}
	         </div>
	         
	           
	           
	         
	 
	  </main>
	  </div>
	  
	  
	  
	  
	  
	  
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
