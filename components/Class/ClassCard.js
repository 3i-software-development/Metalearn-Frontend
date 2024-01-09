import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(styles);

const ClassCard = ({ data }) => {
  console.log(data);

  return (
      <div style={{ cursor: 'pointer' }} className={cx("course-card")}>
        <Link  href={`/my-class?page=lmsClassForum&classCode=${data?.ClassCode}`} >
          {data.ImageCover ? (
            <Image src={data.ImageCover} alt="class" width="500" height="400"  className={cx("course-card-img")}/>
          ) : (
            <Image  className={cx("course-card-img")}
              src="https://printgo.vn/uploads/media/763962/dinh-dang-file-thiet-ke-png-1024x1012_1566374045.jpg"
              alt="document"
              width="130"
              height="200"
              style={{ display: 'block', marginLeft: '30px' }}
            />
          )}
        </Link>
        <div className={cx("title")}>
          <Link href={'/my-class?page=lmsClassForum'}>
            <strong>
              <i className="fa-solid fa-circle" style={{ color: "red", marginRight: '5px' }}></i>
              {data?.ClassName}
            </strong>
          </Link>
        </div>
        <div className={cx("title")}>
          <span>
            <i className="fa-solid fa-book " style={{ color: "grey" }}></i>{" "}
            Giảng viên:
          </span>
          <span>{data?.TeacherName.split(',')[0]}</span>
        </div>
        <div className={cx("title")}>
          <span>
            <i className="fa-solid fa-clock " style={{ color: "grey" }}></i> Bắt
            đầu:
          </span>
          <span> {data?.StartTime.slice(0, 10)}</span>
        </div>
        <div className={cx("title")}>
          <span>
            <i className="fa-solid fa-clock " style={{ color: "grey" }}></i> Thành viên:
          </span>
          <span> {data?.CountStudent}</span>
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
  );
};

export default ClassCard;
