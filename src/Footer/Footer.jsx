import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });
  return (
    <div id="footer">
        <motion.div ref={ref}
          initial={{  y: -50 }}
          animate={{  y: isInView ? 0 : -50 ,opacity: isInView? 100: 0}}
          transition={{ duration: .5 }}>
          <h3>© 2025 Aryan Kaushik</h3>
        </motion.div>
        <motion.div ref={ref}
          initial={{  y: -50 }}
          animate={{  y: isInView ? 0 : -50, opacity: isInView? 100: 0}}
          transition={{ duration: .5 }}>
          <h3>Opening Hours:</h3>
          <p>Mon-Sun</p>
          <p>From 10 AM to 8PM</p>
        </motion.div>

        <motion.div ref={ref}
          initial={{ y: -50 }}
          animate={{  y: isInView ? 0 : -50 ,opacity: isInView? 100: 0}}
          transition={{ duration: .5 }}>
          <h3>Contact Us:</h3>
          <p>
            <b>Address: </b>House No. 466, <br />Sector 9, Avas Vikas Colony,
            <br />Lohamandi, Agra,<br /> Uttar Pradesh 282007
          </p>
          <p>
            <b>Phone: </b>352395u032
          </p>
          <p>
            <b>Email: </b>abcxyz
          </p>
        </motion.div>

        <motion.div ref={ref}
          initial={{ y: -50 }}
          animate={{  y: isInView ? 0 : -50 ,opacity: isInView? 100: 0}}
          transition={{ duration: .5 }}>
          <h3>Our Socials:</h3>
          <a href="instagrm.com">
            <img
              src="Media/instagram.png"
              alt="insta"
              id="insta"
              height="30px"
            />
          </a>
        </motion.div>

      <div>
        <motion.h1
          ref={ref}
          initial={{ y: 50 }}
          animate={{ y: isInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          CAR SURGEON
        </motion.h1>
      </div>
    </div>
  );
}
