import React from "react";
import "./home.scss";
import BannerSlider from "../BannerSlider/BannerSlider";
import TextUtils from "../TextUtils/TextUtils";
import FunctionClick from "../FunctionClick/FunctionClick";
import Greet from "../Greet/Greet";
import ListItem from "../ListItem/ListItem";
// import ConditionRendering from "../ConditionRendering/ConditionRendering";
// import Alerts from "../Alerts/Alerts";
// import Greet from "../Greet/Greet";
// import FunctionClick from "../FunctionClick/FunctionClick";
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
      <Greet name="mahesh" role="ui designer" />
      <ListItem />
      {/* <Greet name="mahesh" role="ui designer" />
      <Alerts />
      */}
      {/* <ConditionRendering /> */}
      <FunctionClick />
    </div>
  );
};

export default Home;
