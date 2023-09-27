
import BankDT02 from "@/components/BankDT02/BankDT02";
import React, { useState } from "react";

const Index = () => {
  const year = new Date().getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div>
      <div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <h1 style={{marginTop: "10px"}}>Lịch thi trong tháng</h1>
            <i style={{fontSize: "70px", marginLeft: "20px"}} class="fa-solid fa-earth-americas"></i>
        </div>
        <div className="table-container">
          {months.map((month) => (
            <div key={month} style={{ margin: "20px" }}>
              <h2 style={{ width: "50%", color: "red", textAlign: "center"}}>{`Tháng ${month}`}</h2>
              <div>
                <BankDT02 month={month} year={year} />
              </div>
            </div>
          ))}
        </div>
     
      </div>
    </div>
  );
};

export default Index;

