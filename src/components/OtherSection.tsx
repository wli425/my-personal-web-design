import { Film } from "lucide-react";

const favoriteMovies = [
  { title: "Peppermint Candy", year: 1999, director: "Lee Chang-dong", poster: "/posters/peppermint-candy.jpg" },
  { title: "Les glaneurs et la glaneuse", year: 2000, director: "Agnès Varda", poster: "/posters/gleaners.jpg" },
  { title: "The Room Next Door", year: 2024, director: "Pedro Almodóvar", poster: "/posters/room-next-door.jpg" },
  { title: "Where Is the Friend's House?", year: 1987, director: "Abbas Kiarostami", poster: "/posters/friends-house.jpg" },
  { title: "A City of Sadness", year: 1989, director: "Hou Hsiao-hsien", poster: "/posters/city-sadness.jpg" },
  { title: "After the Storm", year: 2016, director: "Hirokazu Kore-eda", poster: "/posters/after-storm.jpg" },
  { title: "Pina", year: 2011, director: "Wim Wenders", poster: "/posters/pina.jpg" },
  { title: "Landscape in the Mist", year: 1988, director: "Theo Angelopoulos", poster: "/posters/landscape-mist.jpg" },
  { title: "Solaris", year: 1972, director: "Andrei Tarkovsky", poster: "/posters/solaris.jpg" },
  { title: "Roma", year: 2018, director: "Alfonso Cuarón", poster: "/posters/roma.jpg" },
];

export const OtherSection = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedMovies = [...favoriteMovies, ...favoriteMovies];

  return (
    <section id="other" className="py-8 bg-muted/30 overflow-hidden">
      <div className="flex items-center gap-2 mb-6 justify-center opacity-60">
        <Film className="w-4 h-4 text-muted-foreground" />
        <h2 className="text-sm font-medium text-muted-foreground tracking-wide">
          My favorite film exhibition
        </h2>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll hover:[animation-play-state:paused]">
          {duplicatedMovies.map((movie, index) => (
            <div
              key={`${movie.title}-${movie.year}-${index}`}
              className="group relative flex-shrink-0 w-32 sm:w-40 aspect-[2/3] bg-muted/50 rounded-md overflow-hidden border border-border/50 hover:border-border transition-all hover:shadow-sm mx-2"
            >
              <img 
                src={movie.poster} 
                alt={`${movie.title} (${movie.year})`}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-3 text-center">
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
    </section>
  );
};
