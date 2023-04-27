import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Section from "@/components/Section/Section";
import { useGetListQuizQuery } from "@/lib/Midleware/QuizQuery";
import moment from "moment";
import Pagination from "@/components/Pagination/Pagination";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { MathComponent } from "mathjax-react";
const cx = classNames.bind(styles);
const SelftrainingCard = ({ onlyAssignment }) => {
  const [query, setQuery] = useState({
    subjectCode: "",
    lectureCode: "",
    content: "",
    latex: "",
    level: "",
    ratingMin: -1,
    ratingMax: -1,
    fromDatePara: "",
    toDatePara: "",
    createdBy: "",
    userName: "admin",
    userFilter: "admin",
    isTutor888: false,
    groupBySubject: false,
    onlyAssignment: true,
    onlyShared: false,
    pageLength: 10,
    pageNum: 1,
  });
  const { data: quiz } = useGetListQuizQuery(query);
  function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.innerText;
  }
  useEffect(() => {
    onlyAssignment
      ? setQuery({ ...query, onlyAssignment: true, onlyShared: false })
      : setQuery({ ...query, onlyAssignment: false, onlyShared: true });
  }, [onlyAssignment]);
  return (
    <MathJaxContext>
      <Section>
        <div className={cx("contaiberQuiz")}>
          {quiz?.Object?.Data.map((item, index) => {
            return (
              <div className={cx("selftraining-card")} key={index}>
                <div className={cx("selftrainingTitle")}>
                  {/* <MathJax> */}
                  <MathJax> {"$0, 05 \\mathrm{~mol} \\mathrm{CuSO}_4$"}</MathJax>
                  <h4>
                    {htmlDecode(
                      `${item.Content.length > 700
                        ? item.Content.slice(0, 400) + " ..."
                        : item.Content
                      }`
                    )}
                  </h4>
                  {/* </MathJax> */}
                  <i class="fa-solid fa-ellipsis"></i>
                </div>
                <div className={cx("selftrainingContent")}>
                  <p>
                    <span>Môn học : </span> {item.SubjectName}
                  </p>
                  <p>
                    <span>Bài giảng : </span>Bài 6 : Đơn chất và hợp chất - Phân
                  </p>
                  <p>
                    <span>Gía : </span>{" "}
                    {item.Price === 0
                      ? item.Price + "[" + " Được chia sẻ " + "]"
                      : item.Price + " Coin"}
                  </p>
                  <p className={cx("timeSub")}>
                    <span>
                      <i class="fa-solid fa-code-branch"></i>
                    </span>{" "}
                    <span>{item.CreatedBy}</span>{" "}
                    <span>
                      {moment(item.CreatedTime).format("DD : MM : YYYY")}
                    </span>
                  </p>
                </div>
                <div className={cx("time-level")}>
                  <p>
                    <span>Thời lượng : </span>
                    {item.DurationMinute === 0
                      ? ""
                      : item.DurationMinute + " phút"}
                  </p>
                  <p>
                    <span>Độ khó : </span>
                    {item.Level === null ? "0" : item.Level}
                  </p>
                </div>
                <div className={cx("icon")}>
                  <i class="fa-solid fa-cloud-arrow-down"></i>
                  <i class="fa-solid fa-thumbtack"></i>
                </div>
              </div>
            );
          })}
        </div>
        {/* <Pagination total={onlyAssignment ? data?.countAssignment : data?.countSharing} handleQueryPage={handleQueryPage} current={query.pageNum} /> */}
      </Section>
    </MathJaxContext>
  );
};

export default SelftrainingCard;
