'use client'
import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import Image from 'next/image';

const blogs = [
    { img: '/assets/images/blogImg01.jpg', date: 'April 18, 2025', title: 'Why Custom Signage is the Best Investment for Small Business Growth', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { img: '/assets/images/blogImg02.jpg', date: 'April 18, 2025', title: 'Why Custom Signage is the Best Investment for Small Business Growth', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { img: '/assets/images/blogImg03.jpg', date: 'April 18, 2025', title: 'Why Custom Signage is the Best Investment for Small Business Growth', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { img: '/assets/images/blogImg04.png', date: 'April 18, 2025', title: 'Why Custom Signage is the Best Investment for Small Business Growth', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { img: '/assets/images/blogImg05.jpg', date: 'April 18, 2025', title: 'Why Custom Signage is the Best Investment for Small Business Growth', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { img: '/assets/images/blogImg06.jpg', date: 'April 18, 2025', title: 'Why Custom Signage is the Best Investment for Small Business Growth', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { img: '/assets/images/blogImg07.jpg', date: 'April 18, 2025', title: 'Why Custom Signage is the Best Investment for Small Business Growth', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { img: '/assets/images/blogImg08.jpg', date: 'April 18, 2025', title: 'Why Custom Signage is the Best Investment for Small Business Growth', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { img: '/assets/images/blogImg09.jpg', date: 'April 18, 2025', title: 'Why Custom Signage is the Best Investment for Small Business Growth', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
];

const BlogSection = () => {
    return (
        <section id="BlogSection">
            <Container className="MainHead">
                <Typography variant="h2" component="h2">Blog</Typography>
            </Container>

            <Container id="blogWrp">
                <Grid container spacing={3}>
                    {blogs.map((blog, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <a href="blog-detail.html" className="boxB">
                                <Image src={blog.img} alt="img" width={400} height={250} style={{ width: '100%', height: 'auto' }} />
                                <Typography className="date">{blog.date}</Typography>
                                <Box className="boxBcontent">
                                    <Typography variant="h5" component="h3">{blog.title}</Typography>
                                    <Typography>{blog.desc}</Typography>
                                    <span className="readMbtn">Read more</span>
                                </Box>
                            </a>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default BlogSection;
