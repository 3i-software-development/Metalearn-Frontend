import React from "react";
import classNames from "classnames/bind";
import style from "../Exam/style.module.scss";
import { Pagination as PaginationAntd, Select } from 'antd'

const cx = classNames.bind(style);

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  return (
    <div className={cx("pagination")}>
      <PaginationAntd size="small" simple total={5000} showSizeChanger />
      <Select
        defaultValue="10/Page"
        style={{
          width: 110,
        }}
        options={[
          {
            value: '10',
            label: '10/Page',
          },
          {
            value: '20',
            label: '20/Page',
          },
          {
            value: '50',
            label: '50/Page',
          },
          {
            value: '100',
            label: '100/Page',
          },
        ]}
      />
    </div>
  );
};

export default Pagination;
