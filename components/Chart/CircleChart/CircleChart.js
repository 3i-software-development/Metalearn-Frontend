import React from "react";
import { Pie } from "react-chartjs-2";

const CircleChart = ({ role, value }) => {
  let data = {};

  const dataQuiz = {
    labels: ["Số câu đúng", "Số câu sai", "Chưa xong"],
    datasets: [
      {
        label: "Số câu",
        data: [
          value ? JSON.parse(value).Correct : "0",
          value ? JSON.parse(value).Done - JSON.parse(value).Correct : "0",
          value ? JSON.parse(value).Total - JSON.parse(value).Done : "0",
        ],
        backgroundColor: ["green", "orange", "gray"],
        hoverOffset: 3,
      },
    ],
    options: {
      plugins: {
        subtitle: {
          display: true,
          text: "Custom Chart Subtitle",
        },
      },
    },
  };

  const dataLecture = {
    labels: ["Đã xong", "Chưa xong"],
    datasets: [
      {
        label: "Số bài giảng",
        data: [
          value ? JSON.parse(value).Done : "0",
          value ? JSON.parse(value).Total - JSON.parse(value).Done : "0",
        ],
        backgroundColor: ["green", "gray"],
        hoverOffset: 3,
      },
    ],
    options: {
      plugins: {
        subtitle: {
          display: true,
          text: "Custom Chart Subtitle",
        },
      },
    },
  };

  const dataTutorStudent = {
    labels: ["Đã xong", "Chưa xong"],
    datasets: [
      {
        label: "Số lớp tham gia",
        data: [
          value ? JSON.parse(value).Done : "0",
          value ? JSON.parse(value).Total - JSON.parse(value).Done : "0",
        ],
        backgroundColor: ["green", "gray"],
        hoverOffset: 3,
      },
    ],
    options: {
      plugins: {
        subtitle: {
          display: true,
          text: "Custom Chart Subtitle",
        },
      },
    },
  };

  const dataTest = {
    labels: ["Đã xong", "Chưa xong"],
    datasets: [
      {
        label: "Số đề thi",
        data: [
          value ? JSON.parse(value).Done : "0",
          value ? JSON.parse(value).Total - JSON.parse(value).Done : "0",
        ],
        backgroundColor: ["green", "gray"],
        hoverOffset: 3,
      },
    ],
    options: {
      plugins: {
        subtitle: {
          display: true,
          text: "Custom Chart Subtitle",
        },
      },
    },
  };

  const displayValue = () => {
    switch (role) {
      case "QuizAssignment":
        data = dataQuiz;
        return <Pie data={data} />;
      case "LectureAssignment":
        data = dataLecture;
        return <Pie data={data} />;
      case "TestAssignment":
        data = dataTest;
        return <Pie data={data} />;
      case "TutorStudent":
        data = dataTutorStudent;
        return <Pie data={data} />;
    }
  };
  return <div className="containerChart">{displayValue()}</div>;
};

export default CircleChart;
