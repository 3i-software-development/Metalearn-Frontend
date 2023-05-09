import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Section from "@/components/Section/Section";
import { Rate } from "antd";
import moment from "moment";
import { useGetListLectureQuery } from "@/lib/Midleware/LectureQuery";
import Image from "next/image";
import Pagination from "@/components/Pagination/Pagination";

const cx = classNames.bind(styles);

const CourseCard = () => {
  const [query, setQuery] = useState({
    lectureName: "",
    subjectCode: "",
    courseCode: "",
    userFilter: "admin",
    userName: "admin",
    onlyAssignment: false,
    onlyShared: true,
    pageLength: 10,
    pageNum: 1,
    ratingMin: -1,
    ratingMax: -1,
  });

  const handleQueryPage = (current, pageSize) => {
    setQuery({ ...query, pageNum: current, pageLength: pageSize });
  };

  const { data } = useGetListLectureQuery(query);

  return (
    <Section>
      <div className={cx("layout")}>
        {data?.query.map((item) => {
          return (
            <div className={cx("item")} key={item.Id}>
              <div className={cx("inner-item")}>
                <div className={cx("item-media")}>
                  <Image
                    src={
                      item.ImageCover
                        ? item.ImageCover
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuspvyvw4licecXFzBNqlmXu0jrbZGk41h1A&usqp=CAU"
                    }
                    alt="Khóa học"
                    width={200}
                    height={200}
                  ></Image>
                </div>
                <div className={cx("item-detail")}>
                  <ul className={cx("info")}>
                    <li className={cx("role")}>
                      <span className={cx("label")}>
                        <i className="fa-solid fa-user"></i>
                      </span>
                      &nbsp;
                      <span className={cx("value")}>{item.Teacher}</span>
                    </li>

                    <li className={cx("view")}>
                      <span className={cx("label")}>
                        <i className="fa fa-eye"></i>
                      </span>
                      &nbsp;
                      <span className={cx("value")}>
                        {item.TryTime ? item.TryTime : "0"}
                      </span>
                    </li>

                    <li className={cx("time")}>
                      <span className={cx("label")}>
                        <i className="fa-solid fa-clock"></i>
                      </span>
                      &nbsp;
                      <span className={cx("value")}>
                        {item.Duration
                          ? item.Duration + " " + item.Unit
                          : "Không giới hạn"}
                      </span>
                    </li>
                  </ul>
                  <h4 className={cx("title")}>
                    <i className="fa-solid fa-computer"></i> {item.LectName}
                  </h4>

                  <Rate defaultValue={item.Rating ? item.Rating : 0} disabled />
                  <div classNames={cx("price")}>
                    <span classNames={cx("label")}>
                      <i className="fa-solid fa-coins"></i> Giá :{" "}
                    </span>
                    <span classNames={cx("value")}>
                      {item.Price ? item.Price : "0"}
                    </span>
                  </div>
                </div>
                <div className={cx("footerCard")}>
                  <div>
                    <p>
                      <i className="fa-solid fa-shapes"></i> Môn học :{" "}
                      <span>{item.SubjectName}</span>
                    </p>
                    <p>
                      <i className="fa-solid fa-laptop"></i>Bài giảng tương tác
                      :{" "}
                      <span>{item.CourseName ? item.CourseName : "Không"}</span>
                    </p>
                  </div>
                  <div className={cx("down")}>
                    <i className="fa-solid fa-cloud-arrow-down"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        total={data?.count}
        handleQueryPage={handleQueryPage}
        current={query.pageNum}
      />
    </Section>
  );
};

export default CourseCard;
