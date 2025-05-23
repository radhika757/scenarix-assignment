"use client";

import Image from "next/image";
import { blogPosts } from "../page";
import { notFound } from "next/navigation";
import { useState } from "react";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  const [loading, setLoading] = useState(true);
  const post = blogPosts.find((b) => b.link.endsWith(params.slug));

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-[#0d1224] text-white py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto bg-[#1a1f37] rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 w-full">
          {loading && (
            <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-lg" />
          )}
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="100vw"
                onLoad={() => setLoading(false)}
              />
            </div>
        </div>
        <div className="p-6 md:p-8">
          <div className="text-sm text-gray-400 mb-2">
            {post.date} • {post.readTime} min read
          </div>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Placeholder for full content */}
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim tincidunt arcu, at fermentum lorem.
            </p>
            <p>
              Mauris non velit nec libero scelerisque ultricies. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae.
            </p>
            <p>
              Vivamus eget elit nec justo sollicitudin sagittis. Donec ac tellus
              non sapien tincidunt dictum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
