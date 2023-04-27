import React from 'react'
import { BiDownload } from 'react-icons/bi'
import { GiNotebook } from 'react-icons/gi'
import moment from "moment";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { Rate } from 'antd';

const cx = classNames.bind(styles);

const ExamCardItem = ({ element }) => {
    return (
        <div key={element.Id} className={cx("container-Item")}>
            <div className={cx("Icon_Book")}>
                <GiNotebook className={cx("Icon_Book_One")} />
            </div>
            <div className={cx("item_course")}>
                <h3>{element.PracticeTestTitle} - {element.Id}</h3>
                <div className={cx("Title_all")}>
                    <div className={cx("icon_Start")}>
                        <Rate defaultValue={element.Rating ? element.Rating : 0} />
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
}

export default ExamCardItem