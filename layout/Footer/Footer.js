import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { BsGlobe } from "react-icons/bs";

const cx = classNames.bind(styles);

const Footer = () => {

  return (
    <div className={cx("footer-container")}>
      <div className={cx("footer")}>
        <div className={cx("links", "footer-item")}>
          <div className={cx("link-group")}>
            <Link href="/">Môn học của tôi</Link>
            <Link href="/my-class">Lớp của tôi</Link>
            <Link href="/">Rèn luyện</Link>
            <Link href="/">Quản lý kết nối</Link>
          </div>
          <div className={cx("link-group")}>
            <Link href="/">Ngân hàng đề thi</Link>
            <Link href="/">Ngân hàng câu hỏi</Link>
            <Link href="/">Học liệu</Link>
            <Link href="/">Dạy trực tuyến</Link>
          </div>
          <div className={cx("link-group")}>
            <Link href="/">Thi trực tuyến</Link>
            <Link href="/">Khóa học</Link>
            <Link href="/">Thống kê</Link>
            <Link href="/">Search</Link>
          </div>
        </div>
        <div className={cx("language-select", "footer-item")}>
          <Link href="/">
            <BsGlobe />
            <span>Ngôn ngữ</span>
          </Link>
        </div>
        <div className={cx("icon", "footer-item")}>
          <p>MetaLearn</p>
        </div>
        <div className={cx("copyright", "footer-item")}>
          <p>© 2023 MetaLearn, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
