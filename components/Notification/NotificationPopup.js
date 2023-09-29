import React, {useEffect, useState} from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { set } from "react-hook-form";

const cx = classNames.bind(styles);


const NotificationPopup = () => {    // Add your notification content and styling here
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
    return (
      <div className={cx("notification-popup")}>
        <div className={cx("notification-header")}>
          <span>Notifications</span>
        </div>
        <div className={cx("notification-list")}>
          {
            fakeNotification.map((item) => (
              <div className={cx("notification-item")} key={item.id}>
                <div className={cx("notification-item-title")}>
                  {item.title}
                </div>
                <div className={cx("notification-item-content")}>
                  {item.content}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  };

export default NotificationPopup;