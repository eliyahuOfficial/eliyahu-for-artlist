import { Navbar } from "@/components/shell/Navbar";
import { Footer } from "@/components/shell/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhatIBuilt } from "@/components/sections/WhatIBuilt";
import { MockLaunchPreview } from "@/components/sections/MockLaunchPreview";
import { AboutMe } from "@/components/sections/AboutMe";
import { WhyMe } from "@/components/sections/WhyMe";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <WhatIBuilt />
        <MockLaunchPreview />
        <AboutMe />
        <WhyMe />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
