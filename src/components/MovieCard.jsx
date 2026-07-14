import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleClick = () => {

    setLoading(true);

    setTimeout(() => {
      navigate(`/movie/${movie.id}`);
    }, 800);

  };

    return (
    <>
      {loading && <Loading />}

      <div
        onClick={handleClick}
        style={{
          textDecoration: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        <div className="movie-card">

          <div className="movie-image">

            <div className="quality">
              FHD
            </div>

            <div className="episode-tag">
              {movie.episodes}
            </div>

            <img
              src={movie.image}
              alt={movie.title}
            />

            <div className="movie-overlay">
              <button>
                ▶ Xem ngay
              </button>
            </div>

          </div>

          <div className="movie-info">

            <h3>{movie.title}</h3>

            <p className="movie-meta">
              {movie.genre} • {movie.country}
            </p>

            <p className="movie-score">
              ⭐ {movie.rating.toFixed(1)}/5.0
            </p>

          </div>

        </div>
      </div>
    </>
  );
}
export default MovieCard;