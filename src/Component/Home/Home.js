import React from "react";
import "./home.scss";
import BannerSlider from "../BannerSlider/BannerSlider";
import TextUtils from "../TextUtils/TextUtils";
import Alerts from "../Alerts/Alerts";
// import ProductSlider from "../ProductSlider/ProductSlider";

const Home = () => {
  return (
    <div className="home-hero">
      <BannerSlider />
      {/* <ProductSlider /> */}

      <TextUtils
        preview="Preiview"
        // time="new Date()"
        name=" Number of text and word"
        heading="Type your Text Here"
        lowercase="Convert To Lowercase"
        upercase="convert into uppercase"
        subheading="some ui heading for heading"
      />
      <Alerts />
    </div>
  );
};

export default Home;
