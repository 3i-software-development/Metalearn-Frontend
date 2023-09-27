import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { IoIosSquare } from "react-icons/io";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";

ChartJS.register(...registerables, BarElement, CategoryScale, Tooltip, Legend);
export default function TeachingResults({ value, type }) {
  const cx = classNames.bind(styles);

  const dataQuizVoluntary = {
    labels: [
      `Đã xong : ${value ? JSON.parse(value)?.Done : 0}`,
      `Tổng : ${value ? JSON.parse(value)?.Total : 0}`,
      `Chính xác : ${value ? JSON.parse(value)?.Correct : 0}`,
      `Tổng số giờ  : ${value ? JSON.parse(value)?.TotalHour : 0}`,
    ],
    datasets: [
      {
        data: [
          value ? JSON.parse(value)?.Done : 0,
          value ? JSON.parse(value)?.Total : 0,
          value ? JSON.parse(value)?.Correct : 0,
          value ? JSON.parse(value)?.TotalHour : 0,
        ],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const dataQuizAssignMent = {
    labels: [
      `Đã xong : ${
        value.QuizAssignment ? JSON.parse(value?.QuizAssignment)?.Done : 0
      }`,
      `Tổng : ${
        value.QuizAssignment ? JSON.parse(value?.QuizAssignment)?.Total : 0
      }`,
      `Chính xác : ${
        value.QuizAssignment ? JSON.parse(value?.QuizAssignment)?.Correct : 0
      }`,
      `Tổng số giờ  : ${
        value.QuizAssignment ? JSON.parse(value?.QuizAssignment)?.TotalHour : 0
      }`,
    ],
    datasets: [
      {
        data: [
          value.QuizAssignment ? JSON.parse(value?.QuizAssignment)?.Done : 0,
          value.QuizAssignment ? JSON.parse(value?.QuizAssignment)?.Total : 0,
          value.QuizAssignment ? JSON.parse(value?.QuizAssignment)?.Correct : 0,
          value.QuizAssignment
            ? JSON.parse(value?.QuizAssignment)?.TotalHour
            : 0,
        ],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const dataLectureVoluntary = {
    labels: [
      `Đã xong : ${value ? JSON.parse(value)?.Done : 0}`,
      `Tổng : ${value ? JSON.parse(value)?.Total : 0}`,
      `Chính xác : ${value ? JSON.parse(value)?.Correct : 0}`,
      `Tổng số giờ  : ${value ? JSON.parse(value)?.TotalHour : 0}`,
    ],
    datasets: [
      {
        data: [
          value ? JSON.parse(value)?.Done : 0,
          value ? JSON.parse(value)?.Total : 0,
          value ? JSON.parse(value)?.Correct : 0,
          value ? JSON.parse(value)?.TotalHour : 0,
        ],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  
  };

  const dataQuestion = {
    labels: [""],
    datasets: [
      {
        label: "Câu hỏi",
        data: [value.QuizTeacher ? JSON.parse(value?.QuizTeacher).Total : 0],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Bài giảng",
        data: [
          value.LectureTeacher ? JSON.parse(value?.LectureTeacher).Total : 0,
        ],
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Đề luyện thi",
        data: [value.TestTeacher ? JSON.parse(value?.TestTeacher).Total : 0],
        backgroundColor: "#5fbf00",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Kỳ thi",
        data: [value.ExamTeacher ? JSON.parse(value?.ExamTeacher).Total : 0],
        backgroundColor: "yellow",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const dataClass = {
    labels: [""],
    datasets: [
      {
        label: "Số lớp",
        data: [value.ClassTeacher ? JSON.parse(value?.ClassTeacher).Total : 0],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Số môn học",
        data: [
          value.SubjectTeacher ? JSON.parse(value?.SubjectTeacher).Total : 0,
        ],
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Số học viên",
        data: [
          value.StudentTeacher ? JSON.parse(value?.StudentTeacher).Total : 0,
        ],
        backgroundColor: "#5fbf00",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Số tài liệu upload lên",
        data: [value.FileTeacher ? JSON.parse(value?.FileTeacher).Total : 0],
        backgroundColor: "yellow",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Số thể việc đã giao",
        data: [value.TaskTeacher ? JSON.parse(value?.TaskTeacher).Total : 0],
        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  let data = {};

  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      xAxes: [
        {
          barPercentage: 0.4,
        },
      ],
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Biểu đồ",
      },
    },
  };

  const displayNumber = () => {
    switch (type) {
      case "question":
        data = dataQuestion;
        return (
          <span>
            Số câu hỏi: {value ? JSON.parse(value?.QuizTeacher).Total : 0}
          </span>
        );
      case "lecture":
        data = dataQuestion;
        return (
          <span>
            Tổng số bài giảng:{" "}
            {value ? JSON.parse(value?.LectureTeacher).Total : 0}
          </span>
        );
      case "test":
        data = dataQuestion;
        return (
          <span>
            Đề luyện thi: {value ? JSON.parse(value?.TestTeacher).Total : 0}
          </span>
        );
      case "exam":
        data = dataQuestion;
        return (
          <span>
            Tổng số đã tạo: {value ? JSON.parse(value?.ExamTeacher).Total : 0}
          </span>
        );
      case "class":
        data = dataClass;
        return (
          <span>
            Tổng số đã quản lý:{" "}
            {value ? JSON.parse(value?.QuizTeacher).Total : 0}
          </span>
        );
      case "subject":
        data = dataClass;
        return (
          <span>
            Tổng số đã phụ trách:{" "}
            {value ? JSON.parse(value?.LectureTeacher).Total : 0}
          </span>
        );
      case "student":
        data = dataClass;
        return (
          <span>
            Đề luyện thi: {value ? JSON.parse(value?.TestTeacher).Total : 0}
          </span>
        );
      case "task":
        data = dataClass;
        return (
          <span>
            Tổng số đã giao: {value ? JSON.parse(value?.ExamTeacher).Total : 0}
          </span>
        );
      case "file":
        data = dataClass;
        return (
          <span>
            Số câu hỏi: {value ? JSON.parse(value?.QuizTeacher).Total : 0}
          </span>
        );
      case "QuizVoluntary":
        data = dataQuizVoluntary;
      case "QuizAssignment":
        data = dataQuizAssignMent;
      case "LectureVoluntary":
        data = dataLectureVoluntary;
    }
  };
  return (
    <div className={cx("TeachingResults_wrapper")}>
      <div className={cx("TeachingResults_all")}>
        <div className={cx("content_all")}>
          <div className={cx("content_item")}>
            <IoIosSquare />
            {displayNumber()}
          </div>

          <Bar
            className={cx("content_item_chart")}
            data={data}
            options={options}
            height={"100%"}
          />
        </div>
      </div>
    </div>
  );
}
