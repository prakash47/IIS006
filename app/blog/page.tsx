import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blog-data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";

export const metadata: Metadata = {
    title: "Travel Blog | Udaipur & Rajasthan Insights",
    description: "Explore our travel blog for insider tips on Udaipur, Rajasthani cuisine, heritage hotels, and cultural experiences in the City of Lakes.",
    openGraph: {
        title: "Travel Blog | Siyaahi Boutique Stay",
        description: "Insider tips and stories about Udaipur and Rajasthan",
    },
};

export default function BlogPage() {
    const featuredPost = BLOG_POSTS[0];
    const recentPosts = BLOG_POSTS.slice(1);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/gallery_night_1768571616314.png"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />

                <div className="relative container mx-auto px-4 text-center">
                    <AnimatedSection>
                        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-amber-400 border border-amber-400/30 rounded-full">
                            Our Journal
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Stories from the <span className="text-amber-400">City of Lakes</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Discover insider tips, cultural insights, and travel inspiration from our team at Siyaahi.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-16 container mx-auto px-4">
                <AnimatedSection>
                    <Link href={`/blog/${featuredPost.slug}`} className="group block">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <span className="absolute bottom-4 left-4 px-3 py-1 bg-amber-500 text-slate-900 text-sm font-bold rounded-full">
                                    Featured
                                </span>
                            </div>
                            <div className="space-y-4">
                                <span className="inline-block px-3 py-1 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                                    {featuredPost.category}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-slate-500">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {featuredPost.readTime}
                                    </span>
                                </div>
                                <span className="inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
                                    Read Article <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </Link>
                </AnimatedSection>
            </section>

            {/* Recent Posts Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="mb-12">
                        <h2 className="text-3xl font-serif font-bold text-slate-900">Recent Articles</h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentPosts.map((post, idx) => (
                            <AnimatedSection key={post.slug} delay={idx * 0.1}>
                                <Link href={`/blog/${post.slug}`} className="group block h-full">
                                    <article className="h-full bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="p-6 space-y-3">
                                            <span className="inline-block px-2 py-0.5 text-xs font-medium text-amber-600 bg-amber-100 rounded">
                                                {post.category}
                                            </span>
                                            <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs text-slate-500">
                                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl font-serif font-bold mb-4">Stay Inspired</h2>
                        <p className="text-slate-400 max-w-xl mx-auto mb-8">
                            Subscribe to our newsletter for travel tips, exclusive offers, and stories from Udaipur.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-shadow"
                            >
                                Subscribe
                            </button>
                        </form>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
