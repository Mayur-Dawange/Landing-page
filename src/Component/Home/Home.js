import React from "react";
import "./home.scss";
import BannerSlider from "../BannerSlider/BannerSlider";
import TextUtils from "../TextUtils/TextUtils";
import Alerts from "../Alerts/Alerts";
import Greet from "../Greet/Greet";
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
      <Greet name="harish" role="ui developer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
          expedita ducimus odio mollitia quas dolorem animi, quam consequuntur
          harum adipisci?
        </p>
      </Greet>
      <Greet name="mahesh" role="ui designer" />
      <Greet name="dinesh" role="digital marketing" />
      <Alerts />
    </div>
  );
};

export default Home;
