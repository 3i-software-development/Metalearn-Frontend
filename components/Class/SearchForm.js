import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { BsSearch } from "react-icons/bs";
import { DatePicker, Select, Button } from "antd";
import { useDispatch } from "react-redux";
import { classFilter } from "../../lib/Redux/Slice/ClassSlice"
import moment from 'moment';
import { useState } from "react";


const cx = classNames.bind(styles);

const SearchForm = () => {

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [keyWords, setKeyWords] = useState('');
  const [sort, setSort] = useState('');

  const searchFilter = {
    startTime: startTime,
    endTime: endTime,
    keyWords: keyWords,
    sort: sort,
  };

  // console.log("check search filter", searchFilter)



  // console.log("check start time: " + startTime);
  // console.log("check end time: " + endTime);
  // console.log("check key words: " + keyWords);
  // console.log("check sort: " + sort);
  const [openSort, setOpenSort] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);

  const handleDropDown = (id) => {
    switch (id) {
      case "sort":
        setOpenSort((pre) => !pre);
        break;
      case "filter":
        setOpenFilter((pre) => !pre);
        break;
    }
  };
  const dispatch = useDispatch();
  const handleSearchClass = () => {
    dispatch(classFilter(searchFilter))
  }

  const handleChange = (value) => {
    setSort(value);
  }

  const options = [
    {
      value: "Tên lớp học",
      label: "Tên lớp học",
    },
    {
      value: "Tên giáo viên",
      label: "Tên giáo viên",
    },
  ];


  return (
    <div className={cx("list-course-container")}>
      <div className={cx("search-container")}>
        <input
          type="text"
          placeholder="Tìm kiếm lớp của tôi"
          className={cx("search-input")}
          value={keyWords}
          onChange={(e) => setKeyWords(e.target.value)}
        />
        <BsSearch />
      </div>

      <div className={cx("sort-container")}>
        <div
          className={cx("title-sort-container")}
          onClick={() => handleDropDown("sort")}
        >
          <h2>Sắp xếp</h2>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        {openSort && (
          <div className={cx("content-sort-container")}>
            <p>Sắp xếp theo</p>
            <Select
              className={cx("select-container")}
              defaultValue="Tên lớp học"
              options={options}
              onChange={handleChange}
            />
          </div>
        )}
      </div>

      <div className={cx("sort-container")}>
        <div
          className={cx("title-sort-container")}
          onClick={() => handleDropDown("filter")}
        >
          <h2>Lọc</h2>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        {openFilter && (
          <>
            <div className={cx("content-sort-container")}>
              <p>Thời gian bắt đầu</p>
              <span>Từ</span>
              <input
                type="date"
                className={cx("select-container")}
                style={{ padding: "4px 4px" }}
                placeholder="Ngày bắt đầu"
                value={startTime}
                onChange={(e) => setStartTime(moment(e?.target?.value).format('YYYY-MM-DD'))}
              />
              <span>Đến</span>
              <input
                type="date"
                className={cx("select-container")}
                style={{ padding: "4px 4px" }}
                placeholder="Ngày kết thúc"
                value={endTime}
                onChange={(e) => setEndTime(moment(e?.target?.value).format("YYYY-MM-DD"))}

              />
            </div>
            <div style={{ textAlign: 'center' }} className={cx("content-sort-container")}>
              <Button
                style={{ backgroundColor: '#000' }}
                onClick={handleSearchClass}
                type="primary">
                Tìm kiếm
              </Button>

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchForm;