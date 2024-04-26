
import SearchInput from "@/components/ui/search";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import Label from "@/components/ui/label";
import DateTime from "@/components/ui/time";

export default function Subscribe() {
  return (
    <div class="subscribe-section">
       <div class="subscribe-wrap global-title-wrap">
         <h3 class="global-title-medium text-white">Subscribe to <span>new posts</span></h3>
         <form data-members-form="subscribe" class="subscribe-form">
           <input data-members-email="" type="email" placeholder="Your email address" aria-label="Your email address" required="" />
           <button class="global-button button-clone" type="submit">Subscribe</button><button class="global-button hide" type="submit"  disabled="">Subscribe</button>
         </form>
         <div class="subscribe-alert">
           <small class="alert-loading global-alert">Processing your application</small>
           <small class="alert-success global-alert">Please check your inbox and click the link to confirm your subscription</small>
           <small class="alert-error global-alert">There was an error sending the email</small>
         </div>
       </div>
     </div>
  );
}

