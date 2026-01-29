import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from "@/lib/blog-data";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) return { title: "Post Not Found" };

    return {
        title: post.title,
        description: post.excerpt,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [post.image],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(slug, 3);

    // Article structured data
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.date,
        author: {
            "@type": "Person",
            name: post.author,
        },
        publisher: {
            "@type": "Organization",
            name: "Siyaahi Boutique Stay",
            logo: {
                "@type": "ImageObject",
                url: "/images/logo.png",
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />

            <article className="min-h-screen bg-white">
                {/* Hero */}
                <header className="relative h-[60vh] min-h-[400px] flex items-end">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    <div className="relative container mx-auto px-4 pb-12 text-white">
                        <AnimatedSection>
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to Blog
                            </Link>
                            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-amber-500 text-slate-900 rounded-full">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 max-w-4xl">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-white/70">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime}
                                </span>
                                <span>By {post.author}</span>
                            </div>
                        </AnimatedSection>
                    </div>
                </header>

                {/* Content */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <AnimatedSection>
                                <div
                                    className="prose prose-lg prose-slate max-w-none
                    prose-headings:font-serif prose-headings:text-slate-900
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-slate-600 prose-p:leading-relaxed
                    prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-slate-800
                    prose-ul:my-6 prose-li:text-slate-600
                    prose-blockquote:border-l-amber-500 prose-blockquote:bg-amber-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg"
                                    dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br>") }}
                                />
                            </AnimatedSection>

                            {/* Tags */}
                            <div className="mt-12 pt-8 border-t border-slate-200">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-sm bg-slate-100 text-slate-600 rounded-full"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Share */}
                            <div className="mt-8 flex items-center gap-4">
                                <span className="text-slate-500 flex items-center gap-2">
                                    <Share2 className="w-4 h-4" /> Share:
                                </span>
                                <a
                                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white transition-colors"
                                >
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://siyaahi-boutique.com/blog/${post.slug}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    <Facebook className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-8">
                            {/* Author Card */}
                            <div className="bg-slate-50 p-6 rounded-2xl">
                                <h3 className="font-bold text-slate-900 mb-4">About the Author</h3>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-xl">
                                        {post.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">{post.author}</div>
                                        <div className="text-sm text-slate-500">Contributing Writer</div>
                                    </div>
                                </div>
                            </div>

                            {/* Related Posts */}
                            <div className="bg-slate-50 p-6 rounded-2xl">
                                <h3 className="font-bold text-slate-900 mb-4">Related Articles</h3>
                                <div className="space-y-4">
                                    {relatedPosts.map((related) => (
                                        <Link
                                            key={related.slug}
                                            href={`/blog/${related.slug}`}
                                            className="group flex gap-4"
                                        >
                                            <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0">
                                                <Image
                                                    src={related.image}
                                                    alt={related.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-semibold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                                                    {related.title}
                                                </h4>
                                                <span className="text-xs text-slate-500">{related.readTime}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl text-white">
                                <h3 className="font-bold mb-2">Plan Your Stay</h3>
                                <p className="text-sm text-slate-300 mb-4">
                                    Experience the heritage of Udaipur at Siyaahi Boutique Stay.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex w-full justify-center px-4 py-2 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-colors"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>

                {/* More Posts */}
                <section className="py-16 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">More from Our Blog</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/blog/${related.slug}`}
                                    className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                                >
                                    <div className="relative aspect-video">
                                        <Image
                                            src={related.image}
                                            alt={related.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                                            {related.title}
                                        </h3>
                                        <span className="text-sm text-slate-500">{related.readTime}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}
