"use client";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Skeleton,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { GetTermsConditions } from "@/lib/api/api";

const page = () => {
  const [TermsConditions, setTermsConditions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTermsConditions = async () => {
      try {
        const response = await GetTermsConditions();
        if (response) {
          setTermsConditions(response?.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTermsConditions();
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
              {TermsConditions?.title}
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
              __html: TermsConditions?.content,
            }}
          />
        )}
      </Box>
    </>
  );
};

export default page;
