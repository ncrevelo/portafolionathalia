import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Responsive = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  return (
    <section className="bg-gradient-to-r from-pinkGradient to-violetGradient">
      <Slider {...settings}>
        {[...Array(8)].map((_, index) => (
          <section key={index}>
            <section style={slideContentStyles}>
              <h3>{index + 1}</h3>
            </section>
          </section>
        ))}
      </Slider>
    </section>
  );
};

export default Responsive;
