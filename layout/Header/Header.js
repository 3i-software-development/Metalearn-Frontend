/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar, Dropdown, Space } from "antd";

import {
  Box,
  IconButton,
  ListItemButton,
  ListItemText,
  Menu,
  Tooltip,
} from "@mui/material";
import useAuth from "@/hooks/useAuth";
import { useSelector } from "react-redux";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";

const cx = classNames.bind(styles);

const Header = () => {
  const [showMobile, setShowmobile] = useState(false);
  const state = useAuth();

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
          key: "5-1",
          label: "tiếng Anh",
        },
        {
          key: "5-2",
          label: "tiếng Pháp",
        },
        {
          key: "5-3",
          label: "tiếng Đức",
        },
        {
          key: "5-5",
          label: "tiếng Nhật",
        },
        {
          key: "5-4",
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

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const user = useSelector((state) => state.login);

  const [show, setShow] = useState(false);
  return (
    <div className={cx("header")}>
      <AiOutlineMenu
        className={cx("icon-mobile")}
        onClick={() => setShowmobile(!showMobile)}
      />
      {showMobile && <MenuMobile />}
      <Link
        href={state ? "/personalized" : "/"}
        className={cx("logo-container")}
      >
        Meta<span>Learn</span>
      </Link>
      <Link href="/subjects" className={cx("head-link")}>
        <Dropdown
          menu={{
            items,
          }}
        >
          <Space className={cx("head-link")}>Môn học</Space>
        </Dropdown>
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
      <Link href="/my-class" className={cx("head-link")}>
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
      <div className={cx("change-language")}>
        <BiWorld className={cx("icon")} onClick={() => setShow(!show)} />
        {show && <div id="google_translate_element"></div>}
      </div>
      {state && (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ padding: "10px" }}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png "
                width={20}
                height={20}
                alt=""
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {/* <MenuItem onClick={handleCloseUserMenu}> */}
            <ListItemButton component="a" className={cx("listSettingss")}>
              <div className={cx("listSettings")}>
                <div>
                  <Image
                    src="https://usehooks.com/images/bytes-logo.png"
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
                <div>
                  <ListItemText primary="Spam" />
                </div>
              </div>
            </ListItemButton>
            <ListItemButton component="a" className={cx("listSettingss")}>
              <div className={cx("listSettings")}>
                <div>
                  <Image
                    src="https://usehooks.com/images/bytes-logo.png"
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
                <div>
                  <ListItemText primary="Spam" />
                </div>
              </div>
            </ListItemButton>

            <ListItemButton component="a" className={cx("listSettingss")}>
              <div className={cx("listSettings")}>
                <div>
                  <Image
                    src="https://usehooks.com/images/bytes-logo.png"
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
                <div>
                  <ListItemText primary="Spam" />
                </div>
              </div>
            </ListItemButton>
            <ListItemButton component="a" className={cx("listSettingss")}>
              <div className={cx("listSettings")}>
                <div>
                  <Image
                    src="https://usehooks.com/images/bytes-logo.png"
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
                <div>
                  <ListItemText primary="Spam" />
                </div>
              </div>
            </ListItemButton>

            {/* </MenuItem> */}
          </Menu>
        </Box>
      )}

      {!state && (
        <div className={cx("user")}>
          <Link href="/auth/login" className={cx("login-btn")}>
            Đăng nhập
          </Link>
          <Link href="/auth/signup" className={cx("signup-btn")}>
            Đăng kí
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;

const MenuMobile = () => {
  return (
    <div className={cx("menu-mobile")}>
      <div className={cx("mb-user")}>
        <Link href="/auth/login" className={cx("mb-login")}>
          Đăng nhập
        </Link>
        <Link href="/auth/signup" className={cx("mb-signup")}>
          Đăng kí
        </Link>
      </div>
      <div className={cx("mb-list")}>
        <Link href="/subjects" className={cx("mb-link")}>
          Subject
        </Link>
        <Link href="/news" className={cx("mb-link")}>
          Tin tức
        </Link>
        <Link href="/my-class" className={cx("mb-link")}>
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
