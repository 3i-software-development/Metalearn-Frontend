import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { BsSearch } from "react-icons/bs";
import { DatePicker, Select } from "antd";
import useTrans from "@/hooks/useTrans";

const cx = classNames.bind(styles);

const DocumentSearch = () => {
    const trans = useTrans();
    const [openSort, setOpenSort] = React.useState(false);
    const [openFilter, setOpenFilter] = React.useState(false);

    const handleDropDown = (id) => {
        switch (id) {
            case "sort":
                setOpenSort((pre) => !pre);
                break;
            case "filter":
                setOpenFilter((pre) => !pre);
                break;
        }
    };

    const options = [
        {
            value: "Tên tài liệu",
            label: "Tên tài liệu",
        },
        {
            value: "Dung lượng",
            label: "Dung lượng",
        },
        {
            value: "Thời gian tạo",
            label: "Thời gian tạo",
        },
    ];

    const dateFormat = "DD-MM-YYYY";

    return (
        <div className={cx("list-course-container")}>
            <div className={cx("search-container")}>
                <input
                    type="text"
                    placeholder={trans.search.searchClass}
                    className={cx("search-input")}
                />
                <BsSearch />
            </div>

            <div className={cx("sort-container")}>
                <div
                    className={cx("title-sort-container")}
                    onClick={() => handleDropDown("sort")}
                >
                    <h2>{trans.search.sort}</h2>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
                {openSort && (
                    <div className={cx("content-sort-container")}>
                        <p>{trans.search.sortFollow}</p>
                        <Select
                            className={cx("select-container")}
                            defaultValue="Tên tài liệu"
                            options={options}
                        />
                    </div>
                )}
            </div>

            <div className={cx("sort-container")}>
                <div
                    className={cx("title-sort-container")}
                    onClick={() => handleDropDown("filter")}
                >
                    <h2>{trans.search.filter}</h2>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
                {openFilter && (
                    <>
                        <div className={cx("content-sort-container")}>
                            <p>{trans.subject.subject}</p>
                            <Select
                                className={cx("select-container")}
                                defaultValue="Tên tài liệu"
                                options={options}
                            />
                        </div>
                        <div className={cx("content-sort-container")}>
                            <p>Kiểu tài liệu</p>
                            <Select
                                className={cx("select-container")}
                                defaultValue="Tên tài liệu"
                                options={options}
                            />
                        </div>
                        <div className={cx("content-sort-container")}>
                            <p>{trans.time.timeStart}</p>
                            <span>{trans.time.from}</span>
                            <DatePicker
                                format={dateFormat}
                                className={cx("select-container")}
                                placeholder={trans.time.startDate}
                            />
                            <span>{trans.time.to}</span>
                            <DatePicker
                                format={dateFormat}
                                className={cx("select-container")}
                                placeholder={trans.time.endDate}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default DocumentSearch