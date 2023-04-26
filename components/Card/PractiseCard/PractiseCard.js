import React from "react";
import Section from "../../Section/Section";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
const cx = classNames.bind(styles);
const PractiseCard = () => {
  return (
    <Section>
      <div >
        <div className={cx("card")}>
          <div className={cx("titleCard")}>
            <h4>#191 : Test mô tả,bình luận</h4>
            <i class="fa-solid fa-minus"></i>
          </div>
          <div className={cx("status")}>
            <span>Mới tạo</span>
            <span>Còn 14h 42m</span>
          </div>
          <div className={cx("timeStart")}>
            <span>[06 : 04 : 2023]</span>
            <span> [08 : 04 : 2023]</span>
          </div>
          <div className={cx("listIcon")}>
            <span><i class="fa-solid fa-pen"></i></span>
            <span><i class="fa-solid fa-align-center"></i></span>
            <span><i class="fa-solid fa-comment-dots"></i></span>
            <span><i class="fa-solid fa-bell"></i></span>
            <span><i class="fa-solid fa-file"></i></span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PractiseCard;
