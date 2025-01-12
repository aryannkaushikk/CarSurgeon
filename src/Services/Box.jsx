import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Box(props) {
  var val = props.data.length;
  var p1 = Math.ceil(val / 2);

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
      transition={{ duration: 1 }}
      className="box"
      onMouseEnter={() => props.onMouseEnter(props.index)}
      onMouseLeave={props.onMouseLeave}
    >
      <img
        src={props.img}
        alt={props.title}
        style={{
          filter:
            props.index === props.activeBoxIndex
              ? "opacity(0%)"
              : "opacity(100%",
        }}
      />
      <div className="service-elements">
        <ul>
          {props.data.slice(0, p1).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="service-elements">
        <ul>
          {props.data.slice(p1, val).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
