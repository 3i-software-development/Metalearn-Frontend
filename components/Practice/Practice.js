import React from "react";
import PracticeItem from "./PracticeItem";
import style from "./style.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
const Practice = () => {
    const practiceData = [
        {
            id: 1,
            title: "#1078 : Copy_Copy_Nhiệm vụ ngày 22/8",
            status1: "Mới tạo",
            status2: "Đã quá hạn",
            job_assigner: "admin",
            progress: 50,
            date: "[11:09:2023][26:08:2023]",
            result: "Kết quả",
        },
        {
            id: 2,
            title: "#1078 : Copy_Copy_Nhiệm vụ ngày 22/8",
            status1: "Mới tạo",
            status2: "Đã quá hạn",
            job_assigner: "admin",
            progress: 90,
            date: "[11:09:2023][26:08:2023]",
            result: "Kết quả",
        },
        {
            id: 3,
            title: "#1078 : Copy_Copy_Nhiệm vụ ngày 22/8",
            status1: "Mới tạo",
            status2: "Đã quá hạn",
            job_assigner: "admin",
            progress: 66,
            date: "[11:09:2023][26:08:2023]",
            result: "Kết quả",
        },
        {
            id: 4,
            title: "#1078 : Copy_Copy_Nhiệm vụ ngày 22/8",
            status1: "Mới tạo",
            status2: "Đã quá hạn",
            job_assigner: "admin",
            progress: 0,
            date: "[11:09:2023][26:08:2023]",
            result: "Kết quả",
        },
        {
            id: 5,
            title: "#1078 : Copy_Copy_Nhiệm vụ ngày 22/8",
            status1: "Mới tạo",
            status2: "Đã quá hạn",
            job_assigner: "admin",
            progress: 70,
            date: "[11:09:2023][26:08:2023]",
            result: "Kết quả",
        },
        {
            id: 6,
            title: "#1078 : Copy_Copy_Nhiệm vụ ngày 22/8",
            status1: "Mới tạo",
            status2: "Đã quá hạn",
            job_assigner: "admin",
            progress: 80,
            date: "[11:09:2023][26:08:2023]",
            result: "Kết quả",
        }
    ];

    return (
        <div className={cx('practice-tab')}>
            <div className={cx('practice-secion')}>
                <div className={cx('practice-header')}>
                    <p></p>
                    <h1>Rèn luyện</h1>

                    <div className={cx("flex-item")}>
                        <p><i class="fa-solid fa-magnifying-glass fa-2xl"></i></p>
                        <p className={cx("item-p")}><i class="fa-regular fa-square-plus fa-2xl"></i></p>
                    </div>
                </div>
                <div className={cx("practice-list")}>
                    {practiceData.map((item) => (
                        <PracticeItem key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Practice;