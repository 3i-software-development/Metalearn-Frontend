import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Section from "@/components/Section/Section";
import { Rate } from "antd";
import moment from 'moment';

const cx = classNames.bind(styles);

const CourseCard = (data) => {
  console.log(data)
  return (
    <Section>
      <div className={cx("layout")}>
        {data?.data?.Object?.map((item, index) => {
          return (
            <div className={cx("course-card")} key={index}>
              <div className={cx("content")}>
                <div className={cx("images")}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0wrI3rDgjAOuWJ3uFIcaaSQ45O9fmq4jyw&usqp=CAU" />
                </div>
                <div>
                  <h4>
                    <i class="fa-solid fa-computer"></i> {item.SubjectName}
                  </h4>
                  <p className={cx("role")}>Admin</p>
                  <Rate defaultValue={2} />
                  <p>
                    Bắt đầu : <span>{moment(item.StartTime).format('DD/MM/YYYY HH:MM:SS')} </span>
                  </p>
                  <p>
                    Kết thúc : <span>{moment(item.EndTime).format('DD/MM/YYYY HH:MM:SS')} </span>
                  </p>
                  <p>
                    <i class="fa-solid fa-coins"></i> Gía : <span>{item.Price ? item.Price : '0'}</span>
                  </p>
                  <p>
                    <i class="fa-solid fa-medal"></i> Số lần xem : <span>{item?.CountUserApproved}</span>
                  </p>
                </div>
              </div>
              <div className={cx("footerCard")}>
                <div>
                  <p>
                    <i class="fa-solid fa-coins"></i> Môn học :
                    <span>{item.SubjectName}</span>
                  </p>
                  <p>
                    <i class="fa-solid fa-coins"></i>  Bài giảng tương tác :
                    <span>Không</span>
                  </p>
                </div>
                <div className={cx("down")}>
                  <i class="fa-solid fa-cloud-arrow-down"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default CourseCard;
