"use client";
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Image from "next/image";

const FeaturedWork = () => {
    return (
        <Box component="section" className="sec_3 ourWork" sx={{ py: 6 }}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box className="MainHead" sx={{ textAlign: 'center', mb: 4 }}>
                            <Typography variant="h2" component="h2">
                                Featured Work
                            </Typography>
                        </Box>
                        <Box className="instagramList" sx={{ textAlign: 'center' }}>
                            <Image
                                src="/assets/images/work.png"
                                alt="Featured Work"
                                width={800}
                                height={450}
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FeaturedWork;
