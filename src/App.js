import "../src/Assets/scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Service from "./Component/Service/Service";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
