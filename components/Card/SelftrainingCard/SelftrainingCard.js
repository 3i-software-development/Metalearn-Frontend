import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Section from "@/components/Section/Section";
import { useGetListQuizQuery } from "@/lib/Midleware/QuizQuery";
import moment from "moment";
import Pagination from "@/components/Pagination/Pagination";
// import { MathJaxProvider, Tex2SVG } from "react-hook-mathjax";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const cx = classNames.bind(styles);
const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/~]/;
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

  const config = {
    "fast-preview": {
      disabled: true
    },
    tex2jax: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    },
    messageStyle: "none"
  };

  return (
    <Section>
      <MathJaxContext config={config}>
        <div className={cx("contaiberQuiz")}>
          <div className={cx('on-pc')}>
            <table className={cx("list-table")}>
              <thead>
                <tr className={cx("list-head")}>
                  <th className={cx("question")}>
                    <i className="fa fa-paper-plane"></i>
                    Câu hỏi
                  </th>
                  <th className={cx("subject")}>
                    <i className="fa-solid fa-person-chalkboard"></i>
                    Môn học
                  </th>
                  <th className={cx("lession")}>
                    <i className="fa fa-newspaper"></i>
                    Bài giảng
                  </th>
                  <th className={cx("price")}>
                    <i className="fa-solid fa-tag"></i>
                    Giá
                  </th>
                  <th className={cx("author")}>
                    <i className="fa-solid fa-user"></i>
                    Tác giả
                  </th>
                  <th className={cx("time")}>
                    <i className="fa-solid fa-clock"></i>
                    Thời lượng
                  </th>
                  <th className={cx("actions")}>
                    <i className="fa fa-recycle"></i>
                    Thao tác
                  </th>
                </tr>
              </thead>
              {quiz?.Object?.Data.map((item, index) => {
                return (
                  <tbody key={index}>
                    <tr className={cx("item")} >
                      <td className={cx("question")}>
                        <h4>
                          {textFomart(item.Content).map((element, index) => {
                            if (format.test(element))
                              //return <MathJax key={index}>{`$$${element}$$`}</MathJax>
                              return <span key={index}>{element}</span>
                            else return <span key={index}>{element}</span>

                            // if (index % 2 === 0) {
                            //   return <span key={-index}>{element}</span>;
                            // } else
                            //   // return <MathJax key={index}>{element}</MathJax>
                          })}
                        </h4>
                      </td>
                      <td className={cx("subject")}>{item.SubjectName}</td>
                      <td className={cx("lession")}>
                        Bài 6 : Đơn chất và hợp chất - Phân
                      </td>
                      <td className={cx("price")}>
                        {item.Price === 0
                          ? item.Price + " [" + " Được chia sẻ " + "]"
                          : item.Price + " Coin"}
                      </td>
                      <td className={cx("author")}>
                        <p>
                          <i className="fa-solid fa-code-branch"></i>{" "}
                          <span>{item.CreatedBy}</span>{" "}
                        </p>
                        <p>{moment(item.CreatedTime).format("DD : MM : YYYY")}</p>
                        <i>
                          {item.DurationMinute === 0
                            ? ""
                            : item.DurationMinute + " phút"}
                        </i>
                      </td>
                      <td className={cx("time")}>
                        {item.Level === null ? "0" : item.Level}
                      </td>
                      <td className={cx("actions")}>
                        <span className={cx("download")}>
                          <i className="fa-solid fa-cloud-arrow-down"></i>
                        </span>
                        <span className={cx("thumbtack")}>
                          <i className="fa-solid fa-thumbtack"></i>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div className={cx('on-mobile')}>
            <div>
              {quiz?.Object?.Data.map((item, index) => (
                <div className={cx("item")} key={index}>
                  <div className={cx("question")}>
                    <h4>
                      {textFomart(item.Content).map((element, index) => {
                        if (format.test(element))
                          //return <MathJax key={index}>{`$$${element}$$`}</MathJax>
                          return <span key={index}>{element}</span>
                        else return <span key={index}>{element}</span>

                        // if (index % 2 === 0) {
                        //   return <span key={-index}>{element}</span>;
                        // } else
                        //   // return <MathJax key={index}>{element}</MathJax>
                      })}
                    </h4>
                  </div>
                  <div className={cx("subject")}>{item.SubjectName}</div>
                  <div className={cx("lession")}>
                    Bài 6 : Đơn chất và hợp chất - Phân
                  </div>
                  <div className={cx("price")}>
                    {item.Price === 0
                      ? item.Price + " [" + " Được chia sẻ " + "]"
                      : item.Price + " Coin"}
                  </div>
                  <div className={cx("author")}>
                    <p>
                      <i className="fa-solid fa-code-branch"></i>{" "}
                      <span>{item.CreatedBy}</span>{" "}
                    </p>
                    <p>{moment(item.CreatedTime).format("DD : MM : YYYY")}</p>
                    <i>
                      {item.DurationMinute === 0
                        ? ""
                        : item.DurationMinute + " phút"}
                    </i>
                  </div>
                  <div className={cx("time")}>
                    {item.Level === null ? "0" : item.Level}
                  </div>
                  <div className={cx("actions")}>
                    <span className={cx("download")}>
                      <i className="fa-solid fa-cloud-arrow-down"></i>
                    </span>
                    <span className={cx("thumbtack")}>
                      <i className="fa-solid fa-thumbtack"></i>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </MathJaxContext>
      {/* <Pagination total={onlyAssignment ? data?.countAssignment : data?.countSharing} handleQueryPage={handleQueryPage} current={query.pageNum} /> */}
    </Section>
  );
};

export default SelftrainingCard;
