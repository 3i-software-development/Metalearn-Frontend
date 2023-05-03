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
            <div className={cx("course-card")} key={item.Id}>
              <div className={cx("content")}>
                <div className={cx("images")}>
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
                <div>
                  <h4>
                    <i className="fa-solid fa-computer"></i> {item.LectName}
                  </h4>
                  <p className={cx("role")}>{item.Teacher}</p>
                  <Rate defaultValue={item.Rating ? item.Rating : 0} disabled />
                  <p>
                    Thời lượng :{" "}
                    <span>
                      {item.Duration
                        ? item.Duration + " " + item.Unit
                        : "Không giới hạn"}
                    </span>
                  </p>
                  <p>
                    <i className="fa-solid fa-coins"></i> Giá :{" "}
                    <span>{item.Price ? item.Price : "0"}</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-medal"></i> Số lần xem :{" "}
                    <span>{item.TryTime ? item.TryTime : "0"}</span>
                  </p>
                </div>
              </div>
              <div className={cx("footerCard")}>
                <div>
                  <p>
                    <i className="fa-solid fa-shapes"></i> Môn học :{" "}
                    <span>{item.SubjectName}</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-laptop"></i> Bài giảng tương tác :{" "}
                    <span>{item.CourseName ? item.CourseName : "Không"}</span>
                  </p>
                </div>
                <div className={cx("down")}>
                  <i className="fa-solid fa-cloud-arrow-down"></i>
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
