import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
const cx = classNames.bind(styles);
const NewsItem = () => {
  const list = [
    {
      title: "Nội quy & các thức làm việc",
      date: "12/3/2021",
      userNew : "Admintrator"
    },
    {
      title: "Nội quy & các thức làm việc",
      date: "12/3/2021",
      userNew : "Admintrator"
    },
    {
      title: "Nội quy & các thức làm việc",
      date: "12/3/2021",
      userNew : "Admintrator"
    },
    {
      title: "Nội quy & các thức làm việc",
      date: "12/3/2021",
      userNew : "Admintrator"
    },
    {
      title: "Nội quy & các thức làm việc",
      date: "12/3/2021",
      userNew : "Admintrator"
    },
    {
      title: "Nội quy & các thức làm việc",
      date: "12/3/2021",
      userNew : "Admintrator"
    },
    {
      title: "Nội quy & các thức làm việc",
      date: "12/3/2021",
      userNew : "Admintrator"
    },
    {
      title: "Nội quy & các thức làm việc",
      date: "12/3/2021",
      userNew : "Admintrator"
    },
    {
      title: "Nội quy & các thức làm việc",
      date: "12/3/2021",
      userNew : "Admintrator"
    },
    {
      title: "Nội quy & các thức làm việc",
      date: "12/3/2021",
      userNew : "Admintrator"
    },
    {
      title: "Nội quy & các thức làm việc",
      date: "12/3/2021",
      userNew : "Admintrator"
    },
    {
      title: "Nội quy & các thức làm việc",
      date: "12/3/2021",
      userNew : "Admintrator"
    },
  ];
  return (
        <div className={cx("item")}>
      {list.map((item, index) => {
        return (
          <div className={cx("news-item")} key={index}>
            <div className={cx("icon-news")}>
            <i className="fa-sharp fa-solid fa-table-list" style={{fontSize:"40px"}}></i>
            </div>
            <div className={cx("content-news")}>
              <div className={cx("content")}>
                <h4>{item.title}</h4>
              </div>
              <div className={cx("content")}>
                <div>
                  <i className="fa-solid fa-clock"></i><span className={cx("dateTime")}> {item.date}</span>
                </div>
                <div><p className={cx("userNew")}>Người tạo : <strong>{item.userNew}</strong></p></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsItem;