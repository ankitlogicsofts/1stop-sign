import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';

const IdealShop = () => {
    return (
        <section className="bg1" id="IdealShop">
            <Box className="container" sx={{ maxWidth: '100%' }}>

                <Grid container spacing={4}>
                    {/* First Row */}
                    <Grid item xs={12} sm={6} className="contentArea">
                        <Typography variant="h2">
                            Ideal Shop Signage for Businesses of All Sizes
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Whether you run a small business or a large retail store, shop signage is a vital element in making your business stand out. Exterior signs, like wall signs, shop front signs, and window graphics, not only enhance the curb appeal of your establishment but also play a crucial role in attracting foot traffic. Exterior shop signs serve as powerful marketing tools, drawing in customers with compelling designs and messages. Highlight your special offers or limited-time promotions right on your storefront to give pedestrians a reason to step inside. At 1 Stop Signs, we specialize in creating eye-catching shop front signage that grabs attention and showcases your business and its products effectively. Our signs are designed to give you a competitive edge, ensuring your brand shines and stands out on the busy streets. Invest in our custom shop front signs to boost your visibility and entice potential customers, helping your business thrive against the competition.
                        </Typography>
                        <Button
                            href="tel:02081680001"
                            className="common_btn book_btn"
                            variant="contained"
                            color="primary"
                            startIcon={<i className="fa fa-phone" />}
                        >
                            020 8168 0001
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <img
                            src="https://www.1stopsigns.co.uk/wp-content/uploads/2023/05/1stopsigns-signage-10.jpg"
                            alt="Shop Signage"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={4}>
                    {/* Second Row */}
                    <Grid item xs={12} sm={6}>
                        <img
                            src="https://www.1stopsigns.co.uk/wp-content/uploads/2023/05/1stopsigns-signage-8.jpg"
                            alt="Shop Signage"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} className="contentArea">
                        <Typography variant="h2">
                            1 Stop Signs - Your Go-To Choice for All Shop Front Signage Needs in London
                        </Typography>
                        <Typography variant="body1" paragraph>
                            When it comes to shop front signage in London, 1 Stop Signs stands out as the perfect blend of cost-friendly solutions and top-notch quality. We understand the importance of offering competitive prices without compromising on the excellence of our services. Our team is committed to providing cost-effective signage options that meet your budget requirements while ensuring the highest standards of quality. With 1 Stop Signs, you can rest assured that you are getting the best of both worlds – affordability and superior craftsmanship. We only use advanced printing technology and high-quality printers to ensure we provide you with the best results imaginable. Our dedication to delivering value-driven solutions means that you can enhance your storefront without breaking the bank. Experience the difference with 1 Stop Signs, where cost-friendly excellence meets innovative design, all aimed at helping your business shine bright in the dynamic landscape of London. Contact us now for all your queries! Let’s get started!!
                        </Typography>
                        <Button
                            href="tel:02081680001"
                            className="common_btn book_btn"
                            variant="contained"
                            color="primary"
                            startIcon={<i className="fa fa-phone" />}
                        >
                            020 8168 0001
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
};

export default IdealShop;
