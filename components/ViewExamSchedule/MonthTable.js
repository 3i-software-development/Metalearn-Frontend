import { parse } from "qs";
import React, { useState } from "react";
import styles from "./ViewExamSchedule.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

//MonthTable.js is a component that displays the days of the month in a table format
const MonthCell = ({ day, onClick, isSelected, handleDayClick }) => {
    return (
        <td
            onClick={() => handleDayClick(day)}
            className={cx("month-cell", { selected: isSelected })}
            >
            {day}
        </td>
    );
};

function MonthTable({ month, year, onDayClick }) {
    //plus month wiht 1 because month starts from 0
    const daysInMonth = new Date(year, month, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const rows = [];
    let currentRow = [];

    days.forEach((day, index) => {
        currentRow.push(day);

        if (currentRow.length === 7 || index === days.length - 1) {
            rows.push(currentRow);
            currentRow = [];
        }
    });

    const [selectedDay, setSelectedDay] = useState(null);

    const handleDayClick = (day) => {
        setSelectedDay(day);
        onDayClick(day);
    };

    const hideInfo = () => {
        setSelectedDay(null);
    };

    return (
        <div className={cx("month-table")}>
        <table>
          <thead>
            <tr>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th> {/* Fix the typo in "Wednesday" */}
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
  
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((day) => (
                  <MonthCell
                    key={day}
                    day={day}
                    isSelected={selectedDay === day}
                    handleDayClick={handleDayClick}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
export default MonthTable;