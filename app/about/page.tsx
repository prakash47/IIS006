import { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Award, Users, Heart, Leaf, MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | Our Heritage Story",
    description: "Discover the story behind Siyaahi Boutique Stay - a restored 19th-century haveli offering authentic Rajasthani hospitality in the heart of Udaipur.",
};

export default function AboutPage() {
    const milestones = [
        { year: "1892", title: "Haveli Built", desc: "Constructed by a noble family of the Mewar court" },
        { year: "1947", title: "Independence Era", desc: "Preserved through India's transition to independence" },
        { year: "2018", title: "Restoration Begins", desc: "Careful restoration work commenced" },
        { year: "2021", title: "Grand Opening", desc: "Siyaahi Boutique Stay welcomes first guests" },
        { year: "2024", title: "Award Recognition", desc: "Named among top heritage hotels of Rajasthan" },
    ];

    const values = [
        { icon: Heart, title: "Authentic Hospitality", desc: "We believe in 'Atithi Devo Bhava' - treating every guest as divine." },
        { icon: Leaf, title: "Sustainable Luxury", desc: "Heritage preservation meets eco-conscious practices." },
        { icon: Users, title: "Community First", desc: "We employ local artisans and support traditional crafts." },
        { icon: Award, title: "Excellence Always", desc: "Every detail is curated to exceed expectations." },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white">
                <Image
                    src="/images/gallery_lobby_1768571576071.png"
                    alt="Siyaahi Heritage Haveli"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

                <div className="relative text-center px-4 max-w-4xl">
                    <AnimatedSection>
                        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-amber-400 border border-amber-400/30 rounded-full">
                            Est. 1892
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Our <span className="text-amber-400">Heritage</span> Story
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            A 130-year journey from royal residence to your sanctuary of luxury.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection direction="left">
                        <div className="space-y-6">
                            <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">The Beginning</span>
                            <h2 className="text-4xl font-serif font-bold text-slate-900">A Haveli Reborn</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                In the narrow lanes of Udaipur&apos;s old city, away from the bustling tourist centers, stands a haveli that has witnessed over a century of Mewar&apos;s history. Originally built in 1892 for a distinguished family of the royal court, this architectural gem was lovingly restored and reimagined as Siyaahi Boutique Stay.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                The name &quot;Siyaahi&quot; (meaning ink in Hindi) pays homage to the countless stories written within these walls—stories of celebrations and quiet contemplations, of monsoon evenings and winter celebrations, of a family&apos;s legacy that now becomes part of yours.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our restoration philosophy was simple: preserve the soul while adding comfort. Every original fresco was carefully restored. Every carved stone doorway remains. Yet behind these historic walls, you&apos;ll find modern plumbing, air conditioning, and amenities that today&apos;s travelers expect.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right" className="relative">
                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/gallery_garden_1768571595009.png"
                                alt="Heritage Courtyard"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                                    <Calendar className="w-8 h-8 text-amber-600" />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-slate-900">130+</div>
                                    <div className="text-slate-500">Years of History</div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold">Our Journey</h2>
                    </AnimatedSection>

                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-500/30 hidden md:block" />

                        <div className="space-y-12">
                            {milestones.map((milestone, idx) => (
                                <AnimatedSection
                                    key={idx}
                                    delay={idx * 0.15}
                                    direction={idx % 2 === 0 ? "left" : "right"}
                                    className={`flex items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                                >
                                    <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                        <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 inline-block">
                                            <div className="text-amber-400 font-bold text-xl">{milestone.year}</div>
                                            <div className="text-lg font-semibold mt-1">{milestone.title}</div>
                                            <div className="text-slate-400 mt-2">{milestone.desc}</div>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 bg-amber-500 rounded-full shrink-0 hidden md:block" />
                                    <div className="flex-1" />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900">What We Believe</h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        Our values shape every aspect of your stay, from the moment you arrive to your final farewell.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <div className="text-center p-8 rounded-2xl bg-slate-50 hover:bg-amber-50 transition-colors group">
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                                    <value.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-600">{value.desc}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl font-serif font-bold mb-6">Become Part of Our Story</h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Every guest who walks through our doors adds a new chapter to this haveli&apos;s legacy. We look forward to welcoming you.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg"
                        >
                            Reserve Your Stay
                        </a>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
