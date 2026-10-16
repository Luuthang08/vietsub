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
  { id: 4, title: "Pit Babe", english: "พิษเบ๊บ", country: "Thái Lan", year: 2023, episodeLabel: "13 tập · Full episode", runtime: "50 phút / tập", genre: "Tình cảm · Thể thao", description: "Một tay đua nổi tiếng gặp chàng trai có năng lực đặc biệt, mở đầu cho câu chuyện tình nhiều cạnh tranh. Chọn một trong 13 tập đầy đủ trên kênh YouTube CHANGE2561.", episodes: [
    { label: "Tập 1 · Full episode", videoId: "3d50dTT_lHk" },
    { label: "Tập 2 · Full episode", videoId: "34KryJmmk88" },
    { label: "Tập 3 · Full episode", videoId: "Vdmx8JtiFN0" },
    { label: "Tập 4 · Full episode", videoId: "BN1U9GrZDe8" },
    { label: "Tập 5 · Full episode", videoId: "MAS9sC1JC9E" },
    { label: "Tập 6 · Full episode", videoId: "6s-jlYpbzDg" },
    { label: "Tập 7 · Full episode", videoId: "vNWWTedE9GY" },
    { label: "Tập 8 · Full episode", videoId: "CM4glRnll4M" },
    { label: "Tập 9 · Full episode", videoId: "V1frHiCE8V0" },
    { label: "Tập 10 · Full episode", videoId: "qt3x8CYXaTo" },
    { label: "Tập 11 · Full episode", videoId: "LMypFn4YsYo" },
    { label: "Tập 12 · Full episode", videoId: "Dx5uPpi0yBc" },
    { label: "Tập 13 · Full episode", videoId: "2iAhRWVLmG0" }
  ], updated: 4, colors: ["#748b9f", "#282f47"], tag: "FULL EP" }
];

const movieList = document.querySelector("#movie-list");
const popularList = document.querySelector("#popular-list");
const searchInput = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const emptyMessage = document.querySelector("#empty-message");
const player = document.querySelector("#movie-player");
const episodeServers = document.querySelector("#episode-servers");
const heroBackdrop = document.querySelector("#hero-backdrop");
const detailBackdrop = document.querySelector("#detail-backdrop-image");
let activeGenre = "all";
let activeMovie = null;
let activeYear = "all";
let activeFeatured = 0;
let activeEpisode = 0;

function makePoster(movie, className = "poster") {
  const poster = document.createElement("div");
  poster.className = className;
  poster.style.setProperty("--poster-a", movie.colors[0]);
  poster.style.setProperty("--poster-b", movie.colors[1]);
  const image = document.createElement("img");
  image.className = "poster-image";
  image.src = `https://i.ytimg.com/vi/${movie.episodes[0].videoId}/hqdefault.jpg`;
  image.alt = `${movie.title} — ảnh phim`;
  image.loading = "lazy";
  image.decoding = "async";
  image.addEventListener("error", () => { image.hidden = true; });
  poster.append(image);
  poster.insertAdjacentHTML("beforeend", `<span class="poster-orbit"></span><span class="poster-copy"><small>${movie.country} · ${movie.year}</small><b>${movie.title}</b><i>${movie.english}</i></span>`);
  return poster;
}

