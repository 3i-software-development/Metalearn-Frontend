import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Image from "next/image";

const cx = classNames.bind(styles);

const ClassCard = ({ data }) => {
  return (
    <div style={{ height: "100%" }}>
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
        <div className={cx("title")}>
          <strong>
            <i className="fa-solid fa-circle" style={{ color: "red" }}></i> Phap
            A :
          </strong>
          <span>[A][A]</span>
        </div>
        <br />
        <div className={cx("title")}>
          <span>
            <i className="fa-solid fa-book " style={{ color: "grey" }}></i>{" "}
            Subject:
          </span>
          <span> &nbsp; Lập trình</span>
        </div>
        <div className={cx("title")}>
          <span>
            <i className="fa-solid fa-clock " style={{ color: "grey" }}></i> Bắt
            đầu:
          </span>
          <span>&nbsp; Lập trình</span>
        </div>
        <div className={cx("footer-card")}>
          <p>
            <i className="fa-solid fa-mobile-screen-button"></i>
          </p>
          <p>
            <i className="fa-solid fa-file-video"></i>
          </p>
          <p>
            <i className="fa-solid fa-video"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
