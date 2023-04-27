import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { RxCross2 } from "react-icons/rx";

export default function Item_Cart_subject_all({ element }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("Item_Cart_subject_all")}>
      <div className={cx("Item_subject_item")}>
        <div>{element.Name}</div>
        <p>[số đề thi: {element.CountExam ? element.CountExam : 0}, số câu hỏi: {element.CountQuiz ? element.CountQuiz : 0}]</p>
      </div>
      <RxCross2 className={cx("Item_subject_icon")} />
    </div>
  );
}
