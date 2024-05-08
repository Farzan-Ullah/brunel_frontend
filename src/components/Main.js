import React, { useState } from "react";
import "../styles/components/Main.css";
import cardImage from "../images/hero-image.png";
import cardSparkle from "../images/spark.png";
import cardRocket from "../images/rocket-image.png";

export default function Main() {
  const slideData = [
    {
      value:
        "Enhance fortune 50 company’s insights teams research capabilities",
    },
    {
      value:
        "Enhance fortune 50 company’s insights teams research capabilities",
    },
    {
      value:
        "Enhance fortune 50 company’s insights teams research capabilities",
    },
  ];
  const [sliderData, setSliderData] = useState(slideData[0].value);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (index) => {
    const carouselSlider = slideData[index].value;
    setSliderData(carouselSlider);
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="hero-section">
        <div className="top-content">
          <p>Success stories</p>
          <h3>
            Every success journey <br /> we’ve encountered.
          </h3>
        </div>
        <div className="left-content">
          <div className="hero-image">
            <img src={cardImage} alt="card-img" />
          </div>
          <div className="left-content-card1">
            <img className="card-sparkle" src={cardSparkle} alt="card-spark" />
            <h3>40%</h3>
            <p>
              Achieved reduction in project execution time by optimising team
              availability
            </p>
          </div>
          <div className="left-content-card2">
            <img className="rocket-img" src={cardRocket} alt="rocket-img" />
            <h3>10 DAYS</h3>
            <p>Staff Deployment</p>
          </div>
          <div className="left-content-card3">
            <h3>
              $0.5 <span>MILLION</span>
            </h3>
            <p>
              Reduced client expenses by saving on hiring and employee costs.
            </p>
          </div>
        </div>

        <div className="right-content">
          <div className="carousel-content">
            <h3>{sliderData}</h3>
          </div>
          <div className="carousel-slider">
            {slideData.map((data, i) => (
              // eslint-disable-next-line jsx-a11y/heading-has-content
              <h1
                key={i}
                className={`dot ${i === currentSlide ? "active" : ""}`}
                onClick={() => handleClick(i)}
              ></h1>
            ))}
          </div>
          <div className="explore-button">Explore More &nbsp; &rarr;</div>
          <div className="back-image"></div>
        </div>
      </div>
    </>
  );
}
