import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { BsGlobe } from "react-icons/bs";
import { useAuth } from "@/hooks/authContext";

const cx = classNames.bind(styles);

const Footer = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className={cx("footer-container")}>
      <div className={cx("footer")}>
        {/* {isAuthenticated ? ( */}
        <div className={cx("links", "footer-item")}>
          <div className={cx("link-group")}>
            <Link className={cx("link-group-item")} href="/subjects">Môn học của tôi</Link>
            <Link className={cx("link-group-item")} href="/my-class">Lớp của tôi</Link>
            <Link className={cx("link-group-item")} href="/">Rèn luyện</Link>
            <Link className={cx("link-group-item")} href="/connection">Quản lý kết nối</Link>
          </div>
          <div className={cx("link-group")}>
            <Link className={cx("link-group-item")} href="/exam-bank">Ngân hàng đề thi</Link>
            <Link className={cx("link-group-item")} href="/">Ngân hàng câu hỏi</Link>
            <Link className={cx("link-group-item")} href="/">Học liệu</Link>
            <Link className={cx("link-group-item")} href="/ViewExamSchedule">Dạy trực tuyến</Link>
          </div>
          {/* <div className={cx("link-group", "footer-item-3")}>
            <Link className={cx("link-group-item")} href="/OnlineClasses">Thi trực tuyến</Link>
            <Link className={cx("link-group-item")} href="/courses">Khóa học</Link>
            <Link className={cx("link-group-item")} href="/count-student">Thống kê</Link>
            <Link className={cx("link-group-item")} href="/">Search</Link>
          </div> */}
        </div>
        {/* ) : <div></div>} */}

        <div className={cx("footer-bottom")}>
          <div style={{display: 'flex', columnGap: '10px'}}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <BsGlobe />
              <span>Ngôn ngữ</span>
            </span>
            <div id="google_translate_element" className={cx("language")}></div>
          </div>
          <p className={cx("copyRight")} style={{fontSize: '14px'}}>© 2023 MetaLearn, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
