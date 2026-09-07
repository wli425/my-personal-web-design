import { Mail, MapPin, Linkedin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-section-gradient">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="hero-text">Weiyuan Li</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium">
                Assistant Professor
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                Department of Business Analytics and Decision Sciences
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                WU Vienna University of Economics and Business
              </p>
            </div>

            <div className="space-y-3 text-muted-foreground text-sm md:text-base">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                <span>Vienna, Austria</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-primary" />
                <a href="mailto:Weiyuan.Li@wu.ac.at" className="link-academic">
                  Weiyuan.Li@wu.ac.at
                </a>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <a
                  href="mailto:Weiyuan.Li@wu.ac.at"
                  aria-label="Send email to Weiyuan.Li@wu.ac.at"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <a
                  href="https://www.linkedin.com/in/weiyuan-li-458191279"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <a
                  href="https://scholar.google.com/citations?user=9rZVykoAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Scholar Profile"
                >
                  <GraduationCap className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={`${import.meta.env.BASE_URL}images/weiyuan-li-graduation.webp`}
                alt="Weiyuan Li - Assistant Professor at WU Vienna"
                width={600}
                height={1066}
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
