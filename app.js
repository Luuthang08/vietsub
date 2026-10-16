const movies = [
  { id: 1, title: "Giá Phải Trả", english: "The Price", country: "Thái Lan", year: 2026, episodes: "Tập 6 / 12", runtime: "10 phút / tập", genre: "Tình cảm · Tâm lý", description: "Mối quan hệ giữa hai người đàn ông bắt đầu như một thỏa thuận, rồi dần thay đổi khi cả hai hiểu điều người kia thật sự cần.", updated: 1, colors: ["#d37964", "#412e4a"], tag: "ĐANG CHIẾU" },
  { id: 2, title: "Yêu Điên Cuồng", english: "Decoding You", country: "Thái Lan", year: 2026, episodes: "Tập 2 / 8", runtime: "52 phút / tập", genre: "Tình cảm · Hài", description: "Một CEO chỉn chu và chàng trai thẳng thắn bước vào chuyện tình bất ngờ, nơi mọi tín hiệu đều cần được giải mã.", updated: 2, colors: ["#d2a76c", "#4c394d"], tag: "MỚI" },
  { id: 3, title: "Jiraphat Sẽ Là Cậu Bé Ngoan", english: "Good Boy", country: "Thái Lan", year: 2026, episodes: "Tập 1 / 10", runtime: "46 phút / tập", genre: "Tình cảm · Học đường", description: "Một lời hứa tưởng như đơn giản khiến hai người trẻ bắt đầu nhìn nhau bằng ánh mắt khác.", updated: 3, colors: ["#7995a5", "#25364c"], tag: "MỚI" },
  { id: 4, title: "Love x3: Giáo Trình Tình Yêu Bắt Buộc", english: "LOVEx3", country: "Thái Lan", year: 2026, episodes: "Tập 9 / 15", runtime: "55 phút / tập", genre: "Tình cảm · Hài", description: "Ba người bạn cùng bước vào một khóa học tình yêu mà chẳng ai có thể làm theo đúng giáo trình.", updated: 4, colors: ["#bf7181", "#53324f"], tag: "TẬP MỚI" },
  { id: 5, title: "Anh Sam Của Em", english: "Your Third", country: "Thái Lan", year: 2026, episodes: "Hoàn tất · 12 tập", runtime: "45 phút / tập", genre: "Tình cảm · Chính kịch", description: "Một câu chuyện dịu dàng về những rung động, sự trưởng thành và lựa chọn ở bên nhau.", updated: 5, colors: ["#c89268", "#3f3447"], tag: "HOÀN TẤT" },
  { id: 6, title: "Chuyện chúng ta chưa kể", english: "Untold Between Us", country: "Đài Loan", year: 2025, episodes: "Hoàn tất · 12 tập", runtime: "45 phút / tập", genre: "Tình cảm · Chính kịch", description: "Một cuộc gặp tình cờ mở ra hành trình dũng cảm đối diện với những điều chưa từng nói thành lời.", updated: 6, colors: ["#748b9f", "#282f47"], tag: "ĐỀ CỬ" },
  { id: 7, title: "Mùa Hạ Có Cậu", english: "Summer With You", country: "Hàn Quốc", year: 2025, episodes: "Hoàn tất · 8 tập", runtime: "35 phút / tập", genre: "Tình cảm · Thanh xuân", description: "Hai người bạn cũ gặp lại trong một mùa hè và nhận ra ký ức năm nào vẫn còn nguyên vẹn.", updated: 7, colors: ["#80a598", "#354860"], tag: "HOÀN TẤT" },
  { id: 8, title: "Khoảng Cách Màu Xanh", english: "Blue Distance", country: "Trung Quốc", year: 2024, episodes: "Hoàn tất · 10 tập", runtime: "40 phút / tập", genre: "Tình cảm · Đời thường", description: "Một họa sĩ trẻ và người hàng xóm trầm lặng tìm thấy sự đồng điệu giữa thành phố rộng lớn.", updated: 8, colors: ["#60879b", "#292d50"], tag: "HOÀN TẤT" }
];

const movieList = document.querySelector("#movie-list");
const popularList = document.querySelector("#popular-list");
const searchInput = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const emptyMessage = document.querySelector("#empty-message");
const dialog = document.querySelector("#watch-dialog");
let activeGenre = "all";

