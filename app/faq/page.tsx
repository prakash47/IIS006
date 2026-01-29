import { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about Siyaahi Boutique Stay - reservations, amenities, policies, and more.",
};

const faqs = [
    {
        category: "Reservations & Booking",
        items: [
            { q: "How do I make a reservation?", a: "You can book directly through our website, call us at +91 98765 43210, or email stay@siyaahi.com. We recommend booking at least 2 weeks in advance, especially during peak season (October-March)." },
            { q: "What is your cancellation policy?", a: "Free cancellation up to 7 days before arrival. Cancellations within 7 days are charged 50% of the first night. No-shows are charged the full first night." },
            { q: "Do you require a deposit?", a: "Yes, we require a 25% deposit at the time of booking. The balance is due upon check-in." },
            { q: "What are your check-in and check-out times?", a: "Check-in is from 2:00 PM, and check-out is by 11:00 AM. Early check-in and late check-out may be available on request, subject to availability." },
        ],
    },
    {
        category: "Rooms & Amenities",
        items: [
            { q: "What amenities are included?", a: "All rooms include complimentary WiFi, breakfast, bottled water, tea/coffee making facilities, air conditioning, and daily housekeeping. Our spa, pool, and yoga sessions are also available to all guests." },
            { q: "Is breakfast included?", a: "Yes, a traditional Rajasthani and continental breakfast is included for all guests, served on our rooftop restaurant from 7:00 AM to 10:30 AM." },
            { q: "Do you have family rooms?", a: "Yes, our Family Garden Suite accommodates up to 4 guests with two queen beds, garden access, and a small kitchenette." },
            { q: "Are the rooms air-conditioned?", a: "Yes, all rooms have individual climate control with both air conditioning and heating for your comfort." },
        ],
    },
    {
        category: "Services & Experiences",
        items: [
            { q: "Do you offer airport transfers?", a: "Yes, we provide airport and railway station transfers. Udaipur Airport is approximately 25 km away. Please contact us for rates and booking." },
            { q: "Can you arrange local tours?", a: "Absolutely! Our concierge can arrange city tours, day trips, boat rides, cooking classes, and more. We recommend booking at least 24 hours in advance." },
            { q: "Is the restaurant open to non-guests?", a: "Yes, our rooftop restaurant welcomes outside guests for lunch and dinner. Reservations are recommended, especially for sunset seating." },
            { q: "Do you host weddings and events?", a: "Yes! We specialize in intimate destination weddings and private celebrations for up to 100 guests. Contact our events team for packages and availability." },
        ],
    },
    {
        category: "Policies & Accessibility",
        items: [
            { q: "Is smoking allowed?", a: "Siyaahi is a smoke-free property. Smoking is only permitted in designated outdoor areas." },
            { q: "Are pets allowed?", a: "Unfortunately, we do not allow pets except for certified service animals. Please contact us in advance if you require a service animal." },
            { q: "Is the property wheelchair accessible?", a: "Our heritage building has some accessibility limitations. Please contact us to discuss your specific needs, and we will do our best to accommodate you." },
            { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, UPI, and cash (INR). International cards are also accepted." },
        ],
    },
];

export default function FAQPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.flatMap(cat => cat.items.map(item => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        }))),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <div className="min-h-screen bg-slate-50 py-24">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to know about your stay at Siyaahi.</p>
                    </AnimatedSection>

                    <div className="max-w-4xl mx-auto space-y-12">
                        {faqs.map((category, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="w-10 h-1 bg-amber-500" />
                                    {category.category}
                                </h2>
                                <div className="space-y-4">
                                    {category.items.map((item, i) => (
                                        <details key={i} className="group bg-white rounded-xl shadow-sm">
                                            <summary className="p-6 cursor-pointer font-semibold text-slate-900 hover:text-amber-600 transition-colors list-none flex justify-between items-center">
                                                {item.q}
                                                <span className="text-2xl text-amber-500 group-open:rotate-45 transition-transform">+</span>
                                            </summary>
                                            <div className="px-6 pb-6 text-slate-600 leading-relaxed">{item.a}</div>
                                        </details>
                                    ))}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="mt-16 text-center">
                        <div className="bg-slate-900 text-white rounded-2xl p-8 max-w-2xl mx-auto">
                            <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
                            <p className="text-slate-400 mb-6">Our team is happy to help with any inquiries.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" className="px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-full">Contact Us</Link>
                                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10">{SITE_CONFIG.contact.phone}</a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </>
    );
}
