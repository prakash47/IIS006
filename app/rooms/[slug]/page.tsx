import { ROOMS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

// Force static generation for known rooms
export function generateStaticParams() {
    return ROOMS.map((room) => ({
        slug: room.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const room = ROOMS.find((r) => r.slug === slug);
    if (!room) return { title: "Room Not Found" };

    return {
        title: room.name,
        description: room.description,
    };
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const room = ROOMS.find((r) => r.slug === slug);

    if (!room) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-sm breadcrumbs mb-4">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/rooms">Rooms</Link></li>
                    <li>{room.name}</li>
                </ul>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Images Section */}
                <div className="space-y-4">
                    {/* Main Image */}
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-200 relative">
                        <Image src={room.images[0]} alt={room.name} fill className="w-full h-full object-cover" />
                    </div>
                    {/* Thumbnails (if more images) */}
                    {room.images.length > 1 && (
                        <div className="grid grid-cols-4 gap-2">
                            {room.images.map((img, idx) => (
                                <div key={idx} className="aspect-square rounded-lg overflow-hidden shadow-sm bg-gray-200 relative">
                                    <Image src={img} alt={`${room.name} ${idx + 1}`} fill className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Details Section */}
                <div>
                    <h1 className="text-4xl font-bold font-serif mb-2">{room.name}</h1>
                    <div className="text-2xl font-semibold text-primary mb-6">₹{room.price} <span className="text-sm text-base-content/60 font-normal">/ night</span></div>

                    <p className="text-lg mb-8 text-base-content/80 leading-relaxed">
                        {room.description}
                    </p>

                    <div className="divider">Amenities</div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {room.amenities.map((amenity) => (
                            <div key={amenity} className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                <span>{amenity}</span>
                            </div>
                        ))}
                    </div>

                    <div className="card bg-base-200">
                        <div className="card-body">
                            <h3 className="card-title text-base">Authorized Capacity</h3>
                            <p>{room.capacity} Guests</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Link href={`/contact?room=${room.slug}`} className="btn btn-primary btn-lg w-full">
                            Check Availability
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