function movieCard(movie) {
  const card = document.createElement("article");
  card.className = "movie-card";
  const poster = makePoster(movie);
  poster.classList.add("movie-cover");
  poster.insertAdjacentHTML("beforeend", `<span class="cover-badge">${movie.episodeLabel}</span><span class="cover-play" aria-hidden="true">▶</span>`);
  card.append(poster);
  const body = document.createElement("div");
  body.className = "movie-info";
  body.innerHTML = `<h3>${movie.title}</h3><p class="sub-title">${movie.country} <i>·</i> ${movie.year}</p>`;
  card.append(body);
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Xem phim ${movie.title}`);
  card.addEventListener("click", () => openMovie(movie));
  card.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openMovie(movie); } });
  return card;
}

function renderMovies() {
  const keyword = searchInput.value.trim().toLocaleLowerCase("vi");
  const filtered = movies.filter(movie => {
    const searchable = `${movie.title} ${movie.english} ${movie.country} ${movie.genre}`.toLocaleLowerCase("vi");
    return searchable.includes(keyword) && (activeGenre === "all" || movie.country === activeGenre) && (activeYear === "all" || String(movie.year) === activeYear);
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
  window.location.hash = `detail/${movie.id}`;
}

function showDetail(movie) {
  activeMovie = movie;
  player.src = "";
  document.querySelector("#home").hidden = true;
  document.querySelector("#detail-view").hidden = false;
  document.querySelector("#watch-view").hidden = true;
  document.querySelector("#search-view").hidden = true;
  document.querySelector("#site-footer").hidden = true;
  document.querySelector("#detail-title").textContent = movie.title;
  document.querySelector("#detail-english").textContent = `${movie.english} · ${movie.year}`;
  document.querySelector("#detail-description").textContent = movie.description;
  document.querySelector("#detail-breadcrumb-title").textContent = movie.title;
  document.querySelector("#detail-genre").textContent = movie.genre;
  document.querySelector("#detail-country").textContent = movie.country;
  document.querySelector("#detail-year").textContent = String(movie.year);
  document.querySelector("#detail-status").textContent = movie.episodeLabel;
  document.querySelector("#detail-episodes").textContent = String(movie.episodes.length);
  document.querySelector("#detail-runtime").textContent = movie.runtime;
  document.querySelector("#detail-hero").style.setProperty("--poster-a", movie.colors[0]);
  document.querySelector("#detail-hero").style.setProperty("--poster-b", movie.colors[1]);
  detailBackdrop.hidden = false;
  detailBackdrop.src = `https://i.ytimg.com/vi/${movie.episodes[0].videoId}/maxresdefault.jpg`;
  const recommendations = movies.filter(item => item.id !== movie.id);
  document.querySelector("#recommendation-list").replaceChildren(...recommendations.map(movieCard));
  window.scrollTo(0, 0);
}

function renderEpisodeButtons(movie) {
  const group = document.createElement("section");
  group.className = "episode-server-group";
  const heading = document.createElement("h2");
  heading.textContent = "# SERVER YOUTUBE CHÍNH THỨC";
  const buttons = document.createElement("div");
  buttons.className = "episode-buttons";
  movie.episodes.forEach((episode, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "episode-button";
    button.textContent = String(index + 1).padStart(2, "0");
    button.title = episode.label;
    button.setAttribute("aria-label", episode.label);
    button.addEventListener("click", () => playEpisode(index));
    buttons.append(button);
  });
  group.append(heading, buttons);
  episodeServers.replaceChildren(group);
}

function showWatch(movie) {
  activeMovie = movie;
  activeEpisode = 0;
  document.querySelector("#home").hidden = true;
  document.querySelector("#detail-view").hidden = true;
  document.querySelector("#watch-view").hidden = false;
  document.querySelector("#search-view").hidden = true;
  document.querySelector("#site-footer").hidden = true;
  document.querySelector("#watch-title").textContent = movie.title;
  document.querySelector("#watch-description").textContent = movie.description;
  document.querySelector("#watch-meta").textContent = `${movie.country} · ${movie.year} · ${movie.genre} · ${movie.runtime}`;
  document.querySelector("#watch-back-detail").href = `#detail/${movie.id}`;
  renderEpisodeButtons(movie);
  const recommendations = movies.filter(item => item.id !== movie.id);
  document.querySelector("#watch-recommendation-list").replaceChildren(...recommendations.map(movieCard));
  document.querySelector("#watch-view").classList.remove("lights-out");
  document.querySelector("#toggle-lights").setAttribute("aria-pressed", "false");
  renderComments(movie);
  playEpisode(0);
  window.scrollTo(0, 0);
}

