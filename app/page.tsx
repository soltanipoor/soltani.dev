import Link from "next/link";
import Logo from "./components/Logo";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostCard from "./blog/components/PostCard";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <>
      <h1 className="font-semibold text-xl mb-8">
        Hey, I'm MohammadAli
      </h1>

      <p>
        I'm a frontend developer.
      </p>

      <hr className="my-4 border-stone-700" />

      <h2 className="mb-4 text-lg text-stone-400">Latest posts:</h2>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </>
  );
}
