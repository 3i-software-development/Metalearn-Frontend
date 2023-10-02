import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons"; // Import biểu tượng
import styles from "./OnlineClasses.module.scss"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function OnlineClasses() {
    return (
        <div>
            <h1 className={cx("OnlineClasses")} >Online Class</h1>
            <div style={{display: "flex", width: "100%", marginTop: "25px"}}>

                    <div style={{width: "50%"}}>

                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                    </div>

                    <div style={{width: "50%"}}>
                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div style={{paddingLeft: "12px"}}>
                                <h3 style={{color: "green"}} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4>Môn học: <span>Lập trình <i class="fa-solid fa-code"></i> </span> </h4>
                                <h5>Bắt đầu ngày: <span style={{color: "red"}}>18/04/2023 11:00</span> </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                    </div>
            </div>
        </div>


    )
}

export default OnlineClasses