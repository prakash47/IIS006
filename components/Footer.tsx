import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: "/", label: "Home" },
        { href: "/rooms", label: "Our Rooms" },
        { href: "/gallery", label: "Gallery" },
        { href: "/attractions", label: "Attractions" },
        { href: "/about", label: "About Us" },
    ];

    const experienceLinks = [
        { href: "/dining", label: "Fine Dining" },
        { href: "/spa", label: "Spa & Wellness" },
        { href: "/events", label: "Events & Weddings" },
        { href: "/blog", label: "Travel Blog" },
        { href: "/faq", label: "FAQ" },
    ];

    return (
        <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Gold accent line at top */}
            <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

            <div className="relative container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-14 h-14">
                                <Image
                                    src="/images/logo.png"
                                    alt="Siyaahi Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-serif font-bold text-white tracking-wide">
                                {SITE_CONFIG.name}
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
                            A sanctuary of heritage and luxury in the heart of Udaipur. Experience the royal legacy of Rajasthan with us.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Instagram, href: "#", label: "Instagram" },
                                { icon: Facebook, href: "#", label: "Facebook" },
                                { icon: Twitter, href: "#", label: "Twitter" },
                                { icon: Youtube, href: "#", label: "Youtube" },
                            ].map(({ icon: Icon, href, label }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-amber-500/20 hover:text-amber-400 transition-all duration-300"
                                    aria-label={label}
                                >
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-amber-500" />
                            Explore
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                                    >
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Experience Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-amber-500" />
                            Experience
                        </h3>
                        <ul className="space-y-3">
                            {experienceLinks.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                                    >
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-amber-500" />
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start text-sm">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500/10 shrink-0">
                                    <MapPin className="w-4 h-4 text-amber-400" />
                                </div>
                                <span className="text-slate-400">{SITE_CONFIG.contact.address}</span>
                            </li>
                            <li className="flex gap-3 items-center text-sm">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500/10 shrink-0">
                                    <Phone className="w-4 h-4 text-amber-400" />
                                </div>
                                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-slate-400 hover:text-white transition-colors">
                                    {SITE_CONFIG.contact.phone}
                                </a>
                            </li>
                            <li className="flex gap-3 items-center text-sm">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500/10 shrink-0">
                                    <Mail className="w-4 h-4 text-amber-400" />
                                </div>
                                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-slate-400 hover:text-white transition-colors">
                                    {SITE_CONFIG.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
                    <p className="flex items-center gap-2">
                        © {currentYear}
                        <span className="relative w-5 h-5">
                            <Image src="/images/logo.png" alt="" fill className="object-contain opacity-50" />
                        </span>
                        {SITE_CONFIG.name}. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
