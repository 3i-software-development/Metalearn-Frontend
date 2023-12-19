import React, { useState, useEffect  } from 'react';
import Section from "@/components/Section/Section";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import moment from "moment";
import { useQuery } from "react-query";
import { useRouter } from 'next/router';
import className from "classnames/bind";
import styles from "./style.module.scss";
import { selectStatus, initialCourseItem } from "../../../data";
import { useStartCourseUpdateQuery, useEndUpdateCourseQuery } from "@/lib/Midleware/CourseQuery";
import SliderBar from "@/components/Menu";

const cx = className.bind(styles);

const CourseEdit = () => {
    const router = useRouter();
    const [Lesson, setLesson] = useState(initialCourseItem); 

    console.log(">>> check router: ", router);

    const handleChangeInput=(e, name)=>{
        setLesson({
            [name]: e.target.value
        })
    }

    const handleSubmitLesson = () => {
        console.log("submit");
    }

    const handleCancelEditCourse = () => {
        router.push(`/courses/edit?Id=${courseId}`);
    }

    return (
        <Section>
            <div className={cx("add-lesson")}>
                <div className={cx("page-main")}>
                    <div className="sidebar-left">
                        <SliderBar />
                    </div>
                    <div className="content">
                        <h1 className={cx("page-title text-center")}>Tạo bài giảng</h1>
                        <form>
                            <div className={cx("form-group")}>
                                <h2 className={cx("form-group-title")}>Mã và tên bài giảng :</h2>
                                <div className={cx("lesson-code")}>
                                <label className={cx("form-label")}>Mã bài giảng</label>
                                <input type="text" className={cx("form-control")} value={Lesson?.LessonCode} onChange={(e)=>handleChangeInput(e, "LessonCode")} />
                                </div>

                                <div className={cx("lesson-name")}>
                                <label className={cx("form-label")}>Tên bài giảng</label>
                                <input type="text"  className={cx("form-control")} value={Lesson?.LessonName} onChange={(e)=>handleChangeInput(e, "LessonName")} />
                                </div>

                                <div className={cx("lesson-status")}>
                                <label className={cx("form-label")}>Trạng thái</label>
                                <select className={cx("form-select")} >
                                    { selectStatus && selectStatus.map((item, index) => {
                                    return (
                                        <option key={index} value={item.label}>{item.value}</option>
                                    )
                                    })}
                                </select>
                                </div>
                            </div>

                            <div className={cx("form-group")}>
                                <h2 className={cx("form-group-title")}>File:</h2>
                                <div className={cx("lesson-categoy")}>
                                    <label className={cx("form-label")}>Danh mục lưu trữ</label>
                                    <input type="text" className={cx("form-control")}/>
                                </div>

                                <div className={cx("lesson-folder")}>
                                    <label className={cx("form-label")}>Thư mục máy chủ</label>
                                    <input type="text" className={cx("form-control")}/>
                                </div>

                                <div className={cx("lesson-file")}>
                                    <label className={cx("form-label")}>Chọn file</label>
                                    <input type="file" className={cx("form-control")}/>
                                </div>
                            </div>

                            <div className={cx("group-media")}>
                                <div className={cx("form-group")}>
                                <h2 className={cx("form-group-title")}>Hình ảnh và video :</h2>
                                <div className={cx("lesson-image")}>
                                    <label className={cx("form-label")}>Ảnh đại diện</label>
                                    <input type="file" id="avatar" className={cx("form-control")} hidden/>
                                    <label className={cx("avatar-label")} htmlFor="avatar" style={{backgroundImage: `url(${Lesson?.ImgCover})`}}></label>
                                </div>

                                <div className={cx("lesson-video")}>
                                    <label className={cx("form-label")}>Link video bài giảng</label>
                                    <input type="text" className={cx("form-control")} />
                                    <label className={cx("choose-video-label")} htmlFor="choose-video">Chọn video</label>
                                    <input type="file" id="choose-video" className={cx("form-control")} hidden />
                                    <div className={cx("video-selected")}>{Lesson?.VideoPresent ? Lesson?.VideoPresent : "Không có video"}</div>
                                </div>
                                </div>
                            </div>

                            <div className={cx("lesson-intro")}>
                                <div className={cx("form-group")}>
                                    <h2 className={cx("form-group-title")}>Nội dung chi tiết bài giảng: </h2>
                                    <div className={cx("lesson-time")}>
                                        <label className={cx("form-label")}>Thời lượng</label>
                                        <input type="text" className={cx("form-control")} value={Lesson?.Time} onChange={(e)=>handleChangeInput(e, "Time")} />
                                    </div>

                                    <div className={cx("lesson-description")}>
                                        <label className={cx("form-label")}>Nội dung bài giảng</label>
                                        <textarea className={cx("form-control")} />
                                    </div>
                                </div>
                            </div>

                            <div className={cx("lesson-list-doit")}>
                                <h2 className={cx("form-group-title")}>
                                    Câu hỏi luyện tập
                                    <span className={cx("action")}>Chọn câu hỏi</span>
                                </h2>
                                <ul className={cx("lesson-items")}>
                                    <li className={cx("lesson-item")}>{Lesson?.ListSubject ? Lesson?.ListSubject : "Không có bài tập"}</li>
                                </ul>
                            </div>

                            <div className={cx("actions")}>
                                <button type="submit" className={cx("btn-primary")} onClick={() => handleSubmitLesson()}>Create</button>
                                <button className={cx("btn-cancel")} onClick={() => handleCancelEditCourse()}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default CourseEdit