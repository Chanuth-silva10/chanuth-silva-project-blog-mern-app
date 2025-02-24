import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">My Project Blogs</h1>
        <p className="text-gray-600 text-xs sm:text-sm dark:text-custom-alu1">
          Hi all. Here you will find a showcase of my projects, each accompanied
          by a brief description with system design. These projects demonstrate
          my skills in web development, software engineering, DevOps
          Engineering, problem-solving, and cloud techniques.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold dark:text-custom-orange hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-indigo-100 dark:bg-teal-500">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center dark:text-custom-orange"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
