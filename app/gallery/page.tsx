import { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
    title: "Gallery",
    description: "Visual tour of Siyaahi Boutique Stay.",
};

export default function GalleryPage() {
    const images = [
        "/images/gallery_pool_1768571513388.png",
        "/images/gallery_lobby_1768571576071.png",
        "/images/gallery_restaurant_1768571557453.png",
        "/images/gallery_garden_1768571595009.png",
        "/images/gallery_spa_1768571539186.png",
        "/images/gallery_night_1768571616314.png",
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <AnimatedSection>
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 font-serif text-base-content">Visual Journey</h1>
                <p className="text-center text-lg mb-16 max-w-3xl mx-auto text-base-content/70">
                    Step inside Siyaahi and explore the blend of heritage architecture, modern luxury, and tranquil spaces that await you.
                </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, idx) => (
                    <AnimatedSection key={idx} delay={idx * 0.1}>
                        <div className="aspect-[4/3] relative group overflow-hidden rounded-xl bg-gray-200 shadow-md">
                            <Image
                                src={src}
                                alt={`Gallery image ${idx + 1}`}
                                fill
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-medium tracking-wide">View Full Size</span>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>

            <AnimatedSection className="mt-16 text-center">
                <p className="italic text-base-content/60">Follow us on Instagram for daily stories: <span className="text-primary font-bold">@siyaahi_stay</span></p>
            </AnimatedSection>
        </div>
    );
}
