import React from "react";
import { Container, Typography, Box, Grid, Skeleton } from "@mui/material";

const SignageExperts = ({ data, loading }) => {
  return (
    <Box id="aboutInnerP" className="bg2">
      <Box className="container">
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Box className="MainHead">
              {loading ? (
                <Skeleton variant="text" width={300} height={45} />
              ) : (
                <Typography variant="h2">{data?.product_title}</Typography>
              )}
            </Box>

            {loading ? (
              <>
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="80%" height={20} />
              </>
            ) : (
              <Typography
                dangerouslySetInnerHTML={{
                  __html: data?.product_content,
                }}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignageExperts;
