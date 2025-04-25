"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { GetWhyChooseUs } from "@/lib/api/api";

const WhyChooseUs = () => {
  const [whyChooseUs, setWhyChooseUs] = useState(null);
  useEffect(() => {
    const fetchWhyChooseUs = async () => {
      try {
        const response = await GetWhyChooseUs();
        if (response) {
          setWhyChooseUs(response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchWhyChooseUs();
  }, []);

  return (
    <Box component="section" className="sec_2 why" sx={{ py: 6 }}>
      <Box className="container">
        <Box className="MainHead" sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h2" component="h2">
            {whyChooseUs?.main_heading}
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className="whyLeft">
              <Typography variant="p">{whyChooseUs?.sub_heading}</Typography>
              <ul>
                {whyChooseUs?.reasons.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}</strong> – {item.description}
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="whyChooseVideo" sx={{ textAlign: "center" }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ maxWidth: "100%", borderRadius: "12px" }}
                className="ugb-video-preview"
              >
                <source
                  src={
                    whyChooseUs?.vedio_link ||
                    "/assets/images/videoplayback.mp4"
                  }
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
