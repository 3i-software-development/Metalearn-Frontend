import React from "react";
import { BiDownload } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import moment from "moment";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { Rate } from "antd";

const cx = classNames.bind(styles);

const ExamCardItem = ({ element }) => {
  return (
    <div key={element.Id} className={cx("container-Item")}>
      <div className={cx("Icon_Book")}>
        <GiNotebook className={cx("Icon_Book_One")} />
      </div>
      <div className={cx("item_course")}>
        <div className={cx("main-content")}>
          <h3>
            {element.PracticeTestTitle} - {element.Id}
          </h3>

          <div className={cx("Title_all")}>
            <div className={cx("subject")}>
              <span className={cx("label")}>Môn Học :</span>&nbsp;
              <span className={cx("value")}>
                {element.ExamSubject ? element.ExamSubject : ""}
              </span>
            </div>
          </div>

          <div className={cx("time")}>
            <span className={cx("label")}>{"Thời gian tạo : "}</span>
            <span className={cx("value")}>
              {moment(element.CreatedTime).format("DD/MM/YYYY hh:mm")}
            </span>
          </div>

          <div className={cx("Title_all")}>
            <div className={cx("author")}>
              <span className={cx("label")}>{"Tác giả : "}</span>
              <span className={cx("value")}>{element.CreatedBy}</span>
            </div>
          </div>
        </div>

        <div className={cx("extra-content")}>
          <div className={cx("icon_Start")}>
            <Rate defaultValue={element.Rating ? element.Rating : 0} />
          </div>

          <div className={cx("level")}>
            <span className={cx("label")}>Độ Khó : </span>
            <span className={cx("value")}>
              {element.Level ? element.Level : "Dễ"}
            </span>
          </div>

          <div className={cx("price")}>
            <span className={cx("label")}>{"Giá : "}</span>
            <span className={cx("value")}>{element.Price} Coin</span>
          </div>

          <i className={cx("question")}>{element.QuizCount} câu hỏi</i>
        </div>

        <div className={cx("actions")}>
          <BiDownload className={cx("Title_all_inStall")} />
        </div>
      </div>
    </div>
  );
};

export default ExamCardItem;
