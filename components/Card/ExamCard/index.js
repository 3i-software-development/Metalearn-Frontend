import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useGetListExamQuery } from "@/lib/Midleware/ExamQuery";
import Pagination from "@/components/Pagination/Pagination";
import ExamCardItem from "./ExamCardItem";

export default function ExamCard({ onlyAssignment }) {
  const cx = classNames.bind(styles);

  const [query, setQuery] = useState({
    testName: "",
    ratingMin: 1,
    ratingMax: -1,
    userFilter: "admin",
    userName: "admin",
    onlyAssignment: true,
    onlyShared: false,
    pageLength: 10,
    pageNum: 1
  })

  useEffect(() => {
    onlyAssignment ? setQuery({ ...query, onlyAssignment: true, onlyShared: false }) : setQuery({ ...query, onlyAssignment: false, onlyShared: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlyAssignment])


  const { data } = useGetListExamQuery(query);

  const handleQueryPage = (current, pageSize) => {
    setQuery({ ...query, pageNum: current, pageLength: pageSize })
  }

  return (
    <div key={onlyAssignment} className={cx("container")}>
      {data?.query.map((element, index) => {
        return (
          <ExamCardItem key={element.Id} element={element} />
        )
      })}
      <Pagination total={onlyAssignment ? data?.countAssignment : data?.countSharing} handleQueryPage={handleQueryPage} current={query.pageNum} />
    </div>
  );
}
