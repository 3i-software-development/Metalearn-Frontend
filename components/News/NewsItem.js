import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { GetListCmsItem } from "@/pages/api/CallAPI";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(styles);
const NewsItem = ({ cat_id }) => {
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    GetListCmsItem(cat_id).then((res) => {
      setListNews(res.Object);
    });
  }, [cat_id]);

  const imgs = [
    'https://admin.metalearn.vn//uploads/Images/ai4vn-1695301522-4776-1695301554_b22da161.jpg',
    'https://admin.metalearn.vn//uploads/Images/MPSU302JPG-1699412403-9853-1699412406_9a81e356.jpg',
    'https://admin.metalearn.vn//uploads/Images/gs-3-jpg-1699533838-1753-1699536524_49c57a2e.jpg',
  ]

  console.log(listNews)

  return (
    <div className={cx("item")}>
      {listNews.map((item, index) => {
        return (
          <Link key={index} href={`/newsDetail?id=${item?.id}`}>
            <div className={cx("news-item")} >
              <div className={cx("icon-news")}>
                <Image width={200} style={{ objectFit: 'cover' }} height={10} alt="error" src={imgs[index] || 'https://img.lovepik.com/free-png/20210926/lovepik-newspaper-news-icon-free-vector-illustration-png-image_401498948_wh1200.png'} />
              </div>
              <div className={cx("content-news")}>
                <div className={cx("content")}>
                  <text>{item.title || item?.alias}</text>
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
          </Link>
        );
      })}
    </div>
  );
};

export default NewsItem;