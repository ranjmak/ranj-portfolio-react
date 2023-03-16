import React from "react";
import { motion } from "framer-motion";
import personalImage from "../../assets/images/faceless-left.svg";
import globeImage from "../../assets/images/global.svg";
import AnimChars from "./AnimChars";
import './style.css';

function Home({personalDetails}) {

  return (
    <section className="home container">
      <div>
          <h3 className="pageTitle">Welcome</h3>
          <p className="pageDescription">Browse {personalDetails.name}'s Portfolio...</p>
      </div>
      <div className='row'>
        <div className="col-12 col-md-3 col-lg-3 image-container">
            <motion.img
              className="personalImage"
              initial={{ y: "10vw", opacity: 0 }}
              animate={{ y: 0, opacity: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              src={personalImage}
              alt=""
            />
        </div>
        <div className="textContainer col-12 col-md-6 col-lg-6">
        <motion.h3
            className="moniker"
            initial={{ y: "-10vw", opacity: 0 }}
            animate={{ y: "10vw", opacity: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            {personalDetails.moniker}
        </motion.h3>
        <motion.p
            className="name"
            initial={{ x: "20vw", y: "20vw", opacity: 0 }}
            animate={{ x: "30vw", y: "10vw", opacity: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            {personalDetails.signature}
        </motion.p>
        <motion.div
            className="name"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: "10vw", opacity: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
          <AnimChars text={personalDetails.tagline} />
        </motion.div>
        </div>
        <div className="image-container col-12 col-md-3 col-lg-3">
          <motion.img
            className="globeImage"
            initial={{ y: "30vw", opacity: 0 }}
            animate={{ y: "20vw", opacity: 0.4 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={globeImage}
            alt=""
          />
        </div>
      </div> 
    </section>
  );
};

export default Home;
