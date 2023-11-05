import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";

export default function BlogPages({
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
      <article class="item global-image post tag-creative tag-art tag-lifestyle">
        <Link
          href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
            post.slug.current
          }`}
        >
          <a
            href="/dance-is-a-mirror-reflecting-the-culture/"
            class="global-link"
            aria-label="Dance is a mirror, reflecting the culture"
          ></a>
        </Link>
        {imageProps ? (
          <img
            sizes="(max-width:480px) 400px, 800px"
            src={imageProps.src}
            loading="lazy"
            alt="Dance is a mirror, reflecting the culture"
          />
        ) : (
          <span classNameName="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
            <PhotoIcon />
          </span>
        )}

        <div class="item-content global-mask is-image">
          <h2 class="item-title">
            <Link
              href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                post.slug.current
              }`}
            >
              <a>{post.title}</a>
            </Link>
          </h2>
          <div class="item-meta global-meta global-pointer">
            <a href="/archive">{post?.author?.name}</a>
          </div>
          <div class="item-tags global-tags global-pointer is-image">
            <a href="">Forex Trading</a>
          </div>
        </div>
      </article>
    </>
  );
}
