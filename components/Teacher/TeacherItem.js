import React, { useEffect, useState } from "react";
import styles from './style.module.scss'

const TeacherItem = ({data}) => {
    return (

        <div style={{backgroundColor: "green", width: "300px", marginTop: "10px", marginLeft: "20px", borderRadius: "5px"}}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <img style={{width: "100%", height: "100%"}} src = "http://localhost:3007/_next/image?url=https%3A%2F%2Fdieuhanh.vatco.vn%2F%2Fuploads%2Frepository%2FSUBJECT%2Fdownload5.jpg&w=1080&q=75"></img>
            </div>
        <div>
           <div style={{display: "flex"}}>

                <div>
                    <p style={{fontWeight: "600"}}>Name:</p>
                    <p style={{fontWeight: "600"}}>Phone:</p>
                    <p><i style={{color: "yellow"}} class="fa-solid fa-star"></i></p>
                </div>
                
                <div style={{marginLeft: "50px"}}>
                    <p>{data.name}</p>
                    <p>{data.phone}</p>
                    <p>Preview</p>

                </div>

           </div>

           <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <i style={{color: "red"}} class="fa-solid fa-heart"></i>
                <i class="fa-regular fa-user"></i>
                <i class="fa-regular fa-message"></i>
           </div>
           
        </div>
        </div>
    );
    }
export default TeacherItem;
