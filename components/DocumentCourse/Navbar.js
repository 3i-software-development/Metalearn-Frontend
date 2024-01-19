import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import SimplePagination from "../Pagination/SimplePagination";
import { DatePicker, Input, Select, Slider } from "antd";
import { useGetListUserSubjectQuery } from "@/lib/Midleware/SubjectQuery";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCourseDocument } from "@/lib/Redux/Slice/CourseDocument";
import moment from "moment";

const cx = classNames.bind(style);

const dateFormat = "DD/MM/YYYY";

const NavbarExam = ({ query, handleQuery, totalAssigment, totalShared }) => {
  const options = [
    {
      value: "admin",
      label: "admin",
    },
  ];

  const { data, isFetching, isLoading } = useGetListUserSubjectQuery()

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

  const [dataSearch, setDataSearch] = useState({
    keyword: "",
    timeStart: "",
    timeEnd: "",
  });

  const handleChangeSearch = (e) => {
    // handleQuery({ ...query, content: e.target.value })
    setDataSearch((prevData) => ({ ...prevData, keyword: e.target.value }));
  }

  const handleChangeStartDate = (e) => {
    setDataSearch((prevData) => ({ ...prevData, timeStart: e }));
    // console.log(e)
  }

  const handleChangeEndDate = (e) => {
    setDataSearch((prevData) => ({ ...prevData, timeEnd: e }));
    // console.log(e)
  }

  // console.log(dataSearch)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCourseDocument(dataSearch))
  }, [dataSearch, dispatch]);

  return (
    <div className={cx("options")}>
      <input
        type="text"
        className={cx("search")}
        placeholder="Tìm kiếm học liệu..."
        onChange={(e) => handleChangeSearch(e)}
      />
      <i></i>
      <div className={cx("sort")}>
        <h2>Lọc học liệu</h2>

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
              {/* <DatePicker
                format={dateFormat}
                className={cx("select-container")}
                onChange={(e) => handleChangeStartDate(moment(e?.target?.value)?.format('YYYY-MM-DD'))}
              placeholder="Ngày bắt đầu"
              /> */}
              <input style={{width: '100%', padding: '5px'}} type="date" onChange={(e) => handleChangeStartDate(moment(e?.target?.value)?.format('YYYY-MM-DD'))} />
            {/* <DatePicker
                format={dateFormat}
                className={cx("select-container")}
                onChange={(e) => handleChangeEndDate(moment(e?.target?.value)?.format('YYYY-MM-DD'))}
              placeholder="Ngày kết thúc"
              /> */}
            <input style={{width: '100%', padding: '5px'}} type="date" onChange={(e) => handleChangeEndDate(moment(e?.target?.value)?.format('YYYY-MM-DD'))} />

          </div>
        </div>
      </div>
    </div>
    // </div >
  );
};

export default NavbarExam;
