import { DatePicker, Modal, Select, Slider } from "antd";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import moment from 'moment';
import { useGetListCourseMobileQuery } from "@/lib/Midleware/CourseQuery";
import { crouseFilter } from "../../lib/Redux/Slice/CourseSlice";
import { useDispatch } from "react-redux";

const cx = classNames.bind(styles);

const ModalSearchFilter = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [keyWords, setKeyWords] = useState('');

  const { data: courseMobileQuery } = useGetListCourseMobileQuery({
    userName: "admin",
    isPublic: true,
  });
  let listCourse = courseMobileQuery?.Object;
  // console.log("check data",listCourse);
  const handleSearch = () => {
    let filterListCourse = listCourse.filter((item) => {
      const checkKeyWords = item.CourseName.toLowerCase().includes(keyWords)
      const checkDate = moment(item.CreatedTime).format('YYYY-MM-DD') >= moment(startTime).format('YYYY-MM-DD') &&
        moment(item.CreatedTime).format('YYYY-MM-DD') <= moment(endTime).format('YYYY-MM-DD');
      return checkKeyWords && checkDate

    });
    // moment(moment(item.CreatedTime).format('YYYY-MM-DD')).isBetween(startTime, endTime, null, '[]')) ;
    dispatch(crouseFilter(filterListCourse))
    handleCancel();
    setKeyWords('');
    setStartTime('');
    setEndTime('');


    // console.log("check list",filterListCourse);
  }




  const router = useRouter();

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const marks = {
    0: "0",
    20: "1",
    40: "2",
    60: "3",
    80: "4",
    100: "5",
  };

  const options = [
    {
      value: "Tên lớp học",
      label: "Tên lớp học",
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

  const optionsLevel = [
    {
      value: "Tất cả",
      label: "Tất cả",
    },
    {
      value: "Dễ",
      label: "Dễ",
    },
    {
      value: "Trung bình",
      label: "Trung bình",
    },
    {
      value: "Khó",
      label: "Khó",
    },
  ];

  const dateFormat = "DD-MM-YYYY";

  return (
    <>
      <span className="tool-item tool-search">
        <i className="fa-solid fa-magnifying-glass" onClick={showModal}></i>
      </span>
      <Modal
        open={open}
        title="Tìm kiếm khoá học"
        onCancel={handleCancel}
        centered
        onOk={handleSearch}
      >
        <div className={cx("modal-body")}>
          <div className={cx("search-container")}>
            <input
              type="text"
              placeholder="Search"
              className={cx("search-input")}
              onChange={(e) => setKeyWords(e.target.value)}
              value={keyWords}
            />
            {/* {/ <BsSearch / > /} */}
          </div>
          <div className={cx("modal-filter")}>
            {/* <div className={cx("content-filter")}>
              <div className={cx("content-sort-container")}>
                <p>Subject :</p>
                <Select
                  className={cx("select-container")}
                  defaultValue="Tên lớp học"
                  options={options}
                />
              </div>
              <div className={cx("content-sort-container")}>
                <p>Status :</p>
                <Select
                  className={cx("select-container")}
                  defaultValue="Tên lớp học"
                  options={options}
                />
              </div>
              <div className={cx("content-sort-container")}>
                <p>Level :</p>
                <Select
                  className={cx("select-container")}
                  defaultValue="Tên lớp học"
                  options={optionsLevel}
                />
              </div>
            </div> */}

            <div className={cx("content_filter")}>
              <div className={cx("timesDate")}>
                <div>
                  <span>Từ ngày</span>
                  <input
                    type="date"
                    onChange={(e) => setStartTime(moment(e?.target?.value).format('YYYY-MM-DD'))}
                    value={startTime}
                  />
                </div>
                <div>
                  <span>Đến</span>
                  <input
                    type="date"
                    onChange={(e) => setEndTime(moment(e?.target?.value).format("YYYY-MM-DD"))}
                    value={endTime}
                  />
                </div>
              </div>
            </div>
            {/* 
            <div className={cx("content_filter")}>
              <p>Đánh giá :</p>
              <Slider range marks={marks} step={20} defaultValue={[0, 100]} />
            </div> */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalSearchFilter;