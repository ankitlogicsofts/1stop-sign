import axios from "axios";
import { API_BASE_URL } from "../config.js";

// Get HomePage
export const HomePage = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/homePage`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data details");
    }
  } catch (error) {
    console.error("Error fetching data details:", error);
    return null;
  }
};

// Get Our Services
export const Services = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/our-services`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data details");
    }
  } catch (error) {
    console.error("Error fetching data details:", error);
    return null;
  }
};

// Get Contact Page
export const GetContactPage = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/contact-page`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data details");
    }
  } catch (error) {
    console.error("Error fetching data details:", error);
    return null;
  }
};

// Get Contact Information
export const GetContactInformation = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/contact-info`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data details");
    }
  } catch (error) {
    console.error("Error fetching data details:", error);
    return null;
  }
};

// Post PostContact
export const PostContact = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact-form`, data);
    if (response.status === 200) {
      return response;
    } else {
      throw new Error("Failed to submit contact form");
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

// Get WhyChooseUs
export const GetWhyChooseUs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/why-choose-us`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data details");
    }
  } catch (error) {
    console.error("Error fetching data details:", error);
    return null;
  }
};

// Get Latest Page
export const GetLatestWorkPage = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/latest-work`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data details");
    }
  } catch (error) {
    console.error("Error fetching data details:", error);
    return null;
  }
};

// Get Blog Page
export const GetBlogPage = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blogs`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data details");
    }
  } catch (error) {
    console.error("Error fetching data details:", error);
    return null;
  }
};

export const GetBlogBySlug = async (slug) => {
  try {
    const res = await fetch(`${API_BASE_URL}/blog/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

// Get Gallery
export const GetGallery = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/gallery`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data details");
    }
  } catch (error) {
    console.error("Error fetching data details:", error);
    return null;
  }
};

// Get FAQ
export const GetProductData = async (page) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product?page=${page}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data details");
    }
  } catch (error) {
    console.error("Error fetching data details:", error);
    return null;
  }
};
