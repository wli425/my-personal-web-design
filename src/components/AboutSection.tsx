export const AboutSection = () => {
  return (
    <section id="about" className="bg-background">
      <div className="section-container">
        <h2 className="section-heading">About Me</h2>
        <div className="card-academic p-8 animate-slide-in">
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              I am a tenure-track Assistant Professor in the Department of Business Analytics and Decision Sciences at WU Vienna University of Economics and Business. I received my Ph.D. in Operations Research from{" "}
              <a href="https://www.orie.cornell.edu/orie" className="link-academic">
                Cornell University
              </a>{" "}
              in 2026, where I was advised by Prof.{" "}
              <a href="https://people.orie.cornell.edu/huseyin/" className="link-academic">
                Huseyin Topaloglu
              </a>
              . Before that, I obtained my B.S. in Mathematics and Applied Mathematics from{" "}
              <a href="https://www.math.pku.edu.cn/puremath_en/" className="link-academic">
                Peking University
              </a>{" "}
              in 2021.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I have a broad interest in modeling stochastic optimization problems and designing provably good algorithms to solve them, with a particular focus on applications in revenue management and pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
