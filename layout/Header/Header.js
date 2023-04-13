import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { BiWorld } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

const cx = classNames.bind(styles);

const Header = () => {
  const [showMobile, setShowmobile] = useState(false);

  return (
    <div className={cx("header")}>
      <AiOutlineMenu
        className={cx("icon-mobile")}
        onClick={() => setShowmobile(!showMobile)}
      />
      {showMobile && <MenuMobile />}
      <div className={cx("logo-container")}>
        Meta<span>Learn</span>
      </div>

      <Link href="/subjects" className={cx("head-link")}>
        Môn học
      </Link>

      <div className={cx("search-container")}>
        <input
          type="text"
          placeholder="Tìm kiếm"
          className={cx("search-input")}
        />
        <BsSearch />
      </div>

      <Link href="/news" className={cx("head-link")}>
        Tin tức
      </Link>
      <Link href="/news" className={cx("head-link")}>
        Lớp học trực tuyến
      </Link>
      <Link href="/documents" className={cx("head-link")}>
        Tài liệu
      </Link>
      <Link href="/exam" className={cx("head-link")}>
        Đề thi
      </Link>

      <div className={cx("icon-ss")}>
        <BsSearch className={cx("icon-search-mobile")} />
        <TiShoppingCart className={cx("icon")} />
      </div>

      <div className={cx("user")}>
        <Link href="/account/login" className={cx("login-btn")}>
          Log in
        </Link>
        <Link href="/account/login" className={cx("signup-btn")}>
          Sign up
        </Link>
        <div className={cx("change-language")}>
          <BiWorld className={cx("icon")} />
        </div>
      </div>
    </div>
  );
};

export default Header;

const MenuMobile = () => {
  return (
    <div className={cx("menu-mobile")}>
      <div className={cx("mb-user")}>
        <Link href="/account/login" className={cx("mb-login")}>
          Log in
        </Link>
        <Link href="/account/login" className={cx("mb-signup")}>
          Sign up
        </Link>
      </div>
      <div className={cx("mb-list")}>
        <Link href="/subjects" className={cx("mb-link")}>
          Môn học
        </Link>
        <Link href="/news" className={cx("mb-link")}>
          Tin tức
        </Link>
        <Link href="/news" className={cx("mb-link")}>
          Lớp học trực tuyến
        </Link>
        <Link href="/documents" className={cx("mb-link")}>
          Tài liệu
        </Link>
        <Link href="/exam" className={cx("mb-link")}>
          Đề thi
        </Link>
      </div>
    </div>
  );
};
