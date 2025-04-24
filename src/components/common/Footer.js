"use client";
import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Latest Work", href: "/latest-work" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact-us" },
];
const Footer = () => {
    return (
        <Box component="footer" className="footer" sx={{ py: 4, backgroundColor: '#f8f9fa' }}>
            <Box className="container">
                <Grid container spacing={4}>
                    {/* Left Column */}
                    <Grid item xs={12} lg={4}>
                        <Box className="footerLft">
                            <Box className="footer_logo" mb={2}>
                                <img src="/assets/images/1stoplogo.png" alt="1 Stop Signs" />
                            </Box>
                            <Typography variant="body2" paragraph>
                                Powerful Visual Communication Solutions from the Signage and Branding Experts in London. 1 Stop Signs is fast-becoming one of the local leaders for custom signs, banner printing, CNC cutting and other marketing collateral in London.
                            </Typography>
                            <Box className="footSocial">
                                <ul>
                                    <li><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} lg={8}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={4}>
                                <Box className="footMenu">
                                    <Typography variant="h3" gutterBottom>Quick Links</Typography>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {navLinks.map(({ label, href }) => (
                                            <li key={label}>
                                                <Link href={href} style={{ textDecoration: 'none' }}>{label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Box className="footMenu">
                                    <Typography variant="h3" gutterBottom>Legal Links</Typography>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {["Privacy Policy", "Terms & Conditions", "Delivery Information", "Returns Policy", "Cookie Policy"].map(text => (
                                            <li key={text}><Link href="#" underline="hover">{text}</Link></li>
                                        ))}
                                    </ul>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Box className="footAddress">
                                    <Typography variant="h3" gutterBottom>Get In Touch</Typography>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        <li><i className="fa-solid fa-location-dot"></i> 258 Green Ln, Ilford IG1 1YF, UK</li>
                                        <li><a href="tel:02081680001"><i className="fa fa-phone"></i> 020 8168 0001</a></li>
                                        <li><a href="mailto:sales@1stopsigns.co.uk"><i className="fa-regular fa-envelope"></i> sales@1stopsigns.co.uk</a></li>
                                    </ul>
                                    <Box className="footerMap" mt={2}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2357.7749548075726!2d0.091127!3d51.55891200000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a680f7ea1f29%3A0xcc04943d7b5637f7!2s258%20Green%20Ln%2C%20Ilford%20IG1%201YF%2C%20UK!5e1!3m2!1sen!2sus!4v1744405186045!5m2!1sen!2sus"
                                            width="100%" height="150" style={{ border: 0 }} allowFullScreen loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Copyright */}
                <Box className="copyright" mt={4}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="body2" align="center" className="copyright_text">
                                © Copyright 2025 - 1 Stop Signs All Rights Reserved | Designed by{" "}
                                <Link href="https://www.logicsofts.com/" target="_blank" rel="noopener">Logicsofts</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
