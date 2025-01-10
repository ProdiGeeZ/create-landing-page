'use client';

import { useEffect, useState } from 'react';

export function AnimatedGradient() {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

            // Calculate opacity - start fading when we're 80% down the page
            const fadeStart = maxScroll * 0.8;
            const fadeRange = maxScroll - fadeStart;
            const newOpacity = scrollY > fadeStart
                ? Math.max(0, 1 - (scrollY - fadeStart) / fadeRange)
                : 1;

            setOffset({
                x: scrollY / 30,
                y: scrollY / 15
            });
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-background" />

            {/* Primary blob */}
            <div
                className="absolute top-[-50%] left-[-10%] h-[1000px] w-[1000px] rounded-full 
                    bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.08),transparent_50%)]
                    blur-[100px] dark:bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1),transparent_50%)]
                    transition-transform duration-700 ease-out will-change-transform select-none"
                style={{
                    transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.8}px)`,
                    opacity
                }}
                aria-hidden="true"
            />

            {/* Secondary blob */}
            <div
                className="absolute top-[25%] right-[-10%] h-[800px] w-[800px] rounded-full 
                    bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_50%)]
                    blur-[80px] dark:bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.08),transparent_50%)]
                    transition-transform duration-700 ease-out will-change-transform select-none"
                style={{
                    transform: `translate(${offset.x * -0.7}px, ${offset.y * 0.5}px)`,
                    opacity
                }}
                aria-hidden="true"
            />

            {/* Accent blob */}
            <div
                className="absolute bottom-[-20%] left-[30%] h-[600px] w-[600px] rounded-full 
                    bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_50%)]
                    blur-[60px] dark:bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_50%)]
                    transition-transform duration-700 ease-out will-change-transform select-none"
                style={{
                    transform: `translate(${offset.x * 0.3}px, ${offset.y * -0.6}px)`,
                    opacity
                }}
                aria-hidden="true"
            />
        </div>
    );
} 