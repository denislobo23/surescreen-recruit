import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Comparison from "@/components/Comparison";
import HowItWorks from "@/components/HowItWorks";
import TalentPool from "@/components/TalentPool";
import Pricing from "@/components/Pricing";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Comparison />
      <HowItWorks />
      <TalentPool />
      <Pricing />
      <Waitlist />
      <Footer />
    </main>
  );
}
