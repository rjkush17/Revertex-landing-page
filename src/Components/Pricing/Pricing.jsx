import React,{useState, useEffect} from 'react'
import star from '../Hero/star.png'
import PricingCard from './PricingCard'
import './Pricing.css'

function Pricing() {
    const pricingData = [{
        plan: "Basic",
        price : "$445",
        Pages : 1,
    },{
        plan: "Standard",
        price : "$645",
        Pages : 3,
    },
    {
        plan: "Premium",
        price : "$945",
        Pages : 10,
    }];

    const [isMobile, setisMobile] = useState(false);

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        let width = window.innerWidth;
        if (width < 500) {
          setisMobile(true);
        }
    
        const intervalId = setInterval(function () {
          setCurrent((prevCurrent) => (prevCurrent + 1) % pricingData.length);
        }, 4000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [pricingData, current]);
    
      const handleCardClick = () => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % pricingData.length);
      };

      function setClasses(num){
        if(num == current){
          return "active"
        }
      }


  return (
    <>
    <div className="card-head">
    <p>PRICING</p>
    <h3>
      One Fixed price to get your project done
      <img src={star} className="star" alt="" />
    </h3>
    <p>
      Your custom on-demand team for only a single payment
    </p>
  </div>
 {!isMobile && <div className="card-body">
 {pricingData.map((val,ind)=>(
    <PricingCard key={ind} Data={val}/>
  ))}
 </div>}
 {isMobile && <div className="card-body" onClick={handleCardClick}><PricingCard Data={pricingData[current]}/>
 <div className="dots">
            <span className={setClasses(0)}></span>
            <span className={setClasses(1)}></span>
            <span className={setClasses(2)}></span>
          </div>
 </div> }
    </>
  )
}

export default Pricing