import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./style.module.scss";
import Section from "@/components/Section/Section";
import { Rate } from "antd";
import moment from "moment";
import { useGetListLectureQuery } from "@/lib/Midleware/LectureQuery";
import Image from "next/image";
import { Modal, Button } from 'antd';
import { useRouter } from 'next/router';
import Pagination from "@/components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { Users } from "../../../data";

const cx = className.bind(styles);

const CourseCard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

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

  const handleActionCourse = (courseId, action) => {
    if(action === "edit") {
      router.push(`/courses/edit?Id=${courseId}`);
    }

    if(action === "share") {
      router.push(`/courses/share?Id=${courseId}`);
    }
  }

  const handleViewCourse = (courseId) => {
    router.push(`/courses/detail?Id=${courseId}`);
  }

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Section>
      <div className={cx("layout")}>
        {data?.Object.map((item) => {
          const durationUnit = item.Unit ? item.Unit : "";
          return (
            <div className={cx("item")} key={item.Id}>
              <div className={cx("inner-item")}>
                <div className={cx("item-media")}>
                  <Image 
                    onClick={() => handleViewCourse(item.Id)}
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
                  <Rate defaultValue={item.Rating ? item.Rating : 0} disabled />

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
                          ? item.Duration + " " + durationUnit
                          : "Không giới hạn"}
                      </span>
                    </li>
                  </ul>

                  <h4 className={cx("title")} onClick={() => handleViewCourse(item.Id)}>
                    <i className="fa-solid fa-computer"></i> {item.CourseName }
                  </h4>
                  
                  {/* <div className={cx("lessions")}>
                    <span className={cx("label")}>
                      {item.CourseName ? "Bài giảng:" : ""}{" "}
                    </span>
                    <span className={cx("value")}>
                      {item.CourseName ? item.CourseName : ""}
                    </span>
                    :{" "}
                    <span>{item.CourseName ? item.CourseName : "Không"}</span>
                  </div> */}

                  <div className={cx("price")}>
                    <span className={cx("label")}>
                      Giá :{" "}
                    </span>
                    <span className={cx("value")}>
                      {item.Price ? item.Price : "0"}
                    </span>
                  </div>
                  <div className={cx("subject")}>
                    <span className={cx("label")}>{item.SubjectName ? "Môn học :" : ""}{" "}</span>
                    <span className={cx("value")}>{item.SubjectName ? item.SubjectName : ""}</span>
                  </div>
                  <div className={cx("actions")}>
                    <span className="edit" onClick={() => handleActionCourse(item.Id, "edit")}><i className="fa-solid fa-pen-to-square"></i></span>
                    <span className="down"><i className="fa-solid fa-cloud-arrow-down"></i></span>
                    <span className="share" onClick={showModal}><i className="fa-solid fa-share-nodes"></i></span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Modal
        open={open}
        title="Chia sẻ khóa học"
        centered
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy bỏ
          </Button>,
          <Button key="submit" type="primary">
            Chia sẻ
          </Button>,
        ]}
      >
        <div className={cx("modal-body")}>
          <div className={cx("share-for")}>
            <select className={cx("form-select")} value={"1"} >
              { Users && Users.map((item, index) => {
                  return (
                      <option key={index} value={item.id}>{item.name}</option>
                  )
              })}
            </select>
          </div>
        </div>
      </Modal>
      <Pagination
        total={data?.count}
        handleQueryPage={handleQueryPage}
        current={query.pageNum}
      />
    </Section>
  );
};

export default CourseCard;
