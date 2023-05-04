import React from "react";
import { Bar } from "react-chartjs-2";
import Box from "@mui/material/Box";
import { data } from "./Data";

export default function CampusChart() {
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
        // width: "300px",
        height: "100%",
        // padding: "20px",

        borderRadius: "30px",
      }}
    >
      <Bar data={data.bar} options={options} />
    </Box>
  );
}
