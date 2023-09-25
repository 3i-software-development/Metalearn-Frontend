import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import SimplePagination from "../Pagination/SimplePagination";
import { DatePicker, Input, Select, Slider } from "antd";
import { useGetListSubjectQuery } from "@/lib/Midleware/SubjectQuery";

const cx = classNames.bind(style);

const dateFormat = "DD/MM/YYYY";

const NavbarExam = ({ query, handleQuery, totalAssigment, totalShared }) => {

  const marks = {
    0: '0',
    20: '1',
    40: '2',
    60: '3',
    80: '4',
    100: '5',
  };

  const options = [
    {
      value: "admin",
      label: "admin",
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

  const { data, isFetching, isLoading } = useGetListSubjectQuery()

  const optionsSubject = [{
    value: "",
    label: "Tất cả"
  }]

  data?.map((e) => {
    optionsSubject.push({
      value: e.Code,
      label: e.Name
    })
  })

  // const handleChangeSearch = (e) => {
  //   handleQuery({ ...query, content: e.target.value })
  // }

  // const handleChangeSubject = (e) => {
  //   handleQuery({ ...query, subjectCode: e })
  // }

  const handleChangeType = (type) => {
    type === 'assigment' ? handleQuery({ ...query, onlyAssignment: true, onlyShared: false }) : handleQuery({ ...query, onlyAssignment: false, onlyShared: true })
  }

  const handleChangeStartDate = (e) => {
    const date = e.format(dateFormat);
    handleQuery({ ...query, fromDatePara: date })
  }

  const handleChangeEndDate = (e) => {
    const date = e.format(dateFormat);
    // handleQuery({ ...query, toDatePara: date })
  }

  return (
    <div className={cx("options")}>
      <input
        type="text"
        className={cx("search")}
        placeholder="Search for exam..."
        // onChange={(e) => handleChangeSearch(e)}
      />
      <i></i>
      <div className={cx("sort")}>
        <h2>Filter Exam</h2>
        <div className={cx("tabTitles")}>

          {/* <span className={cx("bedwars", "active")}>
            Được giao
            <p>
              [ {totalAssigment} ]
            </p>
          </span>
          :
          <span className={cx("bedwars")} onClick={() => handleChangeType('assigment')}>
            Được giao
            <p>
              [ {totalAssigment} ]
            </p>
          </span>


          <span className={cx("bedwars", "active")}>
            Tự luyện
            <p>[ {totalShared} ]</p>
          </span>
          :
          <span id={cx("bedwars")} onClick={() => handleChangeType('share')}>
            Tự luyện
            <p>[ {totalShared} ]</p>
          </span> */}

        </div>
        <div className={cx("content-sort-container")}>
          <p>Môn học</p>
          <Select
            className={cx("select-container")}
            options={optionsSubject}
            // onChange={(e) => handleChangeSubject(e)}
          />
        </div>
        <div className={cx("content-sort-container")}>
          <p>Nội dung</p>
          <Input
            className={cx("select-container")}
            placeholder="Nội dung"
          />
        </div>
        <div className={cx("content-sort-container")}>
          <p>Người tạo</p>
          <Select
            className={cx("select-container")}
            defaultValue="admin"
            options={options}
          />
        </div>

        <div className={cx("content-sort-container")}>
          <p>Thời gian</p>
          <div className={cx("content-timestart")}>
            <div>
              <p>Từ</p>
              <DatePicker
                format={dateFormat}
                className={cx("select-container")}
                // onChange={(e) => handleChangeStartDate(e)}
              // placeholder="Ngày bắt đầu"
              />
            </div>
            <div>
              <p>Đến</p>
              <DatePicker
                format={dateFormat}
                className={cx("select-container")}
                // onChange={(e) => handleChangeEndDate(e)}
              // placeholder="Ngày kết thúc"
              />
            </div>
          </div>
        </div>

        <div className={cx("content-sort-container")}>
          <p>Đánh giá </p>
          <Slider range marks={marks} step={20} defaultValue={[0, 100]} />
        </div>

        <div className={cx("content-sort-container")}>
          <p>Độ khó</p>
          <Select
            className={cx("select-container")}
            defaultValue="Tất cả"
            options={optionsLevel}
          />
        </div>
      </div>

    </div >
  );
};

export default NavbarExam;
