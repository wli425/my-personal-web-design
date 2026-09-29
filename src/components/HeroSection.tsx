import { Mail, MapPin, Linkedin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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

            <div className="flex flex-wrap gap-3 pt-2">
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
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Show ORCID"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0ZM7.5 5.5a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6ZM6.4 9v9h2.2V9H6.4Zm4.2-3v12h3.8c3.6 0 5.7-2.2 5.7-6s-2.1-6-5.7-6h-3.8Zm2.2 2.2h1.5c2.4 0 3.6 1.3 3.6 3.8s-1.2 3.8-3.6 3.8h-1.5V8.2Z"
                      />
                    </svg>
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto">
                  <p className="mb-1 text-xs font-medium text-muted-foreground">ORCID</p>
                  <a
                    href="https://orcid.org/0000-0002-7125-7706"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-academic text-sm"
                  >
                    0000-0002-7125-7706
                  </a>
                </PopoverContent>
              </Popover>
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
