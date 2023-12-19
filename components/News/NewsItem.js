import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { GetListCmsItem } from "@/pages/api/CallAPI";
import {
  SettingOutlined,
} from "@ant-design/icons";


const cx = classNames.bind(styles);
const NewsItem = ({cat_id}) => {
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    GetListCmsItem(cat_id).then((res) => {
      setListNews(res.Object);
    });
  }, []);


  return (
    <div className={cx("item")}>
      {listNews.map((item, index) => {
        return (
          <div className={cx("news-item")} key={index}>
            <div className={cx("icon-news")}>
              <i className="fa-sharp fa-solid fa-table-list" style={{ fontSize: "40px" }}></i>
            </div>
            <div className={cx("content-news")}>
              <div className={cx("content")}>
                <text>{item.title}</text>
              </div>
              <div className={cx("content")}>
                <div>
                  <i className="fa-solid fa-clock"></i><span className={cx("dateTime")}> {item.date_post}</span>
                </div>
                <div>
                  <p className={cx("userNew")}>Người tạo : <strong>{item.createBy}</strong></p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsItem;