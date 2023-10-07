import React, { useState } from "react";
import styles from "./ViewExamSchedule.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
// SelectMonth.js is a component that allows the user to select a month and year

const SelectMonth = ({handleSelect}) => {
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2021);

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
        handleSelect(e.target.value, year);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
        handleSelect(month, e.target.value);
    };

    return (
        <div className={cx('select-month')}>
            <select onChange={handleMonthChange} value={month}>
                <option value={1}>January</option>
                <option value={2}>February</option>
                <option value={3}>March</option>
                <option value={4}>April</option>
                <option value={5}>May</option>
                <option value={6}>June</option>
                <option value={7}>July</option>
                <option value={8}>August</option>
                <option value={9}>September</option>
                <option value={10}>October</option>
                <option value={11}>November</option>
                <option value={12}>December</option>
            </select>
            <select onChange={handleYearChange} value={year}>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
                <option value={2026}>2026</option>
                <option value={2027}>2027</option>
                <option value={2028}>2028</option>
                <option value={2029}>2029</option>
                <option value={2030}>2030</option>
            </select>
        </div>
    );
}

export default SelectMonth;