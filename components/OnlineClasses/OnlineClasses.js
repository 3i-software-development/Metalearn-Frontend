import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons"; // Import biểu tượng
import styles from "./OnlineClasses.module.scss"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function OnlineClasses() {
    const fakeData = [
        {
            id: 1,
            title: "Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]",
            subject: "Lập trình",
            data: "18/04/2023 11:00",
        },
        {
            id: 2,
            title: "Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]",
            subject: "Lập trình",
            data: "18/04/2023 11:00",
        },
        {
            id: 3,
            title: "Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]",
            subject: "Lập trình",
            data: "18/04/2023 11:00",
        },
        {
            id: 4,
            title: "Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]",
            subject: "Lập trình",
            data: "18/04/2023 11:00",
        },
        {
            id: 1,
            title: "Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]",
            subject: "Lập trình",
            data: "18/04/2023 11:00",
        },
        {
            id: 2,
            title: "Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]",
            subject: "Lập trình",
            data: "18/04/2023 11:00",
        },
        {
            id: 3,
            title: "Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]",
            subject: "Lập trình",
            data: "18/04/2023 11:00",
        },
        {
            id: 4,
            title: "Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]",
            subject: "Lập trình",
            data: "18/04/2023 11:00",
        },

    ]
    return (
        <div className={cx("Online-page")}>
            <h1 className={cx("OnlineClasses")}>Online Class</h1>
            <div className={cx("OnlineClasses-All")}>
                <div className={cx("OnlineClasses-01")}>
                    {fakeData.map((item, index) => {
                        return (
                            <div className={cx("course-item")} key={index}>
                                <div className={cx("Course-item-text")}>
                                    <h3 className={cx("OnlineClasses-Title")}>{item.title}</h3>
                                    <h4 className={cx("OnlineClasses-Subject")}>
                                        Môn học: {item.subject} <FontAwesomeIcon icon={faGraduationCap} />
                                    </h4>
                                    <h5 className={cx("OnlineClasses-Day")}>
                                        Bắt đầu ngày: {item.data}
                                    </h5>
                                </div>

                                <div className={cx("course-item-icons")}>
                                    <i className="fa-solid fa-mobile"></i>
                                    <i className="fa-solid fa-floppy-disk"></i>
                                    <i className="fa-solid fa-video"></i>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default OnlineClasses