"use client";
import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Box, Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { GetGallery } from "@/lib/api/api";

const OurGallery = () => {
  const [galleries, setGalleries] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryPage = async () => {
      try {
        const response = await GetGallery();
        if (response) {
          setGalleries(response?.galleries);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryPage();
  }, []);

  return (
    <Box py={6} className="CategoryWrp">
      <Box className="container">
        <Box className="MainHead">
          {loading ? (
            <Skeleton
              variant="text"
              width={250}
              height={80}
              style={{ margin: "0 auto" }}
            />
          ) : (
            <Typography variant="h2">{galleries?.title}</Typography>
          )}
        </Box>
        <Grid container spacing={2} mt={2}>
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box className="GridBox categoryBox">
                    <Skeleton variant="rectangular" width="100%" height={300} />
                  </Box>
                </Grid>
              ))
            : galleries?.images?.map((image, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box className="GridBox categoryBox">
                    <Box className="img">
                      <Link href="#">
                        <Image
                          src={image?.url}
                          alt={`Gallery ${index + 1} ${image?.alt}`}
                          title={`Gallery ${index + 1} ${image?.title}`}
                          width={400}
                          height={300}
                          layout="responsive"
                          objectFit="cover"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Grid>
              ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurGallery;
