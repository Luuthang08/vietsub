import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import banner1 from "../assets/banners/The Untamed-banner.jpg";
import banner2 from "../assets/banners/2gether-banner.jpg";
import banner3 from "../assets/banners/Semantic Error-banner.jpg";
import banner4 from "../assets/banners/KinnPorsche-banner.jpg";


const banners = [
  {
    id: 1,
    image: banner1,
    title: "The Untamed",
    description: "...",
  },
  {
    id: 2,
    image: banner2,
    title: "2gether",
    description: "...",
  },
  {
    id: 3,
    image: banner3,
    title: "Semantic Error",
    description: "...",
  },
  {
    id: 4,
    image: banner4,
    title: "KinnPorsche",
    description: "...",
  },
];

function BannerSlider() {
  const [current, setCurrent] = useState(0);

  // Tự chuyển banner
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [current]);

  // Banner tiếp
  const nextSlide = () => {
    setCurrent((prev) =>
      prev === banners.length - 1 ? 0 : prev + 1
    );
  };

  // Banner trước
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  return (
    <div className="banner-slider">

      <img
        src={banners[current].image}
        alt={banners[current].title}
      />

      <div className="banner-overlay">
    <div className="banner-content">

        <h1>{banners[current].title}</h1>

        <p>{banners[current].description}</p>

        <div className="banner-buttons">
            <Link to="/watch/1">
              <button className="play-btn">
                  ▶ Xem ngay
              </button>
            </Link>

            <Link to="/movie/1">
              <button className="info-btn">
                 ℹ Chi tiết
              </button>
            </Link>
        </div>

    </div>
</div>

      <button
        className="left-btn"
        onClick={prevSlide}
      >
        ❮
      </button>

      <button
        className="right-btn"
        onClick={nextSlide}
      >
        ❯
      </button>

      <div className="dots">

        {banners.map((_, index) => (

          <span
            key={index}
            className={
              current === index
                ? "dot active"
                : "dot"
            }
            onClick={() => setCurrent(index)}
          ></span>

        ))}

      </div>

    </div>
  );
}

export default BannerSlider;