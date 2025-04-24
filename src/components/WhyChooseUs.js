"use client";
import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const reasons = [
    {
        title: "Locally Trusted",
        description: "Serving businesses across the city with local knowledge and fast service"
    },
    {
        title: "Custom Design & Fabrication",
        description: "From concept to installation, fully tailored to your brand"
    },
    {
        title: "Quick Turnaround Times",
        description: "We meet your deadlines without compromising on quality"
    },
    {
        title: "All Business Types Covered",
        description: "Retail, corporate, hospitality, and more"
    },
    {
        title: "Reliable Service & Support",
        description: "Friendly, experienced team ready to help at every step"
    },
    {
        title: "Eco-Friendly Options Available",
        description: "Sustainable materials and processes to support your green goals"
    },
];

const WhyChooseUs = () => {
    return (
        <Box component="section" className="sec_2 why" sx={{ py: 6 }}>
            <Box className="container">
                <Box className="MainHead" sx={{ mb: 4, textAlign: "center" }}>
                    <Typography variant="h2" component="h2">
                        Why Choose Us
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box className="whyLeft">
                            <Typography paragraph>
                                At 1 Stop Signs, we specialise in creating high-impact signage that gets your business noticed.
                                Based in London, we offer end-to-end signage solutions designed to elevate your brand and attract attention.
                            </Typography>
                            <ul>
                                {reasons.map((item, index) => (
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
                                <source src="/assets/images/videoplayback.mp4" type="video/mp4" />
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
