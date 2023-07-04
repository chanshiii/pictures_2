// import React from "react";
// import firebase from "firebase/app";
// import { getStorage, ref } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "firebase/storage";
import { getPhotoUrl } from "./getPhotoVer2";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import "./App.css";

// 以下FirebaseStorageから画像データを取得
// FirebaseStorageの設定と初期化

const firebaseConfig = {
  apiKey: "AIzaSyD_JBdHTVPMdCnF1kCNdCPeM7BxHKnu8OU",
  authDomain: "pictures-fc50e.firebaseapp.com",
  projectId: "pictures-fc50e",
  storageBucket: "pictures-fc50e.appspot.com",
  messagingSenderId: "1019109300557",
  appId: "1:1019109300557:web:3234142dc98f763a0e7f04"
};

const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

export default function SimpleSlider() {
  // photoUrlsという状態変数と、その状態変数を更新するためのsetPhotoUrlsという関数を宣言
  const [photoUrls, setPhotoUrls] = useState([]);

  useEffect(() => {
    const fetchPhotoUrls = async () => {
      const urls = [];
      const imageNames = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg"];
      for (const imageName of imageNames) {
        const url = await getPhotoUrl(imageName);
        urls.push(url);
      }
      setPhotoUrls(urls);
    };

    fetchPhotoUrls();
  }, []);


  // 以下FirebaseStorageから取得した画像をReactSlickでスライダー表示

  const settings = {
    autoplay: true, //自動再生
    autoplaySpeed: 3000, //自動再生のスピード
    dots: true, //スライダー下の点の表示/非表示
    infinite: true, //無限スクロールの有効/無効
    speed: 1000, //スライド切り替えの速度
    slidesToShow: 1, //一度に表示するスライド数
    slidesToScroll: 1, //一度にスライドする枚数
    // arrows: true, 
  };

  // indexは配列に入っている順番

  return (
    <div>
      <div className="title">
        <h1>Here's Your Album</h1>
      </div>
      <Slider {...settings}>
        {photoUrls.map((url, index) => (
          <div>
            <h2 id="head-text">No.{index + 1}</h2>
            <div id="photo-box" className={`photo${index + 1}`} key={index} >
              <img id="photo" src={url} alt={`Photo${index + 1}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}


