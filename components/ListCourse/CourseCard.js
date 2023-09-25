import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Image from "next/image";

const cx = classNames.bind(styles);

const CourseCard = ({ data, clas, doc, exam }) => {
  const examCard = () => {
    return (
      <div className={cx("course-card")}>
        <Image
          src={
            data.ImageCover
              ? data.ImageCover
              : "https://www.thaibinhtv.vn/assets/images/imgstd.jpg"
          }
          alt="exam"
          width="500"
          height="400"
        />
        <p className={cx("titleDoc")}>{data.LectName}</p>
      </div>
    );
  };

  const docCard = () => {
    return (
      <div className={cx("course-card")}>
        <Image
          src="https://dieuhanh.vatco.vn//uploads/repository/SUBJECT/download5.jpg"
          alt="document"
          width="500"
          height="400"
        />
        <p className={cx("titleDoc")}>{data.FileName}</p>
      </div>
    );
  };

  const clasCard = () => {
    return (
      <div className={cx("course-card")}>
        {data.ImageCover ? (
          <Image src={data.ImageCover} alt="class" width="500" height="400" />
        ) : (
          <Image
            src="https://dieuhanh.vatco.vn//uploads/repository/SUBJECT/download5.jpg"
            alt="document"
            width="500"
            height="400"
          />
        )}
        <p className={cx("title")}>
          <strong>
            <i className="fa-solid fa-square" style={{ color: "yellow" }}></i>{" "}
            Phap A :
          </strong>
          <span>[A][A]</span>
        </p>
        <br />
        <p className={cx("title")}>
          <span>
            <i className="fa-solid fa-circle " style={{ color: "red" }}></i>{" "}
            Subject:
          </span>
          <span>&nbsp; Lập trình</span>
        </p>
        <p className={cx("title")}>
          <span>
            <i className="fa-solid fa-circle " style={{ color: "brown" }}></i>{" "}
            Bắt đầu:
          </span>
          <span>&nbsp; Lập trình</span>
        </p>
        <p className={cx("footer-card")}>
          <p>
            <i className="fa-solid fa-mobile-screen-button"></i>
          </p>
          <p className={cx("arrow-icon")}>
            <p className={cx("rectangle")}>
              <span>Đăng kí</span> <br />
              <span>1 coin</span>
            </p>
            <p className={cx("arrow-right")}></p>
          </p>
        </p>
      </div>
    );
  };

  return (
    <div style={{ height: "100%" }}>
      {clas && clasCard()}
      {exam && examCard()}
      {doc && docCard()}
    </div>
  );
};

export default CourseCard;
