import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMobile, faFloppyDisk, faVideo, faPersonChalkboard } from "@fortawesome/free-solid-svg-icons"; // Import biểu tượng

import styles from "./BankDT.module.scss"

import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function BankDT() {
    return (

        <div style={{display: "flex", width: "100%"}}>

                <div style={{marginLeft: "15px", width: "50%"}}>

                    <div className={cx("course-item")}>
                        <div style={{paddingLeft: "12px"}}>
                            <h3>Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                            <h4>Môn học: Lập trình</h4>
                            <h5>Bắt đầu ngày 18/04/2023 11:00</h5>
                        </div>

                        <div className={cx("course-item-icons")}>
                            <i class="fa-solid fa-mobile"></i>
                            <i class="fa-solid fa-floppy-disk"></i>
                            <i class="fa-solid fa-video"></i>
                        </div>
                    </div>

                    <div className={cx("course-item")}>
                        <div style={{paddingLeft: "12px"}}>
                            <h3>Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                            <h4>Môn học: Lập trình</h4>
                            <h5>Bắt đầu ngày 18/04/2023 11:00</h5>
                        </div>

                        <div className={cx("course-item-icons")}>
                            <i class="fa-solid fa-mobile"></i>
                            <i class="fa-solid fa-floppy-disk"></i>
                            <i class="fa-solid fa-video"></i>
                        </div>
                    </div>

                    <div className={cx("course-item")}>
                        <div style={{paddingLeft: "12px"}}>
                            <h3>Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                            <h4>Môn học: Lập trình</h4>
                            <h5>Bắt đầu ngày 18/04/2023 11:00</h5>
                        </div>

                        <div className={cx("course-item-icons")}>
                            <i class="fa-solid fa-mobile"></i>
                            <i class="fa-solid fa-floppy-disk"></i>
                            <i class="fa-solid fa-video"></i>
                        </div>
                    </div>

                    <div className={cx("course-item")}>
                        <div style={{paddingLeft: "12px"}}>
                            <h3>Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                            <h4>Môn học: Lập trình</h4>
                            <h5>Bắt đầu ngày 18/04/2023 11:00</h5>
                        </div>

                        <div className={cx("course-item-icons")}>
                            <i class="fa-solid fa-mobile"></i>
                            <i class="fa-solid fa-floppy-disk"></i>
                            <i class="fa-solid fa-video"></i>
                        </div>
                    </div>

                    <div className={cx("course-item")}>
                        <div style={{paddingLeft: "12px"}}>
                            <h3>Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                            <h4>Môn học: Lập trình</h4>
                            <h5>Bắt đầu ngày 18/04/2023 11:00</h5>
                        </div>

                        <div className={cx("course-item-icons")}>
                            <i class="fa-solid fa-mobile"></i>
                            <i class="fa-solid fa-floppy-disk"></i>
                            <i class="fa-solid fa-video"></i>
                        </div>
                    </div>

                    <div className={cx("course-item")}>
                        <div style={{paddingLeft: "12px"}}>
                            <h3>Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                            <h4>Môn học: Lập trình</h4>
                            <h5>Bắt đầu ngày 18/04/2023 11:00</h5>
                        </div>

                        <div className={cx("course-item-icons")}>
                            <i class="fa-solid fa-mobile"></i>
                            <i class="fa-solid fa-floppy-disk"></i>
                            <i class="fa-solid fa-video"></i>
                        </div>
                    </div>

                    <div className={cx("course-item")}>
                        <div style={{paddingLeft: "12px"}}>
                            <h3>Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                            <h4>Môn học: Lập trình</h4>
                            <h5>Bắt đầu ngày 18/04/2023 11:00</h5>
                        </div>

                        <div className={cx("course-item-icons")}>
                            <i class="fa-solid fa-mobile"></i>
                            <i class="fa-solid fa-floppy-disk"></i>
                            <i class="fa-solid fa-video"></i>
                        </div>
                    </div>

                    <div className={cx("course-item")}>
                        <div style={{paddingLeft: "12px"}}>
                            <h3>Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                            <h4>Môn học: Lập trình</h4>
                            <h5>Bắt đầu ngày 18/04/2023 11:00</h5>
                        </div>

                        <div className={cx("course-item-icons")}>
                            <i class="fa-solid fa-mobile"></i>
                            <i class="fa-solid fa-floppy-disk"></i>
                            <i class="fa-solid fa-video"></i>
                        </div>
                    </div>

                    <div className={cx("course-item")}>
                        <div style={{paddingLeft: "12px"}}>
                            <h3>Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                            <h4>Môn học: Lập trình</h4>
                            <h5>Bắt đầu ngày 18/04/2023 11:00</h5>
                        </div>

                        <div className={cx("course-item-icons")}>
                            <i class="fa-solid fa-mobile"></i>
                            <i class="fa-solid fa-floppy-disk"></i>
                            <i class="fa-solid fa-video"></i>
                        </div>
                    </div>

                </div>

                <div style={{fontSize: "250px", marginLeft: "270px"}}>
                    <FontAwesomeIcon icon={faPersonChalkboard} />
                    <FontAwesomeIcon icon={faGraduationCap} />
                </div>
        </div>

    )
}

export default BankDT