//File.js

import React from 'react';
import style from './style.module.scss';
import classNames from 'classnames/bind';
import {
    useGetCountTestAssignmentQuery,
    useGetCountTestVoluntaryQuery,
} from "@/lib/Midleware/ChartQuery";

import CircleChart from "../../Chart/CircleChart/CircleChart";
import ExamCard from "../../Card/ExamCard"

const cx = classNames.bind(style);

const Exam = () => {

    return (
        <div className={cx('exam-container')}>
            <ExamCard onlyAssignment={true} />
        </div>
    );
}

export default Exam;