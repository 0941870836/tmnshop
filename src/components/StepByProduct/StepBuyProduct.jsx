import React, { Component } from "react";

export default function StepBuyProduct() {
  return (
    <section
      className="stepbuyproduct text-center"
      style={{
        backgroundImage: "url('./img/group-3.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <h2 className="title ">
        Register your product in Four <br />
        simple steps
      </h2>
      <div className="content">
        <div className="step-group">
          <div>
            1<br />
            STEP
          </div>
          <p>
            Choose the product
            <br />
            you want
          </p>
        </div>
        <div className="line"></div>
        <div className="step-group">
          <div>
            2<br />
            STEP
          </div>
          <p>
            Add
            <br />
            shopping cart
          </p>
        </div>
        <div className="line"></div>
        <div className="step-group">
          <div>
            3<br />
            STEP
          </div>
          <p>
            Pay
            <br />
            your product
          </p>
        </div>
        <div className="line"></div>
        <div className="step-group">
          <div>
            4<br />
            STEP
          </div>
          <p>
            Check
            <br />
            your product
          </p>
        </div>
      </div>
    </section>
  );
}
