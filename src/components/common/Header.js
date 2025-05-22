import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Skeleton,
  Modal,
  Typography,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./NavBar";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CallIcon from "@mui/icons-material/Call";
import "../../../public/assets/css/modal.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Alert } from "@mui/material";
import { PostContact } from "@/lib/api/api";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Padding } from "@mui/icons-material";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Sticky header logic
  useEffect(() => {
    const isSticky = () => {
      const header = document.querySelector(".header-section");
      const scrollTop = window.scrollY;
      if (header) {
        scrollTop >= 1
          ? header.classList.add("is-sticky")
          : header.classList.remove("is-sticky");
      }
    };

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  // Page load logic
  useEffect(() => {
    setIsOpen(false);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [router.asPath]);

  // const logoanimationProps = {
  //   initial: { opacity: 0, x: "-100vw" },
  //   animate: { opacity: 1, x: 0 },
  //   exit: { opacity: 0, x: "-100vw" },
  //   transition: {
  //     duration: 1.2,
  //     ease: [0.25, 0.8, 0.25, 1],
  //   },
  // };

  const logoanimationProps = {
    initial: { opacity: 0, y: "-100vh" }, // Start from above the viewport
    animate: { opacity: 1, y: 0 }, // Move to normal position
    exit: { opacity: 0, y: "-100vh" }, // Exit going back up
    transition: {
      duration: 1.2,
      ease: [0.25, 0.8, 0.25, 1],
    },
  };

  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 500,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    maxHeight: "90vh",
    overflowY: "auto",
  };

  const [successMessage, setSuccessMessage] = useState("");

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await PostContact(values);
      console.log("Response:", response.data);
      setSuccessMessage(response.data?.message || "Message sent successfully!");
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        handleClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);
  const MotionBox = motion(Box);

  return (
    <>
      <header className="header-section d-none d-xl-block">
        <Box className="headerSec">
          <Box className="container">
            <Box className="headerWrp">
              <Box className="innerHeader">
                <Link href="/" passHref>
                  <Box className="logo">
                    {isLoading ? (
                      <Skeleton
                        variant="rectangle"
                        width={160}
                        height={64}
                        className="logo"
                        // animation="wave"
                      />
                    ) : (
                      <MotionBox {...logoanimationProps}>
                        <Image
                          src="/assets/images/logo.png"
                          alt="1stopsigns"
                          width={241}
                          height={97}
                          className="logo"
                        />
                      </MotionBox>
                    )}
                  </Box>
                </Link>

                <IconButton
                  onClick={toggleMenu}
                  style={{
                    fontSize: "2rem",
                    transition: "transform 0.3s ease-in-out",
                    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                    color: "#E41E26",
                    display: "none", // visible only on mobile, override with media queries
                  }}
                  className={`menuIcon ${isOpen ? "collapsed" : ""}`}
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  {isOpen ? (
                    <CloseIcon style={{ fontSize: "2.5rem" }} />
                  ) : (
                    <MenuIcon style={{ fontSize: "2.5rem" }} />
                  )}
                </IconButton>
              </Box>

              <Box
                id="navSec"
                className={`navSection ${isOpen ? "open" : "closed"}`}
              >
                <Navbar setIsOpen={setIsOpen} />
              </Box>

              <Box className="navbar-right">
                <Link
                  href="#"
                  className="common_btn Quote"
                  onClick={handleOpen}
                >
                  Get a Free Quote{" "}
                  <i className="fa-regular fa-circle-right"></i>
                </Link>
                <Link href="tel:02081680001" className="common_btn phone">
                  <i className="fa-solid fa-phone"></i> 020 8168 0001
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style} id="quotePopup" className="popup-form-overlay">
            <Box className="topArea">
              <Typography variant="h2">
                Get a Free <span>Quote</span>
              </Typography>
              <IconButton onClick={handleClose} className="close-popup">
                <CloseIcon />
              </IconButton>
            </Box>
            {successMessage && (
              <Alert severity="success" sx={{ mb: 2 }}>
                {successMessage}
              </Alert>
            )}

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                handleChange,
                handleBlur,
                touched,
                errors,
                isSubmitting,
              }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="name"
                        label="Your Name"
                        variant="outlined"
                        placeholder="John Smith"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="email"
                        label="Email Address"
                        variant="outlined"
                        placeholder="john@example.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="phone"
                        label="Phone"
                        variant="outlined"
                        placeholder="Phone"
                        value={values.tel}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.tel && Boolean(errors.tel)}
                        helperText={touched.tel && errors.tel}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {/* <TextField
                        fullWidth
                        name="time"
                        label="Time"
                        variant="outlined"
                        placeholder="Preferred Completion Time"
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.date && Boolean(errors.date)}
                        helperText={touched.date && errors.date}
                      /> */}
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                          components={["DatePicker"]}
                          variant="outlined"
                        >
                          <DatePicker label="Preferred Date" />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <Field name="files">
                        {({ form }) => (
                          <>
                            <input
                              type="file"
                              id="fileUpload"
                              name="files"
                              multiple
                              accept="application/pdf,image/*"
                              style={{ display: "none" }}
                              onChange={(event) => {
                                const files = Array.from(
                                  event.currentTarget.files
                                );
                                form.setFieldValue("files", files);
                              }}
                            />
                            <TextField
                              label="Upload Artwork"
                              value={
                                form.values.files && form.values.files.length
                                  ? form.values.files
                                      .map((f) => f.name)
                                      .join(", ")
                                  : ""
                              }
                              fullWidth
                              margin="normal"
                              InputProps={{ readOnly: true }}
                              onClick={() => {
                                document.getElementById("fileUpload").click();
                              }}
                              sx={{ margin: 0 }}
                            />
                            <ErrorMessage
                              name="files"
                              component="div"
                              style={{ color: "red", fontSize: "0.8rem" }}
                            />
                          </>
                        )}
                      </Field>
                    </Grid>

                    {/* <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="message"
                        multiline
                        rows={3}
                        label="Your Message"
                        variant="outlined"
                        placeholder="Your Message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.message && Boolean(errors.message)}
                        helperText={touched.message && errors.message}
                      />
                    </Grid> */}
                    <Grid item xs={12} className="text-center">
                      <Button
                        variant="contained"
                        color="error"
                        className="common_btn"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Modal>
      </header>
    </>
  );
};

export default Header;
