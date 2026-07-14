import { Link } from "react-router-dom";

function MovieCardSearch({ movie, onClick }) {

  return (

    <Link
      to={`/movie/${movie.id}`}
      onClick={onClick}
      style={{
        textDecoration: "none",
        color: "white"
      }}
    >

      <div className="search-item">

        <img
          src={movie.image}
          alt={movie.title}
        />

        <div>

          <h4>{movie.title}</h4>

          <p>
            ⭐ {movie.rating}
          </p>

        </div>

      </div>

    </Link>

  );

}

export default MovieCardSearch;