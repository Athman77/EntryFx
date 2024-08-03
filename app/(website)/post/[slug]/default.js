//
/**/

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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
import Video from "@/components/video";

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
      <div id="header" className="header-wrap">
        <Navbar />
      </div>{" "}
      <main className="main-content-area">
        <div className="site-content-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="post-wrap">
                  <article className="post-single post tag-lifestyle tag-travel tag-education">
                    <div className="post-header bg-post d-flex has-image">
                      <div className="header-content-wrap">
                        <div className="primary-tag text-center">
                          <a href="/tag/lifestyle/">Lifestyle</a>
                        </div>
                        <h1 className="post-title text-center">{post.title}</h1>
                        <div className="post-meta mx-auto d-flex justify-content-between">
                          <div className="reading-time">3 min read</div>
                          <time className="date" datetime="2019-07-22 07:14">
                            {format(
                              parseISO(post?.publishedAt || post._createdAt),
                              "MMMM dd, yyyy"
                            )}{" "}
                          </time>
                        </div>
                      </div>
                    </div>
                    <div className="post-content">
                      {post.body && <PortableText value={post.body} />}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
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
