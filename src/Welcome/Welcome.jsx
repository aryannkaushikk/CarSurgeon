import React, { useRef, useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { motion, useInView } from "framer-motion";
import NumberFlow from '@number-flow/react'


export default function Welcome() {
  const [number, setNumber] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [isHovering, setHovering] = useState(false);

  function hovering(){
    setHovering(!isHovering);
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });

  function showNavigation(){
    setButtonPressed(!buttonPressed);
  }

  useEffect(() => {

      const intervalId = setInterval(() => {
        setNumber(Math.floor(Math.random() * 91));
      }, 90);

      const timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        setIsAnimating(false);
      }, 2000);

      
      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }, []);

    const text = "Meet the doctor that knows every pulse of your car".split(" ");

  return (
    <div id="welcome">
      <button onClick={showNavigation} style={{color:buttonPressed?"black":isHovering?"red":"white"}} onMouseEnter={()=>hovering()} onMouseLeave={()=>hovering()}>{buttonPressed?"Close":"Menu"}</button>
      <NavBar buttonPressed={buttonPressed}/>
      <img src="Media/vg2.jpg" alt="xyz" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{opacity:isInView?1:0}}
        transition={{ duration: 2}}
        className="welcome-elements"
      >
        <h1> {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView?1:0 }}
          transition={{
            duration: 1,
            delay: i / 5  ,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}</h1>
      </motion.div>
      <div className="welcome-elements">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView? 1:0, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h1>{isAnimating ? <NumberFlow value={number} /> : <NumberFlow value={90} />}</h1>
          <h4>Mins Service</h4>
          <h6>Time is precious, don't waste it at workshops</h6>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView? 1:0, y: 0 }}
                    transition={{ duration: 2 }}
        >
          <h1>{isAnimating ? <NumberFlow value={(Math.ceil(number*8/100))+number} /> : <NumberFlow value={11} />}+</h1>
          <h4>Years of Experience</h4>
          <h6>Team of experienced mechanics</h6>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView? 1:0, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h1>{isAnimating ? <NumberFlow value={Math.ceil(((number*8*1000)+(number*7*10)+number)/1000)} /> : <NumberFlow value={1000} />}</h1>
          <h4>Kms Warranty</h4>
          <h6>1 month or 1000 kms unconditional warranty</h6>
        </motion.div>
      </div>
    </div>
  );
}
