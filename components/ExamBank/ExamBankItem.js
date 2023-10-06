import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Link from "next/link";

const cx = classNames.bind(styles);

const ExamBankItem = ({ data }) => {
    return (
        
        <button className={cx('button-container')}>
            <Link href="/exam-list" className={cx('mb-login')}>
            <div style={{ color: 'blue', textAlign: 'center' }}>
                <h4>{data.title}</h4>
                <p>[Số đề thi: {data.exam_number}, số câu hỏi: {data.number_of_questions}]</p>
            </div>
            </Link>
        </button>
        
    )
}

export default ExamBankItem;