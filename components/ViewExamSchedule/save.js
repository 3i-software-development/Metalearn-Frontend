    
import React, { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ViewExamSchedule.module.scss";
import SelectMonth from "./SelectMonth";
import MonthTable from "./MonthTable";

const cx = classNames.bind(styles);

function MonthCell({ day, onClick, isSelected, onDayClick }) {
  return (
    <td
      onClick={onClick}
      className={isSelected ? cx("selected") : ""}
    >
      {day}
    </td>
  );
}

function ViewExamSchedule({ month, year }) {
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
  };

  const hideInfo = () => {
    setSelectedDay(null);
  };

  return (
    <div className={cx("ViewExamSchedule-All")}>
      <SelectMonth />
      <MonthTable />
    </div>
  );
}

export default ViewExamSchedule;
