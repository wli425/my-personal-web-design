import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { TeachingSection } from "@/components/TeachingSection";
import { NewsSection } from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PublicationsSection />
        <TeachingSection />
        <NewsSection />
      </main>
    </div>
  );
};

export default Index;
