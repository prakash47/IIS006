import { ROOMS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Check, Users, ArrowLeft, Calendar, Star } from "lucide-react";

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
        title: `${room.name} | Luxury Accommodation`,
        description: room.description,
    };
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const room = ROOMS.find((r) => r.slug === slug);

    if (!room) {
        notFound();
    }

    const otherRooms = ROOMS.filter((r) => r.slug !== slug).slice(0, 3);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Image */}
            <section className="relative h-[50vh] min-h-[350px]">
                <Image
                    src={room.images[0]}
                    alt={room.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Breadcrumb */}
                <div className="absolute top-8 left-0 right-0">
                    <div className="container mx-auto px-4">
                        <Link
                            href="/rooms"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to All Rooms
                        </Link>
                    </div>
                </div>

                {/* Room Title on Hero */}
                <div className="absolute bottom-8 left-0 right-0">
                    <div className="container mx-auto px-4">
                        <AnimatedSection>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                                {room.name}
                            </h1>
                            <div className="flex items-center gap-4 text-white/80">
                                <span className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    {room.capacity} Guests
                                </span>
                                <span className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-amber-400" />
                                    4.9 Rating
                                </span>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Description */}
                            {/* Description */}
                            <AnimatedSection>
                                <div className="bg-white rounded-2xl p-8 shadow-lg">
                                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">The Experience</h2>
                                    <div className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                                        {room.longDescription || room.description}
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Room Highlights Grid */}
                            {room.highlights && (
                                <AnimatedSection delay={0.1}>
                                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Room Highlights</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {room.highlights.map((highlight: any, idx: number) => (
                                            <div key={idx} className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                                                <h3 className="font-bold text-amber-800 mb-2">{highlight.label}</h3>
                                                <p className="text-sm text-slate-700">{highlight.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </AnimatedSection>
                            )}

                            {/* Sleep Experience */}
                            {room.sleepExperience && (
                                <AnimatedSection delay={0.15}>
                                    <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-lg">
                                        <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                                            <span className="p-2 bg-white/10 rounded-full"><Users className="w-5 h-5" /></span>
                                            Sleep & Sanctuary
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                            <div>
                                                <div className="text-amber-400 text-sm uppercase tracking-wider font-bold mb-1">Mattress</div>
                                                <div className="text-lg">{room.sleepExperience.mattress}</div>
                                            </div>
                                            <div>
                                                <div className="text-amber-400 text-sm uppercase tracking-wider font-bold mb-1">Linens</div>
                                                <div className="text-lg">{room.sleepExperience.linens}</div>
                                            </div>
                                            <div>
                                                <div className="text-amber-400 text-sm uppercase tracking-wider font-bold mb-1">Pillow Menu</div>
                                                <div className="text-lg">{room.sleepExperience.pillows}</div>
                                            </div>
                                            <div>
                                                <div className="text-amber-400 text-sm uppercase tracking-wider font-bold mb-1">Ambiance</div>
                                                <div className="text-lg">{room.sleepExperience.ambiance}</div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            )}

                            {/* Bath Amenities */}
                            {room.bathAmenities && (
                                <AnimatedSection delay={0.2}>
                                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 font-serif">Spa-Inspired Bath</h2>
                                        <div className="flex flex-col md:flex-row gap-8">
                                            <div className="flex-1 space-y-4">
                                                <ul className="space-y-3">
                                                    {room.bathAmenities.features.map((feature: string, idx: number) => (
                                                        <li key={idx} className="flex items-center gap-3 text-slate-700">
                                                            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                                                <Check className="w-3 h-3 text-slate-900" />
                                                            </div>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="mt-4 pt-4 border-t border-slate-100">
                                                    <div className="text-sm text-slate-500 uppercase tracking-widest mb-1">Signature Products</div>
                                                    <div className="font-serif text-xl text-amber-600">{room.bathAmenities.products}</div>
                                                </div>
                                            </div>
                                            <div className="flex-1 bg-slate-50 rounded-xl p-6">
                                                <h4 className="font-bold text-slate-900 mb-3">Included Comforts</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {room.bathAmenities.extras.map((extra: string, idx: number) => (
                                                        <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600">
                                                            {extra}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            )}

                            {/* Standard Amenities List */}
                            <AnimatedSection delay={0.25}>
                                <div className="bg-white rounded-2xl p-8 shadow-lg">
                                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">All Room Features</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {room.amenities.map((amenity) => (
                                            <div
                                                key={amenity}
                                                className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                                            >
                                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                                    <Check className="w-4 h-4 text-green-600" />
                                                </div>
                                                <span className="text-slate-700 font-medium">{amenity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Image Gallery */}
                            {room.images.length >= 1 && (
                                <AnimatedSection delay={0.3}>
                                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Gallery</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {room.images.map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`relative rounded-xl overflow-hidden group cursor-pointer ${idx === 0 ? "aspect-video md:col-span-2" : "aspect-[4/3]"}`}
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`${room.name} ${idx + 1}`}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </AnimatedSection>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Booking Card */}
                            <AnimatedSection direction="right">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 sticky top-24">
                                    <div className="text-center mb-6">
                                        <div className="text-3xl font-bold text-amber-600">
                                            ₹{room.price.toLocaleString()}
                                        </div>
                                        <div className="text-slate-500">per night</div>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="p-4 bg-slate-50 rounded-xl">
                                            <div className="text-sm text-slate-500 mb-1">Capacity</div>
                                            <div className="font-semibold text-slate-900 flex items-center gap-2">
                                                <Users className="w-4 h-4" />
                                                Up to {room.capacity} Guests
                                            </div>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-xl">
                                            <div className="text-sm text-slate-500 mb-1">Check-in / Check-out</div>
                                            <div className="font-semibold text-slate-900 flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                2:00 PM / 11:00 AM
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/contact?room=${room.slug}`}
                                        className="block w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold rounded-xl text-center hover:shadow-lg transition-all"
                                    >
                                        Check Availability
                                    </Link>

                                    <p className="text-center text-sm text-slate-500 mt-4">
                                        No payment required to inquire
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Rooms */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-slate-900">Other Rooms You May Like</h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {otherRooms.map((otherRoom, idx) => (
                            <AnimatedSection key={otherRoom.id} delay={idx * 0.1}>
                                <Link href={`/rooms/${otherRoom.slug}`} className="group block">
                                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                                        <Image
                                            src={otherRoom.images[0]}
                                            alt={otherRoom.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                                        {otherRoom.name}
                                    </h3>
                                    <div className="text-amber-600 font-semibold">
                                        ₹{otherRoom.price.toLocaleString()} <span className="text-slate-500 font-normal">/ night</span>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
