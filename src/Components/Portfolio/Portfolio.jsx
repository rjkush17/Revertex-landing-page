import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import star from "../Hero/star.png";
import PortfolioCard from "./PortfolioCard";
import chat from "./img/chat.png";
import cloack from "./img/cloack.png";
import cursor from "./img/cursor.png";
import electric from "./img/electric.png";
import map from "./img/map.png";
import trophy from "./img/trophy.png";


function Portfolio() {
  const portfolioData = [
    {
      name: "Expertise in Figma-to webflow",
      des: "we have a proven track record on expertise in seamlessly turning Figma design into functional Webflow websites.",
      img: trophy,
    },
    {
      name: "On-Page SEO Excellence",
      des: "we have a proven track record on expertise in seamlessly turning Figma design into functional Webflow websites.",
      img: map,
    },
    {
      name: "interactive magic",
      des: "we have a proven track record on expertise in seamlessly turning Figma design into functional Webflow websites.",
      img: electric,
    },
    {
      name: "Dedicated Project Manager",
      des: "we have a proven track record on expertise in seamlessly turning Figma design into functional Webflow websites.",
      img: chat,
    },
    {
      name: "Comprehensive Testing",
      des: "we have a proven track record on expertise in seamlessly turning Figma design into functional Webflow websites.",
      img: cursor,
    },
    {
      name: "Timely Delivery",
      des: "we have a proven track record on expertise in seamlessly turning Figma design into functional Webflow websites.",
      img: cloack,
    },
  ];

  const [isMobile, setisMobile] = useState(false);

  const [current, setCurrent] = useState(0);

  useEffect(() => {

   function checkIsMobile() {
      let width = window.innerWidth;
      if (width < 500) {
        setisMobile(true);
      } else {
        setisMobile(false);
      }
    }
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();

    const intervalId = setInterval(function () {
      setCurrent((prevCurrent) => (prevCurrent + 1) % portfolioData.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [portfolioData, current]);

  const handleCardClick = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % portfolioData.length);
  };

  function setClasses(num){
    if(num == current){
      return "active"
    }
  }

  return (
    <>
      <div className="card-head">
        <p>SERVICE</p>
        <h3>
          Exceeding Expectations
          <img src={star} className="star" alt="" />
        </h3>
        <p>
          We're not just another agency, we're your path to exceptional web
          project.
        </p>
      </div>
      {!isMobile && (
        <div className="card-body">
          {portfolioData.map((item, index) => (
            <PortfolioCard
              key={index}
              name={item.name}
              des={item.des}
              img={item.img}
            />
          ))}
        </div>
      )}
      {isMobile && (
        <div className="card-body" onClick={handleCardClick}>
          <PortfolioCard
            name={portfolioData[current].name}
            des={portfolioData[current].des}
            img={portfolioData[current].img}
          />
          <div className="dots">
            <span className={setClasses(0)}></span>
            <span className={setClasses(1)}></span>
            <span className={setClasses(2)}></span>
            <span className={setClasses(3)}></span>
            <span className={setClasses(4)}></span>
            <span className={setClasses(5)}></span>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
