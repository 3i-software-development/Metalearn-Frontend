import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Section from "@/components/Section/Section";
const cx = classNames.bind(styles);
const SelftrainingCard = () => {
  return (
    <Section>
      <div className={cx("selftraining-card")}>
        <div className={cx("selftrainingTitle")}>
          <h4>1. Chất nào sau đây là đơn chất ?</h4>
          <i class="fa-solid fa-ellipsis"></i>
        </div>
        <div className={cx("selftrainingContent")}>
          <p>
            <span>Môn học : </span>Hóa học lớp 8
          </p>
          <p>
            <span>Bài giảng : </span>Bài 6 : Đơn chất và hợp chất - Phân
          </p>
          <p>
            <span>Gía : </span>0 Coin [ Được chia sẻ ]
          </p>
          <p className={cx("timeSub")}>
            <span>
              <i class="fa-solid fa-code-branch"></i>
            </span>{" "}
            <span>Zeta7</span> <span>07/04/2023</span> <span>10:58</span>
          </p>
        </div>
        <div className={cx("time-level")}>
          <p>
            <span>Thời lượng : </span>2
          </p>
          <p>
            <span>Độ khó : </span>Dễ
          </p>
        </div>
        <div className={cx("icon")}>
          <i class="fa-solid fa-cloud-arrow-down"></i>
          <i class="fa-solid fa-thumbtack"></i>
        </div>
      </div>
    </Section>
  );
};

export default SelftrainingCard;
