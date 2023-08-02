"use client";
import Link from "next/link";
import React from "react";
import { DM_Sans, Open_Sans } from "next/font/google";
import Logo from "@/SVG/Logo";
import { Resources, Services } from "@/data/FooterData";
import { IoIosSend } from "react-icons/io";
import { Facebook } from "@/SVG/Facebook";
import { Instagram } from "@/SVG/Instagram";
import { Twitter } from "@/SVG/Twitter";
import { Pinterest } from "@/SVG/Pinterest";
import { motion } from "framer-motion";
import Copyright from "./Copyright";
const OpenSans = Open_Sans({
  subsets: ["latin"],
});
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-content">
                {/* <Link href="/">AKASH</Link> */}
                <Link href="/">
                  <Logo />
                </Link>
                <p className={OpenSans.className}>
                  There are many variations of passages of available, but the
                  majority have suffered.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-list">
                <h2 className={DmSans.className} style={{ fontWeight: "bold" }}>
                  Services
                </h2>
                {Services.map((data, i) => (
                  <Link className={DmSans.className} key={i} href={data.url}>
                    {data.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-list">
                <h2 className={DmSans.className} style={{ fontWeight: "bold" }}>
                  Resources
                </h2>
                {Resources.map((data, i) => (
                  <Link className={DmSans.className} key={i} href={data.url}>
                    {data.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-list">
                <h2 className={DmSans.className} style={{ fontWeight: "bold" }}>
                  Resources
                </h2>
                <p className={OpenSans.className}>
                  Subscribe for our upcoming latest address and resources
                </p>
                <div className="newslatter">
                  <input
                    className={DmSans.className}
                    type="text"
                    placeholder="email"
                  />
                  <button>
                    <IoIosSend />
                  </button>
                </div>
                <div className="social-icon d-flex gap-3 mt-4">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.9 }}
                    transition={{ duration: 0.3 }}
                    className="icon-shape d-flex justify-content-center align-items-center"
                  >
                    <Facebook />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.9 }}
                    transition={{ duration: 0.3 }}
                    className="icon-shape d-flex justify-content-center align-items-center"
                  >
                    <Instagram />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.9 }}
                    transition={{ duration: 0.3 }}
                    className="icon-shape d-flex justify-content-center align-items-center"
                  >
                    <Twitter />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.9 }}
                    transition={{ duration: 0.3 }}
                    className="icon-shape d-flex justify-content-center align-items-center"
                  >
                    <Pinterest />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
