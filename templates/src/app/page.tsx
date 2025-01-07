import React from 'react';
import { siteConfig } from '@/config/site';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Benefits from '@/components/sections/Benefits';
import Solution from '@/components/sections/Solution';
import HowItWorks from '@/components/sections/HowItWorks';
import Integrations from '@/components/sections/Integrations';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function Home() {
    return (
        <main>
            <Hero />
            <Features features={siteConfig.features} />
            <Benefits />
            <Solution />
            <HowItWorks />
            <Integrations />
            <Testimonials testimonials={siteConfig.testimonials} />
            <FAQ faqs={siteConfig.faqs} />
            <CTA />
        </main>
    );
} 