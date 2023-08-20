"use client";
import React from "react";

import blogimg from "../../Images/slider_1.jpg";
import Image from "next/image";
import { BlogDate } from "@/SVG/BlogDate";
import blogData from "@/data/BlogData";
import { DM_Sans } from "next/font/google";
import Slider from "react-slick";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="blog-heading text-center">
                <h1 className={DmSans.className}>Latest Blog</h1>
                <p className={DmSans.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <Slider {...settings}>
                {blogData.map((data, i) => (
                  <div key={i} className="blog-wrapper ">
                    <div className="blog-img">
                      <Image src={data.img} alt="blogimg" />
                    </div>
                    <div className="blog-content">
                      <div className="blog-date">
                        <div className="date-icon">
                          <BlogDate />
                        </div>
                        <div className="date-content">
                          <p className={DmSans.className}>{data.date}</p>
                        </div>
                      </div>
                      <h2 className={DmSans.className}>{data.title}</h2>
                      <button className={DmSans.className}>{data.btn}</button>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
