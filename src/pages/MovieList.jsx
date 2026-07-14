import { useParams } from "react-router-dom";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

function MovieList() {
  const { type } = useParams();

  let movieList = [];

  switch (type) {
    case "new":
      movieList = movies;
      break;

    case "featured":
      movieList = movies.slice(0, 6);
      break;

    case "top":
      movieList = [...movies].sort(
        (a, b) => b.rating - a.rating
      );
      break;

    default:
      movieList = movies;
  }

  return (
    <div className="movies">

      <h1 style={{ color: "white", marginBottom: "30px" }}>
        Danh sách phim
      </h1>

      <div className="movie-grid">

        {movieList.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </div>
  );
}

export default MovieList;