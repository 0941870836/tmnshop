import React, { Component } from "react";
import { Link } from "react-scroll";

export default function Intro() {
  return (
    <section className="intro">
      <div className="overflow"></div>
      <img src="./img/20.jpg" />
      <div className="content">
        <div>
          <h3 className="head-title">
            Getting started with <b>TMN SHOP</b>
          </h3>
          <p className="head-subtitle">
            TMN Shop very happy when your visit to page
          </p>
        </div>
      </div>
      <Link className="arrow-down" to="category" smooth={true} duration={200}>
        <span></span>
        <span></span>
        <span></span>
      </Link>
    </section>
  );
}
