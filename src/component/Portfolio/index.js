import React from "react";
import portfolio from "../../Images/portfolio.png";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import PortfolioText from "./PortfolioText";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-5">
              <div className="portfolio-left">
                <Image
                  src={portfolio}
                  width={300}
                  height={300}
                  alt="portfolio"
                />
                <div className="experience">
                  <div className="text-center">
                    <h4 className={DmSans.className}>2+</h4>
                    <h5 className={DmSans.className}>Year</h5>
                    <p className={DmSans.className}>Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-1">
              <PortfolioText />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
