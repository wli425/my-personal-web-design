import { Film } from "lucide-react";

const favoriteMovies = [
  { title: "Peppermint Candy", year: 1999, director: "Lee Chang-dong" },
  { title: "Un Poeta", year: 2025, director: "Darezhan Omirbayev" },
  { title: "Les glaneurs et la glaneuse", year: 2000, director: "Agnès Varda" },
  { title: "Crouching Tiger, Hidden Dragon", year: 2000, director: "Ang Lee" },
  { title: "The Room Next Door", year: 2024, director: "Pedro Almodóvar" },
  { title: "Kaili Blues", year: 2015, director: "Bi Gan" },
  { title: "Where Is the Friend's House?", year: 1987, director: "Abbas Kiarostami" },
  { title: "A City of Sadness", year: 1989, director: "Hou Hsiao-hsien" },
  { title: "After the Storm", year: 2016, director: "Hirokazu Kore-eda" },
  { title: "Still Life", year: 2006, director: "Jia Zhangke" },
  { title: "Solaris", year: 1972, director: "Andrei Tarkovsky" },
  { title: "Mulholland Drive", year: 2001, director: "David Lynch" },
  { title: "Roma", year: 2018, director: "Alfonso Cuarón" },
];

export const OtherSection = () => {
  return (
    <section id="other" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-6 justify-center opacity-60">
          <Film className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-sm font-medium text-muted-foreground tracking-wide">
            Other
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-muted-foreground text-center mb-6 opacity-75">
            Some films that have influenced my perspective
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {favoriteMovies.map((movie) => (
              <div
                key={`${movie.title}-${movie.year}`}
                className="group relative aspect-[2/3] bg-muted/50 rounded-md overflow-hidden border border-border/50 hover:border-border transition-all hover:shadow-sm"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                  <p className="text-xs font-medium text-foreground/80 line-clamp-2 mb-1">
                    {movie.title}
                  </p>
                  <p className="text-xs text-muted-foreground opacity-60">
                    {movie.year}
                  </p>
                  <p className="text-xs text-muted-foreground opacity-50 mt-1 line-clamp-2">
                    {movie.director}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
