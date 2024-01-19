import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { set } from "react-hook-form";
import { red } from "@mui/material/colors";
import axios from "axios";
import { useAuth } from "@/hooks/authContext";

const cx = classNames.bind(styles);

const NotificationPopup = () => {
  const [dataNotification, setDataNotification] = useState([])
  
  // Add your notification content and styling here
  const [saveSetting, setSaveSetting] = useState({
    "Menu trái": {
      style: "default",
      size: "14",
      color: "#000000",
    },
    "Tiêu đề": {
      style: "default",
      size: "14",
      color: "#000000",
    },
    "Thông báo": {
      style: "default",
      size: "14",
      color: "#000000",
    },
    "Điều khiển": {
      style: "default",
      size: "14",
      color: "#000000",
    },
    "Nội dung chữ": {
      style: "default",
      size: "14",
      color: "#000000",
    },
    "Nội dung control": {
      style: "default",
      size: "14",
      color: "#000000",
    },
    "Nội dung kiểu cây": {
      style: "default",
      size: "14",
      color: "#000000",
    },
    "Giao diện bài viết": {
      style: "default",
      size: "14",
      color: "#000000",
    },
  });

  const {userName} = useAuth()
  useEffect(() => {
    const fetchNotification = async() => {
      const data = await axios.get(
        `https://admin.metalearn.vn/MobileApp/GetNotifications?userName=${userName}`
      );
      console.log(data.data)
      setDataNotification(data.data);
    }
    fetchNotification()
  }, [userName]);

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

  const handleDeleteNotify = async(id) => {
    try {
      if(!confirm("Xóa thông báo?")) return;
      const res = await axios.delete(`https://admin.metalearn.vn/MobileApp/DeleteNotification?id=${id}&userName=admin`)
      console.log(res)
      alert('Xóa thành công!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={cx("notification-popup")}>
      <div className={cx("notification-header")}>
        <span style={{fontWeight: 'bold',color: '#000', padding: '10px 0' }}>Thông báo</span>
      </div>
      <div className={cx("notification-list")}>
        {dataNotification.map((item) => (
          <div className={cx("notification-item")} key={item.id}>
            <div onClick={() => handleDeleteNotify(item?.NotifyID)} className={cx("notification-item-title")}>
              <text style={divStyle}>{item.Content}</text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPopup;
