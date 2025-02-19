
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SponsorsSection } from "@/components/SponsorsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SponsorsSection />
    </div>
  );
};

export default Index;
