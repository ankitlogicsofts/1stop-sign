import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const PerfectSign = () => {
    return (
        <section className="padM" id="PerfectSign">
            <Box className="container">
                <Box className="gridHead">
                    <Box className="gridCol">
                        <Typography variant='h2'>Professional Sign Makers - Creating the Perfect Sign</Typography>
                        <Typography>
                            We understand that you want your signs and brand logo to be just perfect enough for your audience and placement. This is why we don't just 'print' signs. We create them meticulously by considering your requirements, your business, and your customers. We are a London-based{' '}
                            <Link href="#" style={{ background: 'none', padding: 0, color: '#000', fontWeight: 500 }}>
                                sign installation
                            </Link>
                            company known for its high-quality signs that are just right for inBoxidual businesses.
                        </Typography>
                        <Typography>
                            We offer signages of different material and designs for different purposes. What makes our process different is the initial phase, where we get the details of the signage you need. Based on the collected information, we advise the best type of signage for your business that brings your desired results. It's time to enhance your outdoor advertising strategy with the leading custom outdoor signage company in London.
                        </Typography>
                    </Box>
                </Box>
                <Box className="GridWrap">
                    <Box className="PerfectSignBoxWrp">
                        <Box className="BoxSign">
                            <img src="https://www.1stopsigns.co.uk/wp-content/themes/onestop/img/signage-icon1.png" />
                            <Typography variant='h3'>Purpose of the Sign</Typography>
                            <Typography>How do you plan to use the sign? This is the first question we ask our customers to understand the underlying reason and the type of business.</Typography>
                        </Box>
                        <Box className="BoxSign">
                            <img src="https://www.1stopsigns.co.uk/wp-content/themes/onestop/img/signage-icon2.png" />
                            <Typography variant='h3'>Target Audience</Typography>
                            <Typography>Creating a great sign isn't the priority. Creating a sign that your audience will love is the key. This is why we spend time understanding the target market. This helps us to manufacture the most appropriate signs that will help to bring in more customers and ensure the best benefits for your business.</Typography>
                        </Box>
                        <Box className="BoxSign">
                            <img src="https://www.1stopsigns.co.uk/wp-content/themes/onestop/img/signage-icon3.png" />
                            <Typography variant='h3'>Placement</Typography>
                            <Typography>Where are you going to use the sign? Is it a sign outside your business place? Or, a temporary one for an exhibition? This will help to choose the material as outdoor signage is generally crafted from a different material than the one used for interior signage.</Typography>
                        </Box>
                        <Box className="BoxSign">
                            <img src="https://www.1stopsigns.co.uk/wp-content/themes/onestop/img/signage-icon4.png" />
                            <Typography variant='h3'>Design Considerations</Typography>
                            <Typography>Based on the target market and your business, we'll suggest the best designs for interior and exterior signs to use. Our signs will stand out from the audience and grab attention with their professional look and appeal.</Typography>
                        </Box>
                        <Box className="BoxSign">
                            <img src="https://www.1stopsigns.co.uk/wp-content/themes/onestop/img/signage-icon5.png" />
                            <Typography variant='h3'>Longevity</Typography>
                            <Typography>You may need the sign for a single day, a few one and off days, or more than a year. We'll give you the best affordable option for the sign materials. We manufacture all signs with great attention to detail and in a highly efficient manner to provide the best value for money to our clients.</Typography>
                        </Box>


                    </Box>
                </Box>
            </Box>
        </section>
    );
};

export default PerfectSign;
