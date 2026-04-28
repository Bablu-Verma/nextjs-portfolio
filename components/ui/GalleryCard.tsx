'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryCardProps {
    image: {
        src: string;
        alt: string;
    };
    index: number;
}

export function GalleryCard({ image, index }: GalleryCardProps) {
    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            {/* 🔥 Glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur transition duration-300" />

            {/* 📦 Card */}
            <motion.div
                whileHover={{ scale: 1.05, rotate: 0.5 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-xl overflow-hidden border border-border bg-card/50 backdrop-blur-md"
            >
                {/* 🖼 Image */}
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* 🌫 Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* 🧠 Content */}
                <div className="absolute bottom-10 left-0 right-0 p-4 translate-y-6 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-white text-sm font-medium tracking-wide">
                        {image.alt}
                    </p>
                </div>

                {/* ✨ Top Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                    <div className="absolute -top-10 left-[-50%] w-[200%] h-[200%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shine_1.5s_linear]" />
                </div>

            </motion.div>
        </motion.div>
    );
}