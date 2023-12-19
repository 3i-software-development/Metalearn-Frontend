import React from "react";
import SliderBar from "@/components/Menu";
import Section from "@/components/Section/Section";
import {Form, Input, Button} from 'antd'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import className from "classnames/bind";
import styles from './style.module.scss'
const cx = className.bind(styles);
import { selectStatus, initialCourseItem } from "../../../data";

//Example data
const data = [
  {id: 0, name: 'MKH', label: 'Mã khóa học'},
  {id: 1, name: 'TKH', label: 'Tên khóa học'},
  {id: 2, name: 'Gia', label: 'Giá'},
  {id: 3, name: 'TT', label: 'Trạng thái'},
]

const FormItem = ({children, name, label}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]} >
        {children}
    </Form.Item>
  )
}

const Add = () => {
  return (
    <Section>
      <div className='page-main'>
        <div className="sidebar-left">
          <SliderBar />
        </div>
        <div>
          <h1>Tạo khóa học</h1>
          <form>
              <div className={cx("form-group")}>
                <h2 className={cx("form-group-title")}>Thông tin khóa học:</h2>
                <div className={cx("course-code")}>
                  <label className={cx("form-label")}>Mã khóa học</label>
                  <input type="text" className={cx("form-control")} />
                </div>

                <div className={cx("course-name")}>
                  <label className={cx("form-label")}>Tên khóa học</label>
                  <input type="text"  className={cx("form-control")} />
                </div>

                <div className={cx("course-image")}>
                  <label className={cx("form-label")}>Môn học</label>
                  <input type="text" className={cx("form-control")} />
                </div>

                <div className={cx("course-tag")}>
                  <label className={cx("form-label")}>Thẻ</label>
                  <input type="text" className={cx("form-control")} />
                </div>

                <div className={cx("course-price")}>
                  <label className={cx("form-label")}>Giá</label>
                  <input type="text" className={cx("form-control")} />
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
                    <DatePicker className={cx("form-control")} locale="vi" />
                  </div>

                  <div className={cx("course-end-time")}>
                    <label className={cx("form-label")}>Ngày kết thúc</label>
                    <DatePicker className={cx("form-control")} />
                  </div>
                </div>
              </div>

              <div className={cx("group-media")}>
                <div className={cx("form-group")}>
                  <h2 className={cx("form-group-title")}>Hình ảnh và video :</h2>
                  <div className={cx("course-image")}>
                    <label className={cx("form-label")}>Ảnh đại diện</label>
                    <input type="file" id="avatar" className={cx("form-control")} hidden/>
                    <label className={cx("avatar-label")} htmlFor="avatar"></label>
                  </div>

                  <div className={cx("course-video")}>
                    <label className={cx("form-label")}>Link video giới thiệu bài giảng</label>
                    <input type="text" className={cx("form-control")} />
                    <label className={cx("choose-video-label")} htmlFor="choose-video">Chọn video</label>
                    <input type="file" id="choose-video" className={cx("form-control")} hidden />
                    <div className={cx("video-selected")}>{}</div>
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
                  <li className={cx("course-item")}></li>
                </ul>
              </div>
              <div className={cx("actions")}>
                <button type="submit" className={cx("btn-primary")} onClick={() => handleSubmitUpdateCourse()}>Tạo</button>
                <button className={cx("btn-cancel")} onClick={() => handleCancelEditCourse()}>Huỷ</button>
              </div>
            </form>
        </div>
      </div>
    </Section>
  )
}

export default Add