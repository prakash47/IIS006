import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Camera, Sparkles, Bed, Utensils, TreePalm, Moon, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Photo Gallery | Visual Journey",
    description: "Explore our stunning photo gallery showcasing the beauty of Siyaahi Boutique Stay - rooms, amenities, dining, gardens, and event spaces.",
};

export default function GalleryPage() {
    const galleryCollections = [
        {
            id: "rooms",
            title: "Accommodation Gallery",
            subtitle: "Heritage Suites & Lake Views",
            icon: Bed,
            description: "Step inside our royal abodes. From hand-painted frescoes to panoramic lake views, witness the intricate details that make each room a masterpiece.",
            image: "/images/room-royal-1.png",
            link: "/gallery/rooms",
            count: "15+ Photos"
        },
        {
            id: "events",
            title: "Celebrations & Weddings",
            subtitle: "Grandeur in Every Moment",
            icon: Moon,
            description: "Relive the magic of past celebrations. See our courtyards transformed with marigolds and lights for unforgettable weddings and events.",
            image: "/images/gallery_night_1768571616314.png",
            link: "/gallery/events",
            count: "12+ Photos"
        },
        {
            id: "amenities",
            title: "Resort Experiences",
            subtitle: "Pool, Spa & Gardens",
            icon: Sparkles,
            description: "Immerse yourself in serenity. Explore our infinity pool, rejuvenating spa, and lush gardens that offer a sanctuary from the world.",
            image: "/images/gallery_pool_1768571513388.png",
            link: "/gallery/amenities",
            count: "10+ Photos"
        },
        {
            id: "dining",
            title: "Culinary & Dining",
            subtitle: "Feasts for the Senses",
            icon: Utensils,
            description: "A visual feast of our culinary offerings. From rooftop sun-downers to traditional thalis served in the courtyard.",
            image: "/images/gallery_restaurant_1768571557453.png",
            link: "/gallery/dining",
            count: "8+ Photos"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white">
                <Image
                    src="/images/gallery_lobby_1768571576071.png"
                    alt="Siyaahi Gallery"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

                <div className="relative text-center px-4">
                    <AnimatedSection>
                        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-amber-400 border border-amber-400/30 rounded-full">
                            <Camera className="w-4 h-4 inline mr-2" />
                            Visual Journey
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                            The <span className="text-amber-400">Siyaahi</span> Gallery
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Curated collections of our finest moments, spaces, and stories.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Collections Grid */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 gap-12">
                    {galleryCollections.map((collection, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <Link href={collection.link} className="group block">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 p-2">
                                    {/* Image Side */}
                                    <div className={`relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                                        <Image
                                            src={collection.image}
                                            alt={collection.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                                            {collection.count}
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className={`p-8 md:p-12 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 mb-6 group-hover:bg-amber-100 transition-colors">
                                            <collection.icon className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <h3 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2">{collection.subtitle}</h3>
                                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 group-hover:text-amber-700 transition-colors">
                                            {collection.title}
                                        </h2>
                                        <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                                            {collection.description}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-slate-900 font-bold group-hover:gap-3 transition-all">
                                            View Collection <ArrowRight className="w-5 h-5 text-amber-600" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <AnimatedSection>
                    <h2 className="text-3xl font-serif font-bold mb-4">Capture Your Own Moments</h2>
                    <p className="text-slate-400 max-w-xl mx-auto mb-8">
                        Every corner of Siyaahi is a photo opportunity waiting to happen.
                    </p>
                    <Link href="/contact" className="px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-colors">
                        Book Your Stay
                    </Link>
                </AnimatedSection>
            </section>
        </div>
    );
}
