import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineMenu } from "react-icons/ai";
import { Dropdown, Space } from "antd";
import ModalLang from "@/components/ModalLang/ModalLang";
import useTrans from "@/hooks/useTrans";

const cx = classNames.bind(styles);

const Header = () => {
  const [showMobile, setShowmobile] = useState(false);

  const trans = useTrans();

  const items = [
    {
      key: "1",
      label: "Lập trình",
    },
    {
      key: "2",
      label: "Toán",
      children: [
        {
          key: "2-1",
          label: "Toán 10",
        },
        {
          key: "2-2",
          label: "Toán 11",
          children: [
            {
              key: "2-2-1",
              label: "Toán hình 11",
            },
            {
              key: "2-2-2",
              label: "Đại số 11",
            },
          ],
        },
        {
          key: "2-3",
          label: "Toán Cao Cấp",
        },
      ],
    },
    {
      key: "3",
      label: "Văn học",
    },
    {
      key: "4",
      label: "Địa lý",
      children: [
        {
          key: "2-1",
          label: "Địa lý 10",
        },
        {
          key: "2-2",
          label: "Địa lý 11",
        },
        {
          key: "2-3",
          label: "Địa lý 12",
        },
      ],
    },
    {
      key: "5",
      label: "Ngoại ngữ",
      children: [
        {
          key: "6-1",
          label: "tiếng Anh",
        },
        {
          key: "6-2",
          label: "tiếng Pháp",
        },
        {
          key: "6-3",
          label: "tiếng Đức",
        },
        {
          key: "6-3",
          label: "tiếng Nhật",
        },
        {
          key: "6-3",
          label: "tiếng Hàn",
        },
      ],
    },
    {
      key: "6",
      label: "Lịch sử",
      children: [
        {
          key: "6-1",
          label: "Lịch sử 10",
        },
        {
          key: "6-2",
          label: "Lịch sử 11",
        },
        {
          key: "6-3",
          label: "Lịch sử 12",
        },
      ],
    },
  ];

  return (
    <div className={cx("header")}>
      <AiOutlineMenu
        className={cx("icon-mobile")}
        onClick={() => setShowmobile(!showMobile)}
      />
      {showMobile && <MenuMobile />}
      <Link href="/" className={cx("logo-container")}>
        Meta<span>Learn</span>
      </Link>

      <Link href="/subjects" className={cx("head-link")}>
        <Dropdown
          menu={{
            items,
          }}
        >
          <Space className={cx("head-link")}>{trans.header.subject}</Space>
        </Dropdown>
      </Link>

      <div className={cx("search-container")}>
        <input
          type="text"
          placeholder={trans.header.search}
          className={cx("search-input")}
        />
        <BsSearch />
      </div>

      <Link href="/news" className={cx("head-link")}>
        {trans.header.new}
      </Link>
      <Link href="/my-class" className={cx("head-link")}>
        {trans.header.class}
      </Link>
      <Link href="/documents" className={cx("head-link")}>
        {trans.header.document}
      </Link>
      <Link href="/exam" className={cx("head-link")}>
        {trans.header.exam}
      </Link>

      <div className={cx("icon-ss")}>
        <BsSearch className={cx("icon-search-mobile")} />
        <TiShoppingCart className={cx("icon")} />
      </div>

      <div className={cx("user")}>
        <Link href="/account/login" className={cx("login-btn")}>
          {trans.header.login}
        </Link>
        <Link href="/account/login" className={cx("signup-btn")}>
          {trans.header.signup}
        </Link>
        <div className={cx("change-language")}>
          <ModalLang />
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
