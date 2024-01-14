import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
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

export default function Post(props) {
  const { loading, post } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage
    ? urlForImage(post?.mainImage)
    : null;
const cover = post?.videoCover
    ? urlForImage(post?.videoCover)
    : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  return (
    <>
               <div className="global-cover"></div>

      <div className="global-wrap">
        <div className="global-content">
          <Header />

          <main className="global-main">
            <progress className="post-progress"></progress>

            <article className="post-section">
              <div className="post-header post-full-image">
                <div className="post-header-content">
                  <div className="post-tags global-tags">
                    <a href="">Guidance</a>
                    <a href="">Reminder</a>
                  </div>
                  <h1
                    id="post-title"
                    className="post-title global-title-big global-title-offset"
                  >
                    {" "}
                    {post.title}
                  </h1>
                  <div className="post-authors global-authors">
                    <div className="post-author-item global-author-item global-image is-image">
                      <a
                        href="/author/victoria/"
                        className="global-link"
                        aria-label="Victoria West"
                      ></a>
                      {AuthorimageProps && (
                        <img
                          src={AuthorimageProps.src}
                          loading="lazy"
                          alt="Victoria West"
                        />
                      )}
                    </div>
                    <div className="post-author-item global-author-item global-image is-image is-last">
                      <a
                        href="/author/hannah/"
                        className="global-link"
                        aria-label="Hannah Weastell"
                      ></a>
                      <img
                        src="https://cdn.sanity.io/images/cwzkjmps/production/f271a0e60dc0ec7a41a2992e5ce28a4bb65c0ced-400x400.jpg"
                        loading="lazy"
                        alt="Hannah Weastell"
                      />
                    </div>
                    <div className="post-meta global-meta">
                      <a href="/author/victoria/"></a>
                      <a href="/author/hannah/"> {post.author.name}</a>
                      <time>
                        {format(
                          parseISO(post?.publishedAt || post._createdAt),
                          "MMMM dd, yyyy"
                        )}{" "}
                        · {post.estReadingTime || "5"} minutes read
                      </time>
                    </div>
                  </div>
                </div>
                <figure className="post-image ">
                {post.videoType === "upload" ? (
                            <video
                              className="vida"
                              id="my-video"
                              controls
                              poster={cover?.src}
                    
                              // autoPlay
                              playsInline>
                              <source
                              type="video/mp4"
                              data-quality="720p"
                              title="720p"
                              label="720p"
                              res="720"
                              size="720"
                                src={post?.videoUrl}
                               
                              />
                            </video>
                          ) : (
                            <iframe
                              width="100%"
                              height="500px"
                              className="vida"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullscreen
                              title="YouTube video player"
                              frameborder="0"
                              src={`https://www.youtube.com/embed/${post?.youtube}?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1`}
                             
                              
                            ></iframe>
                              )}
                 
                </figure>
              </div>

              <div className="post-content">
                {post.body && <PortableText value={post.body} />}
              </div>
            </article>

            <div className="special-section">
              <div className="global-title-wrap">
                <h3 className="global-title-medium">
                  Explore More<span>Blogs</span>
                </h3>
                <Link href="/archive">
                  <a>
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.185 6.08c1.485 1.585 2.733 2.8 3.813 3.643 1.045.843 2.057 1.45 3.002 1.855v.743c-1.08.506-2.16 1.18-3.171 2.024-1.012.81-2.227 1.99-3.644 3.576h-1.282c1.046-2.193 2.26-4.217 3.374-5.432H.014v-.978h19.263a31.274 31.274 0 01-1.855-2.699c-.338-.506-.844-1.417-1.485-2.733h1.248z"></path>
                    </svg>
                  </a>
                </Link>
              </div>

              <div class="special-wrap">
                {/* {templateBlog.slice(0, 4).map((post) => (
                      <PostList
                        key={post._id}
                        post={post}
                        aspect="landscape"
                        preloadImage={true}
                      />
                    ))}*/}
              </div>
            </div>

            <Subscribe />
          </main>
          <Footer />
        </div>
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
