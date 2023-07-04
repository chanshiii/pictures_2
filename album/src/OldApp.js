import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//https以外の画像ソースから表示可能か

export default function SimpleSlider() {
  const settings = {
    autoplay: true, //自動再生
    autoplaySpeed: 5000, //自動再生のスピード
    dots: true, //スライダー下の点の表示/非表示
    infinite: true, //無限スクロールの有効/無効
    speed: 1000, //スライド切り替えの速度
    slidesToShow: 1, //一度に表示するスライド数
    slidesToScroll: 1, //一度にスライドする枚数
  };
  return (
    <Slider {...settings}>
      <div className="photo1">
        <h3>1</h3>
        <img src="https://thumb.photo-ac.com/99/9966ea62e3e5b67a46d3abfab40fee63_t.jpeg" alt="photo1" />
      </div>
      <div className="photo2">
        <h3>2</h3>
        <img src="https://thumb.photo-ac.com/76/7680788b0b108044f7b5608d0e48ec20_t.jpeg" alt="photo1" />
      </div>
      <div className="photo3">
        <h3>3</h3>
        <img src="https://thumb.photo-ac.com/bf/bf98b0d48a2a0a93572af4ab442c073f_t.jpeg" alt="photo1" />
      </div>
      <div className="photo4">
        <h3>4</h3>
        <img src="https://thumb.photo-ac.com/6d/6dcc0ca2a5eb373cd6e51434016b4c72_t.jpeg" alt="photo1" />
      </div>
      <div className="photo5">
        <h3>5</h3>
        <img src="https://thumb.photo-ac.com/6e/6ee5826a93f3bae2d883dc5218b9d179_t.jpeg" alt="photo1" />
      </div>
    </Slider>
  );
}
