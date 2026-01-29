import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowLeft, ArrowRight, Music, Wine, Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "Events Gallery | Siyaahi",
    description: "Witness the magic of weddings and celebrations at Siyaahi.",
};

export default function EventsGalleryPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Nav */}
            <div className="fixed top-24 left-4 z-40 md:left-8">
                <Link href="/gallery" className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg text-slate-900 hover:bg-amber-500 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
            </div>

            {/* Hero */}
            <section className="relative h-[70vh] flex items-center justify-center text-white">
                <Image src="/images/gallery_night_1768571616314.png" alt="Events Night" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative text-center px-4 max-w-4xl">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Moments of <span className="text-amber-400">Magic</span></h1>
                        <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed">
                            From sun-dappled pheras to starlit receptions, our haveli transforms into a stage for your most cherished memories.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Wedding Grandeur */}
            <section className="py-24 container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">Weddings</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">The Royal Union</h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[800px] md:h-[600px]">
                    <AnimatedSection className="h-full">
                        <div className="relative h-full w-full rounded-2xl overflow-hidden group">
                            <Image src="/images/gallery_wedding_mandap_sunset_1769706118712.png" alt="Mandap Setup" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold">Sunset Mandap</h3>
                            </div>
                        </div>
                    </AnimatedSection>
                    <div className="grid grid-rows-2 gap-4 h-full">
                        <AnimatedSection className="h-full" delay={0.1}>
                            <div className="relative h-full w-full rounded-2xl overflow-hidden group">
                                <Image src="/images/gallery_reception_dinner_night_1769706089617.png" alt="Royal Reception" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold">Starlit Reception</h3>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection className="h-full" delay={0.2}>
                            <div className="relative h-full w-full rounded-2xl overflow-hidden group">
                                <Image src="/images/gallery_restaurant_1768571557453.png" alt="Dining Setup" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold">Banquet Dining</h3>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>

                <AnimatedSection className="mt-16 text-center max-w-3xl mx-auto">
                    <p className="text-lg text-slate-600 leading-relaxed italic">
                        &quot;The lighting, the flowers, the ambiance - everything was perfect. Getting married at Siyaahi felt like being a part of history.&quot;
                    </p>
                    <div className="mt-4 font-bold text-slate-900">- Anjali & Rohan, 2024</div>
                </AnimatedSection>
            </section>

            {/* Evening Celebrations */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <AnimatedSection>
                                <Music className="w-12 h-12 text-amber-500 mb-4" />
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Evenings to Remember</h2>
                                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                    As the sun sets over the Aravallis, Siyaahi comes alive with the glow of a thousand lights. Sangeet nights, cocktail parties, or intimate anniversary dinners - the mood is strictly magical.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4">
                                        <Sparkles className="w-6 h-6 text-amber-400" />
                                        <span className="text-lg">Customizable Mood Lighting</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <Wine className="w-6 h-6 text-amber-400" />
                                        <span className="text-lg">Curated Bar Service</span>
                                    </li>
                                </ul>
                            </AnimatedSection>
                        </div>
                        <AnimatedSection delay={0.2}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative h-[250px] rounded-xl overflow-hidden">
                                    <Image src="/images/gallery_cocktail_hour_social_1769706927192.png" alt="Cocktail Hour" fill className="object-cover" />
                                </div>
                                <div className="relative h-[250px] rounded-xl overflow-hidden mt-8">
                                    <Image src="/images/gallery_night_1768571616314.png" alt="Night View" fill className="object-cover" />
                                </div>
                                <div className="relative h-[250px] rounded-xl overflow-hidden">
                                    <Image src="/images/gallery_reception_dinner_night_1769706089617.png" alt="Dinner Party" fill className="object-cover" />
                                </div>
                                <div className="relative h-[250px] rounded-xl overflow-hidden mt-8">
                                    <Image src="/images/gallery_private_party_poolside_1769706091293.png" alt="Dance Floor" fill className="object-cover" />
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Corporate & Private */}
            <section className="py-24 bg-amber-50">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900">Intimate Gatherings</h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Corporate Retreats", img: "/images/gallery_antique_furniture_teak_1769706873146.png", desc: "Inspiring spaces for brainstorming and bonding." },
                            { title: "Birthday Milestones", img: "/images/room-family-1.png", desc: "Celebrate joyous years with loved ones in privacy." },
                            { title: "Pre-Wedding Shoots", img: "/images/gallery_garden_1768571595009.png", desc: "Capture your love story against a heritage backdrop." },
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="bg-white p-4 rounded-2xl shadow-sm">
                                    <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
                                        <Image src={item.img} alt={item.title} fill className="object-cover" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Gallery */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <AnimatedSection>
                    <p className="text-slate-400 mb-4 uppercase tracking-widest text-sm">Continue the Journey</p>
                    <h2 className="text-3xl font-serif font-bold mb-8">Next: Resort Amenities</h2>
                    <Link href="/gallery/amenities" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white hover:text-slate-900 transition-colors">
                        View Amenities Gallery <ArrowRight className="w-4 h-4" />
                    </Link>
                </AnimatedSection>
            </section>
        </div>
    );
}