function showSearch(query) {
  const normalizedQuery = query.trim().toLocaleLowerCase("vi");
  document.querySelector("#home").hidden = true;
  document.querySelector("#detail-view").hidden = true;
  document.querySelector("#watch-view").hidden = true;
  document.querySelector("#search-view").hidden = false;
  document.querySelector("#site-footer").hidden = true;
  if (player) player.src = "";
  activeMovie = null;
  searchInput.value = query;
  document.querySelector("#search-breadcrumb-query").textContent = query;
  document.querySelector("#search-heading-query").textContent = query;
  const results = movies.filter(movie => {
    const searchable = `${movie.title} ${movie.english} ${movie.country} ${movie.genre} ${movie.description}`.toLocaleLowerCase("vi");
    return searchable.includes(normalizedQuery);
  });
  document.querySelector("#search-results-grid").replaceChildren(...results.map(movieCard));
  document.querySelector("#search-results-count").textContent = `${results.length} phim được tìm thấy`;
  document.querySelector("#search-empty").hidden = results.length > 0;
  window.scrollTo(0, 0);
}

function playEpisode(index) {
  if (!activeMovie) return;
  activeEpisode = index;
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
  document.querySelector("#watch-breadcrumb-episode").textContent = episode.label;
  document.querySelector("#current-episode").textContent = episode.label;
  episodeServers.querySelectorAll(".episode-button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
    button.setAttribute("aria-pressed", String(buttonIndex === index));
  });
}

function renderComments(movie) {
  const key = `tlvietsub-comments-${movie.id}`;
  let comments = [];
  try { comments = JSON.parse(localStorage.getItem(key) || "[]"); } catch { comments = []; }
  const list = document.querySelector("#comment-list");
  list.replaceChildren(...comments.map(comment => {
    const row = document.createElement("article");
    row.className = "comment-item";
    const name = document.createElement("strong");
    name.textContent = comment.name;
    const body = document.createElement("p");
    body.textContent = comment.text;
    const date = document.createElement("small");
    date.textContent = comment.date;
    row.append(name, date, body);
    return row;
  }));
  document.querySelector("#comment-count").textContent = `(${comments.length})`;
}

