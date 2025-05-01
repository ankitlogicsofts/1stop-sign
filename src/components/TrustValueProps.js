"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Skeleton } from "@mui/material";
import Image from "next/image";
import { HomePage } from "@/lib/api/api";

const TrustValueProps = () => {
  const [trustExperience, setTrustExperience] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const response = await HomePage();
        if (response) {
          setTrustExperience(response?.trustExperience);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomePage();
  }, []);

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
            {loading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <Box
                    className={`trustBox ${getClassName(index + 1)}`}
                    key={index}
                  >
                    <Box className="trustBoxIn">
                      <Skeleton
                        variant="circular"
                        className="imgIcon"
                        width={64}
                        height={64}
                      />
                      <Skeleton
                        variant="text"
                        width={100}
                        height={30}
                        sx={{ mt: 1 }}
                      />
                    </Box>
                  </Box>
                ))
              : trustExperience?.images?.map((item, index) => (
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
