import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";

const SignageExperts = () => {
    return (
        <Box id="aboutInnerP" className="bg2">
            <Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <Box className="MainHead">
                            <Typography variant="h2">
                                London Signage Experts
                            </Typography>
                        </Box>

                        <Typography>
                            We are London based sign makers serving and helping businesses to
                            advertise their business via custom signs. 1 Stop Sign is one of
                            the top London sign companies in the UK, proving same day
                            printing services in London and known for offering high-quality
                            signage solutions to businesses of all kinds. We are one of the
                            leading custom outdoor signage company in London. Relevant and
                            eye-catching advertising tools are a must to target and engage
                            your audience. At our Sign shop London, we match your message with
                            personalised and custom signs that deliver the best result.
                            Offering high-quality signs at an affordable price is our USP as
                            the leading London sign makers. However, a reasonable price
                            doesn’t mean that you have to compromise on the quality. We ensure
                            that our signs are durable and trendy.
                        </Typography>

                        <Typography>
                            Our experienced sign makers ensure to provide you with the best
                            quality signage solutions to match your exact requirements.
                        </Typography>

                        <Typography>
                            <strong>
                                Custom Signage for every industry – Schools, Colleges,
                                Hospitals, Nursery, Dental surgery, Pharmacy, Real estate,
                                Election, and Construction.
                            </strong>
                        </Typography>

                        <Typography>
                            So whether you need a standard or a customized sign, our
                            professional experts are here to advise you on the most suitable
                            product and manufacture the same with great precision.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SignageExperts;
