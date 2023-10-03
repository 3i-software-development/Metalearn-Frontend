    
import React, { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ViewExamSchedule.module.scss";

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

      <div style={{width: "50%"}}>
          <table className={cx("excel-style-table")}>
            <thead>
              <tr>
                <th colSpan="1">Thứ 2</th>
                <th colSpan="1">Thứ 3</th>
                <th colSpan="1">Thứ 4</th>
                <th colSpan="1">Thứ 5</th>
                <th colSpan="1">Thứ 6</th>
                <th colSpan="1">Thứ 7</th>
                <th colSpan="1">Chủ Nhật</th>
              </tr>
            </thead>

            <tbody> 
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((day, columnIndex) => (
                    <MonthCell
                      key={columnIndex}
                      day={day}
                      onClick={() => handleDayClick(day)}
                      isSelected={day === selectedDay}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
      </div>

      <div style={{width: '50%'}}>

        
        {selectedDay && ( // Only render the section if selectedDay is not null
          <div className={cx("ViewExamSchedule-Show")}>
            <h1 style={{ textAlign: "center" }}>
              <div style={{display: "flex"}}>
                  <h5>Lịch Thi Trong Ngày: <span className={cx("ViewExamSchedule-Show-Title")}>{selectedDay}</span></h5>
                  <button className={cx("ViewExamSchedule-Show-Button-Close")} onClick={hideInfo}><i class="fa-solid fa-circle-xmark"></i></button>
              </div>

            </h1>
            
            <div className={cx("ViewExamSchedule-Show-div02")}>
              <div style={{display: "flex", justifyContent: "space-evenly"}}>      
                  <i className={cx("ViewExamSchedule-Show-Icon")} class="fa-solid fa-calendar-days"></i>       
                <div>
                    <h6>
                      Môn Toán
                      <span className={cx("ViewExamSchedule-Show-Subject")}>Ngày {selectedDay}/02/2021</span>
                    </h6>

                    <h6>
                      Môn Sinh
                      <span className={cx("ViewExamSchedule-Show-Subject")}>Ngày {selectedDay}/02/2021</span>
                    </h6>

                    <h6>
                      Môn Hóa
                      <span className={cx("ViewExamSchedule-Show-Subject")}>Ngày {selectedDay}/02/2021</span>
                    </h6>

                    <h6>
                      Môn Vật Lý
                      <span className={cx("ViewExamSchedule-Show-Subject")}>Ngày {selectedDay}/02/2021</span>
                    </h6>
                </div>

              </div>
              
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default ViewExamSchedule;
