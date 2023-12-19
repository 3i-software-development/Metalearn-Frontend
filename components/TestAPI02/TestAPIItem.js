import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TestAPI02.module.scss";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function TabItem({ list }) {
    // Check if the list is not empty
    if (list && list.length > 0) {
        return (
            <div className={cx("Online-page")}>
                <h1 className={cx("OnlineClasses")}>Test API02</h1>
                <div className={cx("OnlineClasses-All")}>
                    <div className={cx("OnlineClasses-01")}>
                        {list.map((item, index) => {
                            return (
                                <div className={cx("course-item")} key={index}>
                                    <div className={cx("Course-item-text")}>
                                        <h2>Code: {item.Code}</h2>
                                        <h2>Value: {item.Name}</h2>
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
