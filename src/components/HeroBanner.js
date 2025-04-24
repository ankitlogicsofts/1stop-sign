"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Container, Grid, Button, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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

    return (
        <section className="MainHero">
            <Box className="container">
                <Grid container className="reverce" spacing={4} alignItems="center">
                    <Grid item md={6}>
                        <Box className="MainHero_content">
                            <h1 className="delay-1">
                                Quality <span>Signage</span> Solutions That Get Your Brand Noticed
                            </h1>
                            <h2 className="delay-2">
                                From shopfronts to vehicles, we design and install signs that make an impact
                            </h2>
                            <Box className="banner_btn delay-3" sx={{ mt: 2 }}>
                                <a href="#" className="common_btn book_btn">Browse Services</a>
                                <a href="#" className="common_btn browse_btn">View Our Work</a>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item md={6}>
                        <Box id="MainSlide">
                            <Slider {...settings} className="MainSlide">
                                <Box className="item">
                                    <Box className="slideImg">
                                        <Image src="/assets/images/blogImg01.jpg"
                                            alt="img"
                                            width={595}
                                            height={446} />
                                    </Box>
                                </Box>
                                <Box className="item">
                                    <Box className="slideImg">
                                        <Image src="/assets/images/blogImg02.jpg"
                                            alt="img"
                                            width={595}
                                            height={446} />
                                    </Box>
                                </Box>
                                <Box className="item">
                                    <Box className="slideImg">
                                        <Image src="/assets/images/blogImg03.jpg"
                                            alt="img"
                                            width={595}
                                            height={446} />
                                    </Box>
                                </Box>
                            </Slider>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
};

export default HeroBanner;
