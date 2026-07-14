import { useEffect, useState } from "react";

function CommentSection({ movieId }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Đọc bình luận khi mở phim
  useEffect(() => {
    const savedComments =
      JSON.parse(localStorage.getItem(`comments-${movieId}`)) || [];

    setComments(savedComments);
  }, [movieId]);

  // Gửi bình luận
  const handleSubmit = () => {
    if (name.trim() === "" || comment.trim() === "") {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    const newComment = {
      name,
      comment,
      time: new Date().toLocaleString(),
    };

    const updatedComments = [...comments, newComment];

    setComments(updatedComments);

    localStorage.setItem(
      `comments-${movieId}`,
      JSON.stringify(updatedComments)
    );

    setName("");
    setComment("");
  };

  return (
    <div className="comment-section">

      <h2>💬 Bình luận</h2>

      <input
        type="text"
        placeholder="Tên của bạn"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Nhập bình luận..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Gửi bình luận
      </button>

      <div className="comment-list">
        {comments.length === 0 ? (
          <p>Chưa có bình luận.</p>
        ) : (
          comments.map((item, index) => (
            <div
              className="comment-item"
              key={index}
            >
              <h4>{item.name}</h4>

              <small>{item.time}</small>

              <p>{item.comment}</p>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default CommentSection;