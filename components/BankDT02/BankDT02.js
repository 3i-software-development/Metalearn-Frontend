    
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./BankDT02.module.scss";

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

function BankDT02({ month, year }) {
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
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{}}>
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
              <tr>
                {/* Thêm một hàng trống ở đây nếu cần */}
              </tr>
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
          <div style={{marginLeft: "40px", width: "70%", border: "7px solid black", backgroundColor: "rgb(194, 240, 240)", borderRadius: "10px" }}>
            <h1 style={{ textAlign: "center" }}>
              <div style={{display: "flex"}}>
                  <h5>Lịch Thi Trong Ngày: <span style={{color: "red", fontSize: "25px", fontWeight: "700"}}>{selectedDay}</span></h5>
                  <button style={{fontSize: "25px", marginLeft: "330px", backgroundColor: "rgb(194, 240, 240)", marginTop: "0"}} onClick={hideInfo}><i class="fa-solid fa-circle-xmark"></i></button>
              </div>

            </h1>
            
            <div style={{ color: "red", fontSize: "25px", marginLeft: "25px" }}>
              <div style={{display: "flex", justifyContent: "space-evenly"}}>

                <div>
                    <i style={{fontSize: "50px", marginTop: "40px"}} class="fa-solid fa-calendar-days"></i>
                </div>

                <div>
                    <h6>
                      Môn Toán
                      <span style={{ marginLeft: "20px", fontSize: "25px", color: "black" }}>Ngày {selectedDay}/02/2021</span>
                    </h6>
                    <h6>
                      Môn Sinh
                      <span style={{ marginLeft: "20px", fontSize: "25px", color: "black" }}>Ngày {selectedDay}/02/2021</span>
                    </h6>
                    <h6>
                      Môn Hóa
                      <span style={{ marginLeft: "20px", fontSize: "25px", color: "black" }}>Ngày {selectedDay}/02/2021</span>
                    </h6>
                    <h6>
                      Môn Vật Lý Lớp 9
                      <span style={{ marginLeft: "20px", fontSize: "25px", color: "black" }}>Ngày {selectedDay}/02/2021</span>
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

export default BankDT02;
