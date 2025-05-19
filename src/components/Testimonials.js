"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Skeleton } from "@mui/material";

const Testimonials = ({ testimonialData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (testimonialData && testimonialData.lists?.length > 0) {
      setLoading(false);
    }
  }, [testimonialData]);

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

  return (
    <section className="section ourClients">
      <Box className="container">
        <Box className="row">
          <Box className="col-lg-12">
            <Box className="MainHead">
              {loading ? (
                <>
                  <Skeleton
                    variant="text"
                    width={300}
                    height={40}
                    style={{ margin: "0 auto" }}
                  />
                  <Skeleton
                    variant="text"
                    width={500}
                    height={25}
                    style={{ margin: "0 auto" }}
                  />
                </>
              ) : (
                <>
                  <h2>{testimonialData?.main_heading}</h2>
                  <p>{testimonialData?.sub_heading}</p>
                </>
              )}
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
                {loading ? (
                  <Slider {...sliderSettings}>
                    {[...Array(3)].map((_, index) => (
                      <Box className="item" key={index}>
                        <Box className="client_content">
                          <Skeleton variant="text" width={100} height={30} />
                          <Skeleton variant="rectangular" height={80} />
                          <Box className="clientAvtar" mt={2}>
                            <Skeleton variant="text" width={100} />
                            <Skeleton variant="text" width={80} />
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Slider>
                ) : (
                  testimonialData?.lists?.length > 0 && (
                    <Slider {...sliderSettings}>
                      {testimonialData.lists.map((item, index) => (
                        <Box className="item" key={index}>
                          <Box className="client_content">
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
                  )
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Testimonials;
