
import React, { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ViewExamSchedule.module.scss";
import SelectMonth from "./SelectMonth";
import MonthTable from "./MonthTable";
import DayInfo from "./DayInfo";

const cx = classNames.bind(styles);

function ViewExamSchedule() {
  const [month, setMonth] = useState("1");
  const [year, setYear] = useState("2021");
  const [day, setDay] = useState(1);

  const handleSelect = (month, year) => {
    setMonth(month);
    setYear(year);
  }
  const onDayClick = (day) => {
    setDay(day);
  }

  return (
    <div className={cx("ViewExamSchedule-All")}>
      <SelectMonth handleSelect={handleSelect}/>
      {
        month && year ?
          <MonthTable month={month} year={year} onDayClick={onDayClick}/> :
          <div className={cx("ViewExamSchedule-Select")}>
            <FontAwesomeIcon icon="calendar-alt" />
            <p>Select a month to view exam schedule</p>
          </div>
      }
      {
        day ?
          <DayInfo year={year} month={month} day={day}/> :
          null
      }
    </div>
  );
}

export default ViewExamSchedule;
