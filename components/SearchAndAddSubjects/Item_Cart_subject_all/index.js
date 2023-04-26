import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { RxCross2 } from "react-icons/rx";

export default function Item_Cart_subject_all({title}) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("Item_Cart_subject_all")}>
      <div className={cx("Item_subject_item")}>
        <div>{title}</div>
        <p>[số đề thi: 6, số câu hỏi: 6]</p>
      </div>
      <RxCross2 className={cx("Item_subject_icon")} />
    </div>
  );
}
