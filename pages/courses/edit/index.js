import React, { useState, useEffect  } from 'react';
import Section from "@/components/Section/Section";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import moment from "moment";
import { useQuery } from "react-query";
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import className from "classnames/bind";
import styles from "./style.module.scss";
import { selectStatus, initialCourseItem } from "../../../data";
import { useStartCourseUpdateQuery, useEndUpdateCourseQuery } from "@/lib/Midleware/CourseQuery";
import SliderBar from "@/components/Menu";

const cx = className.bind(styles);

const CourseEdit = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { RangePicker } = DatePicker;
  
  const { data: courseQuery } = useStartCourseUpdateQuery({Id: router.query.Id | router.query.id});
  const courseItem = courseQuery?.Object;
  const [updateCourse, setUpdateCourse] = useState(initialCourseItem);

  useEffect(() => {
    if (courseItem) {
      setUpdateCourse(courseItem)
    }
  }, [courseItem])
  
  const handleChangeInput=(e, name)=>{
    setUpdateCourse({
      [name]: e.target.value
    })
  }

  const onChangeDateStart = (date, dateStringStart) => {
    console.log("start: ", date, dateStringStart);
    setUpdateCourse({
      StartTime: dateStringStart
    })
  };

  const onChangeDateEnd = (date, dateStringEnd) => {
    console.log("end: ", date, dateStringStart);
    setUpdateCourse({
      EndTime: dateStringEnd
    })
  };

  const handleActionRouter = (action) => {
    if(action === "cancel") {
      router.push(`/personalized`);
    }

    if(action === "addLesson") {
      router.push(`/courses/lessons`);
    }
  }

  function handleSubmitUpdateCourse() {
    console.log("update data: ", updateCourse);
  }

  console.log('updateCourse: ', updateCourse)
  
  return (
    <Section>
      <div className={cx("course-view")}>
        <div className={cx("page-main")}>
          <div className="sidebar-left">
              <SliderBar />
          </div>
          <div className="content">
            <h1 className={cx("page-title text-center")}>Sửa thông tin khóa học</h1>
            <form>
              <div className={cx("form-group")}>
                <h2 className={cx("form-group-title")}>Thông tin khóa học:</h2>
                <div className={cx("course-code")}>
                  <label className={cx("form-label")}>Mã khóa học</label>
                  <input type="text" className={cx("form-control")} value={updateCourse?.CourseCode} disable="true" />
                </div>

                <div className={cx("course-name")}>
                  <label className={cx("form-label")}>Tên khóa học</label>
                  <input type="text"  className={cx("form-control")} value={updateCourse?.CourseName} onChange={(e)=>handleChangeInput(e, "CourseName")} />
                </div>

                <div className={cx("course-image")}>
                  <label className={cx("form-label")}>Môn học</label>
                  <input type="text" className={cx("form-control")} value={updateCourse?.ListSubject} onChange={(e)=>handleChangeInput(e, "ListSubject")} />
                </div>

                <div className={cx("course-tag")}>
                  <label className={cx("form-label")}>Thẻ</label>
                  <input type="text" className={cx("form-control")} value={updateCourse?.Tags && updateCourse?.Tags !== "null" ? updateCourse?.Tags : ""} onChange={(e)=>handleChangeInput(e, "Tags")}/>
                </div>

                <div className={cx("course-price")}>
                  <label className={cx("form-label")}>Giá</label>
                  <input type="text" className={cx("form-control")} name="Price" value={updateCourse?.Price} onChange={(e)=>handleChangeInput(e, "Price")} />
                </div>

                <div className={cx("course-status")}>
                  <label className={cx("form-label")}>Trạng thái</label>
                  <select className={cx("form-select")} value={updateCourse?.Status}>
                    { selectStatus && selectStatus.map((item, index) => {
                      return (
                        <option key={index} value={item.label}>{item.value}</option>
                      )
                    })}
                  </select>
                </div>
              </div>

              <div className={cx("group-time")}>
                <div className={cx("form-group")}>
                  <h2 className={cx("form-group-title")}>Thời gian:</h2>
                  <div className={cx("course-start-time")}>
                    <label className={cx("form-label")}>Ngày bắt đầu</label>
                    <DatePicker value={dayjs(`${updateCourse?.StartTime}`, 'DD/MM/YYYY')} format={'DD/MM/YYYY'} onchange={onChangeDateStart}
                      style={{ width: '100%', minHeight: "44px", borderRadius: "var(--button-radius)" }}
                    />
                  </div>

                  <div className={cx("course-end-time")}>
                    <label className={cx("form-label")}>Ngày kết thúc</label>
                    <DatePicker value={dayjs(`${updateCourse?.EndTime}`, 'DD/MM/YYYY')} format={'DD/MM/YYYY'} onchange={onChangeDateEnd}
                      style={{ width: '100%', minHeight: "44px", borderRadius: "var(--button-radius)" }}
                    />
                  </div>
                </div>
              </div>

              <div className={cx("group-media")}>
                <div className={cx("form-group")}>
                  <h2 className={cx("form-group-title")}>Hình ảnh và video :</h2>
                  <div className={cx("course-image")}>
                    <label className={cx("form-label")}>Ảnh đại diện</label>
                    <input type="file" id="avatar" className={cx("form-control")} onClick={(e)=>handleChangeInput(e, "ImgCover")} hidden/>
                    <label className={cx("avatar-label")} htmlFor="avatar" style={{backgroundImage: `url(${courseItem?.ImgCover})`}}></label>
                  </div>

                  <div className={cx("course-video")}>
                    <label className={cx("form-label")}>Link video giới thiệu bài giảng</label>
                    <input type="text" className={cx("form-control")} />
                    <label className={cx("choose-video-label")} htmlFor="choose-video">Chọn video</label>
                    <input type="file" id="choose-video" className={cx("form-control")} hidden />
                    <div className={cx("video-selected")}>{courseItem?.VideoPresent ? courseItem?.VideoPresent : "Không có video giới thiệu"}</div>
                  </div>
                </div>
              </div>

              <div className={cx("form-group")}>
                <h2 className={cx("form-group-title")}>File:</h2>
                <div className={cx("course-categoy")}>
                  <label className={cx("form-label")}>Danh mục lưu trữ</label>
                  <input type="text" className={cx("form-control")}/>
                </div>

                <div className={cx("course-folder")}>
                  <label className={cx("form-label")}>Thư mục máy chủ</label>
                  <input type="text" className={cx("form-control")}/>
                </div>

                <div className={cx("course-file")}>
                  <label className={cx("form-label")}>Chọn file</label>
                  <input type="file" className={cx("form-control")}/>
                </div>
              </div>

              <div className={cx("course-descriptiion")}>
                <h2 className={cx("form-group-title")}>Mô tả khóa học</h2>
                <textarea className={cx("form-control")} />
              </div>

              <div className={cx("course-list-lesson")}>
                <h2 className={cx("form-group-title")}>
                  Danh sách bài giảng 
                  <span className={cx("action")} onClick={() => handleActionRouter("addLesson")}>Thêm mới</span>
                </h2>
                <ul className={cx("course-items")}>
                  <li className={cx("course-item")}>{courseItem?.ListSubject ? courseItem?.ListSubject : "Không có bài giảng"}</li>
                </ul>
              </div>
              <div className={cx("actions")}>
                <span className={cx("btn-primary")} onClick={handleSubmitUpdateCourse}>Lưu chỉnh sửa</span>
                <span className={cx("btn-cancel")} onClick={() => handleActionRouter("cancel")}>Hủy bỏ</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default CourseEdit