/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar, Button, Dropdown, Space } from "antd";
import NotificationPopup from "@/components/Notification/NotificationPopup";

import { FaBell } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { useRouter } from "next/router";

import {
  Box,
  IconButton,
  ListItemButton,
  ListItemText,
  Menu,
  Tooltip,
} from "@mui/material";
import { useAuth } from "@/hooks/authContext";

import { useSelector } from "react-redux";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";

const cx = classNames.bind(styles);

const Header = () => {
  const router = useRouter();

  const [showMobile, setShowmobile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const { isAuthenticated, userId, loginState, logout } = useAuth();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {}, [isAuthenticated]);

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
  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };
  const toggleMenu = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const user = useSelector((state) => state.login);

  const [show, setShow] = useState(false);

  return (
    <div className={cx("header")}>
      <div className={cx("header-left")}>
        {isAuthenticated && (
          <AiOutlineMenu
            className={cx("icon-mobile")}
            onClick={() => toggleMenu()}
          />
        )}
        {toggle && <MenuMobile items={items} setToggle={setToggle} />}

        <Link
          href={isAuthenticated ? "/personalized" : "/"}
          className={cx("logo-container")}
        >
          Meta<span>Learn</span>
        </Link>

        <div className={cx("header-links")}>
          <Link href="/subjects" className={cx("head-link")}>
            <Dropdown menu={{ items }}>
              <Space className={cx("head-link")}>Môn học</Space>
            </Dropdown>
          </Link>
          <Link href="/news" className={cx("head-link")}>
            Tin tức
          </Link>
          <Link href="/my-class" className={cx("head-link")}>
            Lớp học trực tuyến
          </Link>
          <Link href="/documents" className={cx("head-link")}>
            Tài liệu
          </Link>
          <Link href="/courseware" className={cx("head-link")}>
            Khóa học
          </Link>
          <Link href="/exam" className={cx("head-link")}>
            Đề thi
          </Link>
        </div>
      </div>

      <div className={cx("header-right")}>
        <div className={cx("search-container")}>
          <span className="search-icon">
            <BsSearch />
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className={cx("search-input")}
          />
        </div>

        {isAuthenticated && (
          <div className={cx("icon-ss")}>
            <div className={cx("authenticated_div")}>
              <div className={cx("icon-container")}>
                <BsSearch className={cx("icon-search-mobile")} />
              </div>
              <div className={cx("icon-container")}>
                <Link href="/payment">
                  <TiShoppingCart className={cx("icon")} />
                </Link>
              </div>
              <div className={cx("icon-container")}>
                <FaBell onClick={toggleNotification} />
              </div>
              <div className={cx("icon-container")}>
                <BiSolidUser onClick={handleOpenUserMenu} />
              </div>
              <Button className={cx("logout-button")} onClick={() => logout()}>
                Đăng xuất
              </Button>
              {/* Notification Popup */}
              {showNotification && <NotificationPopup />}
              <Box sx={{ flexGrow: 0 }}>
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
            </div>
          </div>
        )}

        {/* Notification button */}

        {/*
      <div className={cx("change-language")}>
 
          <BiWorld className={cx("icon")} onClick={() => setShow(!show)} />
          {show && (
            <div id="google_translate_element"></div>
      </div>
      */}

        {!isAuthenticated && (
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
    </div>
  );
};

export default Header;

const MenuMobile = ({ items, setToggle }) => {
  const { isAuthenticated, loginState, logout } = useAuth();
  const [expandedItems, setExpandedItems] = useState([]);
  const closeMenu = () => {
    // Đóng menu bằng cách xóa các mục đã mở
    setToggle(false);
  };
  const handleItemClick = (item) => {
    if (expandedItems.includes(item)) {
      setExpandedItems(expandedItems.filter((i) => i !== item));
    } else {
      setExpandedItems([...expandedItems, item]);
    }
  };
  return (
    <div className={cx("menu-mobile")}>
      {isAuthenticated && (
        <ul className={cx("mb-list")}>
          <li>
            <span
              className={cx(
                "mb-link",
                expandedItems.includes("my-class") ? "expanded" : ""
              )}
              onClick={() => handleItemClick("my-class")}
            >
              Lớp học trực tuyến
            </span>
            {expandedItems.includes("my-class") && (
              <ul className={cx("sub-menu")}>
                {/* Add sub-menu items for "Lớp học trực tuyến" */}
                <li>
                  <Link
                    href="/my-class/item1"
                    className={cx("mb-link-sub")}
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    Item 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my-class/item2"
                    className={cx("mb-link-sub")}
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    Item 2
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/subjects"
              className={cx("mb-link")}
              onClick={() => {
                closeMenu();
              }}
            >
              Subject
            </Link>
          </li>
          <li>
            <Link
              href="/news"
              className={cx("mb-link")}
              onClick={() => {
                closeMenu();
              }}
            >
              Tin tức
            </Link>
          </li>
          <li>
            <Link
              href="/my-class"
              className={cx("mb-link")}
              onClick={() => {
                closeMenu();
              }}
            >
              Lớp học trực tuyến
            </Link>
          </li>
          <li>
            <Link
              href="/documents"
              className={cx("mb-link")}
              onClick={() => {
                closeMenu();
              }}
            >
              Tài liệu
            </Link>
          </li>
          <li>
            <Link
              href="/exam"
              className={cx("mb-link")}
              onClick={() => {
                closeMenu();
              }}
            >
              Đề thi
            </Link>
          </li>
          <li>
            <Link
              href="/teachers"
              className={cx("mb-link")}
              onClick={() => {
                closeMenu();
              }}
            >
              Teacher
            </Link>
          </li>
          <Button
            className={cx("logout-button-mobile")}
            onClick={() => {
              logout();
              closeMenu();
            }}
          >
            Đăng xuất
          </Button>
        </ul>
      )}
    </div>
  );
};
