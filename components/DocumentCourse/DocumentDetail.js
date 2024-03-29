import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Rate } from "antd";
import Link from "next/link";
const cx = classNames.bind(style);
const ExamDetail = ({ data, key }) => {
  // console.log(data);

  return (
    <>
      {/* <Link href={`/quizzes?code=${data?.Code}`}> */}
      <Link href={`/document-course?page=item&subjectCode=${data?.Code}`}>
        <li key={key}>
          <div className={cx("thumb")}>
            <p style={{ fontSize: "14px" }}>{data?.Name}</p>
            <p style={{ fontSize: "11px", color: "#60bcdd" }}>
              [Số đề thi: {data?.CountExam} - Số câu hỏi: {data?.CountQuiz}]
            </p>
          </div>
        </li>
      </Link>
    </>
  );
};

export default ExamDetail;
