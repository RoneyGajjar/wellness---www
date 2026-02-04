'use client';
import Hero from "@/components/header_and_hero";
import About from "@/components/about";
import Whyus from "@/components/whyus";
import Pricing from "@/components/service";
// import Testimonial from "@/components/testimonials";
import Footer from "@/components/footer";
import Contact from "@/components/contact"; 
import Meet from "@/components/meet";

export default function Home() {
  return (
    <>
      {/* Hero Section and Header section */}
      <Hero />

      {/* About */}
      <About />

      {/* Why chose Homeopathy */}
      <Whyus />
      
      {/* Service Offered */}
      <Pricing />

      {/* meet */}
      <Meet />

      {/* Contact */}
      {/* <Contact /> */}

      {/* Testimonial */}
      {/* <Testimonial /> */}
      
      {/* Footer */}
      <Footer />
    </>

  );
}
