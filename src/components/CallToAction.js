import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

const CallToAction = () => {
    return (
        <section className="ctaSection">
            <Box className="container">
                <Box className="ctaContent">
                    <Box className="MainHead">
                        <Typography variant="h2">Ready to Elevate Your Brand?</Typography>
                    </Box>
                    <Typography variant="body1">
                        Let’s create custom signage that stands out and brings more customers to your business.
                    </Typography>
                    <Link href="#" className='ctaBtn'>
                        Get a Free Quote
                    </Link>
                </Box>
            </Box>
        </section>
    );
};

export default CallToAction;
