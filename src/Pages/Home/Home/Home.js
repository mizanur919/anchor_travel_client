import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import ChooseUs from "../ChooseUs/ChooseUs";
import Blogs from "../Blogs/Blogs";
import Subscription from "../../Subscription/Subscription";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import Canvas from "../../Shared/Canvas/Canvas";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Canvas></Canvas>
      <Banner></Banner>
      <Services></Services>
      <Subscription></Subscription>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
