"use client";
import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    TextField,
    Button,
    IconButton,
} from "@mui/material";
import {
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
    Email,
    Phone,
    LocationOn,
} from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
    return (
        <Box id="footer" sx={{ bgcolor: "#1a1a1a", color: "#fff", pt: 6 }}>
            <Box className="container">
                <Grid container spacing={4}>
                    {/* Quick Links */}
                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <List dense>
                            {["Services", "About", "Blog", "FAQs", "Contact"].map((text) => (
                                <ListItem key={text} disablePadding>
                                    <Link href="#" passHref legacyBehavior>
                                        <ListItemText primary={text} sx={{ cursor: "pointer", color: "#fff", pl: 1 }} />
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Phone sx={{ mr: 1 }} />
                            <Link href="tel:02081680001" passHref legacyBehavior>
                                <Typography component="a" color="inherit">
                                    020 8168 0001
                                </Typography>
                            </Link>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Email sx={{ mr: 1 }} />
                            <Link href="mailto:sales@1stopsigns.co.uk" passHref legacyBehavior>
                                <Typography component="a" color="inherit">
                                    sales@1stopsigns.co.uk
                                </Typography>
                            </Link>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <LocationOn sx={{ mr: 1 }} />
                            <Typography>258 Green Lane, Ilford, IG1 1YF</Typography>
                        </Box>
                    </Grid>

                    {/* Social Media and Map */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, i) => (
                                <IconButton key={i} color="inherit">
                                    <Icon />
                                </IconButton>
                            ))}
                        </Box>
                        {/* Google Map */}
                        <Box mt={3}>
                            <Box
                                component="iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.5076975778975!2d0.08886731592643862!3d51.55892571475523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a680ee4330b7%3A0x2ec137e0dc1284c6!2s258+Green+Ln%2C+Ilford+IG1+1YF%2C+UK!5e0!3m2!1sen!2sin!4v1552917856410"
                                width="100%"
                                height="200px"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                sx={{ border: 0 }}
                            />
                        </Box>
                    </Grid>

                    {/* Newsletter */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Newsletter
                        </Typography>
                        <Typography variant="body2" mb={2}>
                            Subscribe to our newsletter to get the latest updates.
                        </Typography>
                        <Box component="form">
                            <TextField
                                fullWidth
                                placeholder="Your email"
                                variant="filled"
                                size="small"
                                sx={{ bgcolor: "#fff", borderRadius: 1, mb: 1 }}
                            />
                            <Button variant="contained" color="primary" className="btn">
                                Subscribe
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                {/* Footer Bottom */}
                <Box mt={4} py={2} textAlign="center" borderTop="1px solid #444">
                    <Typography variant="body2" color="gray">
                        © {new Date().getFullYear()} 1stopsigns. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
