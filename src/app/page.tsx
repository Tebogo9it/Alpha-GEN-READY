"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import ProgramsSection from "@/components/ProgramsSection";
import ImpactSection from "@/components/ImpactSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <FocusAreasSection />
            <ProgramsSection />
            <ImpactSection />
            <PartnersSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
