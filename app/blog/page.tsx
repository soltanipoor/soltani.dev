import { compareDesc } from "date-fns";
import PostCard from "./components/PostCard";
import { allPosts } from "contentlayer/generated";

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </>
  );
}
