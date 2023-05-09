import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Rate } from "antd";
import Link from "next/link";
const cx = classNames.bind(style);
const ExamItem = ({ data, key }) => {
  return (
    <Link href="/quizzes">
      <li className={cx("lilist")} key={key}>
        <div className={cx("flex_icon")}>
          <div className={cx("icon")}>
            <p className={cx("stat")}>
              <i className="fa-solid fa-book fa-2xl"></i>
            </p>
          </div>
          <div className={cx("thumb")}>
            <span className={cx("name")}>
              <h4>{data.PracticeTestTitle}</h4>
              <div className={cx("content_exam")}>
                <div>
                  <p>
                    {data.Duration} {data.Unit}
                  </p>
                  <p>Tác giả: {data.CreatedBy}</p>
                  <p>{data.Rating}</p>
                  <p className={cx("rating")}>
                    <Rate />
                  </p>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div className={cx("more")}>
          <span className={cx("stat")}>
            <p>Giá: {data.Price} coin</p>
            <p>Môn học: {data.ExamSubject}</p>
            <p className={cx("question")}>{data.QuizCount} câu hỏi</p>
          </span>
        </div>
        <div className={cx("down")}>
          <i className="icon fa-solid fa-download"></i>
        </div>
      </li>
    </Link>
  );
};

export default ExamItem;
