import React from "react";
import ServiceBox from "./ServiceBox";
import Titles from "./Titles";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Services() {
  const [activeBoxIndex, setActiveBoxIndex] = useState(null);

  const handleMouseEnter = (index) => {
    const timeoutId = setTimeout(() => {
      setActiveBoxIndex(index);
    }, 150);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = timeoutId;
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setActiveBoxIndex(null);
  };

  const timeoutRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 }); // Adjust threshold as needed

  return (
    <div id="services">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 1 }}
        viewport={{once: true}}
      >
        <Titles activeBoxIndex={activeBoxIndex} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} />
      </motion.div>

      <ServiceBox
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        activeBoxIndex={activeBoxIndex}
      />
    </div>
  );
}
