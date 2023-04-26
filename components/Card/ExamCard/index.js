import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { GiNotebook } from "react-icons/gi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { useGetListExamQuery } from "@/lib/Midleware/ExamQuery";
import moment from "moment";

export default function ExamCard({ onlyShared, onlyAssignment }) {
  const cx = classNames.bind(styles);

  console.log(onlyAssignment, onlyShared)
  const [query, setQuery] = useState({
    "testName": "",
    "ratingMin": 1,
    "ratingMax": -1,
    "userFilter": "admin",
    "userName": "admin",
    "onlyAssignment": onlyAssignment ? true : false,
    "onlyShared": onlyShared ? true : false,
    "pageLength": "10",
    "pageNum": "1"
  })

  // onlyAssignment ? setQuery({ ...query, onlyAssignment: true, onlyShared: false }) : setQuery({ ...query, onlyAssignment: false, onlyShared: true })

  const { data } = useGetListExamQuery(query);

  return (
    <div className={cx("container")}>
      {data?.query.map((element) => {
        return (
          <div key={element.Id} className={cx("container-Item")}>
            <div className={cx("Icon_Book")}>
              <GiNotebook className={cx("Icon_Book_One")} />
            </div>
            <div className={cx("item_course")}>
              <h3>{element.PracticeTestTitle}</h3>
              <div className={cx("Title_all")}>
                <div className={cx("icon_Start")}>
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <div className={cx("Title_Item")}>Độ Khó : {element.Level ? element.Level : "Dễ"}</div>
              </div>
              <div className={cx("Title_all")}>
                <div className={cx("Title_Item")}>Tác giả : {element.CreatedBy}</div>
                <div className={cx("Title_Item")}>{element.QuizCount} câu hỏi</div>
              </div>
              <div className={cx("Title_Item")}>{moment(element.CreatedTime).format('DD/MM/YYYY hh:mm')}</div>
              <div className={cx("Title_Item")}>giá : {element.Price} Coin</div>
              <div className={cx("Title_all")}>
                <div className={cx("Title_Item_color")}>
                  Môn Học : {element.ExamSubject}
                </div>
                <BiDownload className={cx("Title_all_inStall")} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
