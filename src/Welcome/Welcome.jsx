import React, { useRef, useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { color, motion, useInView } from "framer-motion";
import NumberFlow from '@number-flow/react'


export default function Welcome() {

  const infoDiv = {
  marginTop: "10vmin",
  marginLeft: "6vmin",
  borderTop: "6px red solid",
  display: "flex",
  justifyContent: "start",
  flexDirection: "column",
  padding: "0% 1.5% 0% 1.5%",
  color: "white",
  width: "21vw",
  flexGrow: "1"
  }

  const infoH1 = {
    fontSize: "13.2vmin",
  /* border: 1px pink solid; */
  color: "red"
  };

  const infoH4 = {
    fontSize: "4.5vmin"
  };

  const infoH6 = {
    fontSize: "2.1vmin",
  fontWeight: "100"
  };

  const headlineDiv = {
    // border: "3px white solid",
    width: "93vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
  }

  const headLineH1 = {display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    color: "white"};

  const headLineH1Span = {
    fontSize: "14.1vmin",
    textAlign: "center",
    /* border: 1px white solid; */
    width: "fit-content",
    margin: "0px 12px 0px 12px"
  };
  



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
        style={{...headlineDiv,gridColumn:"1/4",gridRow:"1/2"}}
      >
        <h1 style={headLineH1}> {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView?1:0 }}
          transition={{
            duration: 1,
            delay: i / 5  ,
          }}
          key={i}
          style={headLineH1Span}
        >
          {el}{" "}
        </motion.span>
      ))}</h1>
      </motion.div>
      
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView? 1:0, y: 0 }}
          transition={{ duration: 2 }}
          style={{...infoDiv, gridColumn:"1/2", gridRow:"2/3"}}
          className="welcome-elements" 
        >
          <h1 style={infoH1}>{isAnimating ? <NumberFlow value={number} /> : <NumberFlow value={90} />}</h1>
          <h4 style={infoH4}>Mins Service</h4>
          <h6 style={infoH6}>Time is precious, don't waste it at workshops</h6>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView? 1:0, y: 0 }}
                    transition={{ duration: 2 }}
                    style={{...infoDiv,gridColumn:"2/3"}}
                    className="welcome-elements" 
        >
          <h1 style={infoH1}>{isAnimating ? <NumberFlow value={(Math.ceil(number*8/100))+number} /> : <NumberFlow value={11} />}+</h1>
          <h4 style={infoH4}>Years of Experience</h4>
          <h6 style={infoH6}>Team of experienced mechanics</h6>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView? 1:0, y: 0 }}
          transition={{ duration: 2 }}
          style={{...infoDiv, gridColumn:"3/4"}}
          className="welcome-elements" 
        >
          <h1 style={infoH1}>{isAnimating ? <NumberFlow value={Math.ceil(((number*8*1000)+(number*7*10)+number)/1000)} /> : <NumberFlow value={1000} />}</h1>
          <h4 style={infoH4}>Kms Warranty</h4>
          <h6 style={infoH6}>1 month or 1000 kms unconditional warranty</h6>
        </motion.div>
    </div>
  );
}
