import FeaturedWork from '@/src/components/FeaturedWork';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'

const page = () => {
    return (
        <>
            <section class="sec_3 ourWork bg2">
                <Box className="container">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Box className="MainHead" sx={{ textAlign: 'center', mb: 4 }}>
                                <Typography variant="h1" component="h2">
                                    Featured Work
                                </Typography>
                            </Box>
                            <Box className="instagramList" sx={{ textAlign: 'center' }}>
                                <Image
                                    src="/assets/images/work.png"
                                    alt="Featured Work"
                                    width={800}
                                    height={450}
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </>
    )
}

export default page;