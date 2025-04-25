"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const TrustValueProps = ({ trustExperience }) => {
  const trustItems = [
    {
      icon: "/assets/images/icon01.png",
      title: "Over 20 Years of Experience",
      className: "Experience",
    },
    {
      icon: "/assets/images/icon02.png",
      title: "Nationwide Installation",
      className: "Nationwide",
    },
    {
      icon: "/assets/images/icon03.png",
      title: "Free Design Consultation",
      className: "Design",
    },
    {
      icon: "/assets/images/icon04.png",
      title: "Rapid Turnaround",
      className: "Rapid",
    },
  ];

  const getClassName = (id) => {
    switch (id) {
      case 1:
        return "Experience";
      case 2:
        return "Nationwide";
      case 3:
        return "Design";
      case 4:
        return "Rapid";
      default:
        return "";
    }
  };

  return (
    <section className="trustWrap">
      <Box className="container" id="trustSec">
        <Grid container spacing={0}>
          <Grid container spacing={0}>
            {trustExperience?.images?.map((item, index) => (
              <Box
                className={`trustBox ${getClassName(index + 1)}`}
                key={index}
              >
                <Box className="trustBoxIn">
                  <Box className="imgIcon" sx={{ mb: 1 }}>
                    <Image
                      src={item.trust_icon}
                      alt={item.trust_image_alt}
                      title={item.trust_image_title}
                      width={64}
                      height={64}
                    />
                  </Box>
                  <Typography variant="h6" component="h3">
                    {item.trust_title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default TrustValueProps;
