"use client";
import { DM_Sans } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const ServiceDetails = () => {
  return (
    <>
      <div className="service-details-wrapper">
        <h1 className={DmSans.className}>
          I <span>Run</span> Agency <span>Smartly</span> With My{" "}
          <span>Team</span> Member.
        </h1>
        <p className={DmSans.className}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className={DmSans.className}
        >
          Say Hello
        </motion.button>
      </div>
    </>
  );
};

export default ServiceDetails;
