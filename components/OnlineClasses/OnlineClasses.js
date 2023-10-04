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
            <div className={cx("OnlineClasses-All")}>

                    <div className={cx("OnlineClasses-01")}>

                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                    </div>




                    <div className={cx("OnlineClasses-02")}>
                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
                            </div>

                            <div className={cx("course-item-icons")}>
                                <i class="fa-solid fa-mobile"></i>
                                <i class="fa-solid fa-floppy-disk"></i>
                                <i class="fa-solid fa-video"></i>
                            </div>
                        </div>

                        <div className={cx("course-item")}>
                            <div className={cx("Course-item-text")}>
                                <h3 className={cx("OnlineClasses-Title")} >Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                                <h4 className={cx("OnlineClasses-Subject")}>Môn học: Lập trình <i class="fa-solid fa-code"></i></h4>
                                <h5 className={cx("OnlineClasses-Day")}>Bắt đầu ngày: 18/04/2023 11:00 </h5>
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