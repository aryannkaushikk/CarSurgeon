import React from "react";

export default function NavButton(props) {
  const list = ["welcome", "services", "review","footer"]
  return (
    <div className="nav-btn-box">
      <button className="nav-btn" onClick={()=>{props.onClick(list[props.index])}}>
        <span>{props.data}</span>
      </button>
    </div>
  );
}
