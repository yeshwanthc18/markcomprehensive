"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import ScrollTriggerComponent from "@/components/animations/scroll-trigger";
import ButtonPrimary from "../layout/Button";
import axios from "axios";

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  timestamp: string;
  username: string;
}

export default function InstagramPosts() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get("/api/instagram"); 
        setPosts(response.data.slice(0, 6)); 
      } catch (err) {
        console.error("Failed to fetch Instagram posts:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (loading) return <p className="text-center py-20">Loading Instagram posts...</p>;
  if (error) return <p className="text-center py-20 text-red-500">Failed to load Instagram posts.</p>;

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Instagram <span className="text-[#01adff]">Posts</span>
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
            </div>
            <p className="mt-6 text-lg md:text-xl text-black max-w-2xl mx-auto">
              Latest posts from Instagram showcasing our projects and work highlights
            </p>
          </div>
        </ScrollTriggerComponent>

        <ScrollTriggerComponent animation="scaleIn" stagger={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="group relative bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.media_url || "/placeholder.svg"} // fallback if media_url is missing
                    alt={post.caption || "Instagram Post"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <span className="absolute top-4 left-4 bg-[#01adff] text-white text-xs font-semibold px-2 py-1">
                    Instagram
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-between h-[calc(100%-16rem)]">
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{post.caption}</p>

                  <div className="flex flex-col gap-3 mt-auto">
                    <div className="flex justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.username}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.timestamp).toLocaleDateString()}
                      </div>
                    </div>

                    <Link
                      href={`https://www.instagram.com/${post.username}/`}
                      target="_blank"
                      className="flex items-center justify-center mt-2 px-4 py-2 border border-[#01adff] text-[#01adff] font-semibold text-sm transition-all duration-300 hover:bg-[#01adff] hover:text-white"
                    >
                      View Post <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollTriggerComponent>

        <div className="text-center mt-12 flex justify-center">
          <ButtonPrimary>
            <Link
              href="https://www.instagram.com/yeshwanthc18/"
              target="_blank"
              className="flex items-center justify-center"
            >
              View All Posts <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
}
