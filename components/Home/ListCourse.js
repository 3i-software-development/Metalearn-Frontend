import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import ListCourses from "../ListCourse/ListCourses";
import { GetListExam, GetListClass, GetListDoc } from "@/pages/api/CallAPI";
import AddForm from "../Quiz/AddForm";
import Link from "next/link";

const cx = classNames.bind(styles);

const ListCourse = () => {
  const ListExam = GetListExam();
  const ListClass = GetListClass();
  const ListDoc = GetListDoc();

  const [btnact, setBtnact] = useState(0);

  const [selectedCourseTitle, setSelectedCourseTitle] = useState("Select a course");

  const listCourse = [
    {
      title: "Lớp học ngày 27/6 [lop_27_06]",
      day: "14:21 27/06/2023",
      countStudent: 8,
      teacher: "Phạm Trang (3i)-GV",
      status: "Open"
    },
    {
      title: "Lớp học của Thọ [LH_21/6]",
      day: "14:21 27/06/2023",
      countStudent: 3,
      teacher: "Vũ Xuân Thọ",
      status: "Open"
    },
    {
      title: "Lớp tin [1111]",
      day: "14:21 27/06/2023",
      countStudent: 3,
      teacher: "Phạm Trang (3i)-GV",
      status: "Open"
    },
    {
      title: "Lớp học tiếng anh cô Trang ngày 20/6/2023 [Love001_01]",
      day: "14:21 27/06/2023",
      countStudent: 4,
      teacher: "Phạm Trang (3i)-GV",
      status: "Open"
    },
    {
      title: "Lớp học môn Toán [111ba]",
      day: "14:21 27/06/2023",
      countStudent: 8,
      teacher: "Cao Thị Trâm",
      status: "Open"
    },
  ]

  //const listSubject = ["Đề thi", "Lớp học", "Tài liệu"]
  const listSubject2 = ["Ngân Hàng Quiz", "Ngân Hàng Đề Thi", "Tài Liệu", "Lớp Học", "Buổi Học Trực Tuyến", "Thi Online", "Thông Tin Giáo Viên"]

  const listCourseDescription = [
    {

    },
    {

    }
  ]

  return (
    <div>
    {/* 
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
            <ListCourses data={ListDoc.data.query} doc />
          )}
        </div>   
      </div> */}



      <div className={cx("list-course-container")}>
       
        <div className={cx("list-btn")}>
          {listSubject2.map((item, index) => (
            <button     
              className={cx(btnact == index && "active")}
              key={index}
              onClick={() => setBtnact(index)} 
            >
            <div className={cx("List_Course-Icon")}>
              <i class="fa-solid fa-building-columns"></i>
            </div>
            <p className={cx("ListCourse-In-Course")}>[123]</p>   
              <h5 className={cx("ListCourse-Title")}>{item}</h5>   
          </button>

          ))}
        </div>
        <div className={cx("list-main")}>

          
          {btnact === 0 && <h3>Danh sách Ngân Hàng Quiz</h3>}
          {btnact === 1 && <h3>Danh sách Ngân Hàng Đề Thi</h3>}
          {btnact === 2 && <h3>Danh sách Tài Liệu</h3>}
          {btnact === 3 && <h3>Danh sách Lớp Học</h3>}
          {/* {btnact === 4 && <h3>Danh sách Buổi Học Trực Tuyến</h3>} */}
          {btnact === 4 &&   <Link href="/OnlineClasses" className={cx("mb-login")}>
          <h3>Lick vào đây để Xem Danh sách Buổi Học Trực Tuyến</h3>
        </Link>}
   
          {/* {btnact === 5 && <h3>Danh sách Thi Online</h3>} */}

          {btnact === 5 && <Link href="/ViewExamSchedule" className={cx("mb-login")}>
          <h3>Lích vào đây để xem lịch thi</h3>
        </Link>}

          {/* {btnact === 6 && <h3>Danh sách Thông Tin Giáo Viên</h3>} */}

          {btnact === 6 && <Link href="/Teacher" className={cx("mb-login")}>
          <h3>Danh sách Thông Tin Giáo Viên</h3>
        </Link>}
           
          {btnact === 0 && ListExam.data && (
            <ListCourses data={ListExam.data.query} exam />
          )}
          {btnact === 1 && ListClass.data && (
            <ListCourses data={ListClass.data.query} clas />
          )}
          {btnact === 2 && ListDoc.data && (
            <ListCourses data={ListDoc.data.query} doc />
          )}
          
          {btnact === 3 && (
            <h2></h2>

    
          )}
          
          {btnact === 5 && ListDoc.data && (
            <ListCourses data={ListDoc.data.query} doc />
          )}
          {btnact === 6 && ListDoc.data && (
            <ListCourses data={ListDoc.data.query} doc />
          )}
        </div>   
      </div>

    

    </div>
  );
};

export default ListCourse;
