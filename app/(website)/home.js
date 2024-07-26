
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

	<div id="header" className="header-wrap header-wrap-home">
	<Navbar />
	 <section className="hero-area">
	      <div className="container-fluid">
	        <div className="row hero-row">
	          <div className="col-lg-6 col-xl-5 offset-xl-1 d-flex align-items-center">
	            <div className="intro-wrap">
	              <h1 className="intro">
	                Hello,
	              </h1>
	              <h2 className="by-line h3">Welcome to my blog.</h2>
	              <div className="hero-form-wrap">
	                <div className="description">
	                  I send posts digest once in a month. No spam ever, I promise.
	                </div>
	                <form className="members-form hero-form" data-members-form="subscribe">
	                  <div className="input-group">
	                    <label for="email" className="sr-only">Email</label>
	                    <input data-members-email="" type="email" className="form-control" placeholder="Your email address" required="" />
	                    <div className="input-group-append">
	                      <button className="submit-btn btn btn-primary" type="submit"><span className="loading-spinner"></span>Subscribe</button>
	                    </div>
	                  </div>
	                  <div className="messages-wrap text-center">
	                    <div className="message-success">
	                      <strong>Great!</strong> Check your inbox and click the link to confirm the subscription.
	                    </div>
	                    <div className="message-error">
	                      <strong>Error!</strong> Please enter a valid email address!
	                    </div>
	                  </div>
	                </form>
	              </div>
	            </div>
	          </div>
	          <div className="col-lg-6 col-xl-5">
	            <div className="headshot-wrap">
	              <img src="images/headshot.png" alt="Head shot portrait" className="headshot" />
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
	
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
