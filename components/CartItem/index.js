import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { GiNotebook } from "react-icons/gi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";

export default function CartItem() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("container")}>
      <div className={cx("container-Item")}>
        <div className={cx("Icon_Book")}>
          <GiNotebook className={cx("Icon_Book_One")} />
        </div>
        <div className={cx("item_course")}>
          <h3>Đề kiểm tra 5 phút hoá học 8</h3>
          <div className={cx("Title_all")}>
            <div className={cx("icon_Start")}>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <div className={cx("Title_Item")}>Độ Khó : Dễ</div>
          </div>
          <div className={cx("Title_all")}>
            <div className={cx("Title_Item")}>Tác giả : zeta 7</div>
            <div className={cx("Title_Item")}>4 câu hỏi</div>
          </div>
          <div className={cx("Title_Item")}>12/11/2022 10:30</div>
          <div className={cx("Title_Item")}>giá : 10 Coin</div>
          <div className={cx("Title_all")}>
            <div className={cx("Title_Item_color")}>
              Môn Học : Hoá Học Lớp 8
            </div>
            <BiDownload className={cx("Title_all_inStall")} />
          </div>
        </div>
      </div>
    </div>
  );
}
