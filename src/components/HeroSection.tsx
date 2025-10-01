import { Mail, MapPin, Linkedin, GraduationCap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
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
                Ph.D. Candidate in Operations Research
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                Cornell University / Cornell Tech
              </p>
            </div>

            <div className="space-y-3 text-muted-foreground text-sm md:text-base">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>2 West Loop Road, New York, NY 10044</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>wl425 "at" cornell "dot" edu</span>
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
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <a
                  href="mailto:wl425@cornell.edu"
                  aria-label="Send email to wl425@cornell.edu"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={profilePhoto}
                alt="Weiyuan Li - Ph.D. Candidate at Cornell University"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};