import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import { Phone, Email, LocationOn, AccessTime } from "@mui/icons-material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Alert } from "@mui/material";
import ContactInformation from "./ContactInformation";
import { PostContact } from "@/lib/api/api";

const ContactUs = () => {
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

  return (
    <section className="sec_4 Contact">
      <div className="container">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div className="MainHead">
              <h2>Contact Us</h2>
              <p>
                Have questions or ready to order? Get in touch with our team
                today.
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className="conactBox">
              <h3>Send Us a Message</h3>
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
                      <Grid item xs={12}>
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
                      <Grid item xs={12}>
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
                      <Grid item xs={12}>
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
          </Grid>
          <ContactInformation pageType="contactUs" />
        </Grid>
      </div>
    </section>
  );
};

export default ContactUs;
