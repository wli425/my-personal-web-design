import { ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Revenue Management with Calendar-Aware and Dependent Demands: Asymptotically Tight Fluid Approximations",
    authors: "Weiyuan Li, Paat Rusmevichientong and Huseyin Topaloglu",
    journal: "Operations Research, forthcoming",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4543277",
    type: "publication"
  }
];

const workingPapers = [
  {
    title: "History-dependent fluid approximations and performance guarantees for revenue management with Markov-modulated demands",
    authors: "Weiyuan Li, Paat Rusmevichientong, Huseyin Topaloglu and Jingwei Zhang",
    status: "Major Revision at Operations Research",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5107682",
    type: "working"
  },
  {
    title: "Dynamic pricing over a network of resources under monotonicity constraints",
    authors: "Weiyuan Li, Paat Rusmevichientong and Huseyin Topaloglu",
    status: "Work in Progress",
    link: "",
    type: "working"
  }
];

const PaperCard = ({ paper }: { paper: any }) => (
  <div className="card-academic p-6 group hover:shadow-elegant transition-all duration-300">
    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
      {paper.link ? (
        <a 
          href={paper.link}
          className="link-academic flex items-start gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex-1">{paper.title}</span>
          <ExternalLink className="w-4 h-4 mt-1 opacity-60 group-hover:opacity-100 transition-opacity" />
        </a>
      ) : (
        <span>{paper.title}</span>
      )}
    </h3>
    <p className="text-muted-foreground mb-2">{paper.authors}</p>
    <p className="text-sm text-primary font-medium">
      {paper.journal || paper.status}
    </p>
  </div>
);

export const PublicationsSection = () => {
  return (
    <section id="publications" className="bg-secondary/50">
      <div className="section-container">
        {/* Publications */}
        <div className="mb-12 animate-slide-in">
          <h2 className="section-heading">Publications</h2>
          <div className="space-y-4">
            {publications.map((paper, index) => (
              <PaperCard key={index} paper={paper} />
            ))}
          </div>
        </div>

        {/* Working Papers */}
        <div className="animate-slide-in">
          <h2 className="section-heading">Working Papers</h2>
          <div className="space-y-4">
            {workingPapers.map((paper, index) => (
              <PaperCard key={index} paper={paper} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};