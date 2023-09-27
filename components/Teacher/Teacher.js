import React, { useEffect, useState } from "react";
import TeacherItem from "./TeacherItem";
import style from "./style.module.scss";




const Teacher = () => {

    const ApiData = 
    [{name: "Nguyen Van A", phone: "0123456789"},
    {name: "Nguyen Van B", phone: "0123456789"}]
    return (
        <div style={{display: "flex"}}>
        {ApiData.map((item) => {
        return (
        <TeacherItem key={item.id} data={item} />)
        })}
        </div>
    );
    }
export default Teacher;