import React from "react";
import NavigationBar from "../layout/NavigationBar";
import Hero from "../layout/Hero";
import MainPageImg from "../assets/trim-bush.jpg";
const Home = () => {
  return (
    <>
      <NavigationBar />
      <Hero
        cName="hero"
        heroImg={MainPageImg}
        imgClass="img-hero"
        title="You start making your garden clean"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ornare quam viverra orci sagittis eu volutpat odio."
        btnText="Book Service Now!"
        btnClass="show"
      />
    </>
  );
};

export default Home;
