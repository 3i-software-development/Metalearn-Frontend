import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { grey } from "@mui/material/colors";

const cx = classNames.bind(styles);

const CourseCard = ({ data, clas, doc, exam }) => {
  console.log(data);
  const examCard = () => {
    return (
      <div className={cx("course-card")}>
        <Image src={data.ImageCover} alt="course" width="500" height="400" />
        <span className={cx("titleDoc")}>{data.LectName}</span>
      </div>
    );
  };

  const docCard = () => {
    return (
      <div className={cx("course-card")}>
        <Image
          src="https://dieuhanh.vatco.vn//uploads/repository/SUBJECT/download5.jpg"
          alt="course"
          width="500"
          height="400"
        />
        <span className={cx("titleDoc")}>{data.FileName}</span>
      </div>
    );
  };

  const clasCard = () => {
    return (
      <div className={cx("course-card")}>
        <Image src={data.ImageCover} alt="course" width="500" height="400" />
        <div className={cx("title")}>
          <strong>
            <i className="fa-solid fa-square" style={{ color: "yellow" }}></i>{" "}
            Phap A
          </strong>
          <span>[A][A]</span>
        </div>
        <br />
        <div className={cx("title")}>
          <span>
            <i className="fa-solid fa-circle " style={{ color: "red" }}></i> Môn
            học :
          </span>
          <span> Lập trình</span>
        </div>
        <div className={cx("title")}>
          <span>
            <i className="fa-solid fa-circle " style={{ color: "brown" }}></i>{" "}
            Bắt đầu :
          </span>
          <span> Lập trình</span>
        </div>
        <div className={cx("footer-card")}>
          <div>
            <i class="fa-solid fa-mobile-screen-button"></i>
          </div>
          <div className={cx("arrow-icon")}>
            <div className={cx("rectangle")}>
              <p>Đăng kí</p>
              <p>1 coin</p>
            </div>
            <div className={cx("arrow-right")}></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {clas && clasCard()}
      {exam && examCard()}
      {doc && docCard()}
    </div>
  );
};

export default CourseCard;
