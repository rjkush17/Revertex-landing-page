import React, { useState, useEffect } from "react";
import "./Projects.css";
import star from "../Hero/star.png";
import ProjectCard from "./ProjectCard";
import p1 from "./img/1.png";
import p2 from "./img/2.webp";
import p3 from "./img/3.jpg";
import p4 from "./img/4.png";
import p5 from "./img/5.webp";
import p6 from "./img/6.webp";

function Project() {

  const imgData = [p1, p2, p3, p4, p5, p6];

  const [isMobile2, setisMobile2] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 500) {
      setisMobile2(true);
    }

    const intervalId = setInterval(function () {
      setCurrent((prevCurrent) => (prevCurrent + 1) % imgData.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [current]);

  const handleCardClick = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % imgData.length);
  };

  function setClasses(num) {
    if (num == current) {
      return "active";
    }
  }
  return (
    <>
      <div className="card-head">
        <p>PORTFOLIO</p>
        <h3>
          Our Let's Work
          <img src={star} className="star" alt="" />
        </h3>
        <p>
          Discover our freshest cration that showcase the power of design
          innovation and digital excellence. Explore our latest work and
          withness the impact we bring to every project.
        </p>
      </div>
      {!isMobile2 && (
        <div className="card-body card-body2">
          {imgData.map((item, index) => (
            <ProjectCard key={index} img={item} />
          ))}
        </div>
      )}
      { isMobile2 && (
        <div className="card-body" onClick={handleCardClick}>
          <ProjectCard img={imgData[current] } />
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

export default Project;
