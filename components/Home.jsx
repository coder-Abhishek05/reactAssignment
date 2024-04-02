import React from "react";
import Card from "./card";
import FrontPage from "./FrontPage";
import "../public/styles.css";
function Home() {
  return (
    <div className="home_page">
      <FrontPage></FrontPage>
      <div className="cards">
        <Card
          img="https://m.media-amazon.com/images/I/61kFL7ywsZS._AC_UY327_FMwebp_QL65_T1F_.jpg"
          title="Walk like a pro"
          sub="featured"
          description="Indulge in exceptional audio quality and comfort with our range of headphones, meticulously engineered to elevate your listening experience to new heights."
        />
        <Card
          img="https://m.media-amazon.com/images/I/61WjZrbnqML._AC_UY327_FMwebp_QL65_T1F_.jpg"
          title="Be the best verson of yourself"
          sub="featured"
          description="Elevate your sound, elevate your style. Discover premium headphones for an unparalleled audio experience."
        ></Card>
        <Card
          img="https://images-na.ssl-images-amazon.com/images/I/31aaN0JjBsL._SX300_SY300_QL70_FMwebp_.jpg"
          title="Stylish, tangle-free audio freedom"
          sub="featured"
          description="Immerse yourself in pure sound. Explore our curated selection of headphones for every lifestyle."
        ></Card>
        {/* <Card
          img="https://m.media-amazon.com/images/I/41d6iHtmzAL._SX300_SY300_QL70_FMwebp_.jpg"
          title="Welcome onboarding"
          sub="featured"
          description="Become the coolest among the cools"
        ></Card> */}
        <Card
          img="https://m.media-amazon.com/images/I/7159GCFgGiL._SX679_.jpg"
          title=" Pocket-sized, cable-free audio companions"
          sub="featured"
          description="Select from a collection of rare futuristic sneakers"
        ></Card>
      </div>
    </div>
  );
}
export default Home;
