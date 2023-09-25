import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Section from "../Section/Section";
import ListItem from "../ExamList/ListItem";
import NavbarExam from "../ExamList/NavbarExam";

const cx = classNames.bind(style);

const Exam = () => {
    const examData = [
        {
            id: 1,
            title: "đề thi lớp 3 Tiếng anh1",
            evaluate: "",
            author: "admin",
            number_questions: "10 câu hỏi",
            date: "11/11/2022 13:35",
            progress: 50,
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
            progress: 50,
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
            progress: 50,
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
            progress: 50,
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
            progress: 50,
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
            progress: 50,
            price: "10 coins",
            status: "Đã mua",
            subject: "Tiếng Anh 3"
        },
    ];

    return (
        <Section>
            <div id={cx("leaderboards")}>
                <NavbarExam />
                <ul className={cx("toplist")}>
                    {examData.map((item) => {
                        return (
                            <ListItem key={item.id} data={item} />
                        );
                    })}
                </ul>
            </div>
        </Section>
    );
};

export default Exam;
