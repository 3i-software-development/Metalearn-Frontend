import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
import { useGetListQuizQuery } from "@/lib/Midleware/QuizQuery";
const cx = classNames.bind(styles);

export default function AddForm() {
  const [state, setState] = useState({
    subjectCode: "HH-12",
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
    isTutor888: false,
    groupBySubject: false,
    onlyAssignment: false,
    onlyShared: true,
    pageLength: 30,
    pageNum: 1,
  });

  const [tempQuestion, setTempQuestion] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const handleNext = () => {
    setTempQuestion(tempQuestion + 1);
  };

  const handleSelect = (value) => {
    setTempQuestion(value);
  };

  const handleAnswer = (value) => {
    setSelectedAnswers({
      ...selectedAnswers, [value]: true
    })
  }

  const { data } = useGetListQuizQuery(state);
  function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.innerText;
  }
  return (
    <div className={cx("background")}>
      <div className={cx("tittle")}>
        <h2>Đề thi môn Toán</h2>
      </div>
      <div className={cx("containers")}>
        <div className={cx("quiz")}>
          <div className={cx("list-questions")}>
            {data?.Object?.Data.map((value, index) => (
              <>
                <div id={index + 1} className={cx("quiz-detail")} key={index}>
                  <div className={cx("numOf")}>
                    <p>
                      <span>Question</span>. {index + 1}
                    </p>
                  </div>
                  
                  <div className={cx("quizz-left")}>
                    <h3 className={cx("quizz-questions")}>{htmlDecode(`${value.Content}`)}</h3>
                    {JSON.parse(value.JsonData).map((item, i) => {
                      return (
                        <div key={i} className={cx("checkBox")}>
                          <input type="radio" name={value.Content} value="pk" onChange={() => handleAnswer(index)} />
                          {htmlDecode(`${item.Answer}`)}
                        </div>
                      );
                    })}
                      <div className={cx("recommend")}>
                        <a>
                          <i className="fa-brands fa-react fa-beat"></i>
                        </a>
                        <button>Kiểm tra</button>
                        <a>
                          <i className="fa-solid fa-flower"></i>GPT
                        </a>
                      </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className={cx("number")}>
          <h3>Number of question</h3>
          <div>
            <ul>
              {data?.Object?.Data.map((value, index) => {
                if (index === tempQuestion) {
                  return (
                    <a
                      key={index}
                      href={`#${index}`}
                      onClick={() => handleSelect(index)}
                    >
                      {" "}
                      <li className={cx("tempQ")}>{index + 1}</li>
                    </a>
                  );
                }
                if (Object.keys(selectedAnswers).includes(index.toString())) {
                  return (
                    <a
                      key={index}
                      href={`#${index}`}
                      onClick={() => handleSelect(index)}
                    >
                      <li className={cx("done")}>{index + 1}</li>{" "}
                    </a>
                  );
                }

                return (
                  <a key={index}>
                    {" "}
                    <li href={`#${index}`} onClick={() => handleSelect(index)}>
                      {index + 1}
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
          <div className={cx("next-questions")}>
            <a href="#open-modal">Finish</a>
            <a href={`#${tempQuestion}`} onClick={() => handleNext()}>
              Next questions
            </a>
          </div>
        </div>
      </div>
      <div id="open-modal" className={cx("modal-window")}>
        <div>
          <a href="#" title="Close" className={cx("modal-close")}>
            Close
          </a>
          <h1>You really want to finish ?</h1>
          <a className={cx("confirm")}>Yes</a>
        </div>
      </div>
    </div>
  );
}
