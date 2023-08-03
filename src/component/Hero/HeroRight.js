import Image from "next/image";
import React from "react";
import shapeOne from "../../Images/shape-one.png";
import MyImg from "../../Images/WhatsApp_Image_2023-08-02_at_20.51.18-removebg-preview.png";
import shapeTwo from "../../Images/shape-two.png";
import shapeThree from "../../Images/Ellipse 4.png";

const HeroRight = () => {
  return (
    <>
      <div className="hero-right-wrapper">
        <Image src={MyImg} width={400} height={400} loading="lazy" alt="hero" />
        <div className="my-hero-one-shape">
          <Image
            src={shapeOne}
            width={400}
            height={400}
            loading="lazy"
            alt="myHero"
          />
        </div>
        <div className="my-hero-two-shape">
          <Image
            src={shapeTwo}
            width={400}
            height={400}
            loading="lazy"
            alt="myHero"
          />
        </div>
      </div>
    </>
  );
};

export default HeroRight;
