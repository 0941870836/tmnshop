import React from "react";
import { Link } from "react-router-dom";
import ItemCategory from "./ItemCategory";

export default function Category(props) {
  return (
    <section className="category" id="category">
      <div className="wallpaper">
        <img src="./img/bg-3.png" />
      </div>

      <h3 className="title">Our category</h3>
      <div className="container">
        <div className="flex">
          <ItemCategory />
        </div>
      </div>
    </section>
  );
}
