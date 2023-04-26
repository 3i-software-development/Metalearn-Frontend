import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import ListCourses from "../ListCourse/ListCourses";
import { GetListExam, GetListClass, GetListDoc } from "@/pages/api/CallAPI";

const cx = classNames.bind(styles);

const ListCourse = () => {
  const ListExam = GetListExam();
  const ListClass = GetListClass();
  const ListDoc = GetListDoc();

  const [btnact, setBtnact] = useState(0);


  const listSubject = ["Đề thi", "Lớp học", "Tài liệu"]
  return (
    <div className={cx("list-course-container")}>
      <div className={cx("list-btn")}>
        {listSubject.map((item, index) => (
          <button
            className={cx(btnact == index && "active")}
            key={index}
            onClick={() => setBtnact(index)}
          >
            <i className="fa-solid fa-bookmark"></i>
            {item}
          </button>
        ))}
      </div>
      <div className={cx("list-main")}>
        {btnact === 0 && <h3>Danh sách đề thi</h3>}
        {btnact === 1 && <h3>Danh sách lớp học</h3>}
        {btnact === 2 && <h3>Danh sách tài liệu</h3>}
        {btnact === 0 && ListExam.data && (
          <ListCourses data={ListExam.data.query} exam />
        )}
        {btnact === 1 && ListClass.data && (
          <ListCourses data={ListClass.data.query} clas />
        )}
        {btnact === 2 && ListDoc.data && (
          <ListCourses data={ListDoc.data.Object.data1} doc />
        )}
      </div>
    </div>
  );
};

export default ListCourse;
