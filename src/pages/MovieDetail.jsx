import { Link, useParams } from "react-router-dom";
import movies from "../data/movies";
import CommentSection from "../components/CommentSection";

function MovieDetail() {
  const { id } = useParams();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <h2>❌ Không tìm thấy phim</h2>;
  }

  // Phim liên quan
  const relatedMovies = movies.filter(
    (m) => m.id !== movie.id
  );

  return (
    <>
      {/* ================= THÔNG TIN PHIM ================= */}

      <div className="detail">

  <div className="detail-top">

    {/* Poster */}
    <img
      src={movie.image}
      alt={movie.title}
    />

    {/* Thông tin */}
    <div className="info">

      <h1>{movie.title}</h1>

      <p className="movie-rating">
        ⭐⭐⭐⭐⭐ {movie.rating.toFixed(1)}/5.0
      </p>

      <p>🌍 <strong>Quốc gia:</strong> {movie.country}</p>

      <p>🎭 <strong>Thể loại:</strong> {movie.genre}</p>

      <p>📅 <strong>Năm phát hành:</strong> {movie.year}</p>

      <p>🎬 <strong>Số tập:</strong> {movie.episodes}</p>

      <p>⏱ <strong>Thời lượng:</strong> {movie.duration}</p>

      <p>🎥 <strong>Đạo diễn:</strong> {movie.director}</p>

      <p>👥 <strong>Diễn viên:</strong> {movie.actors}</p>

      <Link to={`/watch/${movie.id}`}>
        <button className="watch-btn">
          ▶ Xem ngay
        </button>
      </Link>

    </div>

  </div>

</div>

      {/* ================= MÔ TẢ ================= */}

      <div className="movie-description">

        <h2>📝 Mô tả phim</h2>

        <p>{movie.description}</p>

      </div>

      {/* ================= BÌNH LUẬN ================= */}

      <CommentSection movieId={movie.id} />

      {/* ================= PHIM LIÊN QUAN ================= */}

      <div className="related-section">

        <h2>🎬 Phim liên quan</h2>

        <div className="related-movies">

          {relatedMovies.map((item) => (

            <Link
              key={item.id}
              to={`/movie/${item.id}`}
              className="related-card"
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <h4>{item.title}</h4>

              <p>⭐ {item.rating}</p>

            </Link>

          ))}

        </div>

      </div>

    </>
  );
}

export default MovieDetail;