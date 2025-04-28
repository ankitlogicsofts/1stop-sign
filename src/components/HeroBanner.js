"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box, Container, Grid, Button, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { HomePage } from "@/lib/api/api";

const HeroBanner = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  // console.log(heroSection);

  const [heroSection, setHeroSection] = useState(null);
  const [trustExperience, setTrustExperience] = useState(null);
  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const response = await HomePage();
        if (response) {
          setHeroSection(response?.herosection);
          setTrustExperience(response?.trustExperience);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHomePage();
  }, []);

  return (
    <section className="MainHero">
      <Box className="container">
        <Grid container className="reverce" spacing={4} alignItems="center">
          <Grid item md={6}>
            <Box className="MainHero_content">
              <Typography
                variant="h1"
                className="delay-1"
                dangerouslySetInnerHTML={{
                  __html: heroSection?.main_heading,
                }}
              />
              {/* <h1 className="delay-1">
                {heroSection?.main_heading} */}
              {/* Quality <span>Signage</span> Solutions That Get Your Brand
                Noticed */}
              {/* </h1> */}
              <h2 className="delay-2">
                {heroSection?.sub_heading}
                {/* From shopfronts to vehicles, we design and install signs that
                make an impact */}
              </h2>
              <Box className="banner_btn delay-3" sx={{ mt: 2 }}>
                <a href="#" className="common_btn book_btn">
                  Browse Services
                </a>
                <a href="#" className="common_btn browse_btn">
                  View Our Work
                </a>
              </Box>
            </Box>
          </Grid>

          <Grid item md={6}>
            <Box id="MainSlide">
              <Slider {...settings} className="MainSlide">
                {heroSection?.images?.map((image, index) => (
                  <Box key={index} className="item">
                    <Box className="slideImg">
                      <Image
                        src={image.slider_image}
                        alt={image.slider_image_alt || "slider image"}
                        title={image.slider_image_title || "slider image"}
                        width={595}
                        height={446}
                      />
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default HeroBanner;
