'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">

            {/* Glow Background */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full" />
            </div>

            <div className="relative text-center px-6">

                {/* 404 Text */}
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-7xl md:text-9xl font-bold text-primary"
                >
                    404
                </motion.h1>

                {/* Message */}
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-semibold mt-4"
                >
                    Page Not Found
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-muted-foreground mt-3 max-w-md mx-auto"
                >
                    The page you are looking for doesn’t exist or has been moved.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-4 mt-8"
                >

                    <Link
                        href="/"
                        className="px-5 py-3 rounded-xl bg-primary text-white flex items-center gap-2 hover:opacity-90 transition"
                    >
                        <Home className="w-4 h-4" />
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-5 py-3 rounded-xl border border-border flex items-center gap-2 hover:border-primary hover:text-primary transition"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>

                </motion.div>
            </div>
        </div>
    );
}