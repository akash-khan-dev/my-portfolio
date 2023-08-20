import Docco from "@/SVG/DoccoSemise";
import EmadFashion from "@/SVG/EmadFashion";
import HappyMart from "@/SVG/HappyMart";
import LoriChecker from "@/SVG/LoriChecker";
import { DM_Sans } from "next/font/google";
import React from "react";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const Company = () => {
  return (
    <>
      <div className="company">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mx-auto">
              <div className="company-heading text-center mb-5">
                <h2 className={DmSans.className}>Reputed Partners</h2>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-3">
              <div className="company-wrapper">
                <div className="company-logo">
                  <HappyMart />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="company-wrapper">
                <div className="company-logo">
                  <LoriChecker />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="company-wrapper">
                <div className="company-logo">
                  <EmadFashion />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="company-wrapper">
                <div className="company-logo">
                  <Docco />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
