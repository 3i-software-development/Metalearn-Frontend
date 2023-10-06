import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { set } from "react-hook-form";
import { red } from "@mui/material/colors";

const cx = classNames.bind(styles);


const NotificationPopup = () => {    // Add your notification content and styling here
  const [saveSetting, setSaveSetting] = useState({
    "Menu trái": {
      style: "default",
      size: "14",
      color: "#000000"
    },
    "Tiêu đề": {
      style: "default",
      size: "14",
      color: "#000000"
    },
    "Thông báo": {
      style: "default",
      size: "14",
      color: "#000000"
    },
    "Điều khiển": {
      style: "default",
      size: "14",
      color: "#000000"
    },
    "Nội dung chữ": {
      style: "default",
      size: "14",
      color: "#000000"
    },
    "Nội dung control": {
      style: "default",
      size: "14",
      color: "#000000"
    },
    "Nội dung kiểu cây": {
      style: "default",
      size: "14",
      color: "#000000"
    },
    "Giao diện bài viết": {
      style: "default",
      size: "14",
      color: "#000000"
    }
  });
  const fakeNotification = [
    {
      id: 1,
      title: "Notification 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Notification 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Notification 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  useEffect(() => {
    // Load the settings from local storage
    const saveSetting = localStorage.getItem("saveSetting");
    if (saveSetting) {
      setSaveSetting(JSON.parse(saveSetting));
    }
  }, []);

  const divStyle = {
    color: saveSetting["Thông báo"].color,
    fontSize: `${saveSetting["Thông báo"].size}px`,
    fontFamily: saveSetting["Thông báo"].style,
  };

  return (
    <div className={cx("notification-popup")}>
      <div className={cx("notification-header")}>
        <span>Notifications</span>
        <div style={divStyle}>
          {
            saveSetting["Thông báo"].style
          }
          </div>
      </div>
      <div className={cx("notification-list")}>
        {
          fakeNotification.map((item) => (
            <div className={cx("notification-item")} key={item.id}>
              <div className={cx("notification-item-title")}>
                <text style={divStyle}>
                  {item.title}
                </text>
              </div>
              <div className={cx("notification-item-content")}>
                <text style={divStyle}>
                  {item.content}
                </text>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default NotificationPopup;