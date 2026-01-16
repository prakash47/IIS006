import { ContactForm } from "@/components/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Siyaahi Boutique Stay for availability and reservations.",
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h1 className="text-4xl font-bold font-serif mb-6">Contact Us</h1>
                    <p className="text-lg text-base-content/80 mb-8">
                        Start your journey to tranquility. Fill out the reservation inquiry form, and our team will get back to you with availability and customized offers.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Address</h3>
                            <p className="text-base-content/70 whitespace-pre-line">{SITE_CONFIG.contact.address}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Phone</h3>
                            <p className="text-base-content/70">{SITE_CONFIG.contact.phone}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-base-content/70">{SITE_CONFIG.contact.email}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Suspense fallback={<div className="skeleton h-96 w-full">Loading form...</div>}>
                        <ContactForm />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
