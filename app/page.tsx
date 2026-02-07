import Aboutme from "@/components/about";
import Hero from "@/components/hero-navbar";
import HeroSection from "@/components/whyus";
import SpecialistsData from "@/components/specialists";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Parallax from "@/components/parallax";

export default function Home() {
  return (
    <>
      {/* Hero */}    
      <Hero />

      {/* parallax */}
      <Parallax />

      {/* Why us */}
      <HeroSection />
      
      {/* About */}
      <Aboutme />
    
      {/* specialists */}
      <SpecialistsData />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}
