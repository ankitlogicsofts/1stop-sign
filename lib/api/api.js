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
