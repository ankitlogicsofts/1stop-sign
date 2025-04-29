"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { Phone, Email, LocationOn, AccessTime } from "@mui/icons-material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GetContactPage, PostContact } from "@/lib/api/api";
import { Alert } from "@mui/material";
import ContactInformation from "@/src/components/ContactInformation";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

const ContactPage = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{10}$/, "Phone number must be 10 digits"),
    subject: Yup.string().required("Subject is required"),
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
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactPage = async () => {
      try {
        const response = await GetContactPage();
        if (response) {
          setData(response?.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactPage();
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={416}
          animation="wave"
          style={{ borderRadius: "8px" }}
        />
      ) : (
        <Image
          src={data?.image || "/assets/images/contactUs.jpg"}
          alt="Contact Us"
          title={data?.title || "Contact Us"}
          width={1200}
          height={600}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      )}

      <section className="sec_4 Contact">
        <Box className="container">
          <Grid container spacing={4}>
            <Grid item xs={12} className="MainHead">
              {loading ? (
                <Skeleton
                  variant="text"
                  align="center"
                  width="20%"
                  height={80}
                  className="commonHeading"
                  style={{ margin: "0 auto" }}
                />
              ) : (
                <Typography
                  variant="h1"
                  align="center"
                  className="commonHeading"
                >
                  {data?.title || "Contact Us"}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={3}>
                <Box
                  //   component="form"
                  className="form conactBox"
                  noValidate
                  autoComplete="off"
                  sx={{ p: 4 }}
                >
                  <Typography
                    variant="h3"
                    gutterBottom
                    className="form_heading"
                  >
                    Send Us a Message
                  </Typography>
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
                          <Grid item xs={12} sm={6} md={3}>
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
                          <Grid item xs={12} sm={6} md={3}>
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
                          <Grid item xs={12} sm={6} md={3}>
                            <TextField
                              fullWidth
                              name="phone"
                              label="Phone Number"
                              variant="outlined"
                              placeholder="0123 456 7890"
                              value={values.phone}
                              onBlur={handleBlur}
                              error={touched.phone && Boolean(errors.phone)}
                              helperText={touched.phone && errors.phone}
                              onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d*$/.test(value)) {
                                  handleChange(e);
                                }
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={3}>
                            <TextField
                              fullWidth
                              name="subject"
                              label="Subject"
                              variant="outlined"
                              value={values.subject}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.subject && Boolean(errors.subject)}
                              helperText={touched.subject && errors.subject}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              name="message"
                              multiline
                              rows={9}
                              label="Your Message"
                              variant="outlined"
                              placeholder="Please provide details about your requirements..."
                              value={values.message}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.message && Boolean(errors.message)}
                              helperText={touched.message && errors.message}
                            />
                          </Grid>
                          <Grid item xs={12} textAlign="center">
                            <Button
                              variant="contained"
                              color="primary"
                              className="btn common_btn"
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
              </Paper>
            </Grid>

            <ContactInformation pageType="contactusPage" />
            {/* 
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                className="contact-info conactBox col01 "
                sx={{ p: 4 }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  className="contact_heading"
                >
                  Contact Information
                </Typography>

                <Box className="contInfoWrap">
                  <Box className="contInfo">
                    <Phone className="contact_icon" />
                    <Box className="iconTxt">
                      <Typography variant="div" className="bold">
                        Phone
                      </Typography>
                      <Typography variant="body2">
                        <a href="tel:02081680001">020 8168 0001</a>
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="contInfo">
                    <Email className="contact_icon" />
                    <Box className="iconTxt">
                      <Typography variant="div" className="bold">
                        Email
                      </Typography>
                      <Typography variant="body2">
                        <a href="mailto:info@1stopsigns.co.uk">
                          info@1stopsigns.co.uk
                        </a>
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="contInfo">
                    <LocationOn className="contact_icon" />
                    <Box className="iconTxt">
                      <Typography variant="div" className="bold">
                        Address
                      </Typography>
                      <Typography variant="body2">
                        258 Green Ln, Ilford IG1 1YF, UK
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="contInfo">
                    <AccessTime className="contact_icon" />
                    <Box className="iconTxt">
                      <Typography variant="bold" className="bold">
                        Business Hours
                      </Typography>
                      <Typography variant="body2">
                        Mon - Fri: 8:30 AM - 5:30 PM
                        <br />
                        Sat: 9:00 AM - 1:00 PM
                        <br />
                        Sun: Closed
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid> */}

            <Grid item xs={12} md={6}>
              <Box className="map_wrap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2357.7749548075726!2d0.091127!3d51.55891200000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a680f7ea1f29%3A0xcc04943d7b5637f7!2s258%20Green%20Ln%2C%20Ilford%20IG1%201YF%2C%20UK!5e1!3m2!1sen!2sus!4v1744405186045!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 376.43 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                  className="mapContact"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
};

export default ContactPage;
