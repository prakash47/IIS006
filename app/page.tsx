import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { ROOMS, EXPERIENCES } from "@/lib/data";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Star, Wifi, Coffee, MapPin, ShieldCheck, Utensils, Award, Users, Calendar, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const stats = [
    { value: "130+", label: "Years of Heritage" },
    { value: "4.9", label: "Guest Rating" },
    { value: "1000+", label: "Happy Guests" },
    { value: "15+", label: "Awards Won" },
  ];

  const galleryImages = [
    "/images/gallery_lobby_1768571576071.png",
    "/images/gallery_pool_1768571513388.png",
    "/images/gallery_restaurant_1768571557453.png",
    "/images/gallery_garden_1768571595009.png",
    "/images/gallery_spa_1768571539186.png",
    "/images/gallery_night_1768571616314.png",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* 1. Hero Section */}
      <div className="relative h-screen min-h-[600px] w-full bg-slate-900 text-white flex items-center justify-center">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 pointer-events-none" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-6">
          <AnimatedSection delay={0.2}>
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-amber-400 border border-amber-400/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 inline mr-2" />Heritage Boutique Hotel
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-2 tracking-tight drop-shadow-lg">{SITE_CONFIG.name}</h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-xl md:text-2xl font-light tracking-wide text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Experience the timeless elegance of authentic Rajasthani heritage, where luxury meets tranquility in the heart of the City of Lakes.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rooms" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-bold rounded-full shadow-lg hover:shadow-amber-500/25 hover:scale-105 transition-all">
                Explore Our Suites
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-slate-900 transition-all">
                Check Availability
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/80 rounded-full" />
          </div>
        </div>
      </div>

      {/* 2. Stats/Awards Section */}
      <section className="relative -mt-20 z-30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-600">{stat.value}</div>
                  <div className="text-slate-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Our Legacy Section */}
      <AnimatedSection className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              A Sanctuary of <br /><span className="italic text-amber-600">Royal Hospitality</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nestled just moments away from the shimmering waters of Lake Pichola, Siyaahi Boutique Stay isn&apos;t just a hotel—it&apos;s a journey into the opulent past of Mewar.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Born from a restored ancestral Haveli, every stone and carving tells a whisper of history. We invite you to slow down and savor the art of fine living.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all">
              Discover Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
            <Image src="/images/gallery_lobby_1768571576071.png" alt="Siyaahi Lobby" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Amenities Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">World-Class Amenities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We blend old-world charm with modern conveniences.</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Wifi, label: "High-Speed WiFi" },
              { icon: Utensils, label: "Gourmet Dining" },
              { icon: Coffee, label: "Royal Breakfast" },
              { icon: Star, label: "Concierge" },
              { icon: MapPin, label: "Prime Location" },
              { icon: ShieldCheck, label: "24/7 Security" },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <item.icon className="w-8 h-8 text-amber-400" />
                  <span className="text-sm font-medium text-center">{item.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Experiences Section */}
      <section className="py-24 container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Curated Experiences</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-4">Beyond Accommodation</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Immerse yourself in authentic Rajasthani culture.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <Image src={exp.image} alt={exp.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-xs text-amber-400 mb-2">{exp.duration}</div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-sm text-white/80 mt-1">{exp.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 6. Featured Rooms */}
      <section className="py-24 bg-slate-100">
        <div className="container mx-auto px-4">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Accommodations</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Curated Suites</h2>
              <p className="text-slate-600 mt-2 max-w-xl">Each room is a masterpiece offering a distinct personality.</p>
            </div>
            <Link href="/rooms" className="px-6 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all">
              View All Rooms
            </Link>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.slice(0, 3).map((room, idx) => (
              <AnimatedSection key={room.id} delay={idx * 0.15}>
                <Link href={`/rooms/${room.slug}`} className="group block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full">
                    <div className="relative h-64 overflow-hidden">
                      <Image src={room.images[0]} alt={room.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute bottom-4 right-4 px-4 py-1 bg-white/95 backdrop-blur rounded-full text-sm font-bold text-slate-900">
                        ₹{room.price.toLocaleString()} <span className="font-normal text-slate-500">/ night</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{room.name}</h3>
                      <p className="text-slate-600 mt-2 line-clamp-2">{room.description}</p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t text-sm text-slate-500">
                        <span><Users className="w-4 h-4 inline mr-1" />{room.capacity} Guests</span>
                        <span className="text-amber-600 font-medium group-hover:translate-x-1 transition-transform">Details →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gallery Preview */}
      <section className="py-24 container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-900">Visual Journey</h2>
          <p className="text-slate-600 mt-2">A glimpse into our heritage haven</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} className={idx === 0 ? "md:row-span-2" : ""}>
              <Link href="/gallery" className="group block relative aspect-square md:aspect-auto md:h-full rounded-xl overflow-hidden">
                <Image src={src} alt={`Gallery ${idx + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 font-medium">View Gallery</span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images/gallery_night_1768571616314.png")', backgroundSize: 'cover' }} />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold">Guest Experiences</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya S.", location: "Mumbai", text: "The most magical stay of our lives. The sunset view from the Royal Suite is absolutely breathtaking." },
              { name: "James W.", location: "London", text: "Impeccable service and stunning architecture. It felt like living in a palace." },
              { name: "Ananya K.", location: "Delhi", text: "Every corner of Siyaahi is Instagram-worthy. The staff made us feel like royalty." },
            ].map((review, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.15}>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
                  <div className="flex gap-1 justify-center text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-lg italic mb-6">&quot;{review.text}&quot;</p>
                  <div className="font-bold">{review.name}</div>
                  <div className="text-sm text-white/60">{review.location}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Experience Royal Living?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">Book your stay and become part of our 130-year legacy.</p>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg">
            Reserve Your Stay
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
