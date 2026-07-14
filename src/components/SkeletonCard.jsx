import "./SkeletonCard.css";

function SkeletonCard() {
  return (
    <div className="movie-card skeleton">

      <div className="skeleton-image"></div>

      <div className="movie-info">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
      </div>

    </div>
  );
}

export default SkeletonCard;