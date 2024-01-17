import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import moment from "moment";
import Link from "next/link";

const cx = classNames.bind(styles);

const ClassCard = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Link href={`/my-class?page=lmsClassForum&classCode=${data?.ClassCode}&title=${data?.ClassName}`}>
        <div
          style={{ cursor: "pointer", padding: "20px 0" }}
          className={cx("course-card")}
        >
          <div className={cx("title")}>
            <strong style={{ display: 'block' }}>
              <i
                className="fa-solid fa-circle"
                style={{ color: "red", marginRight: "5px" }}
              ></i>
              {data?.ClassName}
            </strong>
            <span><i className="fa-solid fa-clock " style={{ color: "grey" }}></i>{" "}{moment(data?.StartTime).format("DD/MM/YYYY hh:mm")}</span>
          </div>
          <div className={cx("title")}>
            <span>
              <i className="fa-solid fa-book " style={{ color: "grey" }}></i>{" "}
              Giảng viên:
            </span>
            <span>{data?.TeacherName}</span>
          </div>
          <div className={cx("title")}>
            <span>
              <i className="fa-solid fa-clock " style={{ color: "grey" }}></i>{" "}
              Bắt đầu:
            </span>
            <span> {data?.StartTime.slice(0, 10)}</span>
          </div>
          <div className={cx("title")}>
            <span>
              <i className="fa-solid fa-user " style={{ color: "grey" }}></i>{" "}
              Số học sinh:
            </span>
            <span> {data?.CountStudent}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ClassCard;
