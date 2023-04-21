import React, { useState, useEffect } from "react";

import styles from "./style.module.scss";
import classNames from "classnames/bind";
import { useGetListQuizQuery } from "@/lib/Midleware/QuizQuery";
const cx = classNames.bind(styles);

export default function AddForm() {
  const [numberQuestions, setNumberQuestions] = useState([]);
  const [tempQuestion, setTempQuestion] = useState(1);
  const [checkAnswer, setCheckAnswer] = useState([]);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "Khi nào nguyên sinh vật trở thành bào xác?",
      answers: [
        { id: 1, text: "Câu trả lời 1", check: true },
        { id: 2, text: "Câu trả lời 2", check: false },
        { id: 3, text: "Câu trả lời 3", check: false },
        { id: 4, text: "Câu trả lời 4", check: false },
      ],
    },
    {
      id: 2,
      text: "Khi nào nguyên sinh vật trở thành bào xác?",
      answers: [
        { id: 5, text: "Câu trả lời 1", check: true },
        { id: 6, text: "Câu trả lời 2", check: false },
        { id: 7, text: "Câu trả lời 3", check: false },
        { id: 8, text: "Câu trả lời 4", check: false },
      ],
    },
    {
      id: 3,
      text: "Khi nào nguyên sinh vật trở thành bào xác?",
      answers: [
        { id: 9, text: "Câu trả lời 1", check: true },
        { id: 10, text: "Câu trả lời 2", check: false },
        { id: 11, text: "Câu trả lời 3", check: false },
        { id: 12, text: "Câu trả lời 4", check: false },
      ],
    },
    {
      id: 4,
      text: "Khi nào nguyên sinh vật trở thành bào xác?",
      answers: [
        { id: 13, text: "Câu trả lời 1", check: true },
        { id: 14, text: "Câu trả lời 2", check: false },
        { id: 15, text: "Câu trả lời 3", check: false },
        { id: 16, text: "Câu trả lời 4", check: false },
      ],
    },
    {
      id: 5,
      text: "Khi nào nguyên sinh vật trở thành bào xác?",
      answers: [
        { id: 17, text: "Câu trả lời 1", check: true },
        { id: 18, text: "Câu trả lời 2", check: false },
        { id: 19, text: "Câu trả lời 3", check: false },
        { id: 20, text: "Câu trả lời 4", check: false },
      ],
    },
    {
      id: 6,
      text: "Khi nào nguyên sinh vật trở thành bào xác?",
      answers: [
        { id: 21, text: "Câu trả lời 1", check: true },
        { id: 22, text: "Câu trả lời 2", check: false },
        { id: 23, text: "Câu trả lời 3", check: false },
        { id: 24, text: "Câu trả lời 4", check: false },
      ],
    },
    {
      id: 7,
      text: "Khi nào nguyên sinh vật trở thành bào xác?",
      answers: [
        { id: 25, text: "Câu trả lời 1", check: true },
        { id: 26, text: "Câu trả lời 2", check: false },
        { id: 27, text: "Câu trả lời 3", check: false },
        { id: 28, text: "Câu trả lời 4", check: false },
      ],
    },
  ]);
  function handleAnswerClick(event) {
    const questionId = parseInt(event.target.dataset.questionId);
    const answerId = parseInt(event.target.dataset.answerId);

    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: answerId,
    }));
  }
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [question, setQuestion] = useState(questions);
  const handleNext = () => {
    setTempQuestion(tempQuestion + 1);
  };
  const handleSelect = (value) => {
    setTempQuestion(value);
  };

  useEffect(() => {
    let array = [];
    for (let index = 1; index <= 20; index++) {
      array.push(index);
    }
    setNumberQuestions([...array]);
  }, []);
  function handleAnswerClick(event) {
    const questionId = parseInt(event.target.dataset.questionId);
    const answerId = parseInt(event.target.dataset.answerId);

    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: answerId,
    }));
  }
  const handleTest = (tempQuestion) => {
    if (Object.keys(selectedAnswers).includes(tempQuestion.toString())) {
      const RQuest = question.find((value) => {
        return value.id === tempQuestion;
      });
      const RAnswer = RQuest.answers.find((value) => {
        return value.check === true;
      });
      if (selectedAnswers[tempQuestion.toString()] === RAnswer.id) {
        setCheckAnswer([...checkAnswer, tempQuestion]);
      } else {
        const index = checkAnswer.indexOf(tempQuestion);
        setCheckAnswer((prev) => {
          return [...prev.slice(0, index), ...prev.slice(index + 1)];
        });
      }
    }
  };
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
                <div id={index+1} className={cx("quiz-detail")} key={index}>
                <div className={cx("numOf")}>
                    <p>
                      <span>Question</span>. {index+1}
                    </p>
                  </div>
                  <div className={cx("quizz-left")}>
                    <h3>{htmlDecode(`${value.Content}`)}</h3>

                    {JSON.parse(value.JsonData).map((item, index) => {
                      return (
                        <>
                          <input type="radio" /> {item.Answer}
                        </>
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
                      <button>OK</button>
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
                // if (value === tempQuestion) {
                //   return (
                //     <li className={cx("tempQ")} key={index}>
                //       <a href={`#${value}`} onClick={() => handleSelect(value)}>
                //         {value}
                //       </a>
                //     </li>
                //   );
                // } else {
                //   if (Object.keys(selectedAnswers).includes(value.toString())) {
                //     return (
                //       <li className={cx("done")}  key={index}>
                //         <a
                //           href={`#${value}`}
                //           onClick={() => handleSelect(value)}
                //         >
                //           {value}
                //         </a>
                //       </li>
                //     );
                //   }
                //   return (
                //     <li  key={index}>
                //       <a href={`#${value}`} onClick={() => handleSelect(value)}>
                //         {value}
                //       </a>
                //     </li>
                //   );
                // }
                return (
                  <li key={index}>
                    <a href={`#${index+1}`} onClick={() => handleSelect(index)}>{index + 1}</a>
                  </li>
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
