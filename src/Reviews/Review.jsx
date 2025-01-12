import React from "react";
import ReviewBox from "./ReviewBox";
import reviews from "./revList.js";

export default function Review() {
  const length = reviews.length;
  const val = length / 2;
  return (
    <div id="review">
      <ReviewBox reviews={reviews.slice(0, val)} className={"speed1"} />
      <ReviewBox reviews={reviews.slice(val, length)} className={"speed2"} />
    </div>
  );
}
