"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const trustItems = [
    {
        icon: "/assets/images/icon01.png",
        title: "Over 20 Years of Experience",
        className: "Experience"
    },
    {
        icon: "/assets/images/icon02.png",
        title: "Nationwide Installation",
        className: "Nationwide"
    },
    {
        icon: "/assets/images/icon03.png",
        title: "Free Design Consultation",
        className: "Design"
    },
    {
        icon: "/assets/images/icon04.png",
        title: "Rapid Turnaround",
        className: "Rapid"
    }
];

const TrustValueProps = () => {
    return (
        <section className="trustWrap">
            <Box className="container" id="trustSec">
                <Grid container spacing={0}>
                    {trustItems.map((item, index) => (
                        <Box className={`trustBox ${item.className}`}>
                            <Box className="trustBoxIn">
                                <Box className="imgIcon" sx={{ mb: 1 }}>
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={64}
                                        height={64}
                                    />
                                </Box>
                                <Typography variant="h6" component="h3">
                                    {item.title}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </section>
    );
};

export default TrustValueProps;
