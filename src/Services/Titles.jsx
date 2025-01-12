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
      <div style={{ height: "36%" }}>
        <h1>
          Service
          <br />
          We Provide
        </h1>
      </div>
      <div style={{ height: "39%" }}>
        {elements.map((element, index) => (
          <h2
            key={element.key}
            style={{
              color: index === activeBoxIndex ? "#FA8072" : "white",
              fontSize: index === activeBoxIndex ? "60px" : "54px",
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
