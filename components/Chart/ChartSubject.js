import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
const ChartSubject = () => {
  const labels= [
        "Số lớp",
    "Số học viên",
    "Số thẻ việc đã giao",
    "Số môn học",
    "Số tài liệu upload lên",
    ]
  const data = {
    type: 'bar',
    labels:labels,
    datasets: [
      {
        label:"",
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
       
      },
    ],
  };
  return <Bar data={data} labels={labels} style={{marginLeft:"100px"}}/>;
};

export default ChartSubject;
