import { getPosts } from "@/app/actions/posts";
import PostsClient from "./PostsClient";

export const dynamic = "force-dynamic";

export default async function AdminPostsPage() {
  const { posts } = await getPosts();
  return <PostsClient initialPosts={posts} />;
}
