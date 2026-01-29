"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    const navLinks = [
        {
            label: "Rooms",
            dropdown: [
                { href: "/rooms", label: "All Rooms" },
                { href: "/rooms/royal-heritage-suite", label: "Royal Heritage Suite" },
                { href: "/rooms/deluxe-lake-view", label: "Deluxe Lake View" },
                { href: "/rooms/family-garden-suite", label: "Family Suite" },
                { href: "/rooms/honeymoon-suite", label: "Honeymoon Suite" },
            ],
        },
        {
            label: "Experience",
            dropdown: [
                { href: "/dining", label: "Fine Dining" },
                { href: "/spa", label: "Spa & Wellness" },
                { href: "/events", label: "Events & Weddings" },
            ],
        },
        {
            label: "Gallery",
            dropdown: [
                { href: "/gallery", label: "Photo Gallery" },
                { href: "/gallery/rooms", label: "Room Views" },
                { href: "/gallery/amenities", label: "Amenities" },
                { href: "/gallery/events", label: "Event Spaces" },
            ],
        },
        {
            label: "Attractions",
            dropdown: [
                { href: "/attractions", label: "All Attractions" },
                { href: "/attractions/city-palace-udaipur", label: "City Palace" },
                { href: "/attractions/lake-pichola", label: "Lake Pichola" },
                { href: "/attractions/jag-mandir-palace", label: "Jag Mandir" },
                { href: "/attractions/monsoon-palace", label: "Monsoon Palace" },
            ],
        },
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "About",
            dropdown: [
                { href: "/about", label: "Our Story" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact Us" },
            ],
        },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950 shadow-lg border-b border-white/5">
            <nav className="container mx-auto px-4" ref={dropdownRef}>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/logo.png"
                                alt="Siyaahi Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-serif font-bold text-white tracking-wide hidden sm:block">
                            {SITE_CONFIG.name}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link, idx) => (
                            <div key={idx} className="relative">
                                {link.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(link.label)}
                                            className={`flex items-center gap-1 px-4 py-2 font-medium transition-colors ${activeDropdown === link.label
                                                ? "text-amber-400"
                                                : "text-white/80 hover:text-white"
                                                }`}
                                        >
                                            {link.label}
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        {activeDropdown === link.label && (
                                            <div className="absolute top-full left-0 mt-2 w-52 py-2 bg-slate-900 backdrop-blur-lg rounded-xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                                                {link.dropdown.map((item, i) => (
                                                    <Link
                                                        key={i}
                                                        href={item.href}
                                                        className="block px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href!}
                                        className="flex items-center gap-1 px-4 py-2 font-medium text-white/80 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            className="relative inline-flex items-center px-6 py-2.5 overflow-hidden text-sm font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                        >
                            <span className="relative z-10">Book Now</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-white"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileOpen && (
                    <div className="lg:hidden py-4 border-t border-white/10 max-h-[80vh] overflow-y-auto">
                        <div className="flex flex-col space-y-1">
                            {navLinks.map((link, idx) => (
                                <div key={idx} className="space-y-1">
                                    {link.dropdown ? (
                                        <>
                                            <button
                                                onClick={() => toggleDropdown(link.label)}
                                                className="w-full flex items-center justify-between px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                                            >
                                                <span className="font-medium">{link.label}</span>
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                            {activeDropdown === link.label && (
                                                <div className="bg-white/5 rounded-lg mx-2 py-1">
                                                    {link.dropdown.map((item, i) => (
                                                        <Link
                                                            key={i}
                                                            href={item.href}
                                                            className="block px-6 py-2.5 text-white/70 hover:text-white transition-colors"
                                                            onClick={() => {
                                                                setIsMobileOpen(false);
                                                                setActiveDropdown(null);
                                                            }}
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href!}
                                            className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors font-medium"
                                            onClick={() => setIsMobileOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 px-4">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-bold rounded-full"
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