function routeFromHash() {
  const searchMatch = window.location.hash.match(/^#search\/(.*)$/);
  if (searchMatch) {
    let query = "";
    try { query = decodeURIComponent(searchMatch[1]); } catch { query = searchMatch[1]; }
    showSearch(query);
    return;
  }
  const match = window.location.hash.match(/^#(detail|watch)\/(\d+)/);
  const movie = match && movies.find(item => item.id === Number(match[2]));
  if (movie && match[1] === "detail") showDetail(movie);
  else if (movie && match[1] === "watch") showWatch(movie);
  else {
    document.querySelector("#home").hidden = false;
    document.querySelector("#detail-view").hidden = true;
    document.querySelector("#watch-view").hidden = true;
    document.querySelector("#search-view").hidden = true;
    document.querySelector("#site-footer").hidden = false;
    if (player) player.src = "";
    activeMovie = null;
  }
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
document.querySelectorAll("[data-nav-genre]").forEach(link => link.addEventListener("click", () => {
  activeGenre = link.dataset.navGenre;
  document.querySelectorAll("#genre-filters .chip").forEach(button => button.classList.toggle("selected", button.dataset.genre === activeGenre));
  renderMovies();
  link.closest("details")?.removeAttribute("open");
}));
document.querySelectorAll("[data-nav-year]").forEach(link => link.addEventListener("click", () => {
  activeYear = link.dataset.navYear;
  renderMovies();
  link.closest("details")?.removeAttribute("open");
}));
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.querySelectorAll(".nav-dropdown").forEach(dropdown => {
    dropdown.addEventListener("mouseenter", () => dropdown.setAttribute("open", ""));
    dropdown.addEventListener("mouseleave", () => dropdown.removeAttribute("open"));
  });
}
searchInput.addEventListener("input", renderMovies);
document.querySelector("#search-form").addEventListener("submit", event => {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (query) window.location.hash = `search/${encodeURIComponent(query)}`;
});
sortSelect.addEventListener("change", renderMovies);
function setFeatured(index) {
  activeFeatured = (index + movies.length) % movies.length;
  const movie = movies[activeFeatured];
  document.querySelector("#hero-title").textContent = movie.title;
  document.querySelector(".hero-description").textContent = movie.description;
  document.querySelector(".hero-kicker").textContent = `${movie.country.toUpperCase()} · ${movie.year} · ${movie.genre.toUpperCase()}`;
  document.querySelector(".hero-meta").innerHTML = `<span>${movie.year}</span><i></i><span>${movie.episodeLabel}</span><i></i><span>${movie.runtime}</span><i></i><span class="quality">HD</span>`;
  document.querySelector(".hero").style.setProperty("--hero-a", movie.colors[0]);
  document.querySelector(".hero").style.setProperty("--hero-b", movie.colors[1]);
  document.querySelector(".hero").classList.add("has-backdrop");
  heroBackdrop.hidden = false;
  heroBackdrop.src = `https://i.ytimg.com/vi/${movie.episodes[0].videoId}/maxresdefault.jpg`;
  document.querySelectorAll("#hero-pagination button").forEach((dot, dotIndex) => dot.classList.toggle("selected", dotIndex === activeFeatured));
}
const pagination = document.querySelector("#hero-pagination");
movies.forEach((movie, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Hiện ${movie.title}`);
  dot.addEventListener("click", () => setFeatured(index));
  pagination.append(dot);
});
document.querySelector(".hero-prev").addEventListener("click", () => setFeatured(activeFeatured - 1));
document.querySelector(".hero-next").addEventListener("click", () => setFeatured(activeFeatured + 1));
document.querySelector("[data-featured-watch]").addEventListener("click", () => openMovie(movies[activeFeatured]));
document.querySelector("#detail-play").addEventListener("click", () => activeMovie && (window.location.hash = `watch/${activeMovie.id}`));
document.querySelector("#back-detail-button").addEventListener("click", () => activeMovie && (window.location.hash = `detail/${activeMovie.id}`));
document.querySelector("#report-video").addEventListener("click", () => window.alert("Nếu video không phát, hãy thử chọn tập khác hoặc bấm “Mở video” để xem trực tiếp trên YouTube."));
document.querySelector("#toggle-lights").addEventListener("click", event => {
  const page = document.querySelector("#watch-view");
  const lightsOut = page.classList.toggle("lights-out");
  event.currentTarget.setAttribute("aria-pressed", String(lightsOut));
  event.currentTarget.textContent = lightsOut ? "Bật đèn" : "Tắt đèn";
});
document.querySelector("#share-watch").addEventListener("click", async event => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    event.currentTarget.textContent = "Đã sao chép link";
    window.setTimeout(() => { event.currentTarget.textContent = "Chia sẻ"; }, 1800);
  } catch {
    window.prompt("Sao chép liên kết phim:", window.location.href);
  }
});
window.addEventListener("hashchange", routeFromHash);
document.querySelector("#comment-form").addEventListener("submit", event => {
  event.preventDefault();
  if (!activeMovie) return;
  const key = `tlvietsub-comments-${activeMovie.id}`;
  let comments = [];
  try { comments = JSON.parse(localStorage.getItem(key) || "[]"); } catch { comments = []; }
  comments.unshift({ name: document.querySelector("#comment-name").value.trim(), text: document.querySelector("#comment-text").value.trim(), date: new Date().toLocaleDateString("vi-VN") });
  localStorage.setItem(key, JSON.stringify(comments.slice(0, 30)));
  event.currentTarget.reset();
  renderComments(activeMovie);
});
document.querySelector("#menu-toggle").addEventListener("click", event => {
  const button = event.currentTarget;
  const nav = document.querySelector("#main-nav");
  const open = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#main-nav a").forEach(link => link.addEventListener("click", () => document.querySelector("#main-nav").classList.remove("open")));

renderMovies();
heroBackdrop.addEventListener("error", () => {
  heroBackdrop.hidden = true;
  document.querySelector(".hero").classList.remove("has-backdrop");
});
detailBackdrop.addEventListener("error", () => { detailBackdrop.hidden = true; });
setFeatured(0);
routeFromHash();
