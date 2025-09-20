import { GraduationCap } from "lucide-react";

const teachingExperience = [
  {
    course: "ORIE 5132: Pricing Analytics and Revenue Management",
    institution: "Cornell Tech",
    semester: "Spring 2024 and Spring 2025",
    role: "TA"
  },
  {
    course: "ORIE 5530: Modeling Under Uncertainty", 
    institution: "Cornell Tech",
    semester: "Fall 2023",
    role: "TA"
  },
  {
    course: "ORIE 3510: Introduction to Engineering Stochastic Processes I",
    institution: "Cornell University", 
    semester: "Spring 2023",
    role: "TA"
  },
  {
    course: "ORIE 6700: Statistical Principles",
    institution: "Cornell University",
    semester: "Fall 2022", 
    role: "TA"
  },
  {
    course: "ORIE 3120: Practical Tools for Operations Research, Machine Learning and Data Science",
    institution: "Cornell University",
    semester: "Spring 2022",
    role: "TA"
  }
];

export const TeachingSection = () => {
  return (
    <section id="teaching" className="bg-background">
      <div className="section-container">
        <h2 className="section-heading flex items-center gap-3">
          <GraduationCap className="w-7 h-7 text-primary" />
          Teaching
        </h2>
        <div className="grid gap-4 animate-slide-in">
          {teachingExperience.map((item, index) => (
            <div 
              key={index}
              className="card-academic p-6 border-l-4 border-l-primary/30 hover:border-l-primary transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.course}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.institution}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-primary bg-primary-lighter px-3 py-1 rounded-full">
                    {item.role}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.semester}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};