import { Briefcase } from "lucide-react";

const industrialExperience = [
  {
    title: "Research Scientist Intern",
    company: "Amazon, Fulfillment by Amazon Science Team",
    location: "Bellevue",
    period: "Summer 2025",
    type: "internship"
  },
  {
    title: "Quant Researcher Intern",
    company: "Goldman Sachs, Equity Flow Vol Team",
    location: "Hong Kong",
    period: "Summer 2020",
    type: "internship"
  },
  {
    title: "Quant Researcher Intern",
    company: "Ubiquant(Jiukun) Investment, High Frequency Trading Team",
    location: "Beijing",
    period: "Summer 2019",
    type: "internship"
  }
];

export const IndustrySection = () => {
  return (
    <section id="industry" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-heading flex items-center gap-3">
          <Briefcase className="w-7 h-7 text-primary" />
          Industrial Experience
        </h2>
        <div className="grid gap-4 animate-slide-in">
          {industrialExperience.map((item, index) => (
            <div 
              key={index}
              className="card-academic p-6 border-l-4 border-l-primary/30 hover:border-l-primary transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.company}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {item.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-primary bg-primary-lighter px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};