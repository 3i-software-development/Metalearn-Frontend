import React from "react";
import { MdOutlineAddBox } from "react-icons/md";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { AiOutlineSearch } from 'react-icons/ai'
import Item_Cart_subject_all from "./Item_Cart_subject_all";

export default function SearchAndAddSubjects({ data }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("SearchAndAddSubjects_wrapper")}>
      <div className={cx("SearchAndAddSubjects_all")}>
        <div className={cx("SearchAndAddSubjects_Search")}>
          <MdOutlineAddBox className={cx("SearchAndAddSubjects_Search_icon")} />
          <div className={cx("SearchAndAddSubjects_inputAll")}>
            <div className={cx("SearchAndAddSubjects_ItemAll")}>
              <input
                placeholder="Tìm kiếm môn học"
                className={cx("SearchAndAddSubjects_Search_input")}
              />
              <AiOutlineSearch />
            </div>
          </div>
        </div>
        <div className={cx('Item_Cart_subject')}>
          {data?.map((element) => {
            return <Item_Cart_subject_all key={element.Code} element={element} />
          })}
        </div>
      </div>
    </div>
  );
}
