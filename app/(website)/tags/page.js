import Tags from "./archive";

import { getAllPosts } from "@/lib/sanity/client";
export const dynamic = "force-dynamic";

export const runtime = "edge";
export default async function IndexPage() {
  const posts = await getAllPosts();
  return <Tags posts={posts} />;
}


// export const revalidate = 60;
