"use client";
import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import { motion } from "framer-motion";

const Hero = () => {
  const animation = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animation}
        viewport={{ once: false }}
        transition={{ staggerChildren: 0.2, duration: 0.4, ease: "easeIn" }}
        className="hero"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <HeroLeft />
            </div>
            <div className="col-lg-6">
              <HeroRight />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
