import { ATTRACTIONS_DATA } from "@/lib/attraction-data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Compass, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Local Attractions | Explore Udaipur",
    description: "Discover the must-visit attractions near Siyaahi Boutique Stay - City Palace, Lake Pichola, Jag Mandir, Monsoon Palace, and more hidden gems of Udaipur.",
};

export default function AttractionsPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white">
                <Image
                    src="/images/attraction-city-palace.png"
                    alt="Udaipur City Palace"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

                <div className="relative text-center px-4 max-w-4xl">
                    <AnimatedSection>
                        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-amber-400 border border-amber-400/30 rounded-full">
                            <Compass className="w-4 h-4 inline mr-2" />
                            Explore Udaipur
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Nearby <span className="text-amber-400">Attractions</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Discover the timeless beauty of the City of Lakes, just steps from your doorstep.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Attractions Grid */}
            <section className="py-24 container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Curated Experiences</h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        We have handpicked the finest historical and cultural sites for you to explore. Click on any attraction to read our comprehensive guide.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ATTRACTIONS_DATA.map((attraction, idx) => (
                        <AnimatedSection key={attraction.slug} delay={idx * 0.1}>
                            <Link href={`/attractions/${attraction.slug}`} className="group block h-full">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col border border-slate-100">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={attraction.heroImage}
                                            alt={attraction.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <span className="inline-flex items-center text-xs font-medium text-white/90 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full mb-2">
                                                <MapPin className="w-3 h-3 mr-1" />
                                                Udaipur
                                            </span>
                                            <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                                                {attraction.name}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <p className="text-sm font-medium text-amber-600 mb-2 uppercase tracking-wide">
                                            {attraction.tagline}
                                        </p>
                                        <p className="text-slate-600 mb-6 line-clamp-3">
                                            {attraction.description}
                                        </p>
                                        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-slate-900 font-bold group-hover:text-amber-600 transition-colors">
                                            <span>Explore Guide</span>
                                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <AnimatedSection>
                        <h2 className="text-3xl font-serif font-bold mb-4">Need a Private Guide?</h2>
                        <p className="text-slate-400 max-w-xl mx-auto mb-8">
                            Our concierge can arrange exclusive tours, skip-the-line tickets, and luxury transportation for your city exploration.
                        </p>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-colors shadow-lg"
                        >
                            Contact Concierge
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
