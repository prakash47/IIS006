import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowLeft, ArrowRight, Utensils, Coffee, Wine } from "lucide-react";

export const metadata: Metadata = {
    title: "Dining Gallery | Siyaahi",
    description: "A visual feast of our culinary offerings.",
};

export default function DiningGalleryPage() {
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
                <Image src="/images/gallery_restaurant_1768571557453.png" alt="Dining Hero" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative text-center px-4 max-w-4xl">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">A Feast for the <span className="text-amber-400">Senses</span></h1>
                        <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed">
                            From authentic Rajasthani spices to global flavors, discover our culinary artistry.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Ambrai Restaurant */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <Utensils className="w-12 h-12 text-amber-600 mb-6" />
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Ambrai Rooftop</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Our signature restaurant offers panoramic views of the City Palace and Lake Pichola. Enjoy a romantic dinner under the stars with a menu that celebrates the rich heritage of Mewar.
                            </p>
                            <div className="flex gap-4">
                                <span className="px-4 py-2 bg-amber-50 text-amber-800 rounded-full font-bold text-sm">North Indian</span>
                                <span className="px-4 py-2 bg-amber-50 text-amber-800 rounded-full font-bold text-sm">Continental</span>
                                <span className="px-4 py-2 bg-amber-50 text-amber-800 rounded-full font-bold text-sm">Bar</span>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg mt-12">
                                    <Image src="/images/gallery_dining_plating_gourmet.png" alt="Gourmet Plating" fill className="object-cover" />
                                </div>
                                <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg">
                                    <Image src="/images/gallery_restaurant_1768571557453.png" alt="View" fill className="object-cover" />
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Authentic Flavors */}
            <section className="py-24 bg-stone-100">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-slate-900">Authentic Flavors</h2>
                        <p className="text-slate-600 mt-4 text-lg">Traditional dishes prepared with love and century-old recipes.</p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { title: "Laal Maas", img: "/images/food_laal_maas_1769590320487.png" },
                            { title: "Dal Baati Churma", img: "/images/food_dal_baati_1769701881990.png" },
                            { title: "Gatte Ki Sabzi", img: "/images/food_gatte_sabzi_1769590954131.png" },
                            { title: "Ghewar", img: "/images/food_ghewar_1769701912509.png" },
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                                    <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                                        <Image src={item.img} alt={item.title} fill className="object-cover" />
                                    </div>
                                    <h3 className="text-xl font-bold text-center text-slate-900">{item.title}</h3>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experiences */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
                        <AnimatedSection>
                            <Coffee className="w-12 h-12 text-amber-900 mx-auto mb-6" />
                            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">High Tea at The Courtyard</h3>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                Spend your evenings sipping masala chai and enjoying local snacks in our peaceful central courtyard, accompanied by live flute music.
                            </p>
                            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg mx-auto max-w-lg">
                                <Image src="/images/gallery_cocktail_hour_social_1769706927192.png" alt="High Tea" fill className="object-cover" />
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <Wine className="w-12 h-12 text-amber-900 mx-auto mb-6" />
                            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Private Candlelit Dinner</h3>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                Celebrate special moments with a bespoke 5-course menu served in a private alcove or on your own terrace.
                            </p>
                            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg mx-auto max-w-lg">
                                <Image src="/images/gallery_private_balcony_sunset_1769706893816.png" alt="Candlelit Dinner" fill className="object-cover" />
                            </div>
                        </AnimatedSection>
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
