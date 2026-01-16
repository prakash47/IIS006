import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-300">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-white tracking-wider">{SITE_CONFIG.name}</h2>
                        <p className="text-sm leading-relaxed text-slate-400 max-w-xs mx-auto md:mx-0">
                            A sanctuary of heritage and luxury in the heart of Udaipur. Experience the royal legacy of Rajasthan with us.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start pt-2">
                            <Link href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm">Explore</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-white transition-colors text-sm">Home</Link></li>
                            <li><Link href="/rooms" className="hover:text-white transition-colors text-sm">Our Rooms</Link></li>
                            <li><Link href="/gallery" className="hover:text-white transition-colors text-sm">Gallery</Link></li>
                            <li><Link href="/attractions" className="hover:text-white transition-colors text-sm">Attractions</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm">Services</h3>
                        <ul className="space-y-2">
                            <li className="text-sm">Concierge</li>
                            <li className="text-sm">Spa & Wellness</li>
                            <li className="text-sm">Private Dining</li>
                            <li className="text-sm">Event Hosting</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex gap-3 justify-center md:justify-start items-start text-sm">
                                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                                <span>{SITE_CONFIG.contact.address}</span>
                            </li>
                            <li className="flex gap-3 justify-center md:justify-start items-center text-sm">
                                <Phone className="w-4 h-4 shrink-0 text-primary" />
                                <span>{SITE_CONFIG.contact.phone}</span>
                            </li>
                            <li className="flex gap-3 justify-center md:justify-start items-center text-sm">
                                <Mail className="w-4 h-4 shrink-0 text-primary" />
                                <span>{SITE_CONFIG.contact.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
