import { Box, Typography } from '@mui/material';
import React from 'react';

const RecentWork = () => {
    return (
        <section className="sec_3 ourWork bg2">
            <Box className="container">
                <Box className="row">
                    <Box className="col-md-12">
                        <Box className="MainHead">
                            <Typography variant='h2'>See Our Recent Work</Typography>
                        </Box>
                        <Box className="instagramList">
                            <img src="/assets/images/work.png" alt="Recent Work" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    );
};

export default RecentWork;
