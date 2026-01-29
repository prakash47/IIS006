import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Flower2, Droplets, Sun, Moon, Heart, Leaf } from "lucide-react";

export const metadata: Metadata = {
    title: "Spa & Wellness | Traditional Ayurvedic Treatments",
    description: "Rejuvenate your body and soul at Siyaahi Spa. Experience authentic Ayurvedic treatments, yoga sessions, and wellness rituals in our heritage setting.",
};

export default function SpaPage() {
    const treatments = [
        {
            name: "Royal Abhyanga",
            duration: "90 min",
            price: "₹4,500",
            desc: "Full body massage with warm herbal oils, following traditional Ayurvedic techniques.",
            highlight: "Signature Treatment",
        },
        {
            name: "Shirodhara",
            duration: "60 min",
            price: "₹3,800",
            desc: "Continuous stream of warm oil on the forehead for deep relaxation and mental clarity.",
            highlight: "Best for Stress",
        },
        {
            name: "Udvartana",
            duration: "60 min",
            price: "₹3,200",
            desc: "Herbal powder massage that exfoliates and detoxifies, leaving skin silky smooth.",
            highlight: "Detox Favorite",
        },
        {
            name: "Padabhyanga",
            duration: "45 min",
            price: "₹2,200",
            desc: "Intensive foot massage focusing on marma points for overall body healing.",
            highlight: "",
        },
        {
            name: "Couple's Ritual",
            duration: "120 min",
            price: "₹8,500",
            desc: "Shared experience with synchronized massages, followed by private jacuzzi time.",
            highlight: "For Two",
        },
        {
            name: "Mewar Wellness Journey",
            duration: "180 min",
            price: "₹12,000",
            desc: "Complete spa journey: steam, body scrub, massage, facial, and refreshments.",
            highlight: "Ultimate Experience",
        },
    ];

    const yogaSessions = [
        { time: "6:00 AM", type: "Sunrise Hatha Yoga", location: "Rooftop Terrace" },
        { time: "7:00 AM", type: "Pranayama & Meditation", location: "Garden Pavilion" },
        { time: "5:00 PM", type: "Gentle Evening Flow", location: "Rooftop Terrace" },
        { time: "7:00 PM", type: "Guided Meditation", location: "Spa Lounge" },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white">
                <Image
                    src="/images/gallery_spa_1768571539186.png"
                    alt="Spa Interior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

                <div className="relative text-center px-4">
                    <AnimatedSection>
                        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-amber-400 border border-amber-400/30 rounded-full">
                            <Flower2 className="w-4 h-4 inline mr-2" />
                            Wellness Sanctuary
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Spa & <span className="text-amber-400">Wellness</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Ancient healing traditions in a setting of serene luxury.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Intro */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection direction="left">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-serif font-bold text-slate-900">The Art of Ayurveda</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our spa draws upon 5,000 years of Ayurvedic wisdom, adapted for the modern traveler seeking genuine wellness. Each treatment begins with a personal consultation to determine your dosha (body constitution) and customize your experience.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We use only pure, locally-sourced ingredients: cold-pressed sesame and coconut oils, herbs from the Aravalli foothills, and traditional preparations made fresh in our wellness kitchen.
                            </p>
                            <div className="grid grid-cols-3 gap-4 pt-4">
                                {[
                                    { icon: Leaf, label: "100% Natural" },
                                    { icon: Heart, label: "Personalized" },
                                    { icon: Droplets, label: "Pure Oils" },
                                ].map((item, i) => (
                                    <div key={i} className="text-center p-4 bg-amber-50 rounded-xl">
                                        <item.icon className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                                        <span className="text-sm text-slate-700">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right">
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/gallery_pool_1768571513388.png"
                                alt="Wellness Pool"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Treatments */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900">Our Treatments</h2>
                        <p className="text-slate-600 mt-4">Authentic healing experiences</p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {treatments.map((treatment, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                                    {treatment.highlight && (
                                        <span className="self-start px-3 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full mb-4">
                                            {treatment.highlight}
                                        </span>
                                    )}
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{treatment.name}</h3>
                                    <p className="text-slate-600 flex-1">{treatment.desc}</p>
                                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-100">
                                        <span className="text-slate-500">{treatment.duration}</span>
                                        <span className="text-lg font-bold text-amber-600">{treatment.price}</span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Yoga */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h2 className="text-3xl font-serif font-bold mb-6">Yoga & Meditation</h2>
                            <p className="text-slate-300 mb-8">
                                Begin or end your day with guided practices on our rooftop terrace, overlooking the city and hills. Sessions are complimentary for all guests and suitable for all levels.
                            </p>

                            <div className="space-y-4">
                                {yogaSessions.map((session, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                                        {session.time.includes("AM") ? (
                                            <Sun className="w-6 h-6 text-amber-400 shrink-0" />
                                        ) : (
                                            <Moon className="w-6 h-6 text-blue-400 shrink-0" />
                                        )}
                                        <div className="flex-1">
                                            <div className="font-semibold">{session.type}</div>
                                            <div className="text-sm text-slate-400">{session.location}</div>
                                        </div>
                                        <div className="text-amber-400 font-medium">{session.time}</div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right">
                            <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/gallery_garden_1768571595009.png"
                                    alt="Yoga Session"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm">
                                        Complimentary for Guests
                                    </span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="py-24 container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Spa Facilities</h2>
                </AnimatedSection>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { label: "Treatment Rooms", count: "4" },
                        { label: "Steam Room", count: "1" },
                        { label: "Relaxation Lounge", count: "1" },
                        { label: "Private Jacuzzi", count: "2" },
                    ].map((item, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <div className="p-6 bg-amber-50 rounded-2xl">
                                <div className="text-3xl font-bold text-amber-600">{item.count}</div>
                                <div className="text-slate-700 mt-2">{item.label}</div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-900 text-center">
                <AnimatedSection>
                    <h2 className="text-3xl font-serif font-bold mb-6">Book Your Wellness Journey</h2>
                    <p className="opacity-90 max-w-xl mx-auto mb-8">
                        Treat yourself to a transformative experience. Advance booking recommended, especially for couples&apos; treatments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors"
                        >
                            Reserve a Treatment
                        </Link>
                        <a
                            href="tel:+919876543210"
                            className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-colors"
                        >
                            Spa Concierge
                        </a>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
}
