import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { ROOMS } from "@/lib/data";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Star, Wifi, Coffee, MapPin, ShieldCheck, Utensils } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] w-full bg-slate-900 text-white flex items-center justify-center">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 pointer-events-none" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-6">
          <AnimatedSection delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-2 tracking-tight drop-shadow-lg">
              {SITE_CONFIG.name}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="text-xl md:text-2xl font-light tracking-wide text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Experience the timeless elegance of authentic Rajasthani heritage, where luxury meets tranquility in the heart of the City of Lakes.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rooms" className="btn btn-primary btn-lg border-none shadow-lg hover:scale-105 transition-transform duration-300">
                Explorer Our Suites
              </Link>
              <Link href="/contact" className="btn btn-outline btn-lg text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                Check Availability
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Our Legacy / Why Us */}
      <AnimatedSection className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Our Legacy</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-base-content leading-tight">
              A Sanctuary of <br /><span className="italic text-primary">Royal Hospitality</span>
            </h2>
            <p className="text-lg text-base-content/70 leading-relaxed">
              Nestled just moments away from the shimmering waters of Lake Pichola, Siyaahi Boutique Stay isn't just a hotel—it's a journey into the opulent past of Mewar. Born from a restored ancestral Haveli, every stone and carving tells a whisper of history.
            </p>
            <p className="text-lg text-base-content/70 leading-relaxed">
              We invite you to slow down and savor the art of fine living. Whether basking in the golden sun of our courtyards or dining under a canopy of stars, your stay with us is crafted to be an unforgettable memory.
            </p>
            <div className="pt-4">
              <Link href="/gallery" className="text-primary font-semibold hover:underline underline-offset-4 flex items-center gap-2">
                View Our Gallery <span>→</span>
              </Link>
            </div>
          </div>
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/gallery_lobby_1768571576071.png"
              alt="Siyaahi Lobby Interior"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Amenities Section */}
      <section className="py-24 bg-base-200">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-4">World-Class Amenities</h2>
              <p className="text-base-content/70 text-lg">
                We blend old-world charm with modern conveniences to ensure your stay is as comfortable as it is majestic.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Wifi, label: "High-Speed WiFi" },
              { icon: Utensils, label: "Gourmet Dining" },
              { icon: Coffee, label: "Royal Breakfast" },
              { icon: Star, label: "Concierge Service" },
              { icon: MapPin, label: "Prime Location" },
              { icon: ShieldCheck, label: "24/7 Security" },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="flex flex-col items-center gap-4 p-6 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="w-10 h-10 text-primary" />
                <span className="font-medium text-base-content">{item.label}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 container mx-auto px-4">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif font-bold mb-4">Curated Accommodations</h2>
            <p className="text-lg text-base-content/70">
              Each of our suites is a masterpiece of design, offering a distinct personality and an oasis of calm.
            </p>
          </div>
          <Link href="/rooms" className="btn btn-outline px-8">View All Rooms</Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ROOMS.map((room, idx) => (
            <AnimatedSection key={room.id} delay={idx * 0.2}>
              <Link href={`/rooms/${room.slug}`} className="group block h-full">
                <div className="card bg-base-100 shadow-lg border border-base-200 h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={room.images[0]}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                      ₹{room.price} <span className="font-normal text-xs text-gray-600">/ night</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title font-serif text-2xl group-hover:text-primary transition-colors">{room.name}</h3>
                    <p className="text-base-content/70 line-clamp-3">{room.description}</p>
                    <div className="card-actions mt-4 pt-4 border-t border-base-200 w-full flex justify-between items-center text-sm text-base-content/60">
                      <span>{room.capacity} Guests</span>
                      <span className="group-hover:translate-x-1 transition-transform">View Details →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images/gallery_night_1768571616314.png")', backgroundSize: 'cover' }}></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold mb-16">Guest Experiences</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya S.", location: "Mumbai", text: "The most magical stay of our lives. The sunset view from the Royal Suite is absolutely breathtaking." },
              { name: "James W.", location: "London", text: "Impeccable service and stunning architecture. It felt like living in a palace. Highly recommended for history lovers." },
              { name: "Ananya K.", location: "Delhi", text: "Every corner of Siyaahi is Instagram-worthy. The staff made us feel like royalty. Will definitely return." }
            ].map((review, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.2} className="card bg-white/10 backdrop-blur-md border border-white/10 p-8">
                <div className="flex gap-1 mb-4 justify-center text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg italic mb-6">"{review.text}"</p>
                <div>
                  <div className="font-bold text-lg">{review.name}</div>
                  <div className="text-sm opacity-70">{review.location}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
