import React from "react";

export default function ReviewCard(props) {
  return (
    <div className={`review-element ${props.className}`}>
      <div>
        <p className="comment">{props.comment}</p>
        <p className="author">{"~" + props.author}</p>
      </div>
    </div>
  );
}
