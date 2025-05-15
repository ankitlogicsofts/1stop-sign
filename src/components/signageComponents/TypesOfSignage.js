"use client";
import React, { useEffect } from "react";
import Slider from "react-slick"; // Import the React Slick component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Skeleton } from "@mui/material";

const ServiceSlider = ({ productTypes }) => {
  // Slick slider settings
  const settings = {
    dots: false, // Enable dot navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    prevArrow: <button type="button" className="slick-prev"></button>,
    nextArrow: <button type="button" className="slick-next"></button>,
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
          adaptiveHeight: true,
        },
      },
    ],
  };

  // Function to set equal height for all items
  const setEqualHeight = () => {
    const items = document.querySelectorAll(".service_slider .item");
    let maxHeight = 0;

    // Reset heights before calculation
    items.forEach((item) => {
      item.style.height = "auto";
    });

    // Find the tallest item
    items.forEach((item) => {
      const itemHeight = item.offsetHeight;
      if (itemHeight > maxHeight) {
        maxHeight = itemHeight;
      }
    });

    // Set all items to the tallest height
    items.forEach((item) => {
      item.style.height = `${maxHeight}px`;
    });
  };

  useEffect(() => {
    // Set equal height on initial render
    setEqualHeight();

    // Recalculate height when the window is resized
    window.addEventListener("resize", setEqualHeight);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", setEqualHeight);
    };
  }, []);
  const isLoading = !productTypes || productTypes.length === 0;

  return (
    <Box className="padM bg1" id="TypesOfSignage">
      <Box className="container">
        <Box className="MainHead">
          <Typography variant="h2">Types of Signage</Typography>
        </Box>
        <Slider {...settings} className="service_slider">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Box className="item" key={index}>
                  <Box className="GridBox">
                    <Box className="img">
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={300}
                      />
                    </Box>
                    <Box className="desc">
                      <Skeleton variant="text" width="100%" height={60} />
                      <Skeleton variant="text" width="100%" />
                      <Skeleton variant="text" width="100%" />
                      <Skeleton variant="text" width="100%" />
                      <Skeleton variant="text" width="100%" />
                      <Skeleton variant="text" width="100%" />
                      <Skeleton variant="text" width="100%" />
                      <Skeleton variant="text" width="100%" />
                      <Skeleton variant="text" width="100%" />
                    </Box>
                  </Box>
                </Box>
              ))
            : productTypes?.map((productType, index) => (
                <Box className="item" key={index}>
                  <Box className="GridBox">
                    <Box className="img">
                      <img
                        src={productType?.product_image}
                        alt={productType?.product_name}
                      />
                    </Box>
                    <Box className="desc">
                      <Typography variant="h3">
                        {productType?.product_name}
                      </Typography>
                      <Typography variant="body1">
                        {productType?.product_description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ServiceSlider;
