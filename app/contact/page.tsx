import { ContactForm } from "@/components/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import { Metadata } from "next";
import { Suspense } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Contact Us | Book Your Stay",
    description: "Get in touch with Siyaahi Boutique Stay for availability and reservations. Experience the heritage of Udaipur.",
};

export default function ContactPage() {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Us",
            details: SITE_CONFIG.contact.address,
        },
        {
            icon: Phone,
            title: "Call Us",
            details: SITE_CONFIG.contact.phone,
        },
        {
            icon: Mail,
            title: "Email Us",
            details: SITE_CONFIG.contact.email,
        },
        {
            icon: Clock,
            title: "Office Hours",
            details: "24/7 Concierge Available",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white">
                <Image
                    src="/images/gallery_lobby_1768571576071.png"
                    alt="Contact Siyaahi"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

                <div className="relative text-center px-4">
                    <AnimatedSection>
                        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-amber-400 border border-amber-400/30 rounded-full">
                            <MessageCircle className="w-4 h-4 inline mr-2" />
                            Get In Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Contact <span className="text-amber-400">Us</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Start your journey to tranquility. We&apos;re here to help.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="relative -mt-12 z-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {contactInfo.map((info, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="bg-white rounded-xl p-6 shadow-lg text-center h-full">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <info.icon className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{info.title}</h3>
                                    <p className="text-slate-600 text-sm">{info.details}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Info */}
                        <AnimatedSection>
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                                        Book Your Stay
                                    </h2>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        Fill out the reservation inquiry form, and our team will get back to you with availability and customized offers. We typically respond within 24 hours.
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">Why Book Direct?</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Best rate guarantee",
                                            "Complimentary room upgrades (subject to availability)",
                                            "Early check-in / Late check-out",
                                            "Welcome amenities",
                                            "Dedicated concierge service",
                                        ].map((benefit, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-slate-600">
                                                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm">✓</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Map Placeholder */}
                                <div className="bg-slate-200 rounded-2xl h-48 flex items-center justify-center overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.0!2d73.68!3d24.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM0JzEyLjAiTiA3M8KwNDAnNDguMCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                                        className="w-full h-full rounded-2xl"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Right Column - Form */}
                        <AnimatedSection direction="right">
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                                    Reservation Inquiry
                                </h3>
                                <Suspense fallback={<div className="h-96 bg-slate-100 rounded-lg animate-pulse" />}>
                                    <ContactForm />
                                </Suspense>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
}
