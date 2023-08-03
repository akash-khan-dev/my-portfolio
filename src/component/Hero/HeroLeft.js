"use client";
import { DM_Sans, Open_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Behance from "@/SVG/Behance";
import Dribble from "@/SVG/Dribble";
import InstagramTwo from "@/SVG/InstagramTow";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700"],
});
const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

const HeroLeft = () => {
  return (
    <>
      <div className="hero-content-wrappper">
        <div className="hero-content">
          <h1 className={DmSans.className}>
            <span className="Creative">Creative</span> Design and Work{" "}
            <span className="Solution">Solution</span>
          </h1>
          <p className={OpenSans.className}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.
          </p>
          <div className="hero-button mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={OpenSans.className}
            >
              Say Hello
            </motion.button>
            <Link className={OpenSans.className + " " + "ms-5"} href="/">
              My Work
              <BsArrowUpRight className="ms-1" />
            </Link>
          </div>
          <div className="hero-social-icon d-flex align-items-center gap-5 mt-5">
            <span className={OpenSans.className}>Follow me on </span>
            <div className="hero-icon d-flex gap-3">
              <Link href="/">
                <Behance />
              </Link>
              <Link href="/">
                <Dribble />
              </Link>
              <Link href="/">
                <InstagramTwo />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLeft;
