"use client";
import { DM_Sans, Open_Sans } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import AboutBottom from "./AboutBottom";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700"],
});
const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

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

const About = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animation}
        viewport={{ once: false }}
        transition={{ staggerChildren: 0.2, duration: 0.4, ease: "easeIn" }}
        className="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-heading">
                <h1 className={DmSans.className}>
                  Failure is The Power that Gives <span>Success</span>
                </h1>
              </div>
            </div>
            <div className="col-lg-5 offset-1">
              <div className="about-sub-Heading">
                <p className={OpenSans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={OpenSans.className}
                >
                  Download Now
                </motion.button>
              </div>
            </div>
          </div>
          <AboutBottom />
        </div>
      </motion.div>
    </>
  );
};

export default About;
