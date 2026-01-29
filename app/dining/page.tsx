import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Clock, Utensils, Wine, Coffee, Star, ChefHat } from "lucide-react";

export const metadata: Metadata = {
    title: "Fine Dining | Authentic Rajasthani Cuisine",
    description: "Experience exquisite Rajasthani and international cuisine at Siyaahi. Our rooftop restaurant offers stunning lake views and traditional flavors.",
};

export default function DiningPage() {
    const menuHighlights = [
        {
            category: "Royal Thali",
            items: [
                { name: "Mewar Thali", desc: "12 authentic dishes, papad, pickles, rice, rotis", price: "₹950" },
                { name: "Royal Feast", desc: "18 courses including desserts and drinks", price: "₹1,450" },
            ],
        },
        {
            category: "Signature Mains",
            items: [
                { name: "Laal Maas", desc: "Fiery mutton curry with Mathania chilies", price: "₹680" },
                { name: "Gatte Ki Sabzi", desc: "Gram flour dumplings in tangy gravy", price: "₹420" },
                { name: "Dal Baati Churma", desc: "Classic trio of Rajasthani cooking", price: "₹380" },
                { name: "Ker Sangri", desc: "Desert beans and berries", price: "₹350" },
            ],
        },
        {
            category: "Desserts & Drinks",
            items: [
                { name: "Ghewar", desc: "Honeycomb sweet with rabdi", price: "₹280" },
                { name: "Malpua", desc: "Fried pancakes with saffron syrup", price: "₹220" },
                { name: "Masala Chai", desc: "House-blend spiced tea", price: "₹120" },
            ],
        },
    ];

    const diningExperiences = [
        {
            title: "Rooftop Dining",
            desc: "Dine under the stars with panoramic views of the city and distant Aravalli hills.",
            image: "/images/gallery_night_1768571616314.png",
            features: ["Lake Views", "Candlelit Tables", "Live Music Fri-Sun"],
        },
        {
            title: "Private Courtyard",
            desc: "Intimate dining in our heritage courtyard, perfect for special occasions.",
            image: "/images/gallery_garden_1768571595009.png",
            features: ["Private Setting", "Customized Menu", "Up to 12 Guests"],
        },
        {
            title: "Cooking Classes",
            desc: "Learn authentic recipes from our master chef in a hands-on session.",
            image: "/images/gallery_restaurant_1768571557453.png",
            features: ["3-Hour Session", "4 Dishes", "Recipe Cards Included"],
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white">
                <Image
                    src="/images/gallery_restaurant_1768571557453.png"
                    alt="Restaurant Interior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

                <div className="relative text-center px-4">
                    <AnimatedSection>
                        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-amber-400 border border-amber-400/30 rounded-full">
                            <Utensils className="w-4 h-4 inline mr-2" />
                            Culinary Excellence
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            A Royal <span className="text-amber-400">Feast</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Where centuries-old recipes meet contemporary culinary artistry.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Intro */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection>
                        <div className="space-y-6">
                            <h2 className="text-4xl font-serif font-bold text-slate-900">The Art of Rajasthani Cuisine</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our kitchen is led by Chef Raghu Singh, a third-generation culinary master whose family has preserved authentic Mewari recipes for over 60 years. Every dish tells a story—of desert survival, royal feasts, and the ingenuity of Rajasthani cooks.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We source spices from local markets, herbs from our rooftop garden, and follow traditional cooking methods including clay oven preparations and slow-cooking techniques perfected over centuries.
                            </p>
                            <div className="flex gap-6 pt-4">
                                <div className="text-center">
                                    <ChefHat className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-slate-900">30+</div>
                                    <div className="text-sm text-slate-500">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <Star className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-slate-900">4.9</div>
                                    <div className="text-sm text-slate-500">Guest Rating</div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative h-48 rounded-xl overflow-hidden">
                                    <Image src="/images/food-laal-maas.png" alt="Laal Maas" fill className="object-cover" />
                                </div>
                                <div className="relative h-64 rounded-xl overflow-hidden">
                                    <Image src="/images/food-dal-baati.png" alt="Dal Baati Churma" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative h-64 rounded-xl overflow-hidden">
                                    <Image src="/images/food-gatte-sabzi.png" alt="Gatte Ki Sabzi" fill className="object-cover" />
                                </div>
                                <div className="relative h-48 rounded-xl overflow-hidden">
                                    <Image src="/images/food-ghewar.png" alt="Ghewar" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Menu Highlights */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold">Menu Highlights</h2>
                        <p className="text-slate-400 mt-4">A taste of what awaits you</p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {menuHighlights.map((section, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.15}>
                                <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
                                    <h3 className="text-xl font-bold text-amber-400 mb-6">{section.category}</h3>
                                    <div className="space-y-6">
                                        {section.items.map((item, i) => (
                                            <div key={i} className="border-b border-white/10 pb-4 last:border-0">
                                                <div className="flex justify-between items-start">
                                                    <span className="font-semibold">{item.name}</span>
                                                    <span className="text-amber-400">{item.price}</span>
                                                </div>
                                                <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dining Experiences */}
            <section className="py-24 container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Dining Experiences</h2>
                    <p className="text-slate-600 mt-4">Choose your perfect setting</p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {diningExperiences.map((exp, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <div className="group h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={exp.image}
                                        alt={exp.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                                    <p className="text-slate-600 mb-4">{exp.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.features.map((feature, i) => (
                                            <span key={i} className="px-3 py-1 text-xs bg-amber-100 text-amber-700 rounded-full">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Hours & Reservations */}
            <section className="py-16 bg-amber-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <AnimatedSection className="p-6">
                            <Coffee className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Breakfast</h3>
                            <p className="text-slate-600">7:00 AM - 10:30 AM</p>
                            <p className="text-sm text-slate-500 mt-2">Complimentary for guests</p>
                        </AnimatedSection>
                        <AnimatedSection className="p-6" delay={0.1}>
                            <Utensils className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Lunch & Dinner</h3>
                            <p className="text-slate-600">12:00 PM - 10:30 PM</p>
                            <p className="text-sm text-slate-500 mt-2">Reservations recommended</p>
                        </AnimatedSection>
                        <AnimatedSection className="p-6" delay={0.2}>
                            <Wine className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Rooftop Bar</h3>
                            <p className="text-slate-600">5:00 PM - 11:00 PM</p>
                            <p className="text-sm text-slate-500 mt-2">Sunset cocktails daily</p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <AnimatedSection>
                    <h2 className="text-3xl font-serif font-bold mb-6">Reserve Your Table</h2>
                    <p className="text-slate-400 max-w-xl mx-auto mb-8">
                        Whether it&apos;s a romantic dinner for two or a celebration with friends, we&apos;ll create an unforgettable dining experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-colors"
                        >
                            Make a Reservation
                        </Link>
                        <a
                            href="tel:+919876543210"
                            className="px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors"
                        >
                            Call: +91 98765 43210
                        </a>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
}
