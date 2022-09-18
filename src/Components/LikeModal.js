import React, { useState } from "react";
import "./Tweets.css";

const LikeModal = () => {
  const [likeModal, setLikeModal] = useState(true);
  return (
    <div type="button" onClick={() => setLikeModal(!likeModal)}>
      <div className="like-container">
        {likeModal ? (
          <button className="btn-like">Like</button>
        ) : (
          <button className="btn-dislike">Dislike</button>
        )}
      </div>
    </div>
  );
};

export default LikeModal;
