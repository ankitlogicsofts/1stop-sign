"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Container, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Margin } from "@mui/icons-material";

const serviceData = [
    {
        title: "Shop Front & Business Signs",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/assets/images/service01.jpg",
    },
    {
        title: "Vehicle Graphics",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/assets/images/VehicleGraphics-2.jpg",
    },
    {
        title: "Exhibition Displays",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/assets/images/exhibition.jpg",
    },
    {
        title: "Window & Wall Graphics",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/assets/images/exhibition.jpg",
    },
    {
        title: "Printing Services",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/assets/images/exhibition.jpg",
    },
    {
        title: "Bespoke Signage",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/assets/images/exhibition.jpg",
    },
];

const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    Margin: "20"
};

const OurServices = () => {
    return (
        <Box component="section" className="sec_1 services">
            <Box className="container">
                <Box className="MainHead" textAlign="center" mb={4}>
                    <Typography variant="h2">Our Services</Typography>
                    <Typography variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                </Box>

                {serviceData.map((section, index) => (
                    <Box key={index} mb={6}>
                        <Box className="gridHead">
                            <Box class="gridCol left">
                                <Typography variant="h3" mb={1}>
                                    {section.title}
                                </Typography>
                                <Typography variant="body2" mb={2}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Typography>
                            </Box>
                        </Box>

                        <Slider {...settings} className="custom-slider">
                            {[...Array(3)].map((_, i) => (
                                <Box key={i} className="item">
                                    <Box className="GridBox">
                                        <Box className="img">
                                            <a href="#">
                                                <Image
                                                    src={section.image}
                                                    alt={section.title}
                                                    width={600}
                                                    height={400}
                                                    style={{ width: "100%", height: "auto" }}
                                                />
                                            </a>
                                        </Box>
                                        <Box className="desc">
                                            <Typography variant="h6">
                                                <a href="#">{section.title}</a>
                                            </Typography>
                                            <Typography variant="body2">{section.description}</Typography>
                                            <Box className="Explore" mt={1}>
                                                <a href="#">
                                                    Explore More <i className="fa-solid fa-arrow-right"></i>
                                                </a>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default OurServices;
