import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Pagination as PaginationAntd } from 'antd'

const cx = classNames.bind(style);

const Pagination = ({ total, handleQueryPage, current }) => {

    const handlePageChange = (current, pageSize) => {
        handleQueryPage(current, pageSize)
    }

    return (
        <div className={cx("pagination")}>
            <PaginationAntd showQuickJumper current={current} total={total} onChange={handlePageChange} />
        </div>
    );
};

export default Pagination;
