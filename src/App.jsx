import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import movies from "./data/movies";
import MovieCard from "./components/MovieCard";

import MovieDetail from "./pages/MovieDetail";
import WatchPage from "./pages/WatchPage";

import BannerSlider from "./components/BannerSlider";

import Footer from "./components/Footer";

import MovieCardSearch from "./components/MovieCardSearch";

import MovieList from "./pages/MovieList";


function HomePage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Tất cả");
  const [selectedCountry, setSelectedCountry] = useState("Tất cả");
  const [selectedType, setSelectedType] = useState("Tất cả");
  const [sortByRating, setSortByRating] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 4;

  const isFiltering =
    search.trim() !== "" ||
    selectedGenre !== "Tất cả" ||
    selectedCountry !== "Tất cả" ||
    selectedType !== "Tất cả" ||
    sortByRating;
 const filteredMovies = movies
  .filter((movie) => {
    // Tìm kiếm theo tên
    const matchSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    // Lọc theo thể loại
    const matchGenre =
      selectedGenre === "Tất cả" ||
      movie.genre === selectedGenre;

    // Lọc theo quốc gia
    const matchCountry =
      selectedCountry === "Tất cả" ||
      movie.country === selectedCountry;

    // Lọc theo loại phim
    const matchType =
      selectedType === "Tất cả" ||
      movie.type === selectedType;

    return (
      matchSearch &&
      matchGenre &&
      matchCountry &&
      matchType
    );
  })
  .sort((a, b) => {
    if (sortByRating) {
      return b.rating - a.rating;
    }
    return 0;
  });

    // ======================
    // Các danh sách phim
    // ======================

    // Phim nổi bật (3 phim đầu)
    const featuredMovies = filteredMovies.slice(0, 3);

    // Phim BL
     const blMovies = filteredMovies.filter(
      (movie) => movie.genre === "BL"
    );

    // Phim Cổ trang
    const costumeMovies = filteredMovies.filter(
      (movie) => movie.genre === "Cổ trang"
    );

    // Top đánh giá
    const topMovies = [...filteredMovies].sort(
      (a, b) => b.rating - a.rating
    );

    // Tổng số trang
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    console.log(filteredMovies.length);
    console.log(totalPages);

    // Chỉ lấy phim của trang hiện tại
    const currentMovies = filteredMovies.slice(
      (currentPage - 1) * moviesPerPage,
      currentPage * moviesPerPage
    );


  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <h1
          className="logo"
          onClick={() => {
            setSearch("");
            setSelectedGenre("Tất cả");
            setSelectedCountry("Tất cả");
            setSelectedType("Tất cả");
            setSortByRating(false);

            navigate("/");
          }}
        >
          🎬 Vietsub
        </h1>

        <nav>
          <button
            className="menu-btn"
            onClick={() => {
              setSearch("");
              setSelectedGenre("Tất cả");
              setSelectedCountry("Tất cả");
              setSelectedType("Tất cả");
              setSortByRating(false);
            }}
          >
            Trang chủ
          </button>

          {/* Thể loại */}
          <div className="dropdown">
            <a href="#">Thể loại ▾</a>

            <div className="dropdown-content">
              <button
                onClick={() => {
                  setSelectedGenre("Tất cả");
                  setSelectedCountry("Tất cả");
                }}
              >
                Tất cả
              </button>

              <button
                onClick={() => {
                  setSelectedCountry("Tất cả");
                  setSelectedGenre("BL");
                }}
              >
                BL
              </button>

              <button
                onClick={() => {
                  setSelectedCountry("Tất cả");
                  setSelectedGenre("Cổ trang");
                }}
              >
                Cổ trang
              </button>

              <button
                onClick={() => {
                  setSelectedCountry("Tất cả");
                  setSelectedGenre("Bí ẩn");
                }}
              >
                Bí ẩn
              </button>

              <button
                onClick={() => {
                  setSelectedCountry("Tất cả");
                  setSelectedGenre("Giả tưởng");
                }}
              >
                Giả tưởng
              </button>

              <button
                onClick={() => {
                  setSelectedCountry("Tất cả");
                  setSelectedGenre("Tình cảm");
                }}
              >
                Tình cảm
              </button>

              <button
                onClick={() => {
                  setSelectedCountry("Tất cả");
                  setSelectedGenre("Hành động");
                }}
              >
                Hành động
              </button>

              <button
                onClick={() => {
                  setSelectedCountry("Tất cả");
                  setSelectedGenre("Kinh dị");
                }}
              >
                Kinh dị
              </button>
            </div>
          </div>

          {/* Quốc gia */}
          <div className="dropdown">
            <a href="#">Quốc gia ▾</a>

            <div className="dropdown-content">
              <button
                onClick={() => {
                  setSelectedGenre("Tất cả");
                  setSelectedCountry("Tất cả");
                }}
              >
                Tất cả
              </button>

              <button
                onClick={() => {
                  setSelectedGenre("Tất cả");
                  setSelectedCountry("Việt Nam");
                }}
              >
                Việt Nam
              </button>

              <button
                onClick={() => {
                  setSelectedGenre("Tất cả");
                  setSelectedCountry("Thái Lan");
                }}
              >
                Thái Lan
              </button>

              <button
                onClick={() => {
                  setSelectedGenre("Tất cả");
                  setSelectedCountry("Hàn Quốc");
                }}
              >
                Hàn Quốc
              </button>

              <button
                onClick={() => {
                  setSelectedGenre("Tất cả");
                  setSelectedCountry("Trung Quốc");
                }}
              >
                Trung Quốc
              </button>

              <button
                onClick={() => {
                  setSelectedGenre("Tất cả");
                  setSelectedCountry("Mỹ");
                }}
              >
                Mỹ
              </button>
            </div>
          </div>

         <button
            className="menu-btn"
            onClick={() => {
              setSelectedGenre("Tất cả");
              setSelectedCountry("Tất cả");
              setSelectedType("Phim lẻ");
              setSortByRating(false);
            }}
          >
            Phim lẻ
          </button>

          <button
            className="menu-btn"
            onClick={() => {
              setSelectedGenre("Tất cả");
              setSelectedCountry("Tất cả");
              setSelectedType("Phim bộ");
              setSortByRating(false);
            }}
          >
            Phim bộ
          </button>

          <button
            className="menu-btn"
            onClick={() => {
              setSelectedGenre("Tất cả");
              setSelectedCountry("Tất cả");
              setSelectedType("Hoạt hình");
              setSortByRating(false);
            }}
          >
            Hoạt hình
          </button>

          <button
            className="menu-btn"
            onClick={() => {
              setSelectedGenre("Tất cả");
              setSelectedCountry("Tất cả");
              setSelectedType("Tất cả");
              setSortByRating(true);
            }}
          >
            Top phim
          </button>
        </nav>

        {/* Ô tìm kiếm */}
       <div className="search-box">

          <input
            className="search"
            type="text"
            placeholder="🔍 Tìm phim..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search.trim() !== "" && (

            <div className="search-result">

              {filteredMovies.slice(0,5).map((movie) => (

                <MovieCardSearch
                  key={movie.id}
                  movie={movie}
                  onClick={() => setSearch("")}
                />

              ))}

            </div>

          )}

        </div>
      </header>

      {/* Banner */}
      {!isFiltering && <BannerSlider />}

      {/* Danh sách phim */}

        {/* Danh sách phim */}

      {isFiltering ? (

       <section className="movies">

          <h2>🔍 Kết quả ({filteredMovies.length})</h2>

              {filteredMovies.length > 0 ? (

                <div className="movie-grid">
                  {filteredMovies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                    />
                  ))}
                </div>

              ) : (

                <div className="no-result">

                  <h1>😥</h1>

                  <h3>Không tìm thấy phim</h3>

                  <p>
                    Không có bộ phim nào phù hợp với từ khóa
                    <b> "{search}"</b>
                  </p>

                </div>

              )}

        </section>

      ) : (

        <>

          {/* ================= PHIM MỚI ================= */}

          <section className="movies">

            <div className="section-header">

              <h2>🔥 Phim mới cập nhật</h2>

              <button
                className="see-more"
                onClick={() => navigate("/movies/new")}
              >
                Xem thêm →
              </button>

            </div>

            <div className="movie-grid">
              {currentMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>

          </section>

          <div className="pagination">

            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              ❮
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => (

                <button
                  key={index}
                  className={
                    currentPage === index + 1
                      ? "active-page"
                      : ""
                  }
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>

              )
            )}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              ❯
            </button>

          </div>

          {/* ================= PHIM NỔI BẬT ================= */}

          <section className="movies">

            <div className="section-header">

              <h2>⭐ Phim nổi bật</h2>

              <button
                className="see-more"
                onClick={() => navigate("/movies/featured")}
              >
                Xem thêm →
              </button>

            </div>

            <div className="movie-grid">
              {featuredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>

          </section>
          {/* ================= PHIM BL ================= */}

          <section className="movies">

            <div className="section-header">

              <h2>💖 Phim BL</h2>

              <button
                className="see-more"
                onClick={() => navigate("/movies/featured")}
              >
                Xem thêm →
              </button>

            </div>

            <div className="movie-grid">
              {featuredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>

          </section>

          {/* ================= PHIM CỔ TRANG ================= */}

          <section className="movies">

            <div className="section-header">

              <h2>🎬 Phim cổ trang</h2>

              <button
                className="see-more"
                onClick={() => navigate("/movies/featured")}
              >
                Xem thêm →
              </button>

            </div>

            <div className="movie-grid">
              {featuredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>

          </section>

          {/* ================= TOP ĐÁNH GIÁ ================= */}

       <section className="movies">

          <div className="section-header">

            <h2>🏆 Top đánh giá</h2>

            <button
              className="see-more"
              onClick={() => navigate("/movies/featured")}
            >
              Xem thêm →
            </button>

          </div>

          <div className="movie-grid">
            {featuredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>

        </section>

        </>

      )}

      {/* Footer */}
      <Footer />

    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Trang chủ */}
      <Route path="/" element={<HomePage />} />

      {/* Trang chi tiết phim */}
      <Route
        path="/movie/:id"
        element={<MovieDetail />}
      />

      {/* Trang xem phim */}
      <Route
        path="/watch/:id"
        element={<WatchPage />}
      />
    </Routes>
  );
}

export default App;
