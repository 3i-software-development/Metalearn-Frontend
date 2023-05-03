import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "../Exam/style.module.scss";
import { Pagination as PaginationAntd, Select } from "antd";

const cx = classNames.bind(style);

const SimplePagination = ({ total, handleQuery, query }) => {
  const handlePageChange = (e) => {
    handleQuery({ ...query, pageNum: e });
  };

  const handlePageLengthChange = (e) => {
    handleQuery({ ...query, pageLength: e });
  };

  return (
    <div className={cx("pagination")}>
      <PaginationAntd
        size="small"
        simple
        current={query.pageNum}
        total={total}
        onChange={handlePageChange}
      />
      <Select
        defaultValue="10/Page"
        style={{
          width: 110,
        }}
        options={[
          {
            value: "10",
            label: "10/Page",
          },
          {
            value: "20",
            label: "20/Page",
          },
          {
            value: "50",
            label: "50/Page",
          },
          {
            value: "100",
            label: "100/Page",
          },
        ]}
        onChange={handlePageLengthChange}
      />
    </div>
  );
};

export default SimplePagination;
