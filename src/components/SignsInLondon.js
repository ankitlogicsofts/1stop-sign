"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const SignsInLondon = ({ ourFeatures, loading }) => {
  // Equal height function
  const setEqualHeight = () => {
    const items = document.querySelectorAll(".GridBox");
    let maxHeight = 0;

    items.forEach((item) => {
      item.style.height = "auto"; // Reset height
      const height = item.offsetHeight;
      if (height > maxHeight) maxHeight = height;
    });

    items.forEach((item) => {
      item.style.height = `${maxHeight}px`;
    });
  };

  useEffect(() => {
    setEqualHeight();
    window.addEventListener("resize", setEqualHeight);

    return () => {
      window.removeEventListener("resize", setEqualHeight);
    };
  }, []);

  return (
    <section className="padM SignsInLondon" id="SignMakers">
      <Box className="container">
        <Box className="MainHead">
          <Typography variant="h2">{ourFeatures?.feature_heading}</Typography>
          <Typography
            variant="p"
            dangerouslySetInnerHTML={{
              __html: loading
                ? "<p><span class='skeleton'></span></p>"
                : ourFeatures?.feature_description,
            }}
          />
        </Box>
        <Slider {...settings} className="GridWrap">
          {ourFeatures?.features?.map((item, i) => (
            <Box key={i} className="item">
              <Box className="GridBox">
                <Box className="img">
                  <a href="#">
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                  </a>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </section>
  );
};

export default SignsInLondon;
