import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Section from "../Section/Section";
import useDebounce from "@/hooks/useDebounce";
import NavbarExam from "./NavbarExam";
import { useGetListExamQuery } from "@/lib/Midleware/ExamQuery";
import ExamItem from "./ExamItem";
import { useGetListUserSubjectQuery } from "@/lib/Midleware/SubjectQuery";
import ExamDetail from "./ExamDetail";
import { useRouter } from "next/router";

const cx = classNames.bind(style);

const Exam = () => {
  const router = useRouter();

  const [query, setQuery] = useState({
    testName: "",
    userName: "admin",
    subjectCode: "",
    content: "",
    latex: "",
    level: "",
    ratingMin: -1,
    ratingMax: -1,
    fromDatePara: "",
    toDatePara: "",
    createdBy: "",
    onlyAssignment: true,
    onlyShared: false,
    pageLength: 10,
    pageNum: 1,
  });

  const { data } = useGetListExamQuery(query);
  // console.log(data)
  const {
    data: ListUserSubject,
    isFetching,
    isLoading,
  } = useGetListUserSubjectQuery({
    username: "admin",
    isTutor888: false,
  });
  // console.log(ListUserSubject)

  const handleQuery = (newQuery) => {
    setQuery({ ...newQuery });
  };

  return (
    <Section>
      <div id={cx("leaderboards")}>
        <NavbarExam
          query={query}
          handleQuery={handleQuery}
          totalAssigment={data?.countAssignment}
          totalShared={data?.countSharing}
        />
        {router.query.page == "item" ? (
          <ExamItem />
        ) : (
          <ul className={cx("toplist")}>
            {data?.query?.map((item, i) => {
              return (
                <>
                  {/* <ExamItem key={item.id} data={item} /> */}
                  <ExamDetail key={item.id} data={ListUserSubject[i] ? ListUserSubject[i] : undefined} />
                </>
              );
            })}
          </ul>
        )}
      </div>
    </Section>
  );
};

export default Exam;
