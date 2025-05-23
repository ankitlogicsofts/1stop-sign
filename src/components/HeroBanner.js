"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box, Container, Grid, Typography, Skeleton } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { HomePage } from "@/lib/api/api";

const HeroBanner = ({heroSection}) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // const [heroSection, setHeroSection] = useState(null);
  const [trustExperience, setTrustExperience] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const response = await HomePage();
        if (response) {
          // setHeroSection(response?.herosection);
          setTrustExperience(response?.trustExperience);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
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
              {isLoading ? (
                <>
                  <Skeleton
                    variant="text"
                    className="delay-1"
                    width="80%"
                    height={60}
                  />
                  <Skeleton
                    variant="text"
                    width="60%"
                    height={40}
                    sx={{ mt: 2 }}
                  />
                  <Skeleton
                    variant="text"
                    width="60%"
                    height={40}
                    sx={{ mt: 2 }}
                  />
                  <Box className="banner_btn delay-3" sx={{ mt: 2 }}>
                    <Skeleton
                      variant="rectangular"
                      width={160}
                      height={40}
                      sx={{ mr: 2, borderRadius: 1 }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width={160}
                      height={40}
                      sx={{ borderRadius: 1 }}
                    />
                  </Box>
                </>
              ) : (
                <>
                  <Typography
                    variant="h1"
                    className="delay-1"
                    dangerouslySetInnerHTML={{
                      __html: heroSection?.main_heading,
                    }}
                  />
                  <h2 className="delay-2">{heroSection?.sub_heading}</h2>
                  <Box className="banner_btn delay-3" sx={{ mt: 2 }}>
                    <a href="#" className="common_btn book_btn">
                      Browse Services
                    </a>
                    <a href="#" className="common_btn browse_btn">
                      View Our Work
                    </a>
                  </Box>
                </>
              )}
            </Box>
          </Grid>

          <Grid item md={6}>
            <Box id="MainSlide">
              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={446}
                  animation="wave"
                />
              ) : (
                <>
                  {heroSection?.images?.length > 1 ? (
                    <Slider {...settings} className="MainSlide">
                      {heroSection.images.map((image, index) => (
                        <Box key={index} className="item">
                          <Box
                            className="slideImg"
                            sx={{
                              position: "relative",
                              width: "100%",
                              height: "auto",
                            }}
                          >
                            <Image
                              src={image.slider_image}
                              alt={image.slider_image_alt || "slider image"}
                              title={image.slider_image_title || "slider image"}
                              width={595}
                              height={446}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </Box>
                        </Box>
                      ))}
                    </Slider>
                  ) : (
                    heroSection?.images?.[0] && (
                      <Box className="item">
                        <Box className="slideImg">
                          <Image
                            src={heroSection.images[0].slider_image}
                            alt={
                              heroSection.images[0].slider_image_alt ||
                              "slider image"
                            }
                            title={
                              heroSection.images[0].slider_image_title ||
                              "slider image"
                            }
                            width={595}
                            height={446}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </Box>
                      </Box>
                    )
                  )}
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default HeroBanner;
