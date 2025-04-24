'use client'
import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box, Paper } from '@mui/material';
import { Phone, Email, LocationOn, AccessTime } from '@mui/icons-material';

const ContactPage = () => {
    return (
        <>
            <img src="/assets/images/contactUs.jpg" style={{ width: '100%' }} alt="Contact Us" />

            <section className="sec_4 Contact">
                <Box className="container">
                    <Grid container spacing={4}>
                        <Grid item xs={12} className='MainHead'>
                            <Typography variant="h1" align="center" className="commonHeading">
                                Contact Us
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>

                            <Paper elevation={3}>
                                <Box component="form" className="form conactBox" noValidate autoComplete="off" sx={{ p: 4 }}>
                                    <Typography variant="h3" gutterBottom className="form_heading">
                                        Send Us a Message
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <TextField fullWidth label="Your Name" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <TextField fullWidth label="Email Address" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <TextField fullWidth label="Phone Number" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <TextField fullWidth label="Subject" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={4}
                                                label="Your Message"
                                                variant="outlined"
                                                placeholder="Please provide details about your requirements..."

                                            />
                                        </Grid>
                                        <Grid item xs={12} textAlign="center">
                                            <Button variant="contained" color="primary" className="btn common_btn">
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>

                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper elevation={3} className="contact-info conactBox col01 " sx={{ p: 4 }}>
                                <Typography variant="h3" gutterBottom className="contact_heading">
                                    Contact Information
                                </Typography>

                                <Box className="contInfoWrap">
                                    <Box className="contInfo">
                                        <Phone className="contact_icon" />
                                        <Box className="iconTxt">
                                            <Typography variant="div" className='bold'>Phone</Typography>
                                            <Typography variant="body2"><a href="tel:02081680001">020 8168 0001</a></Typography>
                                        </Box>
                                    </Box>

                                    <Box className="contInfo">
                                        <Email className="contact_icon" />
                                        <Box className="iconTxt">
                                            <Typography variant="div" className='bold'>Email</Typography>
                                            <Typography variant="body2"><a href="mailto:info@1stopsigns.co.uk">info@1stopsigns.co.uk</a></Typography>
                                        </Box>
                                    </Box>

                                    <Box className="contInfo">
                                        <LocationOn className="contact_icon" />
                                        <Box className="iconTxt">
                                            <Typography variant="div" className='bold'>Address</Typography>
                                            <Typography variant="body2">
                                                258 Green Ln, Ilford IG1 1YF, UK
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="contInfo">
                                        <AccessTime className="contact_icon" />
                                        <Box className="iconTxt">
                                            <Typography variant="bold" className='bold'>Business Hours</Typography>
                                            <Typography variant="body2">
                                                Mon - Fri: 8:30 AM - 5:30 PM<br />
                                                Sat: 9:00 AM - 1:00 PM<br />
                                                Sun: Closed
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box className="map_wrap">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2357.7749548075726!2d0.091127!3d51.55891200000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a680f7ea1f29%3A0xcc04943d7b5637f7!2s258%20Green%20Ln%2C%20Ilford%20IG1%201YF%2C%20UK!5e1!3m2!1sen!2sus!4v1744405186045!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: 376.43 }}
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                    className='mapContact'
                                ></iframe>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </>
    );
};

export default ContactPage;
