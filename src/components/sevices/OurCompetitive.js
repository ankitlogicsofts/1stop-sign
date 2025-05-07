"use client"
import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  TextField,
  Button,
  Alert
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const OurCompetitive = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [open, setOpen] = useState(true);

  const listItems = [
    'Fast printing turnarounds',
    'Online quotations for all the printing services we have to offer',
    'An office easily accessible by public transport',
    'Dependable and time-sensitive delivery',
    'The use of high quality and vibrant ink',
    'Innovative printing technology for better quality output',
    'Superior quality printing',
    'Long lasting and UV resistant ink',
  ];

  const initialValues = {
    name: '',
    email: '',
    tel: '',
    date: null,
    files: [],
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    tel: Yup.string().required('Phone is required'),
    files: Yup.array().min(1, 'Please upload at least one file'),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      // Submit logic here, e.g., await PostContact(values)
      console.log('Submitted:', values);
      setSuccessMessage('Your quote request has been submitted!');
      resetForm();
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="padM" id="OurCompetitiveSec">
      <Box className="container">
        <Box className="MainHead">
          <Typography variant="h2">
            What Sets Our Same Day Printing Services in London Apart for Our Valued Customers?
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Box className="QueryForm_left">
              <List>
                {listItems.map((text, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: '30px', color: 'green' }}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="h6" component="h4" sx={{ mt: 2 }}>
                Immerse your ideas in vibrant reality with our cutting-edge printing service – where innovation meets precision with unparalleled quality and style.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            {open && (
              <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }} className="popup-form-overlay">
                <Box className="topArea" display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h3" className='getTitle'>Get a Free <span>Quote</span></Typography>
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
                    setFieldValue,
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
                        <Grid item xs={12} sm={12}>
                          <TextField
                            fullWidth
                            name="tel"
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

                       {/* ✅ Textarea Field */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={2}
            name="message"
            label="Your Message"
            variant="outlined"
            placeholder="Type your message here..."
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.message && Boolean(errors.message)}
            helperText={touched.message && errors.message}
          />
        </Grid>

                        <Grid item xs={12} className="text-center">
                          <Button
                            variant="contained"
                            color="error"
                            type="submit"
                            className="common_btn"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default OurCompetitive;
