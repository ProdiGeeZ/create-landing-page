import Navbar from '@/components/layout/Navbar';
import SocialProof from '@/components/sections/SocialProof';
import Features from '@/components/sections/Features';
import Solution from '@/components/sections/Solution';
import Benefits from '@/components/sections/Benefits';
import HowItWorks from '@/components/sections/HowItWorks';
import Integrations from '@/components/sections/Integrations';
import Testimonials from '@/components/sections/Testimonials';
import FAQSection from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <>
      <Navbar items={siteConfig.nav} />
      <main>
        <Hero />
        <SocialProof />
        <Features features={siteConfig.features} />
        <Solution />
        <Benefits />
        <HowItWorks />
        <Integrations />
        <Testimonials />
        <FAQSection faqs={siteConfig.faqs} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
