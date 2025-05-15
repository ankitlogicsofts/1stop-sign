"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Skeleton } from "@mui/material";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
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

const VehicleGraphics = ({ ourFeatures }) => {
  const [loading, setLoading] = useState(true);
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
    if (ourFeatures?.features) {
      setLoading(false);
    }
    setEqualHeight();
    window.addEventListener("resize", setEqualHeight);

    return () => {
      window.removeEventListener("resize", setEqualHeight);
    };
  }, [ourFeatures]);

  return (
    <section className="padM" id="SignMakers">
      <Box className="container">
        <Box className="gridHead">
          <Box className="gridCol left">
            <h3>
              {loading ? (
                <Skeleton width="60%" />
              ) : (
                ourFeatures?.feature_heading
              )}
            </h3>
            <Typography
              variant="p"
              dangerouslySetInnerHTML={{
                __html: loading
                  ? "<p><span class='skeleton'></span></p>"
                  : ourFeatures?.feature_description,
              }}
            />
          </Box>
        </Box>

        <Slider {...settings} className="GridWrap">
          {ourFeatures?.features?.map((item, i) => (
            <Box key={i} className="item">
              <Box className="GridBox">
                <Box className="img">
                  <a href="#">
                    <img src={item.image} alt={item.title} />
                  </a>
                </Box>
                <Box className="desc">
                  <h3>
                    <a href="#">{item.title}</a>
                  </h3>
                  <ul>
                    {item.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                  <Box className="Explore">
                    <a href="#">
                      View More <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </section>
  );
};

export default VehicleGraphics;
