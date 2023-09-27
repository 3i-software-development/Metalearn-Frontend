    
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./BankDT03.module.scss";

const cx = classNames.bind(styles);


function BankDT03() {
  return (

   <div style={{fontSize: "150px", marginLeft: "50px"}}>
    <div style={{display: "flex"}}>
        <i class="fa-solid fa-file-pen"></i>
        <i style={{fontSize: "50px", }} class="fa-solid fa-bell"></i>
    </div>
    <h4>Chấm ORM 3999</h4>
    <p>Quét đáp án 3999</p>
   </div>

  )
}

export default BankDT03;


