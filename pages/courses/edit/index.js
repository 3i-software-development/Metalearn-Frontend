import React, { useState, useEffect  } from 'react';
import Section from "@/components/Section/Section";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import moment from "moment";
import { useQuery } from "react-query";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import vi from 'date-fns/locale/vi';
import { useRouter } from 'next/router';
import className from "classnames/bind";
import styles from "./style.module.scss";
import { selectStatus, initialCourseItem } from "../../../data";
import { useStartCourseUpdateQuery, useEndUpdateCourseQuery } from "@/lib/Midleware/CourseQuery";
import SliderBar from "@/components/Menu";

const cx = className.bind(styles);
registerLocale('vi', vi)

const CourseEdit = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  
  const { data: courseQuery } = useStartCourseUpdateQuery({Id: router.query.Id});
  const courseItem = courseQuery?.Object;
  const [updateCourse, setUpdateCourse] = useState(initialCourseItem);  
  console.log(">>> check data: ", courseItem);

  console.log(">>> check update: ", updateCourse);

  useEffect(() => {
    if (courseItem) {
      setUpdateCourse(courseItem)
    }
  }, [courseItem])
  
  const handleChangeInput=(e, name)=>{
    const {value} = e.target;
    setUpdateCourse({
      [name]:value
    })
  }

  const handleSubmitUpdateCourse = () => {
    console.log("submit");
  }

  const handleCancelEditCourse = () => {
    router.push('/personalized');
  }
  
  return (
    <Section>
      <div className={cx("course-view")}>
        <div className={cx("page-main")}>
          <div className="sidebar-left">
              <SliderBar />
          </div>
          <div className="content">
            <h1 className={cx("page-title text-center")}>Quản lý khóa học</h1>
            <form>
              <div className={cx("form-group")}>
                <h2 className={cx("form-group-title")}>Thông tin khóa học:</h2>
                <div className={cx("course-code")}>
                  <label className={cx("form-label")}>Mã khóa học</label>
                  <input type="text" className={cx("form-control")} value={updateCourse?.CourseCode} />
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
                  <input type="text" className={cx("form-control")} value={updateCourse?.Tags} onChange={(e)=>handleChangeInput(e, "Tags")}/>
                </div>

                <div className={cx("course-price")}>
                  <label className={cx("form-label")}>Giá</label>
                  <input type="text" className={cx("form-control")} name="Price" value={updateCourse?.Price} onChange={handleChangeInput} />
                </div>

                <div className={cx("course-status")}>
                  <label className={cx("form-label")}>Trạng thái</label>
                  <select className={cx("form-select")} >
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
                    <DatePicker className={cx("form-control")} selected={startDate} onChange={(date) => setStartDate(date)} locale="vi" />
                  </div>

                  <div className={cx("course-end-time")}>
                    <label className={cx("form-label")}>Ngày kết thúc</label>
                    <DatePicker className={cx("form-control")} selected={startDate} onChange={(date) => setStartDate(date)} />
                  </div>
                </div>
              </div>

              <div className={cx("group-media")}>
                <div className={cx("form-group")}>
                  <h2 className={cx("form-group-title")}>Hình ảnh và video :</h2>
                  <div className={cx("course-image")}>
                    <label className={cx("form-label")}>Ảnh đại diện</label>
                    <input type="file" id="avatar" className={cx("form-control")} hidden/>
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
                  <input type="text" className={cx("form-control")}/>
                </div>
              </div>

              <div className={cx("course-descriptiion")}>
                <h2 className={cx("form-group-title")}>Mô tả khóa học</h2>
                <textarea className={cx("form-control")} />
              </div>

              <div className={cx("course-list-lesson")}>
                <h2 className={cx("form-group-title")}>Danh sách bài giảng <span className={cx("action")}>Thêm mới</span></h2>
                <ul className={cx("course-items")}>
                  <li className={cx("course-item")}>{courseItem?.ListSubject ? courseItem?.ListSubject : "Không có bài giảng"}</li>
                </ul>
              </div>
              <div className={cx("actions")}>
                <button type="submit" className={cx("btn-primary")} onClick={() => handleSubmitUpdateCourse()}>Save</button>
                <button className={cx("btn-cancel")} onClick={() => handleCancelEditCourse()}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default CourseEdit