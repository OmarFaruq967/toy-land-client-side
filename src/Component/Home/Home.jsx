import React from "react";
import About from "./About";
import Review from "./Review";
import CategoriesTab from "../SubCategory/CategoriesTab";
import Gallery from "./GalleryPhoto";
import GalleryPhoto from "./GalleryPhoto";

const Home = () => {
  return (
    <div>
      {/* //Hero image Section */}
      <div>
        <div
          className="hero min-h-screen "
          style={{
            backgroundImage: `url("https://i.ibb.co/YBxhZMg/Bannar-1.jpg")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Pick the best toy</h1>
              <p className="mb-5 text-xl">
                We offer premium products, wether you are shopping, at one of our actual stor or vai our website
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      {/* //Hero image Section end */}
      <About className="mb-5"></About>
      <GalleryPhoto></GalleryPhoto>
      <CategoriesTab></CategoriesTab>
      {/* <Review></Review> */}

    </div>
  );
};

export default Home;
