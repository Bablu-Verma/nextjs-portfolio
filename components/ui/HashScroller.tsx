'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HashScroller() {
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const hash = window.location.hash;

            if (hash) {
                const el = document.querySelector(hash);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        // small delay ensures DOM is ready
        setTimeout(handleScroll, 100);
    }, [pathname]);

    return null;
}