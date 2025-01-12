import React from "react";
import Box from "./Box";
import elements from "./elements.js";

export default function ServiceBox(props) {
  const { onMouseEnter, onMouseLeave, activeBoxIndex } = props;

  return (
    <div id="service-box">
      {elements.map((element, index) => (
        <Box
          key={element.key}
          index={index}
          title={element.title}
          img={element.img}
          data={element.data}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          activeBoxIndex={activeBoxIndex}
        />
      ))}
    </div>
  );
}
