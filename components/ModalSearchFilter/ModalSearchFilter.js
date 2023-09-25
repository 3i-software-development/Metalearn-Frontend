import { DatePicker, Modal, Select, Slider } from "antd";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";

const cx = classNames.bind(styles);

const ModalSearchFilter = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const marks = {
    0: "0",
    20: "1",
    40: "2",
    60: "3",
    80: "4",
    100: "5",
  };

  const options = [
    {
      value: "Tên lớp học",
      label: "Tên lớp học",
    },
    {
      value: "Ngày bắt đầu",
      label: "Ngày bắt đầu",
    },
    {
      value: "Tên giáo viên",
      label: "Tên giáo viên",
    },
  ];

  const optionsLevel = [
    {
      value: "Tất cả",
      label: "Tất cả",
    },
    {
      value: "Dễ",
      label: "Dễ",
    },
    {
      value: "Trung bình",
      label: "Trung bình",
    },
    {
      value: "Khó",
      label: "Khó",
    },
  ];

  const dateFormat = "DD-MM-YYYY";

  return (
    <>
      <span className="tool-item tool-search">
        <i className="fa-solid fa-magnifying-glass" onClick={showModal}></i>
      </span>
      <Modal
        open={open}
        title="Search - Filter"
        onCancel={handleCancel}
        centered
      >
        <div className={cx("modal-body")}>
          <div className={cx("search-container")}>
            <input
              type="text"
              placeholder="Search"
              className={cx("search-input")}
            />
            <BsSearch />
          </div>
          <div className={cx("modal-filter")}>
            <div className={cx("content-filter")}>
              <div className={cx("content-sort-container")}>
                <p>Subject :</p>
                <Select
                  className={cx("select-container")}
                  defaultValue="Tên lớp học"
                  options={options}
                />
              </div>
              <div className={cx("content-sort-container")}>
                <p>Status :</p>
                <Select
                  className={cx("select-container")}
                  defaultValue="Tên lớp học"
                  options={options}
                />
              </div>
              <div className={cx("content-sort-container")}>
                <p>Level :</p>
                <Select
                  className={cx("select-container")}
                  defaultValue="Tên lớp học"
                  options={optionsLevel}
                />
              </div>
            </div>

            <div className={cx("content_filter")}>
              <p>Time :</p>
              <div className={cx("timesDate")}>
                <div>
                  <span>From</span>
                  <DatePicker
                    format={dateFormat}
                    className={cx("select-container")}
                    placeholder="Ngày bắt đầu"
                  />
                </div>
                <div>
                  <span>To</span>
                  <DatePicker
                    format={dateFormat}
                    className={cx("select-container")}
                    placeholder="Ngày kết thúc"
                  />
                </div>
              </div>
            </div>

            <div className={cx("content_filter")}>
              <p>Đánh giá :</p>
              <Slider range marks={marks} step={20} defaultValue={[0, 100]} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalSearchFilter;
