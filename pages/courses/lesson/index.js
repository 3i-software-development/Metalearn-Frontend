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
                            <div className={cx("course-code")}>
                            <label className={cx("form-label")}>Mã bài giảng</label>
                            <input type="text" className={cx("form-control")} value={Lesson?.LessonCode} onChange={(e)=>handleChangeInput(e, "LessonCode")} />
                            </div>

                            <div className={cx("course-name")}>
                            <label className={cx("form-label")}>Tên bài giảng</label>
                            <input type="text"  className={cx("form-control")} value={Lesson?.LessonName} onChange={(e)=>handleChangeInput(e, "LessonName")} />
                            </div>

                            <div className={cx("course-status")}>
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

                        <div className={cx("group-media")}>
                            <div className={cx("form-group")}>
                            <div className={cx("course-image")}>
                                <label className={cx("form-label")}>Ảnh đại diện</label>
                                <input type="file" id="avatar" className={cx("form-control")} hidden/>
                                <label className={cx("avatar-label")} htmlFor="avatar" style={{backgroundImage: `url(${Lesson?.ImgCover})`}}></label>
                            </div>
                            </div>
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