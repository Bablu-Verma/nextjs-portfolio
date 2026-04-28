'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BackButtonProps {
    label?: string;
    fallbackHref?: string;
    className?: string;
}

export function BackButton({
    label = 'Go Back',
    fallbackHref = '/',
    className,
}: BackButtonProps) {
    const router = useRouter();

    const handleBack = () => {
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push(fallbackHref);
        }
    };

    return (
        <motion.button
            onClick={handleBack}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                'inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8',
                className
            )}
        >
            <ArrowLeft className="w-4 h-4" />
            {label}
        </motion.button>
    );
}