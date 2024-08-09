import { Navbar } from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Testimonials />
    </div>
  );
}