import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { BsSearch } from "react-icons/bs";
import { DatePicker, Select } from "antd";

const cx = classNames.bind(styles);

const DocumentSear = () => {

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
                    placeholder="Chọn Danh mục"
                    className={cx("search-input")}
                />
                <BsSearch  onClick={() => handleDropDown("filter")}/>
            </div>

           

            <div className={cx("sort-container")}>
               
                {openFilter && (
                    <>
                        <div className={cx("content-sort-container")}>
                            <p>Nội Dung</p>
                            <Select
                                className={cx("select-container")}
                                defaultValue="Tên tài liệu"
                                options={options}
                            />
                        </div>
                        <div className={cx("content-sort-container")}>
                            <p>Tên Tệp</p>
                            <Select
                                className={cx("select-container")}
                                defaultValue="Tên tài liệu"
                                options={options}
                            />
                        </div>
                        <div className={cx("content-sort-container")}>
                            <p>Kiểu Tệp</p>
                            <Select
                                className={cx("select-container")}
                                defaultValue="Tên tài liệu"
                                options={options}
                            />
                        </div>
                        <div className={cx("content-sort-container")}>
                            <p>Thời gian bắt đầu</p>
                            <span>Từ</span>
                            <DatePicker
                                format={dateFormat}
                                className={cx("select-container")}
                                placeholder="Ngày bắt đầu"
                            />
                            <span>Đến</span>
                            <DatePicker
                                format={dateFormat}
                                className={cx("select-container")}
                                placeholder="Ngày kết thúc"
                            />
                        </div>

                        <div className={cx("content-sort-container")}>
                            <p>Đối Tượng</p>
                            <Select
                                className={cx("select-container")}
                                defaultValue="Tên tài liệu"
                                options={options}
                            />
                        </div>
                        <div className={cx("content-sort-container")}>
                            <p>Danh Sách</p>
                            <Select
                                className={cx("select-container")}
                                defaultValue="Tên tài liệu"
                                options={options}
                            />
                        </div>
                        <div className={cx("content-sort-container")}>
                            <p>Người Tải</p>
                            <Select
                                className={cx("select-container")}
                                defaultValue="Tên tài liệu"
                                options={options}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default DocumentSear