import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { IndustrySection } from "@/components/IndustrySection";
import { TeachingSection } from "@/components/TeachingSection";
import { TalksSection } from "@/components/TalksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PublicationsSection />
        <IndustrySection />
        <TeachingSection />
        <TalksSection />
      </main>
    </div>
  );
};

export default Index;
