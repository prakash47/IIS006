import Link from "next/link";
import Image from "next/image";
import { ROOMS } from "@/lib/data";
import { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Bed, Users, Star, Wifi, Coffee, Bath, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Rooms & Suites | Luxury Accommodations",
    description: "Explore our collection of luxurious rooms and suites at Siyaahi Boutique Stay. From heritage suites to family rooms, find your perfect retreat in Udaipur.",
};

export default function RoomsPage() {
    const amenitiesList = [
        { icon: Wifi, label: "High-Speed WiFi" },
        { icon: Coffee, label: "Complimentary Breakfast" },
        { icon: Bath, label: "Premium Toiletries" },
        { icon: Star, label: "24/7 Concierge" },
    ];

    const roomTypes = [
        { type: "Heritage", count: 2, desc: "Original frescoes and antique decor" },
        { type: "Lake View", count: 3, desc: "Stunning views of Lake Pichola" },
        { type: "Garden", count: 2, desc: "Private access to lush gardens" },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center text-white">
                <Image
                    src="/images/room-royal-1.png"
                    alt="Luxury Suite"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

                <div className="relative text-center px-4">
                    <AnimatedSection>
                        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-amber-400 border border-amber-400/30 rounded-full">
                            <Bed className="w-4 h-4 inline mr-2" />
                            Luxury Accommodations
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                            Our <span className="text-amber-400">Rooms</span> & Suites
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Each room is a masterpiece of heritage design and modern comfort.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="relative -mt-16 z-10">
                <div className="container mx-auto px-4">
                    <AnimatedSection>
                        <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-3 gap-6">
                            {roomTypes.map((room, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-3xl font-bold text-amber-600">{room.count}</div>
                                    <div className="font-medium text-slate-900">{room.type} Rooms</div>
                                    <div className="text-sm text-slate-500">{room.desc}</div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* All Amenities */}
            <section className="py-16 container mx-auto px-4">
                <AnimatedSection className="text-center mb-8">
                    <h2 className="text-2xl font-serif font-bold text-slate-900">Included in All Rooms</h2>
                </AnimatedSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {amenitiesList.map((amenity, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                    <amenity.icon className="w-5 h-5 text-amber-600" />
                                </div>
                                <span className="font-medium text-slate-900">{amenity.label}</span>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Room Cards */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-slate-900">Choose Your Retreat</h2>
                        <p className="text-slate-600 mt-2">From intimate heritage rooms to spacious family suites</p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ROOMS.map((room, idx) => (
                            <AnimatedSection key={room.id} delay={idx * 0.1}>
                                <Link href={`/rooms/${room.slug}`} className="group block h-full">
                                    <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={room.images[0]}
                                                alt={room.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur text-slate-900 text-sm font-medium rounded-full">
                                                    <Users className="w-3 h-3 inline mr-1" />
                                                    {room.capacity} Guests
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                                                {room.name}
                                            </h3>
                                            <p className="text-slate-600 mt-2 line-clamp-2 flex-1">{room.description}</p>
                                            <div className="flex flex-wrap gap-1 mt-4">
                                                {room.amenities.slice(0, 3).map((amenity, i) => (
                                                    <span key={i} className="px-2 py-1 text-xs bg-slate-200 text-slate-700 rounded">
                                                        {amenity}
                                                    </span>
                                                ))}
                                                {room.amenities.length > 3 && (
                                                    <span className="px-2 py-1 text-xs bg-slate-200 text-slate-700 rounded">
                                                        +{room.amenities.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-200">
                                                <div>
                                                    <span className="text-2xl font-bold text-amber-600">₹{room.price.toLocaleString()}</span>
                                                    <span className="text-slate-500 text-sm"> / night</span>
                                                </div>
                                                <span className="text-amber-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    View <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Art of Sleep */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image src="/images/room-royal-1.png" alt="Luxury Bedding" fill className="object-cover" />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">The Art of Sleep</h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                At Siyaahi, we believe that true luxury lies in the quality of your rest. Our suites are sanctuaries of silence, designed to ensure you wake up refreshed and rejuvenated.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                        <Bed className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Cloud-Like Comfort</h3>
                                        <p className="text-slate-400">Posturpedic memory foam mattresses topped with feather-down duvets.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                        <Check className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Pillow Menu</h3>
                                        <p className="text-slate-400">Choose from goose down, memory foam, or hypoallergenic options.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                        <Star className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Egyptian Cotton</h3>
                                        <p className="text-slate-400">Sleep in the embrace of 400-thread count satin-finish linens.</p>
                                    </div>
                                </li>
                            </ul>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Personalized Hospitality */}
            <section className="py-24 bg-amber-50">
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Personalized Hospitality</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg">
                            Our service philosophy is rooted in the Indian tradition of &quot;Atithi Devo Bhava&quot; - Guest is God.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Butler Service", desc: "Available for our Royal & Presidential suites, attending to your every need from packing to personalized itineraries." },
                            { title: "Turndown Rituals", desc: "Evening service with aromatherapy scents and sweet treats to prepare your room for a restful night." },
                            { title: "Local Concierge", desc: "Unlock the secrets of Udaipur with our knowledgeable team who can arrange exclusive experiences." },
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guest Favorites */}
            <section className="py-24 container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900">What Our Guests Love</h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { text: "The Honeymoon Suite was a dream. The jacuzzi tub with rose petals made our anniversary unforgettable.", author: "Meera & Arjun" },
                        { text: "Staying in the Heritage Room felt like living in a museum, but with all modern comforts. The frescoes are stunning.", author: "David P." },
                        { text: "Perfect for our family vacation. The Garden Suite gave the kids space to play while we relaxed on the veranda.", author: "The Kapoor Family" },
                    ].map((review, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <div className="bg-slate-50 border border-slate-100 p-8 rounded-xl relative">
                                <span className="absolute top-4 right-4 text-4xl text-amber-200 font-serif">&rdquo;</span>
                                <p className="text-slate-700 italic mb-4">{review.text}</p>
                                <p className="text-slate-900 font-bold text-sm">- {review.author}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 container mx-auto px-4 bg-slate-50">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Room Comparison</h2>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                            <thead className="bg-slate-900 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left">Room</th>
                                    <th className="px-6 py-4 text-center">Capacity</th>
                                    <th className="px-6 py-4 text-center">Lake View</th>
                                    <th className="px-6 py-4 text-center">Bathtub</th>
                                    <th className="px-6 py-4 text-center">Private Terrace</th>
                                    <th className="px-6 py-4 text-right">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ROOMS.map((room, idx) => (
                                    <tr key={room.id} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                                        <td className="px-6 py-4 font-medium text-slate-900">{room.name}</td>
                                        <td className="px-6 py-4 text-center font-medium text-slate-900">{room.capacity}</td>
                                        <td className="px-6 py-4 text-center">
                                            {room.amenities.includes("Lake View") ? (
                                                <Check className="w-5 h-5 text-green-600 mx-auto" />
                                            ) : (
                                                <span className="text-slate-300">—</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {room.amenities.includes("Bathtub") || room.amenities.includes("Jacuzzi") ? (
                                                <Check className="w-5 h-5 text-green-600 mx-auto" />
                                            ) : (
                                                <span className="text-slate-300">—</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {room.amenities.includes("Private Terrace") ? (
                                                <Check className="w-5 h-5 text-green-600 mx-auto" />
                                            ) : (
                                                <span className="text-slate-300">—</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right font-bold text-amber-600">
                                            ₹{room.price.toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>
            </section>

            {/* Accommodation FAQ */}
            <section className="py-16 container mx-auto px-4 mb-16">
                <AnimatedSection className="text-center mb-8">
                    <h2 className="text-2xl font-serif font-bold text-slate-900">Accommodation FAQ</h2>
                </AnimatedSection>
                <div className="max-w-3xl mx-auto space-y-4">
                    {[
                        { q: "What are the check-in and check-out times?", a: "Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are subject to availability." },
                        { q: "Can we request an extra bed?", a: "Yes, an extra bed can be added to most suites for a charge of ₹2,500 per night, inclusive of breakfast." },
                        { q: "Is the hotel accessible for elderly guests?", a: "We have ground floor rooms like the Family Garden Suite which are easily accessible. However, as a heritage property, some areas are best accessed via stairs." },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                            <h3 className="font-bold text-slate-900">{item.q}</h3>
                            <p className="text-slate-600 mt-2">{item.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <AnimatedSection>
                    <h2 className="text-3xl font-serif font-bold mb-4">Need Help Choosing?</h2>
                    <p className="text-slate-400 max-w-xl mx-auto mb-8">
                        Our team is happy to help you select the perfect room for your stay.
                    </p>
                    <Link href="/contact" className="inline-flex px-8 py-3 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-colors">
                        Contact Us
                    </Link>
                </AnimatedSection>
            </section>
        </div>
    );
}
