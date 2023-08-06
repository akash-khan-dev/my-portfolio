import { DM_Sans } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const AboutDetails = ({ heading, subHeading, btn }) => {
  return (
    <>
      <motion.div
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        className="about-details-wrapper"
      >
        <h2 className={DmSans.className}>{heading}</h2>
        <p className={DmSans.className}>{subHeading}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className={DmSans.className}
        >
          {btn}
        </motion.button>
      </motion.div>
    </>
  );
};

export default AboutDetails;
