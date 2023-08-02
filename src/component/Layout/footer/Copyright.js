import CopyrightData from "@/data/CopyRightData";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const Copyright = () => {
  return (
    <>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mx-auto">
              <div className="copyright-wrapper">
                <ul>
                  {CopyrightData.map((data, i) => (
                    <li className={OpenSans.className} key={i}>
                      <Link href={data.url}>{data.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Copyright;
