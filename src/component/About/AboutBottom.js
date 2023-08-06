import { AboutData } from "@/data/AboutData";
import { DM_Sans } from "next/font/google";
import React, { useState } from "react";
import AboutDetails from "./AboutDetails";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const AboutBottom = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleComponentClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6 mt-5">
          <div className="row row-gap-4">
            {AboutData.map((data, i) => (
              <div
                key={i}
                className="col-lg-6"
                onClick={() => handleComponentClick(i)}
              >
                <div
                  className="card-wrapper"
                  style={{
                    backgroundColor: activeIndex === i ? "#6344c6" : "",
                    boxShadow: activeIndex === i ? "none" : "",
                  }}
                >
                  <h3
                    style={{ color: activeIndex === i ? "white" : "" }}
                    className={DmSans.className}
                  >
                    {data.title}
                  </h3>
                  <p
                    style={{ color: activeIndex === i ? "white" : "" }}
                    className={DmSans.className}
                  >
                    {data.SubTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-5 offset-1">
          {activeIndex == 0 && (
            <AboutDetails
              heading="Get So Many Awards In 5 years"
              subHeading="There are many variations of passages of Lorem Ipsum available, but the."
              btn="Visit  Now"
            />
          )}
          {activeIndex == 1 && (
            <AboutDetails
              heading="Get So Many Awards In 7 years"
              subHeading="There are many variations of passages of Lorem Ipsum available, but the."
              btn="Visit  Now"
            />
          )}
          {activeIndex == 2 && (
            <AboutDetails
              heading="Get So Many Awards In 8 years"
              subHeading="There are many variations of passages of Lorem Ipsum available, but the."
              btn="Visit  Now"
            />
          )}
          {activeIndex == 3 && (
            <AboutDetails
              heading="Get So Many Awards In 10 years"
              subHeading="There are many variations of passages of Lorem Ipsum available, but the."
              btn="Visit  Now"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AboutBottom;
