"use client";
import PortfolioData from "@/data/PortfolioData";
import { DM_Sans, Grechen_Fuemen } from "next/font/google";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { CounterData } from "@/data/CounterData";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
const grechenFuemen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: ["400"],
});
const PortfolioText = () => {
  return (
    <>
      <div className="portfolio-right-wrapper">
        <div className="portfolio-heading">
          <h1 className={DmSans.className}>
            We <span>Run</span> Agency <span>Smartly</span> With Our
            <span>Team</span> Member.
          </h1>
          <p className={DmSans.className}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look.
          </p>
        </div>
        {PortfolioData.map((data, i) => (
          <div
            key={i}
            className={`${grechenFuemen.className} + portfolio-right-list mt-1`}
          >
            <div className="list-icon">
              <AiOutlineCheck />
            </div>
            <div className="list-text">
              <li className={DmSans.className}>{data.list}</li>
            </div>
          </div>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className={DmSans.className}
        >
          Explore More
        </motion.button>
        <div className={grechenFuemen.className}>
          <div className="porfolio-counter text-center">
            {CounterData.map((data, i) => (
              <div key={i}>
                <CountUp end={data.count} duration={data.duration} />
                <span>{data.pluse}</span>
                <p className={DmSans.className}>{data.discription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioText;
