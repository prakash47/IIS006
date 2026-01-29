import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Heart, Briefcase, Users, Sparkles, Check } from "lucide-react";

export const metadata: Metadata = {
    title: "Events & Weddings | Celebrate in Royal Style",
    description: "Host your special celebrations at Siyaahi. From intimate weddings to corporate retreats, our heritage venues create unforgettable memories.",
};

export default function EventsPage() {
    const eventTypes = [
        { icon: Heart, title: "Weddings", desc: "Intimate destination weddings in regal splendor.", capacity: "Up to 100", features: ["Mehendi Courtyard", "Phera Mandap", "Bridal Suite"] },
        { icon: Users, title: "Private Celebrations", desc: "Birthdays, anniversaries, family reunions.", capacity: "Up to 50", features: ["Private Dining", "Custom Menu", "Decorations"] },
        { icon: Briefcase, title: "Corporate Retreats", desc: "Inspire your team with unique offsites.", capacity: "Up to 30", features: ["Meeting Space", "AV Equipment", "Wellness Sessions"] },
    ];

    const weddingPackages = [
        { name: "Intimate Ceremony", guests: "30", duration: "1 day", price: "₹2,50,000" },
        { name: "Royal Celebration", guests: "75", duration: "2 days", price: "₹8,50,000", popular: true },
        { name: "Grand Affair", guests: "100", duration: "3 days", price: "₹15,00,000" },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white">
                <Image src="/images/gallery_night_1768571616314.png" alt="Event Venue" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
                <div className="relative text-center px-4 max-w-4xl mx-auto">
                    <AnimatedSection>
                        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-amber-400 border border-amber-400/30 rounded-full backdrop-blur-md">
                            <Sparkles className="w-4 h-4 inline mr-2" />
                            Celebrations at Siyaahi
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                            Where Love Meets <span className="text-amber-400">Legacy</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light">
                            Host your timeless moments against the backdrop of Udaipur&apos;s royal heritage.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <AnimatedSection>
                        <div className="space-y-6">
                            <h2 className="text-4xl font-serif font-bold text-slate-900 leading-tight">
                                A Setting as <br /><span className="text-amber-600 italic">Unique as Your Story</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                From the moment you step through our ancient arched gateways, you are transported to a world of regal splendor. Siyaahi Boutique Stay isn&apos;t just a venue; it&apos;s a canvas of history where your personal fairy tale comes to life.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Whether it&apos;s an intimate engagement under the stars, a traditional mehndi in our sun-dappled courtyards, or a grand wedding overlooking the shimmering Lake Pichola, every corner of our haveli whispers stories of romance.
                            </p>
                            <div className="pt-4 grid grid-cols-2 gap-6">
                                <div>
                                    <div className="text-3xl font-bold text-amber-600">500+</div>
                                    <div className="text-slate-500">Successful Events</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-amber-600">100%</div>
                                    <div className="text-slate-500">Customizable</div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/gallery_wedding_mandap_sunset_1769706118712.png" alt="Wedding Setup" fill className="object-cover" />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Detailed Venues Showcase */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Our Spaces</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Venues of Distinction</h2>
                    </AnimatedSection>

                    <div className="space-y-24">
                        {/* Venue 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <AnimatedSection className="order-1 lg:order-1">
                                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                                    <Image src="/images/room-royal-2.png" alt="The Royal Courtyard" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </AnimatedSection>
                            <AnimatedSection className="order-2 lg:order-2" delay={0.2}>
                                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">The Mewar Courtyard</h3>
                                <p className="text-slate-600 mb-6 text-lg">
                                    Our central courtyard is the heart of the haveli. Surrounded by intricate stone carvings and traditional jharokhas, it offers an open-air setting perfect for sangeet nights, receptions, and cultural performances.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <Users className="w-5 h-5 text-amber-600" /> Capacity: Up to 150 Guests
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <Check className="w-5 h-5 text-amber-600" /> Ideal for: Sangeet, Reception, Gala Dinner
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <Sparkles className="w-5 h-5 text-amber-600" /> Features: Open-air, dramatic lighting, acoustic excellence
                                    </li>
                                </ul>
                            </AnimatedSection>
                        </div>

                        {/* Venue 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <AnimatedSection className="order-2 lg:order-1" delay={0.2}>
                                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Lakeview Rooftop Terrace</h3>
                                <p className="text-slate-600 mb-6 text-lg">
                                    Exchange vows with the City Palace and Lake Pichola as your witnesses. As the sun sets, the terrace transforms into a magical realm of golden light, offering the most romantic backdrop in Udaipur.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <Users className="w-5 h-5 text-amber-600" /> Capacity: Up to 80 Guests
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <Check className="w-5 h-5 text-amber-600" /> Ideal for: Pheras, Cocktail Parties, Intimate Dinners
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <Sparkles className="w-5 h-5 text-amber-600" /> Features: 360° Panoramic Views, Cool Breeze, Sunset Point
                                    </li>
                                </ul>
                            </AnimatedSection>
                            <AnimatedSection className="order-1 lg:order-2">
                                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                                    <Image src="/images/gallery_restaurant_1768571557453.png" alt="Rooftop Terrace" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Venue 3 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <AnimatedSection className="order-1 lg:order-1">
                                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                                    <Image src="/images/gallery_reception_dinner_night_1769706089617.png" alt="Darbar Hall" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                            </AnimatedSection>
                            <AnimatedSection className="order-2 lg:order-2" delay={0.2}>
                                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">The Darbar Hall</h3>
                                <p className="text-slate-600 mb-6 text-lg">
                                    For indoor elegance, our Darbar Hall features hand-painted frescoes, crystal chandeliers, and a regal atmosphere. It provides a climate-controlled environment without sacrificing heritage charm.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <Users className="w-5 h-5 text-amber-600" /> Capacity: Up to 60 Guests
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <Check className="w-5 h-5 text-amber-600" /> Ideal for: Engagement Ceremony, Conferences, Private Lunch
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <Sparkles className="w-5 h-5 text-amber-600" /> Features: Air-conditioned, AV equipped, Private Entrance
                                    </li>
                                </ul>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900">Seamless Planning</h2>
                        <p className="text-slate-600 mt-2">We handle every detail, so you can cherish every moment.</p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Culinary Excellence", desc: "From traditional Rajasthani feasts (Thalis) to global gourmet cuisines, our chefs craft menus that delight every palate.", icon: "🍽️" },
                            { title: "Décor & Design", desc: "Our in-house styling team creates bespoke themes, from floral mandaps to candlelit dinners, reflecting your personal style.", icon: "🌺" },
                            { title: "Entertainment", desc: "Curate the perfect mood with folk dancers, classical musicians, or live bands. We bring the culture of Rajasthan to your event.", icon: "🎶" },
                            { title: "Guest Hospitality", desc: "We manage guest logistics, welcome hampers, and accommodation coordination to ensure a seamless experience for your loved ones.", icon: "🏨" },
                            { title: "Photography", desc: "Access to our exclusive network of Udaipur's finest photographers who know the best angles and lighting of our haveli.", icon: "📸" },
                            { title: "Legal & Rituals", desc: "Assistance with arranging pundits, legal paperwork, and traditional ceremony requirements for a stress-free union.", icon: "✍️" },
                        ].map((service, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-all h-full border border-slate-100">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                    <p className="text-slate-600">{service.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold">Curated Wedding Packages</h2>
                        <p className="text-slate-400 mt-2">Designed for intimacy and grandeur</p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {weddingPackages.map((pkg, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className={`relative p-8 rounded-2xl h-full flex flex-col ${pkg.popular ? "bg-gradient-to-br from-amber-500 to-yellow-600 text-slate-900" : "bg-white/5 border border-white/10"}`}>
                                    {pkg.popular && (
                                        <div className="absolute top-0 right-0 p-4">
                                            <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-serif font-bold mb-2">{pkg.name}</h3>
                                    <div className="text-sm opacity-80 mb-6">{pkg.guests} Guests • {pkg.duration}</div>
                                    <div className="text-3xl font-bold mb-6">{pkg.price}*</div>

                                    <ul className={`space-y-4 mb-8 flex-1 ${pkg.popular ? "text-slate-800" : "text-slate-300"}`}>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 shrink-0" /> <span className="text-sm">Exclusive Venue Usage</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 shrink-0" /> <span className="text-sm">Premium Decor Setup</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 shrink-0" /> <span className="text-sm">Buffet & Beverages</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-5 h-5 shrink-0" /> <span className="text-sm">Basic Sound & Lights</span>
                                        </li>
                                        {pkg.popular && (
                                            <li className="flex items-start gap-2 font-semibold">
                                                <Check className="w-5 h-5 shrink-0" /> <span className="text-sm">Complimentary Bridal Suite</span>
                                            </li>
                                        )}
                                    </ul>

                                    <Link
                                        href="/contact"
                                        className={`w-full py-3 rounded-full font-bold text-center transition-transform hover:scale-105 ${pkg.popular ? "bg-slate-900 text-white" : "bg-white text-slate-900"}`}
                                    >
                                        Enquire Now
                                    </Link>
                                    <p className="text-[10px] mt-4 opacity-60 text-center">*Prices are indicative and subject to customization.</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-amber-50">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900">Love Letters</h2>
                        <p className="text-slate-600 mt-2">Real stories from our happy couples</p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <AnimatedSection>
                            <div className="bg-white p-8 rounded-2xl shadow-sm relative">
                                <div className="text-6xl text-amber-200 absolute top-4 left-4 font-serif">&ldquo;</div>
                                <p className="text-slate-600 italic relative z-10 mb-6 leading-relaxed">
                                    We wanted a wedding that felt intimate but royal. Siyaahi delivered beyond our wildest dreams. The staff treated our family like their own, and the food was simply outstanding. The sunset pheras on the rooftop were magical.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                                        <Image src="/images/gallery-2.png" alt="Couple" width={48} height={48} className="object-cover h-full" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">Aditi & Rahul</div>
                                        <div className="text-xs text-slate-500">Married Dec 2024</div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <div className="bg-white p-8 rounded-2xl shadow-sm relative">
                                <div className="text-6xl text-amber-200 absolute top-4 left-4 font-serif">&ldquo;</div>
                                <p className="text-slate-600 italic relative z-10 mb-6 leading-relaxed">
                                    Planning a destination wedding from London was stressful until we found Siyaahi. Their team handled everything—decor, logistics, food. It was flawless. Our guests are still talking about the Rajasthani welcome dinner!
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                                        <Image src="/images/gallery-3.png" alt="Couple" width={48} height={48} className="object-cover h-full" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">Sarah & Kabir</div>
                                        <div className="text-xs text-slate-500">Married Feb 2025</div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Frequently Asked Questions</h2>
                </AnimatedSection>
                <div className="max-w-3xl mx-auto space-y-6">
                    {[
                        { q: "Can we bring our own alcohol?", a: "We have a fully licensed bar and offer various beverage packages. Due to licensing laws, outside alcohol is generally not permitted, but we can discuss corkage options for specific requirements." },
                        { q: "Is accommodation mandatory for booking the venue?", a: "For weddings, we recommend a full property buyout (all rooms) to ensure complete privacy and freedom for your celebrations. This creates a truly intimate 'home' atmosphere." },
                        { q: "Do you provide decor services?", a: "Yes, we have an in-house decor team that specializes in both traditional and contemporary themes. We are also happy to work with your preferred wedding planners." },
                        { q: "What is the backup plan for rain?", a: "For outdoor events, we always have a contingency plan involving our indoor Darbar Hall or high-quality German tenting solutions to ensure your event proceeds smoothly." },
                    ].map((item, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-amber-400 transition-colors">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.q}</h3>
                                <p className="text-slate-600">{item.a}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/images/gallery_cocktail_hour_social_1769706927192.png" alt="Celebration" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Start Planning Your Forever</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                            Dates for the upcoming wedding season are filling fast. Contact our events team to schedule a private tour of the property.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-colors shadow-lg hover:shadow-amber-500/50">
                                Request Proposal
                            </Link>
                            <a href="tel:+919876543210" className="px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                                Call Event Specialist
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
