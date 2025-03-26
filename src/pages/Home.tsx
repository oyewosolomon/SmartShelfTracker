import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Analytics from "@/components/sections/Analytics";
import Success from "@/components/sections/Success";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import FAQ from "@/components/sections/FAQ";
import ProductDemo from "@/components/sections/ProductDemo";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";
import { smoothScrollTo } from "../utils/smoothScroll";

export default function Home() {

  useEffect(() => {
    // Smooth scroll to section when URL has a hash (e.g., #features)
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace("#", "");
      smoothScrollTo(targetId);
    }
  }, []);
  
  return (
    <main>
      <Hero />
      <Features id="features" />
      <ProductDemo id="product-demo" />
      <Analytics id="analytics" />
      <Pricing id="pricing" />
      <Partners id="partners" />
      {/* <Success id="success" /> */}
      <hr />
      <FAQ id="faq" />
      <Team id="team" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
}