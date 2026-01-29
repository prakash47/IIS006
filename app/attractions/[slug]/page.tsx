import { getAttraction } from "@/lib/attraction-data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Clock, Ticket, Calendar, MapPin, ArrowLeft, Info, Camera, Check } from "lucide-react";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const attraction = getAttraction(slug);
    if (!attraction) return { title: "Attraction Not Found" };
    return {
        title: `${attraction.name} | Udaipur Attractions`,
        description: attraction.description,
    };
}

export default async function AttractionDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const attraction = getAttraction(slug);

    if (!attraction) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* 1. Hero Section */}
            <div className="relative h-[80vh] min-h-[600px] w-full bg-slate-900 flex items-center justify-center">
                <Image
                    src={attraction.heroImage}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

                <div className="absolute top-24 left-4 z-20 md:left-8">
                    <Link
                        href="/attractions"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Attractions
                    </Link>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-6">
                    <AnimatedSection>
                        <span className="inline-block px-4 py-2 mb-4 text-sm md:text-base font-bold tracking-widest uppercase text-amber-400 border border-amber-400/30 rounded-full backdrop-blur-sm">
                            Discover Udaipur
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 tracking-tight drop-shadow-2xl text-white">
                            {attraction.name}
                        </h1>
                        <p className="text-xl md:text-3xl font-light italic text-slate-200 drop-shadow-md">
                            "{attraction.tagline}"
                        </p>
                    </AnimatedSection>
                </div>

                <div className="absolute bottom-10 left-0 right-0 text-center animate-bounce text-white/50">
                    <p className="text-xs uppercase tracking-widest">Scroll to Explore</p>
                    <div className="w-0.5 h-12 bg-white/30 mx-auto mt-4"></div>
                </div>
            </div>

            {/* 2. Overview & History (Text Rich) */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <AnimatedSection>
                        <div className="sticky top-32 space-y-8">
                            <div className="inline-flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-sm">
                                <Info className="w-5 h-5" /> About the Site
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                A Journey Through time
                            </h2>
                            <div className="prose prose-lg prose-slate text-slate-600 leading-loose">
                                <p className="text-xl font-medium text-slate-800">
                                    {attraction.description}
                                </p>
                                <div className="w-20 h-1 bg-amber-500 my-8"></div>
                                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">The Historic Legacy</h3>
                                <p>
                                    {attraction.history}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        {/* Quick Info Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 mb-12">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-amber-500" /> Visitor Essentials
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
                                    <Clock className="w-6 h-6 text-slate-400 shrink-0 mt-1" />
                                    <div>
                                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Timings</div>
                                        <div className="text-lg font-medium text-slate-900">{attraction.visitorInfo.timings}</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
                                    <Ticket className="w-6 h-6 text-slate-400 shrink-0 mt-1" />
                                    <div>
                                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Entry Fee</div>
                                        <div className="text-lg font-medium text-slate-900">{attraction.visitorInfo.entryFee}</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
                                    <MapPin className="w-6 h-6 text-slate-400 shrink-0 mt-1" />
                                    <div>
                                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Suggested Duration</div>
                                        <div className="text-lg font-medium text-slate-900">{attraction.visitorInfo.duration}</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Camera className="w-6 h-6 text-slate-400 shrink-0 mt-1" />
                                    <div>
                                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Best Time to Visit</div>
                                        <div className="text-lg font-medium text-slate-900">{attraction.visitorInfo.bestTime}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image 1 */}
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src={attraction.gallery[0]}
                                alt="Detail view"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* 3. Highlights Grid */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">Don't Miss</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">Key Highlights</h2>
                        <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
                            Ensure these notable spots are on your itinerary when you explore {attraction.name}.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {attraction.highlights.map((highlight, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="flex gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold text-xl">
                                            {idx + 1}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold mb-3 text-white">{highlight.title}</h3>
                                        <p className="text-slate-300 leading-relaxed text-lg">
                                            {highlight.desc}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Mini Gallery (Carousel feel) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="mb-12 flex items-end justify-between">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Visual Glimpses</h2>
                            <p className="text-slate-600 mt-4 text-lg">Capturing the essence of {attraction.name}</p>
                        </div>
                        <div className="hidden md:block">
                            <Link href="/gallery/rooms" className="text-amber-600 font-bold hover:underline">View Full Gallery &rarr;</Link>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px] md:h-[500px]">
                        <AnimatedSection className="md:col-span-2 h-full">
                            <div className="relative h-full w-full rounded-2xl overflow-hidden group">
                                <Image src={attraction.gallery[1]} alt="Gallery 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                        </AnimatedSection>
                        <AnimatedSection className="md:col-span-1 h-full" delay={0.2}>
                            <div className="relative h-full w-full rounded-2xl overflow-hidden group">
                                <Image src={attraction.gallery[2]} alt="Gallery 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* 5. Insider Tips */}
            <section className="py-20 bg-amber-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                        <AnimatedSection className="text-center mb-10">
                            <h2 className="text-3xl font-serif font-bold text-slate-900">Concierge Tips</h2>
                            <p className="text-slate-500 mt-2">Expert advice for the perfect visit</p>
                        </AnimatedSection>
                        <div className="grid gap-6">
                            {attraction.travelTips.map((tip, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <Check className="w-6 h-6 text-green-500" />
                                    </div>
                                    <p className="text-lg text-slate-700">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CTA */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src={attraction.heroImage} alt="Background" fill className="object-cover blur-sm" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Experience it with Siyaahi</h2>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-light">
                            Let us arrange a private guided tour, luxury transport, and a seamless experience for your visit to {attraction.name}.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="/contact"
                                className="px-10 py-5 bg-amber-500 text-slate-900 font-bold text-lg rounded-full hover:bg-amber-400 transition-colors shadow-xl hover:shadow-amber-500/50"
                            >
                                Plan My Visit
                            </Link>
                            <Link
                                href="/attractions"
                                className="px-10 py-5 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors"
                            >
                                Explore More Sites
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
