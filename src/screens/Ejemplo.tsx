// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagen1 from '../assets/carrusel/imagen1.jpg';
import imagen2 from '../assets/carrusel/imagen2.jpg';
//import imagen3 from '../assets/carrusel/imagen3.jpg';
import imagen4 from '../assets/carrusel/imagen4.jpg';
import imagen5 from '../assets/carrusel/imagen5.jpg';
import imagen6 from '../assets/carrusel/imagen6.jpg';
import imagen7 from '../assets/carrusel/imagen7.jpg';

const Responsive = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          arrows: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          centerMode: false,
        },
      },
    ],
  };

  const slideContentStyles = {
    width: "170px",
    height: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    margin: "0 8px",
    boxSizing: "border-box" as const,
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    borderRadius: "8px",
  };

  const images = [imagen1, imagen2,  imagen4, imagen5, imagen6, imagen7];
  
  

  return (
    <section className="bg-gradient-to-r from-pinkGradient to-violetGradient">
      <Slider {...settings}>
        {images.map((image, index) => (
          <section key={index}>
            <section style={slideContentStyles}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={imageStyles}
              />
            </section>
          </section>
        ))}
      </Slider>
    </section>
  );
};

export default Responsive;

