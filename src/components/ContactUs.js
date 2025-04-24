import React from 'react';
import { Grid, TextField, Button, Typography, Box } from '@mui/material';
import { Phone, Email, LocationOn, AccessTime } from '@mui/icons-material';

const ContactUs = () => {
    return (
        <section className="sec_4 Contact">
            <div className="container">
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <div className="MainHead">
                            <h2>Contact Us</h2>
                            <p>Have questions or ready to order? Get in touch with our team today.</p>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box className="conactBox">
                            <h3>Send Us a Message</h3>
                            <form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Your Name" variant="outlined" placeholder="John Smith" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Email Address" variant="outlined" placeholder="john@example.com" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Phone Number" variant="outlined" placeholder="0123 456 7890" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Subject" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={9}
                                            label="Your Message"
                                            variant="outlined"
                                            placeholder="Please provide details about your requirements..."
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="contained" color="error" className="common_btn">
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box className="conactBox col01">
                            <h3>Contact Information</h3>
                            <Box className="contInfoWrap">
                                <Box className="contInfo">
                                    <Phone className="icon" />
                                    <div className="iconTxt">
                                        <div className="bold">Phone</div>
                                        <div><a href="tel:02081680001">020 8168 0001</a></div>
                                    </div>
                                </Box>

                                <Box className="contInfo">
                                    <Email className="icon" />
                                    <div className="iconTxt">
                                        <div className="bold">Email</div>
                                        <div><a href="mailto:info@1stopsigns.co.uk">info@1stopsigns.co.uk</a></div>
                                    </div>
                                </Box>

                                <Box className="contInfo">
                                    <LocationOn className="icon" />
                                    <div className="iconTxt">
                                        <div className="bold">Address</div>
                                        <div>258 Green Ln, Ilford <br />IG1 1YF, UK</div>
                                    </div>
                                </Box>

                                <Box className="contInfo">
                                    <AccessTime className="icon" />
                                    <div className="iconTxt">
                                        <div className="bold">Business Hours</div>
                                        <div>
                                            Monday - Friday: 8:30 AM - 5:30 PM <br />
                                            Saturday: 9:00 AM - 1:00 PM <br />
                                            Sunday: Closed
                                        </div>
                                    </div>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="conactBox col02">
                            <h3>24/7 Signage Assistance</h3>
                            <p>For urgent signage requirements, contact our 24/7 emergency hotline.</p>
                            <Button variant="contained" color="secondary" href="tel:02081680001" className="common_btn" startIcon={<Phone />}>
                                020 8168 0001
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
};

export default ContactUs;
