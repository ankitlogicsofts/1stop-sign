"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import style from "../public/assets/css/error.module.css";
import { useRouter } from "next/navigation";

const Notfound = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <Box className={style.errorWrp}>
      <Box className="container">
        <Typography variant="h1" className={`${style.errorTitle} heading`}>
          <span>404</span>
        </Typography>

        <Typography variant="h3">
          THE PAGE YOU ARE LOOKING FOR ISN’T HERE.
        </Typography>
        <Typography className={style.errorMessage}>
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBackToHome}
          className={style.backButton}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default Notfound;
