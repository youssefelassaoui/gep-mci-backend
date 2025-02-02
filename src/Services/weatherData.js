import axios from "axios";

// Fetch weather data based on the provided date range
export const fetchWeatherData = async (start, end) => {
  try {
    const response = await axios.get("http://localhost:8080/api/weather/range", {
      params: {
        start,
        end,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return [];
  }
};

// Fetch additional weather data (aggregated parameters) based on the provided date range
export const fetchAdditionalWeatherData = async (start, end) => {
  try {
    const response = await axios.get("http://localhost:8080/api/weather/aggregated-parameters", {
      params: {
        start,
        end,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching additional weather data:", error);
    return [];
  }
};
