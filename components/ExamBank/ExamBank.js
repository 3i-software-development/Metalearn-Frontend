import React from "react";
import ExamBankItem from "./ExamBankItem";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import { data } from "jquery";

const cx = classNames.bind(style);

const ExamBank = () => {
    const examBankData = [
        {
            id: 1,
            title: "Toán 10",
            exam_number: 10,
            number_of_questions: 9165
        },
        {
            id: 2,
            title: "Toán 10",
            exam_number: 10,
            number_of_questions: 9165
        },
        {
            id: 3,
            title: "Toán 10",
            exam_number: 10,
            number_of_questions: 9165
        },
        {
            id: 4,
            title: "Toán 10",
            exam_number: 10,
            number_of_questions: 9165
        },
        {
            id: 5,
            title: "Toán 10",
            exam_number: 10,
            number_of_questions: 9165
        },
        {
            id: 6,
            title: "Toán 10",
            exam_number: 10,
            number_of_questions: 9165
        },
        {
            id: 7,
            title: "Toán 10",
            exam_number: 10,
            number_of_questions: 9165
        },
        {
            id: 8,
            title: "Toán 10",
            exam_number: 10,
            number_of_questions: 9165
        },
        {
            id: 9,
            title: "Toán 10",
            exam_number: 10,
            number_of_questions: 9165
        },
        {
            id: 10,
            title: "Toán 10",
            exam_number: 10,
            number_of_questions: 9165
        },
        {
            id: 11,
            title: "Toán 10",
            exam_number: 10,
            number_of_questions: 9165
        },
        {
            id: 12,
            title: "Toán 10",
            exam_number: 10,
            number_of_questions: 9165
        },
    ];

    return (
        <div className={cx('ebank-tab')}>
            <div style={{ textAlign: 'center', margin: '30px' }}>
                <h2>Ngân hàng đề thi</h2>
            </div>
            <div className={cx("ebank-list")}>
                {examBankData.map((item) => (
                    <ExamBankItem key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default ExamBank;