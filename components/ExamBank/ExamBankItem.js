import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

const ExamBankItem = ({ data }) => {
    return (
        <button className={cx('button-container')}>
            <div style={{ color: 'blue', textAlign: 'center' }}>
                <h4>{data.title}</h4>
                <p>[Số đề thi: {data.exam_number}, số câu hỏi: {data.number_of_questions}]</p>
            </div>
        </button>
    )
}

export default ExamBankItem;