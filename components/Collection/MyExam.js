import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import ListExam from "./ListExam";
import Section from "../Section/Section";


const cx = classNames.bind(styles);

const MyExam = () => {
    const listExamData = [

        {
            id: 1,
            title: "đề thi lớp 3 Tiếng anh1",
            evaluate: "",
            author: "admin",
            number_questions: "10 câu hỏi",
            date: "11/11/2022 13:35",
            price: "10 coins",
            status: "Đã mua",
            subject: "Tiếng Anh 3"
        },

        {
            id: 2,
            title: "đề thi lớp 3 Tiếng anh1",
            evaluate: "",
            author: "admin",
            number_questions: "10 câu hỏi",
            date: "11/11/2022 13:35",
            price: "10 coins",
            status: "Đã mua",
            subject: "Tiếng Anh 3"
        },

        {
            id: 3,
            title: "đề thi lớp 3 Tiếng anh1",
            evaluate: "",
            author: "admin",
            number_questions: "10 câu hỏi",
            date: "11/11/2022 13:35",
            price: "10 coins",
            status: "Đã mua",
            subject: "Tiếng Anh 3"
        },

        {
            id: 4,
            title: "đề thi lớp 3 Tiếng anh1",
            evaluate: "",
            author: "admin",
            number_questions: "10 câu hỏi",
            date: "11/11/2022 13:35",
            price: "10 coins",
            status: "Đã mua",
            subject: "Tiếng Anh 3"
        },

        {
            id: 5,
            title: "đề thi lớp 3 Tiếng anh1",
            evaluate: "",
            author: "admin",
            number_questions: "10 câu hỏi",
            date: "11/11/2022 13:35",
            price: "10 coins",
            status: "Đã mua",
            subject: "Tiếng Anh 3"
        },

        {
            id: 6,
            title: "đề thi lớp 3 Tiếng anh1",
            evaluate: "",
            author: "admin",
            number_questions: "10 câu hỏi",
            date: "11/11/2022 13:35",
            price: "10 coins",
            status: "Đã mua",
            subject: "Tiếng Anh 3"
        },
    ]

    return (
        
        <Section>
            <div id={cx("leaderboards")}>
                <h1>Đề thi</h1>
                <hr />
                <ul className={cx("toplist")}>
                    {listExamData.map((item) => {
                        return (
                            <ListExam key={item.id} data={item} />
                        );
                    })}
                </ul>
             
            </div>
         
        </Section>
    );
};

export default MyExam
