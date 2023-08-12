import React from "react";
import ServiceLeft from "./ServiceLeft";
import ServiceRight from "./ServiceRight";

const Service = () => {
  return (
    <>
      <div className="Service">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-6">
              <ServiceLeft />
            </div>
            <div className="col-lg-6">
              <ServiceRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
