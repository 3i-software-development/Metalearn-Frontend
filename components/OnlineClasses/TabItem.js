import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./OnlineClasses.module.scss";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Date_Time } from "@/ultils/utils_type";

const cx = classNames.bind(styles);

function TabItem({ list }) {
    
    // Check if the list is not empty
    if (list && list.length > 0) {
        return (
            <div className={cx("Online-page")}>
                <h1 className={cx("OnlineClasses")}>Online Class</h1>
                <div className={cx("OnlineClasses-All")}>
                    <div className={cx("OnlineClasses-01")}>
                        {list.map((item, index) => {
                            return (
                                <div className={cx("course-item")} key={index}>
                                    <div className={cx("Course-item-text")}>
                                        <h3 className={cx("OnlineClasses-Title")}>{item.Title}</h3>
                                        <h4 className={cx("OnlineClasses-Subject")}>
                                            Môn học: {item.SubjectName}{" "}
                                            <FontAwesomeIcon icon={faGraduationCap} />
                                        </h4>
                                        <h5 className={cx("OnlineClasses-Day")}>
                                            Bắt đầu ngày: {Date_Time(item.StartTime)}
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
    } else {
        return (
            <div className={cx("Online-page")}>
                <h1 className={cx("OnlineClasses")}>Online Class</h1>
                <div className={cx("OnlineClasses-All")}>
                    <div className={cx("OnlineClasses-01")}>
                        {/* Render something when the list is empty */}
                        <p>No data available</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabItem;
