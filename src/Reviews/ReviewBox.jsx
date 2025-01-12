import React from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewBox({ className, reviews }) {
  return (
    <div className="reviews">
      <div className="rev-box">
        {reviews.map((review, index) => (
          <ReviewCard
            key={review.key}
            comment={review.comment}
            author={review.author}
            className={className}
          />
        ))}
      </div>
    </div>
  );
}