function makePoster(movie, className = "poster") {
  const poster = document.createElement("div");
  poster.className = className;
  poster.style.setProperty("--poster-a", movie.colors[0]);
  poster.style.setProperty("--poster-b", movie.colors[1]);
  poster.innerHTML = `<span class="poster-orbit"></span><span class="poster-copy"><small>${movie.country} · ${movie.year}</small><b>${movie.title}</b><i>${movie.english}</i></span>`;
  return poster;
}

function movieCard(movie) {
  const card = document.createElement("article");
  card.className = "movie-card";
  card.append(makePoster(movie));
  const body = document.createElement("div");
  body.className = "movie-info";
  body.innerHTML = `<div class="card-meta"><span class="episode-tag">${movie.episodes}</span><span class="hd-tag">HD</span></div><h3>${movie.title}</h3><p class="sub-title">${movie.english}</p><p class="movie-description">${movie.description}</p><div class="card-bottom"><span>${movie.country} <i>·</i> ${movie.year}</span><button type="button" class="watch-button">Xem phim <span>→</span></button></div>`;
  body.querySelector(".watch-button").addEventListener("click", () => openMovie(movie));
  card.append(body);
  return card;
}

function renderMovies() {
  const keyword = searchInput.value.trim().toLocaleLowerCase("vi");
  const filtered = movies.filter(movie => {
    const searchable = `${movie.title} ${movie.english} ${movie.country} ${movie.genre}`.toLocaleLowerCase("vi");
    return searchable.includes(keyword) && (activeGenre === "all" || movie.country === activeGenre);
  });
  const sortBy = sortSelect.value;
  if (sortBy === "year") filtered.sort((a, b) => b.year - a.year);
  if (sortBy === "title") filtered.sort((a, b) => a.title.localeCompare(b.title, "vi"));
  if (sortBy === "updated") filtered.sort((a, b) => a.updated - b.updated);
  movieList.replaceChildren(...filtered.map(movieCard));
  emptyMessage.hidden = filtered.length > 0;

  const popular = [...movies].sort((a, b) => a.updated - b.updated).slice(0, 4);
  popularList.replaceChildren(...popular.map(movie => {
    const row = document.createElement("button");
    row.className = "popular-item";
    row.type = "button";
    row.append(makePoster(movie, "mini-poster"));
    const copy = document.createElement("span");
    copy.className = "popular-copy";
    copy.innerHTML = `<b>${movie.title}</b><small>${movie.country} · ${movie.year}</small><small class="popular-episode">${movie.episodes}</small>`;
    row.append(copy);
    row.addEventListener("click", () => openMovie(movie));
    return row;
  }));
}

function openMovie(movie) {
  document.querySelector("#dialog-title").textContent = movie.title;
  document.querySelector("#dialog-description").textContent = movie.description;
  document.querySelector("#dialog-meta").textContent = `${movie.country} · ${movie.year} · ${movie.episodes} · ${movie.runtime}`;
  document.querySelector("#source-link").href = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${movie.title} ${movie.english} official` )}`;
  dialog.showModal();
}

document.querySelectorAll("#genre-filters .chip").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector("#genre-filters .selected")?.classList.remove("selected");
    button.classList.add("selected");
    activeGenre = button.dataset.genre;
    renderMovies();
  });
});
document.querySelectorAll("[data-side-genre]").forEach(link => link.addEventListener("click", () => {
  activeGenre = link.dataset.sideGenre;
  document.querySelectorAll("#genre-filters .chip").forEach(button => button.classList.toggle("selected", button.dataset.genre === activeGenre));
  renderMovies();
}));
searchInput.addEventListener("input", renderMovies);
sortSelect.addEventListener("change", renderMovies);
document.querySelector("[data-featured-watch]").addEventListener("click", () => openMovie(movies[5]));
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.querySelector("#menu-toggle").addEventListener("click", event => {
  const button = event.currentTarget;
  const nav = document.querySelector("#main-nav");
  const open = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#main-nav a").forEach(link => link.addEventListener("click", () => document.querySelector("#main-nav").classList.remove("open")));

renderMovies();
