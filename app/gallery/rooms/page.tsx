import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Bed, ArrowLeft, ArrowRight, Star, Heart, Cloud, Sun } from "lucide-react";

export const metadata: Metadata = {
    title: "Rooms Gallery | Siyaahi",
    description: "Visual tour of our luxurious accommodation, from heritage suites to lake view rooms.",
};

export default function RoomsGalleryPage() {
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
                <Image src="/images/room-royal-1.png" alt="Royal Room" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative text-center px-4 max-w-3xl">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Rest in <span className="text-amber-400">Style</span></h1>
                        <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed">
                            A curated visual journey through our private sanctuaries, where every texture and tone tells a story of heritage.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Section 1: Royal Heritage */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection>
                        <div className="sticky top-32">
                            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">The Royal Heritage Suite</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Timeless Opulence</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Our signature suite is a masterpiece of restoration. The high vaulted ceilings, original Mewar frescoes, and antique teakwood furniture transport you to a bygone era of courtly splendor.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Star className="w-6 h-6 text-amber-500" />
                                    <span className="text-slate-700">Hand-painted ceiling art from 1902</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Star className="w-6 h-6 text-amber-500" />
                                    <span className="text-slate-700">Private Jharokha (Balcony)</span>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                    <div className="space-y-8">
                        <AnimatedSection delay={0.2}>
                            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image src="/images/gallery_royal_suite_detail_1769706029717.png" alt="Royal Heritage Suite Details" fill className="object-cover" />
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.4}>
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl ml-auto lg:w-4/5">
                                <Image src="/images/gallery_antique_furniture_teak_1769706873146.png" alt="Antique Teak Furniture" fill className="object-cover" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Parallax Break */}
            <section className="relative h-[60vh] flex items-center justify-center bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/gallery_deluxe_lake_view_balcony_1769706048345.png')" }}>
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white px-4">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold">Waking Up in Udaipur</h2>
                        <p className="mt-4 text-xl text-slate-200">Where morning light dances on the lake waters.</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Section 2: Lake View Comfort */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-slate-900">Serenity by the Lake</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
                            Our Deluxe Lake View rooms offer a front-row seat to the tranquil beauty of Lake Pichola.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AnimatedSection>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                                <Image src="/images/room-deluxe-1.png" alt="Lake View Bed" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white text-xl font-bold">Morning Views</h3>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.1}>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                                <Image src="/images/gallery_deluxe_lake_view_balcony_1769706048345.png" alt="Cozy Balcony Nook" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white text-xl font-bold">Balcony Nook</h3>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                                <Image src="/images/gallery-3.png" alt="Balcony" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white text-xl font-bold">Private Balcony</h3>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Section 3: Family & Garden */}
            <section className="py-24 bg-amber-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                            <AnimatedSection>
                                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                                    <Image src="/images/gallery_family_suite_garden_access_1769706064218.png" alt="Family Suite Garden Access" fill className="object-cover" />
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={0.1}>
                                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg mt-8">
                                    <Image src="/images/gallery_garden_1768571595009.png" alt="Garden View" fill className="object-cover" />
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={0.2}>
                                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg col-span-2">
                                    <Image src="/images/gallery_spacious_living_room_suite_1769706909815.png" alt="Spacious Living" fill className="object-cover" />
                                </div>
                            </AnimatedSection>
                        </div>
                        <AnimatedSection className="order-1 lg:order-2">
                            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">Family Garden Suite</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Space to breathe</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Ideal for families, this suite connects you directly to nature. The vibrant decor echoes the colors of Rajasthan, while the direct garden access provides a safe haven for children to play.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Sun className="w-5 h-5 text-amber-500" />
                                    <span className="text-slate-800 font-medium">Lush Garden Views</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Heart className="w-5 h-5 text-amber-500" />
                                    <span className="text-slate-800 font-medium">Spacious Living Area</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Cloud className="w-5 h-5 text-amber-500" />
                                    <span className="text-slate-800 font-medium">Private Outdoor Seating</span>
                                </li>
                            </ul>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Section 4: Details */}
            <section className="py-24 container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-slate-900">It&apos;s in the Details</h2>
                    <p className="text-slate-600 mt-4">The little things that make a big difference.</p>
                </AnimatedSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["/images/gallery_spa_ayurvedic_oils_1769706136609.png", "/images/gallery_antique_furniture_teak_1769706873146.png", "/images/gallery_private_balcony_sunset_1769706893816.png", "/images/gallery_family_suite_garden_access_1769706064218.png", "/images/gallery_royal_suite_detail_1769706029717.png", "/images/gallery_deluxe_lake_view_balcony_1769706048345.png", "/images/gallery_cocktail_hour_social_1769706927192.png", "/images/gallery_reception_dinner_night_1769706089617.png"].map((src, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.05}>
                            <div className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                                <Image src={src} alt="Detail" fill className="object-cover" />
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Next Gallery */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <AnimatedSection>
                    <p className="text-slate-400 mb-4 uppercase tracking-widest text-sm">Continue the Journey</p>
                    <h2 className="text-3xl font-serif font-bold mb-8">Next: Events & Weddings</h2>
                    <Link href="/gallery/events" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white hover:text-slate-900 transition-colors">
                        View Events Gallery <ArrowRight className="w-4 h-4" />
                    </Link>
                </AnimatedSection>
            </section>
        </div>
    );
}
