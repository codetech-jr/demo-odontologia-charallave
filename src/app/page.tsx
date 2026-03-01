import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ActionButtons from "./components/ActionButtons";
import Services from "./components/Services";
import TeamSection from "./components/TeamSection";
import PreConsultWizard from "./components/PreConsultWizard";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ClosingCTA from "./components/ClosingCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* [1] Sticky navigation */}
      <Navbar />

      <main>
        {/* [2] Hero — full-screen with dual CTA */}
        <Hero />

        {/* [3] Quick action cards */}
        <ActionButtons />

        {/* [3.5] Dedicated Services Section */}
        <Services />

        {/* [4] Team authority & trust */}
        <TeamSection />

        {/* [5] Pre-consult wizard — 4 steps with phone capture */}
        <PreConsultWizard />

        {/* [6] Real before/after drag sliders */}
        <BeforeAfter />

        {/* [7] Social proof — testimonials */}
        <Testimonials />

        {/* [8] FAQ accordion */}
        <FAQ />

        {/* [9] FOMO closing CTA */}
        <ClosingCTA />
      </main>

      {/* [10] Professional footer */}
      <Footer />
    </>
  );
}
