//
import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import ReactPlayer from "react-player";
import Vid from "@/components/vid";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";

export default function BlogOne({
  post,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  chapter,
  fontWeight,
}) {
  const imageProps = post?.mainImage ? urlForImage(post.mainImage) : null;
  const AuthorimageProps = post?.author?.image ?
    urlForImage(post.author.image) :
    null;
  return (
    <>
    <article className="post-card-bordered">
      <Link
                  href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                    post.slug.current
                  }`}
                >
  <a className="post-img-wrap">
       {imageProps ? (
                     <img loading="lazy"  sizes="(max-width:432px) 400px, (max-width:696px) 600px, (max-width:767px) 671px, 600px" src={imageProps.src} alt="" />
 
                    ) : (
                      <span classNameName="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                        <PhotoIcon />
                      </span>
                    )}

  </a>
  </Link>
  <div className="post-info-wrap">
    <div className="tag-list flex">
      <span className="post-featured" data-tooltip="Featured">
        <svg>
          <use xlink:href="#i-star"></use>
        </svg>
      </span>
      <a href="/tag/technology/" //style="--tag-color:#007FFF"
      ><span>Forex Trading</span></a>
    </div>
    <h2 className="h3 post-title">
      <Link
                  href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                    post.slug.current
                  }`}
                >
      <a>{post.title}</a>
      </Link>
    </h2>
    <div className="post-meta text-s flex align-center">
      <div className="author-avatars flex">
        <a href="/" className="author-image-wrap" title="Biswajit Saha">
                           { post?.author?.image && ( 
       <img src = { AuthorimageProps.src } alt = { post?.author?.name } />
     )
   }
        
        </a>
      </div>
      <div className="author-names">
        <a href="/author/biswajit/">{post?.author?.name}</a>
      </div>
      <span className="read-time">3 min read</span>
      <span className="comment-count">
        <a href="/" className="flex align-center"><svg>
            {/*<use xlink:href="#i-comment"></use>*/}
          </svg>
         
        </a>
      </span>
    </div>
  </div>
</article>
      
      
      
      
      
      
      
    
    </>
  );
}
