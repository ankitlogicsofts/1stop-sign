import React from "react";
import { Box, Button, Typography, Skeleton } from "@mui/material";
import Link from "next/link";

const CallToAction = ({ cta, loading = false }) => {
  return (
    <section className="ctaSection">
      <Box className="container">
        <Box className="ctaContent">
          <Box className="MainHead">
            {loading ? (
              <Skeleton
                variant="text"
                width={300}
                height={60}
                style={{ margin: "0 auto" }}
              />
            ) : (
              <Typography variant="h2">{cta?.cta_heading}</Typography>
            )}
          </Box>

          {loading ? (
            <>
              <Skeleton
                variant="text"
                width="100%"
                height={30}
                style={{ margin: "0 auto" }}
              />
              <Skeleton
                variant="text"
                width="90%"
                height={30}
                style={{ margin: "0 auto" }}
              />
              <Skeleton
                variant="text"
                width="80%"
                height={30}
                style={{ margin: "0 auto" }}
              />
            </>
          ) : (
            <Typography variant="body1">{cta?.cta_content}</Typography>
          )}

          {loading ? (
            <Skeleton
              variant="rectangular"
              width={160}
              height={45}
              sx={{ mt: 2, borderRadius: 2 }}
              style={{ margin: "0 auto" }}
            />
          ) : (
            <Link href={cta?.cta_link ?? "#"} className="ctaBtn">
              {cta?.cta_link_text}
            </Link>
          )}
        </Box>
      </Box>
    </section>
  );
};

export default CallToAction;
