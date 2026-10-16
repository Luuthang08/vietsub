const movies = [
  { id: 1, title: "Love in the Air", english: "บรรยากาศรัก", country: "Thái Lan", year: 2022, episodeLabel: "Tập 1 · 4 phần", runtime: "45 phút / tập", genre: "Tình cảm · Lãng mạn", description: "Rain gặp Phayu, còn Sky vướng vào một mối quan hệ đầy bất ngờ với Prapai. Bốn phần đầu tiên của tập 1 được phát trên kênh chính thức MeMindY.", episodes: [
    { label: "Tập 1 · Phần 1/4", videoId: "FqDQ4kRPZEw" }, { label: "Tập 1 · Phần 2/4", videoId: "2DxR15ceTss" }, { label: "Tập 1 · Phần 3/4", videoId: "Q0R_y2mlqq4" }, { label: "Tập 1 · Phần 4/4", videoId: "0rq4HOlEG9g" }
  ], updated: 1, colors: ["#d37964", "#412e4a"], tag: "TẬP ĐẦU" },
  { id: 2, title: "Work From Heart", english: "รักป่วนก๊วนออฟฟิศ", country: "Thái Lan", year: 2022, episodeLabel: "Tập 1–6 · Có phụ đề Anh", runtime: "42 phút / tập", genre: "Tình cảm · Công sở", description: "Dee bắt đầu thực tập tại một công ty quảng cáo và gặp Knight, người đồng nghiệp khó gần. Series được đăng trên kênh DV8 Thailand với phụ đề tiếng Anh.", episodes: [
    { label: "Tập 1", videoId: "ztyamPE_RDs" }, { label: "Tập 2", videoId: "qg_nb6FIr_8" }, { label: "Tập 3", videoId: "bkpdn3QKykk" }, { label: "Tập 4", videoId: "RXA9P0dRtmc" }, { label: "Tập 5", videoId: "3xrDWmc1Ems" }, { label: "Tập 6", videoId: "SQNpMHREdLc" }
  ], updated: 2, colors: ["#d2a76c", "#4c394d"], tag: "6 TẬP" },
  { id: 3, title: "To Sir, With Love", english: "คุณชาย", country: "Thái Lan", year: 2022, episodeLabel: "Tập 1 · Full episode", runtime: "1 giờ 10 phút / tập", genre: "Tình cảm · Chính kịch", description: "Giữa bí mật gia tộc và những quy tắc nghiêm khắc, Thian phải lựa chọn con đường của riêng mình. Tập đầu do kênh one31 phát hành.", episodes: [
    { label: "Tập 1 · Full episode", videoId: "UnVJF81p8UY" }
  ], updated: 3, colors: ["#a7816c", "#412f40"], tag: "FULL EP" },
  { id: 4, title: "Pit Babe", english: "พิษเบ๊บ", country: "Thái Lan", year: 2023, episodeLabel: "Tập 1 · Full episode", runtime: "50 phút / tập", genre: "Tình cảm · Thể thao", description: "Một tay đua nổi tiếng gặp chàng trai có năng lực đặc biệt, mở đầu cho câu chuyện tình nhiều cạnh tranh. Tập đầu đăng trên kênh chính thức CHANGE2561.", episodes: [
    { label: "Tập 1 · Full episode", videoId: "3d50dTT_lHk" }
  ], updated: 4, colors: ["#748b9f", "#282f47"], tag: "FULL EP" }
];

const movieList = document.querySelector("#movie-list");
const popularList = document.querySelector("#popular-list");
const searchInput = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const emptyMessage = document.querySelector("#empty-message");
const dialog = document.querySelector("#watch-dialog");
const player = document.querySelector("#movie-player");
const episodeSelect = document.querySelector("#episode-select");
let activeGenre = "all";
let activeMovie = null;

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
  body.innerHTML = `<div class="card-meta"><span class="episode-tag">${movie.episodeLabel}</span><span class="hd-tag">HD</span></div><h3>${movie.title}</h3><p class="sub-title">${movie.english}</p><p class="movie-description">${movie.description}</p><div class="card-bottom"><span>${movie.country} <i>·</i> ${movie.year}</span><button type="button" class="watch-button">Xem phim <span>→</span></button></div>`;
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
    copy.innerHTML = `<b>${movie.title}</b><small>${movie.country} · ${movie.year}</small><small class="popular-episode">${movie.episodeLabel}</small>`;
    row.append(copy);
    row.addEventListener("click", () => openMovie(movie));
    return row;
  }));
}

function openMovie(movie) {
  activeMovie = movie;
  document.querySelector("#dialog-title").textContent = movie.title;
  document.querySelector("#dialog-description").textContent = movie.description;
  document.querySelector("#dialog-meta").textContent = `${movie.country} · ${movie.year} · ${movie.runtime}`;
  episodeSelect.replaceChildren(...movie.episodes.map((episode, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = episode.label;
    return option;
  }));
  playEpisode(0);
  dialog.showModal();
}

function playEpisode(index) {
  if (!activeMovie) return;
  const episode = activeMovie.episodes[index];
  const siteOrigin = /^https?:$/.test(window.location.protocol)
    ? window.location.origin
    : "https://vietsub-nu.vercel.app";
  const playerParams = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    origin: siteOrigin,
    widget_referrer: siteOrigin
  });
  player.src = `https://www.youtube.com/embed/${episode.videoId}?${playerParams.toString()}`;
  player.title = `${activeMovie.title} — ${episode.label}`;
  document.querySelector("#source-link").href = `https://www.youtube.com/watch?v=${episode.videoId}`;
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
document.querySelector("[data-featured-watch]").addEventListener("click", () => openMovie(movies[0]));
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
episodeSelect.addEventListener("change", () => playEpisode(Number(episodeSelect.value)));
dialog.addEventListener("close", () => { player.src = ""; activeMovie = null; });
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.querySelector("#menu-toggle").addEventListener("click", event => {
  const button = event.currentTarget;
  const nav = document.querySelector("#main-nav");
  const open = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#main-nav a").forEach(link => link.addEventListener("click", () => document.querySelector("#main-nav").classList.remove("open")));

renderMovies();
