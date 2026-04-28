'use client';

import { Toaster } from "react-hot-toast";
import { Cursor } from "./shared/Cursor";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./shared/ScrollToTop";
import { useEffect } from "react";
import { useThemeStore } from "@/store";



const Provider = ({ children }: { children: React.ReactNode }) => {

    const { theme } = useThemeStore();

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        if (theme === 'light') {
            document.documentElement.classList.add('light');
        }
    }, [theme]);


    return (
        <>


            <div className={theme}>
                <Cursor />
                <Navbar />
                {children}
                <Toaster
                    position="bottom-right"
                    toastOptions={{
                        style: {
                            background: 'var(--card)',
                            color: 'var(--foreground)',
                            border: '1px solid var(--border)',
                        },
                    }}
                />
                <Footer />
                <ScrollToTop />
            </div>


        </>
    );
};

export default Provider;