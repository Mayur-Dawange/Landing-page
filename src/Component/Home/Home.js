import React from "react";
import "./home.scss";
import BannerSlider from "../BannerSlider/BannerSlider";
import TextUtils from "../TextUtils/TextUtils";
// import FunctionClick from "../FunctionClick/FunctionClick";
// import Greet from "../Greet/Greet";
// import ListItem from "../ListItem/ListItem";
// import AlertDismissible from "../Alerts/Alerts";
import UseStateObject from "../UseStateObject/UseStateObject";
import UseEffect from "../UseEffect/UseEffect";
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
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

      {/* <Greet name="mahesh" role="ui designer" /> */}
      {/* <ListItem /> */}
      {/* <Greet name="mahesh" role="ui designer" />
      <Alerts />
      */}
      {/* <ConditionRendering /> */}
      {/* <AlertDismissible alert={alert} /> */}
      {/* <FunctionClick /> */}

      <UseStateObject />
      <UseEffect />
    </div>
  );
};

export default Home;
