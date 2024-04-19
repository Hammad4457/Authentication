import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, scales } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Chart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Friday", "Sat"],
    datasets: [
      {
        label: "First Chart",
        data: [343,2059, 4594, 2700, 1600, 3498, 0], 
        fill: false,
        backgroundColor: "white",
        pointBorderColor: "blue",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {},
    },
  };

  return (
    <div >
      <Line data={data} options={options} /> 
    </div>
  );
}

export default Chart;
