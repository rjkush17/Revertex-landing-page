import React from "react";
import profile1 from "./profiles/1.jpg";
import profile2 from "./profiles/2.jpg";
import profile3 from "./profiles/3.avif";
import star from "./star.png";
import "./Hero.css";
import { FiArrowUpRight } from "react-icons/fi";

function Hero() {
  return (
    <>
      <h1 className="headlines">
        We Develop <img src={star} className="star" alt="" />{" "}
        <br className="br" />
        <span className="colored-text"> Amazing </span> Websites{" "}
        <br className="br" /> for your bussiness
        <span className="colored-text">.</span>
      </h1>

      <p className="hero-text">
        Discover our seamless workflow as we transform Figma designs into
        stunning webflow websites. Explore the synergy between design and
        development for a pixel-perfect online experience.
      </p>

      <div className="hero-footer">
        <button id="button">
          View Work
          <FiArrowUpRight className="arrow" />
        </button>
        <div className="img-container">
          <div>
          <img src={profile1} height={35} alt="" />
          <img src={profile2} height={35} alt="" />
          <img src={profile3} height={35} alt="" />
          </div>
          <div className="clients">
            <h5>1000+</h5>
            <p>satisfied clients</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
