"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomePage } from "@/lib/api/api";
import { Box, Typography } from "@mui/material";
import { Star, StarHalf, StarBorder } from "@mui/icons-material";

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const [testimonialData, setTestimonialData] = useState(null);
  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        const response = await HomePage();
        if (response) {
          setTestimonialData(response?.testimonials);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTestimonialData();
  }, []);

  return (
    <section className="section ourClients">
      <Box className="container">
        <Box className="row">
          <Box className="col-lg-12">
            <Box className="MainHead">
              <h2>{testimonialData?.main_heading}</h2>
              <p>{testimonialData?.sub_heading}</p>
            </Box>
          </Box>
        </Box>

        <Box className="row">
          <Box className="col-lg-12">
            <Box className="client_outer">
              <Box
                id="client_slider"
                className="slide owl_slide owl-carousel owl-theme"
              >
                <Slider {...sliderSettings}>
                  {testimonialData?.lists.map((item, index) => (
                    <Box className="item" key={index}>
                      <Box className="client_content">
                        {/* <Box className="stars">
                          {(() => {
                            const rating = parseFloat(item.client_rating);
                            const fullStars = Math.floor(rating);
                            const hasHalfStar = rating % 1 !== 0;
                            const totalStars = 5;

                            return (
                              <>
                                {[...Array(fullStars)].map((_, i) => (
                                  <Star
                                    key={`full-${i}`}
                                    sx={{ color: "##facc15" }}
                                  />
                                ))}
                                {hasHalfStar && (
                                  <StarHalf sx={{ color: "##facc15" }} />
                                )}
                                {[
                                  ...Array(
                                    totalStars -
                                      fullStars -
                                      (hasHalfStar ? 1 : 0)
                                  ),
                                ].map((_, i) => (
                                  <StarBorder
                                    key={`empty-${i}`}
                                    sx={{ color: "##facc15" }}
                                  />
                                ))}
                              </>
                            );
                          })()}
                        </Box> */}
                        <Box className="stars">
                          {(() => {
                            const rating = parseFloat(item.client_rating);
                            const fullStars = Math.floor(rating);
                            const hasHalfStar = rating % 1 !== 0;
                            const totalStars = 5;

                            return (
                              <>
                                {[...Array(fullStars)].map((_, i) => (
                                  <i
                                    className="fa-solid fa-star"
                                    key={`full-${i}`}
                                    style={{ color: "#facc15" }}
                                  ></i>
                                ))}
                                {hasHalfStar && (
                                  <i
                                    className="fa-solid fa-star-half-stroke"
                                    style={{ color: "#facc15" }}
                                  ></i>
                                )}
                                {[
                                  ...Array(
                                    totalStars -
                                      fullStars -
                                      (hasHalfStar ? 1 : 0)
                                  ),
                                ].map((_, i) => (
                                  <i
                                    className="fa-regular fa-star"
                                    key={`empty-${i}`}
                                    style={{ color: "#facc15" }}
                                  ></i>
                                ))}
                              </>
                            );
                          })()}
                        </Box>
                        <Typography variant="p">
                          {item.client_feedback}
                        </Typography>
                        <Box className="clientAvtar">
                          <Box>
                            <Box className="name">{item.client_name}</Box>
                            <Box className="designation">
                              {item.client_role}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Slider>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Testimonials;
