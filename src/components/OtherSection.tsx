import { Film } from "lucide-react";

const favoriteMovies = [
  { title: "Peppermint Candy", year: 1999, director: "Lee Chang-dong", poster: "/posters/peppermint-candy.jpg" },
  { title: "Un Poeta", year: 2025, director: "Darezhan Omirbayev", poster: "/posters/poet.jpg" },
  { title: "Les glaneurs et la glaneuse", year: 2000, director: "Agnès Varda", poster: "/posters/gleaners.jpg" },
  { title: "The Room Next Door", year: 2024, director: "Pedro Almodóvar", poster: "/posters/room-next-door.jpg" },
  { title: "Where Is the Friend's House?", year: 1987, director: "Abbas Kiarostami", poster: "/posters/friends-house.jpg" },
  { title: "A City of Sadness", year: 1989, director: "Hou Hsiao-hsien", poster: "/posters/city-sadness.jpg" },
  { title: "After the Storm", year: 2016, director: "Hirokazu Kore-eda", poster: "/posters/after-storm.jpg" },
  { title: "Still Life", year: 2006, director: "Jia Zhangke", poster: "/posters/still-life.jpg" },
  { title: "Solaris", year: 1972, director: "Andrei Tarkovsky", poster: "/posters/solaris.jpg" },
  { title: "Mulholland Drive", year: 2001, director: "David Lynch", poster: "/posters/mulholland-drive.jpg" },
  { title: "Roma", year: 2018, director: "Alfonso Cuarón", poster: "/posters/roma.jpg" },
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
                <img 
                  src={movie.poster} 
                  alt={`${movie.title} (${movie.year})`}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-3 text-center">
                  <p className="text-xs font-medium text-foreground line-clamp-2 mb-1">
                    {movie.title}
                  </p>
                  <p className="text-xs text-muted-foreground opacity-80">
                    {movie.director}, {movie.year}
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
