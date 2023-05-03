import React from "react";
import { Doughnut } from "react-chartjs-2";
import Box from "@mui/material/Box";
import { data } from "./Data2";

export default function MyChart() {
  const options = {
    title: {
      display: true,
      text: "Bar Chart",
    },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };
  return (
    <Box
      sx={{
        height: "70%",
        // padding: "20px",
        backgroundColor: "white",
        borderRadius: "30px",
      }}
    >
      <Doughnut data={data.bar} options={options} />
    </Box>
  );
}
