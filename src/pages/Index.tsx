import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

// Lazy loading the rest of the sections to optimize the initial page load speed
const AboutSection = React.lazy(() => import("@/components/AboutSection"));
const RegistrationSection = React.lazy(() => import("@/components/RegistrationSection"));
const DomainsSection = React.lazy(() => import("@/components/DomainsSection"));
const SessionStatsSection = React.lazy(() => import("@/components/SessionStatsSection"));
const GallerySection = React.lazy(() => import("@/components/GallerySection"));
const ElectriciensSection = React.lazy(() => import("@/components/ElectriciensSection"));
const DownloadsSection = React.lazy(() => import("@/components/DownloadsSection"));
const FAQSection = React.lazy(() => import("@/components/FAQSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />

      {/* Fallback spinner while other sections are loading in the background */}
      <Suspense fallback={<div className="flex justify-center items-center py-20 text-muted-foreground animate-pulse">Chargement des sections...</div>}>
        <AboutSection />
        <RegistrationSection />
        <DomainsSection />
        <SessionStatsSection />
        <GallerySection />
        <ElectriciensSection />
        <DownloadsSection />
        <FAQSection />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
