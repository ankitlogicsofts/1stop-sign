"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box, Container, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Margin } from "@mui/icons-material";
import { Services } from "../../lib/api/api";
import Link from "next/link";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  Margin: "20",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
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

const OurServices = () => {
  const [ourService, setOurService] = useState(null);
  const [serviceLists, setServiceLists] = useState(null);
  useEffect(() => {
    const fetchOurService = async () => {
      try {
        const response = await Services();
        if (response) {
          setOurService(response);
          setServiceLists(response?.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOurService();
  }, []);
  console.log(serviceLists);

  return (
    <Box component="section" className="sec_1 services">
      <Box className="container">
        <Box className="MainHead" textAlign="center" mb={4}>
          <Typography variant="h2">{ourService?.main_heading}</Typography>
          {/* <Typography variant="body1">{ourService?.sub_heading}</Typography> */}
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: ourService?.sub_heading,
            }}
          />
        </Box>

        {serviceLists?.map((section, index) => (
          <Box key={index} mb={6}>
            <Box className="gridHead">
              <Box className="gridCol left">
                <Typography variant="h3" mb={1}>
                  {section.name}
                </Typography>
                <Typography variant="body2" mb={2}>
                  {section.description}
                </Typography>
              </Box>
            </Box>

            <Slider {...settings} className="custom-slider">
              {section.services.map((item, i) => (
                <Box key={i} className="item">
                  <Box className="GridBox">
                    <Box className="img">
                      <Link href={`/services/${item.slug}`}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={600}
                          height={400}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </Link>
                    </Box>
                    <Box className="desc">
                      <Typography variant="h6">
                        <Link href={`/services/${item.slug}`}>
                          {item.title}
                        </Link>
                      </Typography>
                      <Typography variant="body2">{item.content}</Typography>
                      <Box className="Explore" mt={1}>
                        <Link href={`/services/${item.slug}`}>
                          Explore More
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
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
