import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { GetListClass } from "@/pages/api/CallAPI";
import ClassCard from "./ClassCard";
import { useGetListLmsClassQuery } from "@/lib/Midleware/LmsClassQuery";

const cx = classNames.bind(styles);

const ListClass = () => {
  // const ListClass = GetListClass();
  const [query, setQuery] = useState({
    FromDate: "",
    ToDate: "",
    Teacher: "zeta7",
    Student: "",
    pageSize: "8",
    pageNo: "1",
  });
  const { data: LmsClass } = useGetListLmsClassQuery(query);

  const [initLoading, setInitLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const viewMore = () => {
    setQuery({
      FromDate: "",
      ToDate: "",
      Teacher: "zeta7",
      Student: "",
      pageSize: "17",
      pageNo: "1",
    })
  }

  const loadMore = () =>
    !initLoading && !loading ? (
      <div onClick={() => viewMore()} className={cx("load-more")}>
        <p>Xem thêm</p>
      </div>
    ) : null;

  return (
    <div className={cx("list-course-container")}>
      <div className={cx("list")}>
        {LmsClass?.query?.map((item, index) => (
          <div key={index} className={cx("card")}>
            <ClassCard data={item} />
          </div>
        ))}
      </div>
      {loadMore()}
    </div>
  );
};

export default ListClass;
