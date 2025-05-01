import { Box, Typography, Skeleton } from "@mui/material";
import Image from "next/image";
import React from "react";

const PerfectSign = ({ data, loading }) => {
  const featureSkeletons = Array.from({ length: 5 }); // adjust length as needed

  return (
    <section className="padM" id="PerfectSign">
      <Box className="container">
        <Box className="gridHead">
          <Box className="gridCol">
            {loading ? (
              <>
                <Skeleton variant="text" width={300} height={40} />
                <Skeleton variant="text" width="100%" height={80} />
                <Skeleton variant="text" width="100%" height={60} />
              </>
            ) : (
              <>
                <Typography variant="h2">
                  {data?.sign_makers?.section_heading}
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: data?.sign_makers?.section_intro,
                  }}
                />
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: data?.sign_makers?.section_description,
                  }}
                />
              </>
            )}
          </Box>
        </Box>

        <Box className="GridWrap">
          <Box className="PerfectSignBoxWrp">
            {(loading ? featureSkeletons : data?.sign_makers?.features)?.map(
              (feature, index) => (
                <Box className="BoxSign" key={index}>
                  {loading ? (
                    <>
                      <Skeleton
                        variant="circular"
                        width={60}
                        height={60}
                        style={{ margin: "0 auto" }}
                      />
                      <Skeleton variant="text" width="100%" height={30} />
                      <Skeleton variant="text" width="100%" height={60} />
                    </>
                  ) : (
                    <>
                      <Image
                        src={feature.icon_url}
                        alt={feature.title}
                        title={feature.title}
                        width={60}
                        height={60}
                      />
                      <Typography variant="h3">{feature.title}</Typography>
                      <Typography
                        dangerouslySetInnerHTML={{
                          __html: feature.description,
                        }}
                      />
                    </>
                  )}
                </Box>
              )
            )}
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default PerfectSign;
