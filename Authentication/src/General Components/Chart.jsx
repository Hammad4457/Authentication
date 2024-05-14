import React,{useState,useEffect} from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, scales } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Chart() {
  const [totalTasks, setTotalTasks] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [declinedTasks, setDeclinedTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    const token = localStorage.getItem("jsonwebtoken");
    if (!token) {
      console.error("No token found in local storage");
      return;
    }

    axios
      .get("http://localhost:3000/api/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const fetchedTasks = response.data;
        setTasks(fetchedTasks);
        const currentDateTime = new Date();
        const declinedTasksCount = fetchedTasks.filter(
          (task) => new Date(task.endDate) < currentDateTime
        ).length;
        setDeclinedTasks(declinedTasksCount);

        const pendingTasks = fetchedTasks.filter(
          (task) => new Date(task.endDate) >= currentDateTime
        ).length;
        setPendingTasks(pendingTasks);
        setTotalTasks(fetchedTasks.length);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };
  const completedTask = totalTasks - (pendingTasks + declinedTasks);
 


  const data = {
    labels: ["Total Tasks","Completed Tasks","Pending Tasks","Decline Tasks"],
    datasets: [
      {
        label: "First Chart",
        data: [totalTasks,completedTask,pendingTasks,declinedTasks], 
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
    <div className=" md:w-full">
      <Line data={data} options={options} /> 
    </div>
  );
}

export default Chart;
