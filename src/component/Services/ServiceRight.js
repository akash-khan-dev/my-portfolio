"use client";
import { GraphicDesign } from "@/SVG/GraphicDesign";
import { ProductDesign } from "@/SVG/ProductDesign";
import { WebDevelopment } from "@/SVG/WebDevelopment";
import serviceData from "@/data/ServiceData";
import { DM_Sans } from "next/font/google";
import React from "react";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const ServiceRight = () => {
  return (
    <>
      {serviceData.map((data, i) => (
        <div key={i} className="service-wrapper mt-4">
          <div className="service-right-icon">
            <div className="icon-box">
              {(i === 0 && <WebDevelopment />) ||
                (i === 1 && <ProductDesign />) ||
                (i === 2 && <GraphicDesign />)}
            </div>
          </div>
          <div className="service-right-text">
            <div className="text-box">
              <h2 className={DmSans.className}>{data.title}</h2>
              <p className={DmSans.className}>{data.subTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceRight;
