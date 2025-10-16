export const AboutSection = () => {
  return (
    <section id="about" className="bg-background">
      <div className="section-container">
        <h2 className="section-heading">About Me</h2>
        <div className="card-academic p-8 animate-slide-in">
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              I'm a fifth year Ph.D. candidate in Operations Research at{" "}
              <a href="https://www.orie.cornell.edu/orie" className="link-academic">
                Cornell University
              </a>
              , advised by Prof.{" "}
              <a href="https://people.orie.cornell.edu/huseyin/" className="link-academic">
                Huseyin Topaloglu
              </a>
              . I am also fortunate to work with Prof.{" "}
              <a href="http://faculty.marshall.usc.edu/Paat-Rusmevichientong/" className="link-academic">
                Paat Rusmevichientong
              </a>{" "}
              at{" "}
              <a href="https://www.marshall.usc.edu/" className="link-academic">
                University of Southern California
              </a>
              . Before that, I obtained B.S. in Mathematics and Applied Mathematics from{" "}
              <a href="https://www.math.pku.edu.cn/puremath_en/" className="link-academic">
                Peking University
              </a>{" "}
              in 2021.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I have a broad interest in modeling stochastic optimization problems and designing provably good algorithms to solve them, with a particular focus on applications in revenue management and pricing.
            </p>
            <p className="text-lg leading-relaxed">
              I am on the 2025-2026 job market. My INFORMS Job Market Showcase talk will be at Building A Level 3 A316, 3:03–3:21pm, Sunday, October 26.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};