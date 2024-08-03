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
  fontWeight,
}) {
  const imageProps = post?.mainImage ? urlForImage(post.mainImage) : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;
  return (
    <>
      <article className="post tag-lifestyle tag-travel tag-education fade-in-up">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="post-thumbnail-wrap">
                <a
                  href="/riding-bicycle-is-environment-friendly-and-good-for-health/"
                  aria-label="Riding bicycle is environment friendly and good for health"
                  tabindex="-1"
                >
                  {imageProps ? (
                      <img
                        loading="lazy"
                        decoding="async"
                      
                    
                        src={imageProps.src}
                         className="post-thumbnail"
                        alt=""
                        
                      />
                    ) : (
                      <span classNameName="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                        <PhotoIcon />
                      </span>
                    )}

                  {/* <img  src="" alt="Riding bicycle is environment friendly and good for health" />
                   */}
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="post-container">
                <time className="date" datetime="2019-07-22 07:14">
                  {format(
                    parseISO(post?.publishedAt || post._createdAt),
                    "MMMM dd, yyyy"
                  )}{" "}
                </time>
                <span className="watermark" aria-hidden="true"></span>
                <div className="primary-tag">
                  <a href="/tag/lifestyle/">Lifestyle</a>
                </div>
                <h2 className="post-title h1">
                  <a href="/riding-bicycle-is-environment-friendly-and-good-for-health/">
                    {post.title}
                  </a>
                </h2>
                <div className="separetor"></div>
                <div className="reading-time">3 min read</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
