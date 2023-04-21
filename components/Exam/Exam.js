import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Section from "../Section/Section";
import useDebounce from "@/hooks/useDebounce";
import NavbarExam from "./NavbarExam";
import { useGetListExamQuery } from "@/lib/Midleware/ExamQuery";

const cx = classNames.bind(style);

const Exam = () => {

  const [query, setQuery] = useState({
    "testName": "",
    "userName": "admin",
    "subjectCode": "",
    "content": "",
    "latex": "",
    "level": "",
    "ratingMin": -1,
    "ratingMax": -1,
    "fromDatePara": "",
    "toDatePara": "",
    "createdBy": "",
    "onlyAssignment": false,
    "onlyShared": true,
    "pageLength": 30,
    "pageNum": 1
  })

  const { data, isFetching, isLoading } = useGetListExamQuery(query)

  const handleQuery = (newQuery) => {
    setQuery({ ...newQuery })
  }

  return (
    <Section>
      <div id={cx("leaderboards")}>
        <NavbarExam query={query} handleQuery={handleQuery} totalAssigment={data?.countAssignment} totalShared={data?.countSharing} />
        <div className={cx("toplist")}>
          {data?.query?.map((item) => {
            return (
              <li data-rank="1" className={cx("lilist")} key={item.id}>
                <div className={cx("thumb")}>
                  <span className={cx("name")}>
                    <h4>{item.PracticeTestTitle}</h4>
                    <p>{item.Duration} {item.Unit}</p>
                    <p>{item.Rating}</p>
                    <p>Tác giả: {item.CreatedBy}</p>
                    <p>Giá: {item.Price}</p>
                    <p>Môn học: {item.ExamSubject}</p>
                    <p>{item.QuizCount}</p>
                    <p></p>
                  </span>
                </div>
                <div className={cx("more")}>
                  <span className={cx("stat")}>
                    <b>
                      {item.point} / 10
                      <br />
                      Point
                    </b>
                  </span>
                  <span className={cx("stat")}>
                    <p>
                      <i className="fa-solid fa-book fa-2xl"></i>
                    </p>
                  </span>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Exam;
