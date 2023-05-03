import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Section from "@/components/Section/Section";
import { useGetListQuizQuery } from "@/lib/Midleware/QuizQuery";
import moment from "moment";
import Pagination from "@/components/Pagination/Pagination";
import { MathJaxProvider, Tex2SVG } from "react-hook-mathjax";

const cx = classNames.bind(styles);
const mathJaxOptions = {
  svg: {
    scale: 1, // global scaling factor for all expressions
    minScale: 0.5, // smallest scaling factor to use
    mtextInheritFont: false, // true to make mtext elements use surrounding font
    merrorInheritFont: true, // true to make merror text use surrounding font
    mathmlSpacing: false, // true for MathML spacing rules, false for TeX rules
    skipAttributes: {}, // RFDa and other attributes NOT to copy to the output
    exFactor: 0.5, // default size of ex in em units
    displayAlign: "center", // default for indentalign when set to 'auto'
    displayIndent: "0", // default for indentshift when set to 'auto'
    fontCache: "local", // or 'global' or 'none'
    localID: null, // ID to use for local font cache (for single equation processing)
    internalSpeechTitles: true, // insert <title> tags with speech content
    titleID: 0, // initial id number to use for aria-labeledby titles
  },
};

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

  // const textFomart = (value)=>{

  //   const html =  htmlDecode(`${
  //     value > 700
  //       ? value.slice(0, 400) + " ..."
  //       : value
  //   }`)

  //   var arrStr =html.split(/[$$]/);
  //   let result = "";
  //   arrStr.map((item,index)=>{
  //     if(index %2 !== 0){
  //       <span></span>
  //     }
  //   })
  // }

  useEffect(() => {
    onlyAssignment
      ? setQuery({ ...query, onlyAssignment: true, onlyShared: false })
      : setQuery({ ...query, onlyAssignment: false, onlyShared: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlyAssignment]);

  const textFomart = (value) => {
    const html = htmlDecode(
      `${value.length > 700 ? value.slice(0, 400) + " ..." : value}`
    );

    const arrStr = html.split(/[$$]/);
    return arrStr;
  };

  return (
    <Section>
      <MathJaxProvider options={mathJaxOptions}>
        <div className={cx("contaiberQuiz")}>
          {quiz?.Object?.Data.map((item, index) => {
            return (
              <div className={cx("selftraining-card")} key={index}>
                <div className={cx("selftrainingTitle")}>
                  <h4>
                    {textFomart(item.Content).map((element, index) => {
                      if (index % 2 === 0) {
                        return <span key={-index}>{element}</span>;
                      } else
                        return <Tex2SVG display="inline" latex={element} />;
                    })}
                  </h4>
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
                    <span>Giá : </span>{" "}
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
      </MathJaxProvider>
      {/* <Pagination total={onlyAssignment ? data?.countAssignment : data?.countSharing} handleQueryPage={handleQueryPage} current={query.pageNum} /> */}
    </Section>
  );
};

export default SelftrainingCard;
