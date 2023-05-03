import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { IoIosRemove, IoMdAdd, IoIosSquare } from "react-icons/io";
import { CgShapeRhombus } from "react-icons/cg";
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
export default function TeachingResults({role,dataCountQuizAssignment}) {
  const [hide, setHide] = useState(false);
  const cx = classNames.bind(styles);
  console.log()
  const handleSetHide = () => {
    setHide((pre) => !pre);
  };
  const total = JSON.parse(dataCountQuizAssignment?.QuizAssignment)?.Total
  const done = JSON.parse(dataCountQuizAssignment?.QuizAssignment)?.Done
  const correct = JSON.parse(dataCountQuizAssignment?.QuizAssignment)?.Correct
  const hour = JSON.parse(dataCountQuizAssignment?.QuizAssignment)?.TotalHour

  console.log(done)
  let data = {}
 if(role){
  data =  {
    labels: [`Đã xong : ${done}`,`Tổng : ${total}`,`Chính xác : ${correct}`,`Tổng số giờ  : ${hour}`],
    datasets: [ 
      {
        data: [done,total,correct,hour],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
 }else{
  data =  {
    labels: ["00","02"],
    datasets: [
      {
        label: "Học sinh",
        data: [3, 6, 9, 2, 1],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Giờ học",
        data: [1,2,3,4,5,6,7,8,9],
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
 }
  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className={cx("TeachingResults_wrapper")}>
            <Bar
              className={cx("content_item_chart")}
              data={data}
              options={options}
              height={'100%'}
            />
    </div>
  );
}
