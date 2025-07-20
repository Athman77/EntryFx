//
//
//

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import Navbar from "@/components/navbar";
import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PostList from "@/components/postlist";
import Subscribe from "@/components/subscribe";
import CategoryLabel from "@/components/blog/category";
import AuthorCard from "@/components/blog/authorCard";
import VideoOne from "@/components/video";

export default function Post(props) {
  const { loading, post } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage ? urlForImage(post?.mainImage) : null;
  const cover = post?.videoCover ? urlForImage(post?.videoCover) : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  return (
    <>
      <div className="site-wrap">
        <main className="main">
          <div className="container single-post">
            <div className="post-header">
              <div className="tag-list flex">
                <span className="post-visibility" data-tooltip="members">
                  <svg>{/* <use xlink:href="#i-lock"></use>*/}</svg>
                </span>
                <a href="/tag/health/">
                  <span>Forex</span>
                </a>
                <a href="/">
                  <span>Investment</span>
                </a>
              </div>
              <h1 className="post-title">{post.title}</h1>
              <div className="custom-excerpt">{/*** excerpt ***/}</div>
              <div className="post-meta text-s flex align-center">
                <div className="author-avatars flex">
                  {AuthorimageProps && (
                    <Link href={`/author/${post.author.slug.current}`}>
                      <a className="author-image-wrap" title="Harini Banerjee">
                        {" "}
                        <img
                          src={AuthorimageProps.src}
                          alt={post?.author?.name}
                        />
                      </a>{" "}
                    </Link>
                  )}

                  <a
                    href="/author/ishan/"
                    className="author-image-wrap"
                    title="Ishan Sharma"
                  >
                    <img
                      src="https://cdn.sanity.io/images/wusctyxy/production/9b43586e288b2a37a69886bf9e8b8994291bf5ef-250x250.webp"
                      alt="Ishan Sharma"
                    />
                  </a>
                </div>
                <div className="author-names">
                  <a href="/author/harini/">Gaucho</a>&
                  <a href="/author/ishan/">Ishan Sharma</a>
                </div>
                <time className="post-date" datetime="2024-05-19">
                  {format(
                    parseISO(post?.publishedAt || post._createdAt),
                    "MMMM dd, yyyy"
                  )}{" "}
                </time>

                <span className="read-time">2 min read</span>
              </div>
            </div>
            {/***** header end ***/}

            <figure className="single-post-img-container">
              {imageProps && (
                <img
                  loading="lazy"
                  sizes="(max-width: 472px) 400px, (max-width: 767px) 600px, (min-width: 768px) 1200px"
                  src={imageProps.src}
                  alt={post.mainImage?.alt || "Thumbnail"}
                />
              )}
            </figure>

            <div className="post-content-area flex">
              <div className="post-content">
                {post.body && <PortableText value={post.body} />}

                {/***** subscribe *****
            <div class="post-membership-cta text-center">
                            <h2 class="title h3">This post is for subscribers only</h2>
                            <div class="button-wrap">
                                <a class="btn btn-flat" href="https://sucharu.gbjsolution.com/signup/">Sign up now</a>
                            </div>
                            <div class="sign-in-cta">
                                Already have an account? <a href="https://sucharu.gbjsolution.com/signin/">Sign in</a>
                            </div>
                        </div>
           {/*******/}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

const MainImage = ({ image }) => {
  return (
    <div className="mb-12 mt-12 ">
      <Image {...urlForImage(image)} alt={image.alt || "Thumbnail"} />
      <figcaption className="text-center ">
        {image.caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {image.caption}
          </span>
        )}
      </figcaption>
    </div>
  );
};
