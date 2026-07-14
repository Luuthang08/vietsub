import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import movies from "../data/movies";

function WatchPage() {
  const { id } = useParams();

  const movie = movies.find((m) => m.id === Number(id));

  const history = JSON.parse(
    localStorage.getItem("lastMovie")
  );

  // Kiểm tra phim có tồn tại không
  if (!movie) {
    return <h2>❌ Không tìm thấy phim</h2>;
  }

  // Danh sách phim liên quan
  const relatedMovies = movies.filter(
    (m) => m.id !== movie.id
  );

  // Video mặc định là tập đầu
  const startEpisode =
  history &&
  history.id === movie.id
    ? history.episode
    : 0;

  const [currentEpisode, setCurrentEpisode] =
    useState(startEpisode);

  const [currentVideo, setCurrentVideo] =
    useState(
      movie.episodesList[startEpisode].video
    );
  const saveHistory = (episodeIndex) => {

  localStorage.setItem(
    "lastMovie",
    JSON.stringify({
      id: movie.id,
      episode: episodeIndex,
    })
  );

};

  return (
    <div className="watch-page">

      {/* Tiêu đề */}
      <h1>{movie.title}</h1>

      {/* Video */}
      <div className="video-player">

        <video
          controls
          autoPlay
        >
          <source
            src={currentVideo}
            type="video/mp4"
          />

          Trình duyệt của bạn không hỗ trợ video.
        </video>

      </div>
      {/* Thông tin */}
      <div className="watch-info">

        <p className="movie-rating">
          <strong>Đánh giá:</strong>

          {"⭐".repeat(Math.floor(movie.rating))}
          {"☆".repeat(5 - Math.floor(movie.rating))}

          {" "}
          {movie.rating.toFixed(1)}/5.0
        </p>

        <p>
          🌍 <strong>Quốc gia:</strong> {movie.country}
        </p>

        <p>
          🎭 <strong>Thể loại:</strong> {movie.genre}
        </p>

        <p>
          📅 <strong>Năm phát hành:</strong> {movie.year}
        </p>

        <p>
          🎬 <strong>Đạo diễn:</strong> {movie.director}
        </p>

      </div>

      {/* Danh sách tập */}
      <h2 className="section-title">
        🎞 Danh sách tập
      </h2>

      <div className="episode-list">

        {movie.episodesList.map((ep, index) => (

          <button
            key={ep.id}
            className={
              currentEpisode === index
                ? "episode-btn active-episode"
                : "episode-btn"
            }
            onClick={() => {

              setCurrentEpisode(index);

              setCurrentVideo(ep.video);

              saveHistory(index);

            }}
          >
            {ep.title}
          </button>

        ))}

      </div>

      {/* Thông tin chi tiết */}
      <div className="movie-description">

        <h2>Thông tin phim</h2>

        <p>
          👥 <strong>Diễn viên:</strong> {movie.actors}
        </p>

        <p>
          ⏱ <strong>Thời lượng:</strong> {movie.duration}
        </p>

        <p>
          🎬 <strong>Số tập:</strong> {movie.episodes}
        </p>

        <h3>Mô tả</h3>

        <p>{movie.description}</p>

      </div>

      <hr />

      {/* Phim liên quan */}
      <h2>🎬 Phim liên quan</h2>

      <div className="related-movies">

        {relatedMovies.slice(0, 4).map((item) => (

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

            <p>
              ⭐⭐⭐⭐⭐ {item.rating.toFixed(1)}/5.0
            </p>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default WatchPage;