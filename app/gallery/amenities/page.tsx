import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowLeft, ArrowRight, Droplets, Utensils, Flower2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Amenities Gallery | Siyaahi",
    description: "Explore the relaxing world of Siyaahi - Pool, Spa, and Gardens.",
};

export default function AmenitiesGalleryPage() {
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
                <Image src="/images/gallery_pool_1768571513388.png" alt="Infinity Pool" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative text-center px-4 max-w-4xl">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Designed for <span className="text-amber-400">Bliss</span></h1>
                        <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed">
                            Beyond the rooms, discover a sanctuary of wellness, leisure, and gastronomic delight.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* The Pool */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <Droplets className="w-12 h-12 text-blue-500 mb-6" />
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">The Infinity Pool</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Seamlessly blending with the horizon, our infinity pool offers a refreshing escape from the Rajasthan heat. Lounge on the sun deck with a cool drink, or take a dip while gazing at the Aravalli hills.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 bg-slate-50 rounded-xl text-center">
                                    <div className="text-2xl font-bold text-slate-900">Temperature</div>
                                    <div className="text-slate-500">Controlled</div>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl text-center">
                                    <div className="text-2xl font-bold text-slate-900">Service</div>
                                    <div className="text-slate-500">Poolside Bar</div>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                    <Image src="/images/gallery_pool_underwater_view_1769706156528.png" alt="Pool Underwater View" fill className="object-cover" />
                                </div>
                                <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                    <Image src="/images/gallery_pool_1768571513388.png" alt="Pool Deck" fill className="object-cover" />
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* The Spa */}
            <section className="py-24 bg-stone-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection className="order-2 lg:order-1">
                            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-xl">
                                <Image src="/images/gallery_spa_ayurvedic_oils_1769706136609.png" alt="Spa Ambience" fill className="object-cover" />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>
                        </AnimatedSection>
                        <AnimatedSection className="order-1 lg:order-2">
                            <Flower2 className="w-12 h-12 text-rose-400 mb-6" />
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Veda Spa</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Reconnect with your inner self at Veda Spa. Drawing on ancient Ayurvedic traditions, our therapies use natural oils and herbs to rejuvenate body and mind.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-4 text-slate-700">
                                    <div className="w-2 h-2 rounded-full bg-rose-400" /> Ayurvedic Massages
                                </li>
                                <li className="flex items-center gap-4 text-slate-700">
                                    <div className="w-2 h-2 rounded-full bg-rose-400" /> Steam & Sauna
                                </li>
                                <li className="flex items-center gap-4 text-slate-700">
                                    <div className="w-2 h-2 rounded-full bg-rose-400" /> Yoga Sessions
                                </li>
                            </ul>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Dining */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <Utensils className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                        <h2 className="text-4xl font-serif font-bold text-slate-900">Culinary Journeys</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
                            Every meal is an occasion. From our rooftop restaurant 'Ambrai' to private courtyard dinners.
                        </p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Rooftop Dining", img: "/images/gallery_restaurant_1768571557453.png" },
                            { title: "Private Dinner", img: "/images/gallery_private_balcony_sunset_1769706893816.png" },
                            { title: "Breakfast Spread", img: "/images/gallery_deluxe_lake_view_balcony_1769706048345.png" },
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                                    <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                        <h3 className="text-white text-2xl font-serif font-bold">{item.title}</h3>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gardens */}
            <section className="py-24 bg-green-50">
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Lush Gardens</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16">
                            Stroll through manicured lawns, sit by blooming bougainvillea, and listen to the gentle trickle of water fountains. Our gardens are alive with the sounds of nature.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                            <Image src="/images/gallery_garden_pavilion_afternoon_1769706174221.png" alt="Siyaahi Gardens" fill className="object-cover" />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Next Gallery */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <AnimatedSection>
                    <p className="text-slate-400 mb-4 uppercase tracking-widest text-sm">Continue the Journey</p>
                    <h2 className="text-3xl font-serif font-bold mb-8">Next: Explore Accommodation</h2>
                    <Link href="/gallery/rooms" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white hover:text-slate-900 transition-colors">
                        View Rooms Gallery <ArrowRight className="w-4 h-4" />
                    </Link>
                </AnimatedSection>
            </section>
        </div>
    );
}
