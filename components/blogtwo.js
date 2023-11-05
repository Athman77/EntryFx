import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";
 
export default function BlogTwo({
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
      <article className="item global-image post tag-idea tag-art tag-creative tag-people">
        <Link
          href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
            post.slug.current
          }`}
        >
          <a
            className="global-link"
            aria-label="Being unique is better than being perfect"
          ></a>
        </Link>
        {imageProps ? (
          <img
            sizes="(max-width:480px) 400px, 800px"
            src={imageProps.src}
            loading="lazy"
            alt="Being unique is better than being perfect"
          />
        ) : (
          <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
            <PhotoIcon />
          </span>
        )}
        <div className="item-content global-mask is-image">
          <h2 className="item-title">
            <a href="/being-unique-is-better-than-being-perfect/">
              {post.title}
            </a>
          </h2>
          <div className="item-meta global-meta global-pointer">
            <a>{post?.author?.name}</a>
          </div>
          <div className="item-tags global-tags global-pointer is-image">
            <a href="/tag/idea/">Forex Trading</a>
          </div>
        </div>
      </article>
    </>
  );
}
