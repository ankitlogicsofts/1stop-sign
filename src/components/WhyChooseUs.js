"use client";
import React from "react";
import { Box, Grid, Typography, Skeleton } from "@mui/material";
import Image from "next/image";

const WhyChooseUs = ({ whyChooseUs }) => {
  const loading = !whyChooseUs;

  return (
    <Box component="section" className="sec_2 why" sx={{ py: 6 }}>
      <Box className="container">
        <Box className="MainHead" sx={{ mb: 4, textAlign: "center" }}>
          {loading ? (
            <Skeleton
              variant="h2"
              width="60%"
              height={40}
              sx={{ mx: "auto" }}
            />
          ) : (
            <Typography variant="h2" component="h2">
              {whyChooseUs.main_heading}
            </Typography>
          )}
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className="whyLeft">
              {loading ? (
                <>
                  <Skeleton
                    variant="text"
                    width="100%"
                    height={24}
                    sx={{ mb: 1 }}
                  />
                  <Skeleton
                    variant="text"
                    width="80%"
                    height={24}
                    sx={{ mb: 1 }}
                  />
                  <Skeleton
                    variant="text"
                    width="90%"
                    height={24}
                    sx={{ mb: 1 }}
                  />
                  <Skeleton variant="text" width="70%" height={24} />
                </>
              ) : (
                <>
                  <Typography
                    variant="body1"
                    dangerouslySetInnerHTML={{
                      __html: whyChooseUs?.sub_heading,
                    }}
                  />
                  {/* <Typography variant="body1">
                    {whyChooseUs.sub_heading}
                  </Typography> */}
                  <ul>
                    {whyChooseUs.reasons.map((item, index) => (
                      <li key={index}>
                        <strong>{item.title}</strong>{item.description ? ` – ${item.description}` : ''}

                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className="whyChooseVideo" sx={{ textAlign: "center" }}>
              {loading ? (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={300}
                  sx={{ borderRadius: "12px" }}
                />
              ) : (
                <Image
                  src={whyChooseUs?.vedio_link || ""}
                  alt={whyChooseUs?.main_heading || "Image"}
                  width={600}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
                // <video
                //   autoPlay
                //   loop
                //   muted
                //   playsInline
                //   style={{ maxWidth: "100%", borderRadius: "12px" }}
                //   className="ugb-video-preview"
                // >
                //   <source
                //     src={
                //       whyChooseUs?.vedio_link ||
                //       "/assets/images/videoplayback.mp4"
                //     }
                //     type="video/mp4"
                //   />
                //   Your browser does not support the video tag.
                // </video>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
