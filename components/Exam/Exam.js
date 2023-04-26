import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Section from "../Section/Section";
import useDebounce from "@/hooks/useDebounce";
import NavbarExam from "./NavbarExam";
import { useGetListExamQuery } from "@/lib/Midleware/ExamQuery";
import ExamItem from "./ExamItem";

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
    "onlyAssignment": true,
    "onlyShared": false,
    "pageLength": 10,
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
        <ul className={cx("toplist")}>
          {data?.query?.map((item) => {
            return (
              <ExamItem key={item.id} data={item} />
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Exam;
