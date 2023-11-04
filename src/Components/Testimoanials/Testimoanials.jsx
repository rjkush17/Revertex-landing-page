import React, {useState, useEffect} from "react";
import p1 from "./img/p1.jpg";
import p2 from "./img/p2.jpg";
import p3 from "./img/p3.jpg";
import p4 from "./img/p4.jpg";
import p5 from "./img/p5.jpg";
import TestimonialsCard from "./TestimonialsCard";
import star from "../Hero/star.png";
import "./Testimonials.css";

function Testimoanials() {
  const clientData = [
    {
      name: "Nitesh Rajput",
      Position: "Founder, IAcademy",
      testimoanials:
        "I hired Digital Agency to design and develop my e-commerce website, and I couldn't be happier with the result. They were professional, creative, and responsive throughout the whole process. They listened to my needs and preferences, and delivered a website that exceeded my expectations. The website is beautiful, user-friendly, and fast. It has increased my sales and conversions significantly. I highly recommend Digital Agency to anyone looking for a reliable and talented digital partner.",
      profile: p1,
    },
    {
      name: "John Doe",
      Position: "CEO, Tech Innovators",
      testimoanials:
        "I hired your company to develop a custom software solution for my business, and I was extremely impressed with the results. Your team was knowledgeable, experienced, and efficient. They worked closely with me to understand my needs and requirements, and they delivered a product that met and exceeded my expectations. The software is easy to use, reliable, and scalable. It has helped me to streamline my business processes and improve my efficiency. I highly recommend your company to anyone looking for a custom software development partner.",
      profile: p2,
    },
    {
      name: "Jane Smith",
      Position: "Director of Marketing, ABC Corp",
      testimoanials:
        "I hired your company to provide IT consulting services for my business, and I am very happy with the results. Your team is knowledgeable, responsive, and supportive. They have helped me to identify and implement the best IT solutions for my needs. They have also provided me with valuable advice and guidance on a variety of IT-related issues. I highly recommend your company to any business looking for IT consulting services.",
      profile: p3,
    },
    {
      name: "Samantha Williams",
      Position: "Designer, Creative Designs",
      testimoanials:
        "I hired your company to manage my company's social media accounts, and I am very pleased with the results. Your team is creative, strategic, and results-oriented. They have helped me to develop and implement a social media strategy that has increased brand awareness, generated leads, and driven sales. They also provide me with regular reports and analytics so that I can track the progress of my social media campaigns. I highly recommend your company to any business looking for social media management services.",
        profile: p4,
    },
    {
      name: "Nikki Johnson",
      Position: "Co-Founder, GreenTech",
      testimoanials:
        "I hired your company to provide search engine optimization (SEO) services for my website, and I am very happy with the results. Your team is knowledgeable, experienced, and results-oriented. They have helped me to improve my website's ranking in search engine results pages (SERPs), which has led to increased traffic and conversions. They also provide me with regular reports and analytics so that I can track the progress of my SEO campaigns. I highly recommend your company to any business looking for SEO services. ",
      profile: p5,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
 
    const intervalId = setInterval(function () {
      setCurrent((prevCurrent) => (prevCurrent + 1) % clientData.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [current]);

  const handleCardClick = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % clientData.length);
  };

  function setClasses(num) {
    if (num == current) {
      return "active";
    }
  }

  return (
    <>
      <div className="card-head">
        <p>TESTIMONIALS</p>
        <h3>
          Our clients Says
          <img src={star} className="star" alt="" />
        </h3>
        <p>Dont't take our Word for it. Hear it from our happy clients</p>
      </div>
      <div className="textimonials-body" onClick={handleCardClick}>
        <TestimonialsCard data={clientData[current]} />
        <div className="dots">
            <span className={setClasses(0)}></span>
            <span className={setClasses(1)}></span>
            <span className={setClasses(2)}></span>
            <span className={setClasses(3)}></span>
            <span className={setClasses(4)}></span>
          </div>
      </div>
    </>
  );
}

export default Testimoanials;
