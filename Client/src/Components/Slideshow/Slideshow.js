import React from "react";
import "./Slideshow.style.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../assets/images/6.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpeg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpeg";
import image6 from "../../assets/images/1.jpg";

export default function Slideshow() {
  return (
    <div className="wrapper">
      <AliceCarousel
        infinite={true}
        autoPlay
        animationEasingFunction
        isAutoPlayCanceledOnAction
        autoPlayInterval={2500}
        autoPlayStrategy='none'
        disableButtonsControls
        animationType="fadeout"
        animationDuration={1000}
        items={[
          <img src={image1} className="sliderimg" alt="" />,
          <img src={image2} className="sliderimg" alt="" />,
          <img src={image3} className="sliderimg" alt="" />,
          <img src={image4} className="sliderimg" alt="" />,
          <img src={image5} className="sliderimg" alt="" />,
          <img src={image6} className="sliderimg" alt="" />,
        ]}
      />
    </div>
  );
}
