import React, { useState, useEffect } from 'react'

import styles from "./style.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function AddForm() {
    const [numberQuestions, setNumberQuestions] = useState([]);
    const [tempQuestion, setTempQuestion] = useState(1);

    const quest = [
        {
            id: 1,
            quest: 'Sau khi tổng hợp xong ARN thì mạch gốc của gen có hiện tượng nào sau đây'
        },
        {
            id: 2,
            quest: 'Sau khi tổng hợp xong ARN thì mạch gốc của gen có hiện tượng nào sau đây'
        },
        {
            id: 3,
            quest: 'Sau khi tổng hợp xong ARN thì mạch gốc của gen có hiện tượng nào sau đây'
        },
        {
            id: 4,
            quest: 'Sau khi tổng hợp xong ARN thì mạch gốc của gen có hiện tượng nào sau đây'
        },

    ]
    const anw = [
        {
            id: 1,
            idQuset: 1,
            ans: 'Bị enzim xúc tác phân giải'
        },
        {
            id: 2,
            idQuset: 1,
            ans: 'Rời nhân để di chuyển ra tế bào chất'
        },
        {
            id: 3,
            idQuset: 1,
            ans: 'Liên kết với phần tử ARN'
        },
        {
            id: 4,
            idQuset: 1,
            ans: 'Xoắn lại với mạch bổ sung với nó trên ADN'
        },
        {
            id: 5,
            idQuset: 2,
            ans: 'Bị enzim xúc tác phân giải'
        },
        {
            id: 6,
            idQuset: 2,
            ans: 'Rời nhân để di chuyển ra tế bào chất'
        },
        {
            id: 7,
            idQuset: 2,
            ans: 'Liên kết với phần tử ARN'
        },
        {
            id: 8,
            idQuset: 2,
            ans: 'Xoắn lại với mạch bổ sung với nó trên ADN'
        },
        {
            id: 9,
            idQuset: 3,
            ans: 'Bị enzim xúc tác phân giải'
        },
        {
            id: 10,
            idQuset: 3,
            ans: 'Rời nhân để di chuyển ra tế bào chất'
        },
        {
            id: 11,
            idQuset: 3,
            ans: 'Liên kết với phần tử ARN'
        },
        {
            id: 12,
            idQuset: 3,
            ans: 'Xoắn lại với mạch bổ sung với nó trên ADN'
        },
        {
            id: 10,
            idQuset: 4,
            ans: 'Bị enzim xúc tác phân giải'
        },
        {
            id: 11,
            idQuset: 4,
            ans: 'Rời nhân để di chuyển ra tế bào chất'
        },
        {
            id: 12,
            idQuset: 4,
            ans: 'Liên kết với phần tử ARN'
        },
        {
            id: 13,
            idQuset: 44,
            ans: 'Xoắn lại với mạch bổ sung với nó trên ADN'
        },
    ]

    const [question, setQuestion] = useState(quest);
    const [answer, setAnswer] = useState(anw);
    const handleNext = () => {
        setTempQuestion(tempQuestion + 1);
    }
    const handleSelect = (value) => {
        setTempQuestion(value);
    }
    console.log(tempQuestion);

    useEffect(() => {
        let array = [];
        for (let index = 1; index <= 20; index++) {
            array.push(index)
        }
        setNumberQuestions([...array])
    }, [])
    return (
        <div className={cx("background")}>
            <div className={cx("tittle")}>
                <h2>Đề thi môn Toán</h2>
            </div>
            <div className={cx("containers")}>

                <div className={cx("quiz")}>
                    {/* <div className={cx("time")}>sssssssssssssssss</div> */}
                    <div className={cx("list-questions")}>
                        {
                            question.map(value => (
                                <>
                                    <div id={value.id} className={cx("quiz-detail")}>
                                        <div className={cx("numOf")}>
                                            <p><span>Question</span>. {value.id}</p>
                                        </div>
                                        <div className={cx("quizz-left")}>
                                            <h3>{value.quest}</h3>
                                            {
                                                answer.map(check => {
                                                    if (check.idQuset === value.id) {
                                                        return (
                                                            <>
                                                                <p><span>A.</span>{check.ans}</p>

                                                            </>
                                                        )
                                                    }
                                                })
                                            }
                                            <div className={cx("recommend")}>
                                                <a><i class="fa-brands fa-react fa-beat"></i></a>
                                                <button>Kiểm tra</button>
                                                <a><i class="fa-solid fa-flower"></i>GPT</a>
                                                <button>OK</button>
                                            </div>
                                        </div>

                                    </div>

                                </>
                            ))
                        }

                    </div>

                </div>

                <div className={cx("number")}>
                    <h3>Number of question</h3>
                    <div>
                        <ul>
                            {
                                numberQuestions.map(value => {
                                    if (value === tempQuestion) {
                                        return (
                                            <li className={cx("tempQ")}><a href={`#${value}`} onClick={() => handleSelect(value)}>{value}</a></li>
                                        )
                                    } else {
                                        return (
                                            <li><a href={`#${value}`} onClick={() => handleSelect(value)}>{value}</a></li>
                                        )
                                    }
                                })
                            }
                        </ul>

                    </div>
                    <div className={cx("next-questions")}>
                        <a href="#open-modal">Finish</a>
                        <a href={`#${tempQuestion}`} onClick={() => handleNext()}>Next questions</a>
                    </div>
                </div>
            </div>
            <div id="open-modal" class={cx("modal-window")}>
                <div>
                    <a href="#" title="Close" class={cx("modal-close")}>Close</a>
                    <h1>You really want to finish ?</h1>
                    <a className={cx("confirm")}>Yes</a>
                </div>
            </div>
        </div>
    )
}
