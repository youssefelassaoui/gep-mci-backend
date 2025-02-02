import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

import {
  fetchWeatherData,
  fetchAdditionalWeatherData,
} from "../Services/weatherData";
import {
  Sun,
  Droplet,
  Gauge,
  Wind,
  CloudRain,
  SunDim,
  Haze,
} from "lucide-react";

export default function Home() {
  const [weatherData, setWeatherData] = useState([]);
  const [additionalWeatherData, setAdditionalWeatherData] = useState([]);
  const [startDate, setStartDate] = useState("2024-10-09T12:01:00");
  const [endDate, setEndDate] = useState("2024-10-15T12:10:00");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      const [data1, data2] = await Promise.all([
        fetchWeatherData(startDate, endDate),
        fetchAdditionalWeatherData(startDate, endDate),
      ]);
      setWeatherData(data1);
      setAdditionalWeatherData(data2);
      setLoading(false); // End loading
    };
    fetchData();
  }, [startDate, endDate]);

  const parameters = [
    { title: "Temperature", icon: <Sun size={30} />, id: "temperature" },
    { title: "Humidity", icon: <Droplet size={30} />, id: "humidity" },
    { title: "Pressure", icon: <Gauge size={30} />, id: "pressure" },
    { title: "Wind Speed", icon: <Wind size={30} />, id: "wind" },
    { title: "Rain", icon: <CloudRain size={30} />, id: "rain" },
    { title: "GHI", icon: <SunDim size={30} />, id: "ghi" },
    { title: "DHI", icon: <Haze size={30} />, id: "dhi" },
    { title: "DNI", icon: <SunDim size={30} />, id: "dni" },
    { title: "GTI", icon: <Haze size={30} />, id: "gti" },
  ];

  const cardColors = [
    "#577BC1",
    "#577BC1",
    "#577BC1",
    "#577BC1",
    "#577BC1",
    "#577BC1",
    "#577BC1",
    "#577BC1",
    "#577BC1",
  ];

  const chartData1 = {
    series: [
      {
        name: "Air Temperature (°C)",
        data: weatherData.map((item) => ({
          x: new Date(item.timestamp).toLocaleString(),
          y: parseFloat(item.tairAvg.toFixed(2)),
        })),
      },
      {
        name: "Relative Humidity (%)",
        data: weatherData.map((item) => ({
          x: new Date(item.timestamp).toLocaleString(),
          y: parseFloat(item.rhAvg.toFixed(2)),
        })),
      },
      {
        name: "Wind Speed (m/s)",
        data: weatherData.map((item) => ({
          x: new Date(item.timestamp).toLocaleString(),
          y: parseFloat(item.wsWvc1.toFixed(2)),
        })),
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 250, // Reduced chart height
        zoom: { enabled: true },
        toolbar: { show: true },
      },
      stroke: { curve: "smooth", width: 2 },
      dataLabels: { enabled: false },
      xaxis: { type: "datetime" },
      grid: {
        show: false, // Disable horizontal and vertical grid lines
      },
      yaxis: [
        { title: { text: "Temperature (°C)" }, opposite: false },
        { title: { text: "Humidity (%)" }, opposite: true },
        { title: { text: "Wind Speed (m/s)" }, opposite: true },
      ],
      colors: ["#FF5733", "#33FF57", "#3357FF"],
      tooltip: {
        shared: true,
        x: { format: "yyyy-MM-dd HH:mm:ss" },
        y: { formatter: (value) => `${value.toFixed(2)}` },
      },
    },
  };

  const chartData2 = {
    series: [
      {
        name: "Diffuse Horizontal Irradance",
        data: additionalWeatherData.map((item) => ({
          x: new Date(item.timeInterval).toLocaleString(),
          y: parseFloat(item.avgDhirsi.toFixed(2)),
        })),
      },
      {
        name: "Direct Normal Irradiance",
        data: additionalWeatherData.map((item) => ({
          x: new Date(item.timeInterval).toLocaleString(),
          y: parseFloat(item.avgDnirsi.toFixed(2)),
        })),
      },
      {
        name: "Global Horizontal Irradiance",
        data: additionalWeatherData.map((item) => ({
          x: new Date(item.timeInterval).toLocaleString(),
          y: parseFloat(item.avgGhipyr.toFixed(2)),
        })),
      },
      {
        name: "Global Tilted Irradiance",
        data: additionalWeatherData.map((item) => ({
          x: new Date(item.timeInterval).toLocaleString(),
          y: parseFloat(item.avgCmpGti.toFixed(2)),
        })),
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 250, // Reduced chart height
        zoom: { enabled: true },
        toolbar: { show: true },
      },
      stroke: { curve: "smooth", width: 2 },
      dataLabels: { enabled: false },
      xaxis: { type: "datetime" },
      yaxis: { title: { text: "Irradiance (W/m²)" } },
      grid: {
        show: false, // Disable horizontal and vertical grid lines
      },
      colors: ["#FF9D23", "#16C47F", "#F93827", "#344CB7"],
      tooltip: {
        shared: true,
        x: { format: "yyyy-MM-dd HH:mm:ss" },
        y: { formatter: (value) => `${value.toFixed(2)}` },
      },
    },
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#F5F7F8",
        minHeight: "100vh", // Ensure it takes full viewport height
        display: "flex",
        flexDirection: "column", // Stack children vertically
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          maxWidth: "1200px", // Limit width
          width: "100%",
          padding: 2,
          overflowY: "auto", // Enable scrolling for content only
          boxSizing: "border-box",
        }}
      >
        {/* Move your existing inner Grid content here */}
        <Grid container spacing={2} justifyContent="center">
          {parameters.map((param, index) => (
            <Grid item xs={1.2} key={param.id}>
              <Card
                sx={{
                  boxShadow: 3,
                  padding: 1,
                  textAlign: "center",
                  borderRadius: 2,
                  height: "120px",
                }}
              >
                {loading ? (
                  <Skeleton variant="rectangular" width="100%" height="100%" />
                ) : (
                  <>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{ fontSize: "12px", marginBottom: "4px" }}
                    >
                      {param.title}
                    </Typography>
                    <div
                      style={{
                        color: cardColors[index % cardColors.length],
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "30px",
                      }}
                    >
                      {param.icon}
                    </div>
                    <div>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        sx={{ fontSize: "10px" }}
                      >
                        Max &nbsp; Avg &nbsp; Min
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "2px",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        <span>--</span>
                        <span>--</span>
                        <span>--</span>
                      </div>
                    </div>
                  </>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Rest of the components (Date pickers, Charts) */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: 2, marginBottom: 1 }}
        >
          <Grid item>
            <TextField
              size="small"
              label="Start Date"
              type="date" // Change from "datetime-local" to "date"
              value={startDate.slice(0, 10)} // Keep only the date part
              onChange={(e) =>
                setStartDate(new Date(e.target.value).toISOString())
              }
              InputLabelProps={{ shrink: true }}
              sx={{
                backgroundColor: "#ffff",
                borderRadius: 1,
                width: 180,
                "& .MuiInputBase-root": {
                  fontSize: "0.85rem",
                  padding: "5px",
                },
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              label="End Date"
              type="date" // Change from "datetime-local" to "date"
              value={endDate.slice(0, 10)} // Keep only the date part
              onChange={(e) =>
                setEndDate(new Date(e.target.value).toISOString())
              }
              InputLabelProps={{ shrink: true }}
              sx={{
                backgroundColor: "#ffff",
                borderRadius: 1,
                width: 180,
                "& .MuiInputBase-root": {
                  fontSize: "0.85rem",
                  padding: "5px",
                },
              }}
            />
          </Grid>
        </Grid>

        {/* Charts */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={11.5}>
            <Card
              sx={{
                boxShadow: 3,
                padding: 2,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                // fontWeight="bold"
                textAlign="center"
                gutterBottom
              >
                Solar Irradiance Metrics{" "}
              </Typography>
              <ApexCharts
                options={chartData2.options}
                series={chartData2.series}
                type="line"
                height={250}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={11.5}>
            <Card
              sx={{
                boxShadow: 3,
                padding: 2,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                // fontWeight="bold"
                textAlign="center"
                gutterBottom
              >
                Weather Analysis{" "}
              </Typography>
              <ApexCharts
                options={chartData1.options}
                series={chartData1.series}
                type="line"
                height={250}
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
