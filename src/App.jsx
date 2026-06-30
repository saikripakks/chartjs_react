import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import {Line, Bar, Doughnut, Pie} from "react-chartjs-2"
import "./App.css";

import financeData from "./data/financeData.json";
import businessStream from "./data/businessStream.json";
import activityData from "./data/activityData.json";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler
);

const App = () => {
  const lineData = {
    labels: financeData.map((item) => item.label),
    datasets: [
      {
        label: "Income",
        data: financeData.map((item) => item.income),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,.25)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Outflow",
        data: financeData.map((item) => item.outflow),
        borderColor: "#ef4444",
        backgroundColor: "rgba(239,68,68,.25)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const businessData = {
    labels: businessStream.map((item) => item.label),
    datasets: [
      {
        label: "Business Stream",
        data: businessStream.map((item) => item.value),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const activityChartData = {
    labels: activityData.map((item) => item.label),
    datasets: [
      {
        label: "Activity A",
        data: [65, 59, 90, 81, 56, 55],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "Activity B",
        data: [28, 48, 40, 19, 96, 27],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Finance Overview",
      },
    },
  };

  const businessOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Business Streams",
      },
    },
  };

  const activityOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Activities",
      },
    },
  };

  return (
    <div className="App">
      <div className="card">
        <div className="chart">
          <Line data={lineData} options={options} />
        </div>
      </div>
      <div className="card">
        <div className="chart">
          <Bar data={lineData} options={options} />
        </div>
      </div>
      <div className="card">
        <div className="chart">
          <Pie data={businessData} options={businessOptions} />
        </div>
      </div>
      <div className="card">
        <div className="chart">
          <Doughnut data={businessData} options={businessOptions} />
        </div>
      </div>

    </div>
  );
};

export default App;