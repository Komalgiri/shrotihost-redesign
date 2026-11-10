"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Clock, Calendar, ArrowRight, Tag, BookOpen } from "lucide-react";
import type { BlogPost } from "@/data/blog-articles";

export const BlogDirectory: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Hosting", "WordPress", "Domains", "Infrastructure", "Development"];

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return posts.find((p) => p.featured) || posts[0];
  }, [posts]);

  return (
    <div className="space-y-12">
      {/* 1. FEATURED ARTICLE SPOTLIGHT (When no active search filter) */}
      {!searchQuery && selectedCategory === "All" && featuredPost && (
        <div className="bg-[#111827] rounded-2xl p-6 sm:p-10 border border-white/10 shadow-card relative overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/30 px-3 py-1 rounded-full uppercase tracking-wider">
                  Featured Guide
                </span>
                <span className="text-xs text-[#9CA3AF] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#06B6D4]" />
                  {featuredPost.readTime}
                </span>
                <span className="text-xs text-[#9CA3AF] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#9CA3AF]" />
                  {featuredPost.publishDate}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F9FAFB] tracking-tight leading-tight">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="hover:text-[#06B6D4] transition-colors"
                >
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#06B6D4] hover:text-[#22D3EE] transition-colors"
                >
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex w-44 h-44 rounded-2xl bg-[#0B0F19] border border-white/10 items-center justify-center text-[#4F46E5] shrink-0">
              <BookOpen className="w-16 h-16 stroke-[1.2]" />
            </div>
          </div>
        </div>
      )}

      {/* 2. SEARCH & CATEGORY FILTER CONTROLS */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? "bg-[#4F46E5] text-white shadow-sm"
                  : "bg-[#111827] border border-white/10 text-[#9CA3AF] hover:text-[#F9FAFB] hover:border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search guides & tutorials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#111827] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-xs sm:text-sm text-[#F9FAFB] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* 3. POSTS GRID */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-[#111827] rounded-2xl p-6 flex flex-col justify-between border border-white/10 shadow-card hover:bg-[#1F2937] hover:border-white/20 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/30 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-[#9CA3AF] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#9CA3AF]" />
                    {post.readTime}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#F9FAFB] group-hover:text-[#06B6D4] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mt-2.5 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#9CA3AF]">{post.publishDate}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-[#06B6D4] group-hover:text-[#22D3EE] flex items-center gap-1 transition-colors"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="bg-[#111827] rounded-2xl p-12 text-center border border-white/10 max-w-md mx-auto space-y-4 shadow-card">
          <BookOpen className="w-12 h-12 text-[#9CA3AF] mx-auto" />
          <h3 className="text-lg font-bold text-[#F9FAFB]">No Guides Found</h3>
          <p className="text-xs text-[#9CA3AF] leading-relaxed">
            No articles match your search query &ldquo;{searchQuery}&rdquo;. Try another term or select a different category.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="text-xs font-semibold text-[#06B6D4] hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
