import React from 'react'
import classNames from 'classnames/bind';
import style from './style.module.scss';
import { BsSearch } from 'react-icons/bs';
import { AiFillCaretDown, AiOutlineDownload } from 'react-icons/ai';
import { BiGitMerge } from 'react-icons/bi';
const cx = classNames.bind(style);
const dataFake = [
    {
        id: 1,
        title: "Polime dùng để chế tạo thủy tinh hữu cơ (plexglas) được điều chế bằng phản ứng trùng hợp?",
        subject: "Hóa Học",
        exam: "Bài Số 5-1",
        price: "1 Coin",
        admin: " admin 17/03/2022 20:39",
        time: " Thời lượng 15 Phút"

    },
    {
        id: 1,
        title: "Polime dùng để chế tạo thủy tinh hữu cơ (plexglas) được điều chế bằng phản ứng trùng hợp?",
        subject: "Hóa Học",
        exam: "Bài Số 5-1",
        price: "1 Coin",
        admin: " admin 17/03/2022 20:39",
        time: " Thời lượng 15 Phút"

    },
    {
        id: 1,
        title: "Polime dùng để chế tạo thủy tinh hữu cơ (plexglas) được điều chế bằng phản ứng trùng hợp? ",
        subject: "Hóa Học",
        exam: "Bài Số 5-1",
        price: "1 Coin",
        admin: " admin 17/03/2022 20:39",
        time: " Thời lượng 15 Phút"

    },
    {
        id: 1,
        title: "Polime dùng để chế tạo thủy tinh hữu cơ (plexglas) được điều chế bằng phản ứng trùng hợp?",
        subject: "Hóa Học",
        exam: "Bài Số 5-1",
        price: "1 Coin",
        admin: " admin 17/03/2022 20:39",
        time: " Thời lượng 15 Phút"

    }
]

const QuestionSearch = () => {
    return (
        <div className={cx("question-search")}>
            <div className={cx("form-check")}>
                <div >
                    <form className={cx("check-box")}>
                        <input type="checkbox" id="vehicle1" className={cx("vehicle1")} />
                        <label className={cx("content-searh")} for="vehicle1"> Tìm kiếm nội dung</label>
                    </form>
                </div>
                <div>
                    <form className={cx("check-box")}>
                        <input type="checkbox" id="vehicle2" className={cx("vehicle2")} />
                        <label className={cx("image-search")} for="vehicle2"> Tìm kiếm hình ảnh</label>
                    </form>
                </div>
            </div>

            <span>Môn học</span>
            <div className={cx("search")}>
                <input className={cx("iput-search")} />
                <button className={cx("button-search")}>
                    <AiFillCaretDown />
                </button>
            </div>
            <span>Từ khóa tìm kiếm </span>
            <div className={cx("search")}>
                <input className={cx("iput-search")} />
                <button className={cx("button-search")}>
                    <BsSearch />
                </button>
            </div>
            <div>
                <div >
                    {dataFake.map((data, index) => {
                        return (
                            <div key={index} className={cx("result-list")}>
                                <h1>{data.title}</h1>
                                <div className={cx("subject")}>Môn học: {" "}<span> {data.subject}</span></div>
                                <div className={cx("exam")}>Đề thi: {" "} <span>{data.exam}</span></div>
                                <div className={cx("price")}> Giá:  {" "} <span>{data.price}</span></div>
                                <div className={cx("notice-time")}>
                                    <span>{data.admin}</span>
                                    <span>{data.time}</span>
                                </div>
                                <div className={cx("icon")}>
                                    <AiOutlineDownload />
                                    <BiGitMerge />
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div >

    )
}

export default QuestionSearch