import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import PuppyShowcase from "@/components/PuppyShowcase";
import WhyShihTzu from "@/components/WhyShihTzu";
import Included from "@/components/Included";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <PuppyShowcase />
      <WhyShihTzu />
      <Included />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
