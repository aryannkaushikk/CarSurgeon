import React, { useRef } from "react";
import elements from "./elements";
import { motion, useInView } from "framer-motion";

export default function Titles({ onMouseLeave,onMouseEnter,activeBoxIndex }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity:  1 , x:  0 }}
      transition={{ duration: 2 }}
      id="titles"
    >
      <div style={{width:"50%", height: "100%" }}>
        <h1>
          Service
          <br />
          We Provide
        </h1>
      </div>
      <div style={{ height: "100%"}}>
        {elements.map((element, index) => (
          <h2
            key={element.key}
            style={{
              color: index === activeBoxIndex ? "#FA8072" : "white",
              fontSize: index === activeBoxIndex ? "8.1vmin" : "6.9vmin",
              padding: index === activeBoxIndex ? "10px 0px 10px 21px" : "0px",
            }}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={onMouseLeave}
          >
            {element.title}
          </h2>
        ))}
      </div>
    </motion.div>
  );
}
