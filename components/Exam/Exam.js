import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Section from "../Section/Section";
import { ArrayData } from "@/data";
import useDebounce from "@/hooks/useDebounce";
import Pagination from "../Pagination/Pagination";
import { GetListMyExam } from "@/pages/api/CallAPI";

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
    "onlyShared": false,
    "pageLength": 30,
    "pageNum": 1
  })

  const [arrData, setArrayData] = useState(ArrayData);
  const [valueInputSeacrch, setValueInputSeacrch] = useState();
  const [resultSearch, setResultSearch] = useState(ArrayData);
  const [valueCheckedSearch, setValueCheckedSearch] = useState();

  const data = GetListMyExam(query)

  console.log(data)
  useEffect(() => {
    // refetch()
    if (valueInputSeacrch) {
      const temp = arrData.filter((item) =>
        item.subject.toLowerCase().includes(valueInputSeacrch)
      );
      setResultSearch(temp);
    } else {
      setResultSearch(arrData);
    }
  }, [valueInputSeacrch]);

  return (
    <Section>
      <div id={cx("leaderboards")}>
        <div className={cx("options")}>
          <input
            type="text"
            className={cx("search")}
            placeholder="Search for exam..."
            onChange={(e) => setValueInputSeacrch(e.target.value)}
          />
          <i></i>
          <div className={cx("sort")}>
            s<h2>Sort By Exam</h2>
            <div className={cx("tabTitles")}>
              <span id={cx("bedwars")} className={cx("active")}>
                Exam
              </span>
              <span id={cx("ffa")}>Free-For-All</span>
            </div>
            <form className={cx("tabContents")}>
              <li className={cx("tab bedwars")}>
                {arrData &&
                  arrData?.map((item) => {
                    return (
                      <div key={item.id}>
                        <input
                          name="sort"
                          type="radio"
                          value={item.subject}
                          onChange={(e) =>
                            setValueCheckedSearch(e.target.value)
                          }
                        />
                        <span for="q">{item.subject}</span>
                      </div>
                    );
                  })}
              </li>
            </form>
          </div>
          {/* <Pagination items={arrData.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handleOnPageChange}/> */}
          <Pagination />
        </div>
        <ul className={cx("toplist")}>
          {data?.data?.query?.map((item) => {
            return (
              <li data-rank="1" className={cx("lilist")} key={item.id}>
                <div className={cx("thumb")}>
                  <span
                    className={cx("img")}
                    data-name="BluewaveSwift"
                  ></span>
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
                      <i class="fa-solid fa-book fa-2xl"></i>
                    </p>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Exam;
