import { ATTRACTIONS } from "@/lib/data";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Local Attractions",
    description: "Explore the best of Udaipur near Siyaahi Boutique Stay.",
};

export default function AttractionsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-12 font-serif">Nearby Attractions</h1>

            <div className="space-y-12">
                {ATTRACTIONS.map((attraction, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-200 relative">
                            <Image src={attraction.image} alt={attraction.name} fill className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold mb-4">{attraction.name}</h2>
                            <div className="badge badge-accent mb-4">{attraction.distance}</div>
                            <p className="text-lg text-base-content/80">{attraction.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
