import { Calendar, Award } from "lucide-react";

const newsItems = [
  {
    title: "Revenue Management with Calendar-Aware and Dependent Demands: A Tight Fluid Approximation",
    description: "presentations at Informs Annual Meeting and Kellogg's OM Rookiepalooza",
    date: "October 2024",
    type: "presentation"
  },
  {
    title: "Revenue Management with Calendar-Aware and Dependent Demands: A Tight Fluid Approximation", 
    description: "presentation at INFORMS Revenue Management and Pricing Section Conference",
    date: "July 2024",
    type: "conference"
  },
  {
    title: "Revenue Management with Calendar-Aware and Dependent Demands",
    description: "Poster at Cornell Young Researchers Workshop, presentation at ORIE Industry and Data Science Summit",
    date: "October 2023", 
    type: "poster"
  }
];

export const NewsSection = () => {
  return (
    <section id="news" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-heading flex items-center gap-3">
          <Calendar className="w-7 h-7 text-primary" />
          News & Updates
        </h2>
        <div className="space-y-6 animate-slide-in">
          {newsItems.map((item, index) => (
            <div 
              key={index}
              className="card-academic p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary-light"></div>
              <div className="pl-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="text-sm font-medium text-primary bg-primary-lighter px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};