import BlogPostCard from "../components/BlogPostCard";
import { blogPosts } from "../data/dummy-data";

interface BlogPostCardProps {
  post: {
    title: string;
    excerpt: string;
    date: string;
    readTime: number;
    image: string;
    link: string;
  };
}

export default function Blog({ post }: BlogPostCardProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Blog</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Latest insights and updates about AI art generation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

