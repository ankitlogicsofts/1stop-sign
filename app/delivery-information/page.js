"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import { GetDeliveryInformation } from "@/lib/api/api";

const page = () => {
  const [deliveryInformation, setDeliveryInformation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeliveryInformation = async () => {
      try {
        const response = await GetDeliveryInformation();
        if (response) {
          setDeliveryInformation(response?.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeliveryInformation();
  }, []);
  return (
    <>
      <Box className="padM container policyWrp">
        <Box className="MainHead">
          {loading ? (
            <Skeleton
              variant="text"
              width="50%"
              height={80}
              style={{ margin: "0 auto" }}
            />
          ) : (
            <Typography variant="h2" marginBottom="1em">
              {deliveryInformation?.title}
            </Typography>
          )}
        </Box>

        {loading ? (
          <>
            <Skeleton variant="text" width="100%" height={30} />
            <Skeleton variant="text" width="100%" height={30} />
            <Skeleton variant="text" width="90%" height={50} />
          </>
        ) : (
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: deliveryInformation?.content,
            }}
          />
        )}
      </Box>
    </>
  );
};

export default page;
