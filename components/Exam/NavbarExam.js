import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Pagination from "../Pagination/Pagination";
import { DatePicker, Select } from "antd";

const cx = classNames.bind(style);


const options = [
  {
    value: "HH-12",
    label: "Hóa Học 12",
  },
  {
    value: "Ngày bắt đầu",
    label: "Ngày bắt đầu",
  },
  {
    value: "Tên giáo viên",
    label: "Tên giáo viên",
  },
];

const dateFormat = "DD-MM-YYYY";

const NavbarExam = ({ query, handleQuery, totalAssigment, totalShared }) => {

  const handleChangeSearch = (e) => {
    handleQuery({ ...query, content: e.target.value })
  }

  const handleChangeType = (type) => {
    type === 'assigment' ? handleQuery({ ...query, onlyAssignment: true, onlyShared: false }) : handleQuery({ ...query, onlyAssignment: false, onlyShared: true })
  }

  return (
    <div className={cx("options")}>
      <input
        type="text"
        className={cx("search")}
        placeholder="Search for exam..."
        onChange={(e) => handleChangeSearch(e)}
      />
      <i></i>
      <div className={cx("sort")}>
        <h2>Filter Exam</h2>
        <div className={cx("tabTitles")}>
          {query.onlyAssignment ?
            <span id={cx("bedwars")} className={cx("active")}>
              Được giao [{totalAssigment}]
            </span>
            :
            <span id={cx("bedwars")} onClick={() => handleChangeType('assigment')}>
              Được giao [{totalAssigment}]
            </span>
          }
          {query.onlyShared ?
            <span id={cx("ffa")} className={cx("active")}>
              Tự luyện [{totalShared}]
            </span>
            :
            <span id={cx("ffa")} onClick={() => handleChangeType('share')}>
              Tự luyện [{totalShared}]
            </span>
          }
        </div>
        <div className={cx("content-sort-container")}>
          <p>Môn học</p>
          <Select
            className={cx("select-container")}
            defaultValue="Tên lớp học"
            options={options}
          />
        </div>
        <div className={cx("content-sort-container")}>
          <p>Nội dung</p>
          <Select
            className={cx("select-container")}
            defaultValue="Tên lớp học"
            options={options}
          />
        </div>
        <div className={cx("content-sort-container")}>
          <p>Người tạo</p>
          <Select
            className={cx("select-container")}
            defaultValue="Tên lớp học"
            options={options}
          />
        </div>

        <div className={cx("content-sort-container-timeStart")}>
          <p>Thời gian</p>
          <div className={cx("content-timestart")}>
            <div>
              <p>Từ</p>
              <DatePicker
                format={dateFormat}
                className={cx("select-container")}
              // placeholder={trans.time.startDate}
              />
            </div>
            <div>
              <p>Đến</p>
              <DatePicker
                format={dateFormat}
                className={cx("select-container")}
              // placeholder={trans.time.endDate}
              />
            </div>
          </div>
        </div>
        <div className={cx("content-sort-container")}>
          <p>Đánh giá </p>
          <Select
            className={cx("select-container")}
            defaultValue="Tên lớp học"
            options={options}
          />
        </div>
        <div className={cx("content-sort-container")}>
          <p>Độ khó</p>
          <Select
            className={cx("select-container")}
            defaultValue="Tên lớp học"
            options={options}
          />
        </div>
      </div>
      <Pagination />
    </div >
  );
};

export default NavbarExam;
