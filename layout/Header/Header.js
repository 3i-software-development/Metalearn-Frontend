import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar, Dropdown, Space } from "antd";
import ModalLang from "@/components/ModalLang/ModalLang";
import useTrans from "@/hooks/useTrans";
import {
  Box,
  IconButton,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import useAuth from "@/hooks/useAuth";
import { GetUser } from "@/pages/api/CallAPI";

const cx = classNames.bind(styles);

const Header = () => {
  const [showMobile, setShowmobile] = useState(false);
  const trans = useTrans();
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
  GetUser();

  // if (typeof window !== 'undefined') {
  //   // Perform localStorage action
  //     const userLocal = localStorage.getItem('user').slice(0,1).toUpperCase()
  //     setUser(userLocal)
  // }
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
          <Space className={cx("head-link")}>{trans.subject.subject}</Space>
        </Dropdown>
      </Link>

      <div className={cx("search-container")}>
        <input
          type="text"
          placeholder={trans.search.search}
          className={cx("search-input")}
        />
        <BsSearch />
      </div>

      <Link href="/news" className={cx("head-link")}>
        {trans.header.new}
      </Link>
      <Link href="/my-class" className={cx("head-link")}>
        {trans.class.class}
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
      {state && (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar />
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
                  <img src="https://usehooks.com/images/bytes-logo.png" />
                </div>
                <div>
                  <ListItemText primary="Spam" />
                </div>
              </div>
            </ListItemButton>
            <ListItemButton component="a" className={cx("listSettingss")}>
              <div className={cx("listSettings")}>
                <div>
                  <img src="https://usehooks.com/images/bytes-logo.png" />
                </div>
                <div>
                  <ListItemText primary="Spam" />
                </div>
              </div>
            </ListItemButton>

            <ListItemButton component="a" className={cx("listSettingss")}>
              <div className={cx("listSettings")}>
                <div>
                  <img src="https://usehooks.com/images/bytes-logo.png" />
                </div>
                <div>
                  <ListItemText primary="Spam" />
                </div>
              </div>
            </ListItemButton>
            <ListItemButton component="a" className={cx("listSettingss")}>
              <div className={cx("listSettings")}>
                <div>
                  <img src="https://usehooks.com/images/bytes-logo.png" />
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
            {trans.header.login}
          </Link>
          <Link href="/auth/signup" className={cx("signup-btn")}>
            {trans.header.signup}
          </Link>
          <div className={cx("change-language")}>
            <ModalLang />
          </div>
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
          {trans.header.login}
        </Link>
        <Link href="/auth/signup" className={cx("mb-signup")}>
          {trans.header.signup}
        </Link>
      </div>
      <div className={cx("mb-list")}>
        <Link href="/subjects" className={cx("mb-link")}>
          {trans.subject.subject}
        </Link>
        <Link href="/news" className={cx("mb-link")}>
          {trans.header.new}
        </Link>
        <Link href="/my-class" className={cx("mb-link")}>
          {trans.class.class}
        </Link>
        <Link href="/documents" className={cx("mb-link")}>
          {trans.header.document}
        </Link>
        <Link href="/exam" className={cx("mb-link")}>
          {trans.header.exam}
        </Link>
      </div>
    </div>
  );
};
