
import SearchInput from "@/components/ui/search";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import Label from "@/components/ui/label";
import DateTime from "@/components/ui/time";

export default function Subscribe() {
  return (
      <section className="subscription">
       <div className="container">
         <div className="esub-section-wrap flex align-center justify-space-between">
           <div className="esub-image-wrap">
             <img src="https://cdn.sanity.io/images/wusctyxy/production/8994243db977c32e9af43998d1864c6e28a589ad-602x549.webp" alt="illustration of a girl with envelops in hand" />
           </div>
           <div className="esub-content-wrap">
             <h2 className="h3 esub-title">Subscribe to the newsletter</h2>
             <p className="esub-description">
               Don't miss anything. Get all the latest posts delivered straight to your inbox!
             </p>
             <form data-members-form="subscribe" className="esub-form">
               <div className="input-group">
                 <label for="name" className="sr-only" style="color:black">Name</label>
                 <input data-members-name="" type="text" name="name" id="name" placeholder="Name" />
               </div>
               <div className="input-group">
                 <label for="email" className="sr-only" style="color: black">Email</label>
                 <input data-members-email="" type="email" name="email" id="email" placeholder="Your email address" />
                 <button className="btn esub-submit" type="submit"><span>Subscribe</span></button>
               </div>
               <div className="message-container">
                 <div className="notification success form-notification">
                   <a className="notification-close" href="/" aria-label="close notification"><span className="close-icon"><svg>
                       {/*  <use xlink:href="#i-close"></use>*/}
                       </svg></span></a>
                   <strong>Great!</strong> Check your inbox and click the link to confirm your subscription.
                 </div>
                 <div className="notification error form-notification">
                   <a className="notification-close" href="/" aria-label="close notification"><span className="close-icon"><svg>
                       {/*  <use xlink:href="#i-close"></use>**/}
                       </svg></span></a>
                   <strong>Error!</strong> Please enter a valid email address!
                 </div>
               </div>
             </form>
           </div>
         </div>
       </div>
     </section>
  );
}
