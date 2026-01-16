import Link from "next/link";
import Image from "next/image";
import { ROOMS } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Rooms",
    description: "Explore our luxurious rooms and suites at Siyaahi Boutique Stay.",
};

export default function RoomsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 font-serif">Our Accommodations</h1>
            <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
                Choose from our range of exquisitely designed rooms, each offering a unique blend of comfort and heritage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ROOMS.map((room) => (
                    <div key={room.id} className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-shadow">
                        <figure className="aspect-video relative overflow-hidden bg-gray-200">
                            <Image
                                src={room.images[0]}
                                alt={room.name}
                                fill
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-between">
                                {room.name}
                                <div className="badge badge-secondary badge-outline">₹{room.price}</div>
                            </h2>
                            <p className="line-clamp-3 text-sm text-base-content/80">{room.description}</p>

                            <div className="flex gap-2 flex-wrap mt-2">
                                {room.amenities.slice(0, 3).map(am => (
                                    <span key={am} className="badge badge-ghost badge-sm">{am}</span>
                                ))}
                                {room.amenities.length > 3 && <span className="badge badge-ghost badge-sm">+{room.amenities.length - 3} more</span>}
                            </div>

                            <div className="card-actions justify-end mt-4">
                                <Link href={`/rooms/${room.slug}`} className="btn btn-primary w-full">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
