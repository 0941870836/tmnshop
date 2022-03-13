import React from "react";
import Proptypes from "prop-types";
import AlbumList from "../Album/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Mr.Siro",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/d/a/5/4da5672a232e3865b47126d5fc351040.jpg",
    },
    {
      id: 1,
      name: "Nhạc Abc",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/e/f/b/4/efb4af3420fdeb4663caa6bed9334d1c.jpg",
    },
    {
      id: 1,
      name: "Nhạc Xyz",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/f/b/d/3/fbd3834e2481949627d3d29e93824c2a.jpg",
    },
  ];

  return (
    <div>
      <h3>Có thể bạn sẽ thích</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
