import { Presentation, Award, Trophy } from "lucide-react";

const talksAndPosters = [
  {
    title: "History-Dependent Fluid Approximations for Revenue Management with Markov-Modulated Demands",
    events: [
      {
        event: "INFORMS, Job Market Showcase",
        location: "Atlanta",
        date: "Oct 2025",
        type: "presentation"
      },
      {
        event: "Cornell Young Researchers Workshop",
        location: "Ithaca", 
        date: "Oct 2025",
        type: "presentation"
      },
      {
        event: "YinzOR Workshop, Fan Favorite Prize",
        location: "Pittsburgh",
        date: "August 2025",
        type: "poster",
        award: true
      }
    ],
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5107682"
  },
  {
    title: "Revenue Management with Calendar-Aware and Dependent Demands: A Tight Fluid Approximation",
    events: [
      {
        event: "Informs Annual Meeting and Kellogg's OM Rookiepalooza",
        location: "Chicago",
        date: "October 2024",
        type: "presentation"
      },
      {
        event: "INFORMS Conference",
        location: "Seattle",
        date: "October 2024", 
        type: "presentation"
      },
      {
        event: "INFORMS Revenue Management and Pricing Section Conference",
        location: "Los Angeles",
        date: "July 2024",
        type: "presentation"
      },
      {
        event: "Cornell Young Researchers Workshop",
        location: "Ithaca",
        date: "October 2023",
        type: "poster"
      },
      {
        event: "Cornell Industry and Data Science Summit",
        location: "Ithaca",
        date: "October 2023",
        type: "presentation"
      }
    ]
  }
];

export const TalksSection = () => {
  return (
    <section id="talks" className="bg-background">
      <div className="section-container">
        <h2 className="section-heading flex items-center gap-3">
          <Presentation className="w-7 h-7 text-primary" />
          Talks & Posters
        </h2>
        <div className="space-y-8 animate-slide-in">
          {talksAndPosters.map((paper, paperIndex) => (
            <div key={paperIndex} className="card-academic p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {paper.title}
              </h3>
              <div className="space-y-3">
                {paper.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex}
                    className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg border border-border/50"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {event.type === "poster" ? (
                        <Award className="w-5 h-5 text-primary" />
                      ) : (
                        <Presentation className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-medium text-foreground flex items-center gap-2">
                            {event.event}
                            {event.award && <Trophy className="w-4 h-4 text-amber-500" />}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {event.location} • {event.date}
                          </p>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          event.type === "poster" 
                            ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                        }`}>
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};