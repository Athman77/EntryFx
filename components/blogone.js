 import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
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
      <article className="item global-image post tag-creative tag-art tag-review tag-hash-item-large tag-hash-dark-version tag-hash-cover-homepage tag-hash-title-top tag-hash-buttons-alternative">
        <Link
          href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
            post.slug.current
          }`}
        >
          <a
            className="global-link"
            aria-label="I work best when my space is filled with inspiration"
          ></a>
        </Link>
        {imageProps ? (
          <img
            src={imageProps.src}
            sizes="(max-width:480px) 400px, 800px"
            loading="lazy"
            alt="I work best when my space is filled with inspiration"
          />
        ) : (
          <span classNameName="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
            <PhotoIcon />
          </span>
        )}
        <div className="item-content global-mask is-top is-image">
          <h2 className="item-title">
            <Link
              href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                post.slug.current
              }`}
            >
              <a>{post.title}</a>
            </Link>
          </h2>
          <div className="item-meta global-meta global-pointer">
            <a></a> <a href="">{post?.author?.name}</a>
          </div>
          <div className="item-tags global-tags global-pointer is-image">
            <a href="/tag/creative/">Islamic</a>
          </div>
        </div>
      </article>
    </>
  );
}
