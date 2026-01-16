"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
    "/images/hero-bg.png",
    "/images/gallery_pool_1768571513388.png",
    "/images/gallery_night_1768571616314.png",
    "/images/attraction-city-palace.png",
];

export function HeroSlideshow() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[index]}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
    );
}
