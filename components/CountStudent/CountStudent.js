import React, { useState, useEffect } from "react";
import styles from './style.module.scss'; // Import SCSS styles for classNames
import classNames from 'classnames/bind';
import { GetApiLmsCountStudent } from "@/pages/api/CallAPI_H"
import { set } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    Tooltip,
    Legend,
    registerables,
} from "chart.js";
// Register Chart.js components
ChartJS.register(...registerables, BarElement, CategoryScale, Tooltip, Legend);

const cx = classNames.bind(styles);

function CountStudent() {

  
   

    const [isLoading, SetisLoading] = useState({
        // QuizVoluntary: false,
        // QuizAssignment: false,
        // LectureVoluntary: false,
        // LectureAssignment: false,
        // TestVoluntary: false,
        // TestAssignment: false,
        // ExamStudent: false,
        // TutorStudent: false,
        // SubjectStudent: false,
        // FileStudent: false,
    });

    const [result, setResult] = useState({
        // QuizVoluntary: {},
        // QuizAssignment: {},
        // LectureVoluntary: {},
        // LectureAssignment: {},
        // TestVoluntary: {},
        // TestAssignment: {},
        // ExamStudent: {},
        // TutorStudent: {},
        // SubjectStudent: {},
        // FileStudent: {},
    });

    const [showChart, setShowChart] = useState({})
    // QuizVoluntary: {},
    // QuizAssignment: {},
    // LectureVoluntary: {},
    // LectureAssignment: {},
    // TestVoluntary: {},
    // TestAssignment: {},
    // ExamStudent: {},
    // TutorStudent: {},
    // SubjectStudent: {},
    // FileStudent: {},
    const [excersise, setExcersise] = useState([]);
    const [hideExcersise, setHideExcersise] = useState();

    const sections = {
        section1: {
            title: "Câu hỏi tự luyện",
            rows: { "Tổng số:": "Total", "Đã làm": "Done", "Số Câu đúng": "Correct", "Số câu sai": "Minus", "Tổng số giờ làm": "TotalHour" },
            Api: "QuizVoluntary",
            data: { "Tổng số": "Total", "Đã làm": "Done", "Số câu đúng": "Correct" },
            chart: "Bar"
        },
        section2: {
            title: "Câu hỏi được giao",
            rows: { "Tổng số:": "Total", "Đã làm": "Done", "Số Câu đúng": "Correct", "Số câu sai": "Minus", "Tổng số giờ làm": "TotalHour" },
            Api: "QuizAssignment",
            data: { "Sai": "Minus", "Chính xác": "Correct", "Chưa xong": "NotYet" },
            chart: "Pie"
        },
        section3: {
            title: "Bài giảng tự luyện",
            rows: { "Đã xem": "Total", "Tổng số giờ xem": "Done" },
            Api: "LectureVoluntary",
            data: { "Tổng số": "Total", "Đã xong": "Done" },
            chart: "Bar"
        },
        section4: {
            title: "Bài giảng được giao ",
            rows: { "Tổng số": "Total", "Đã xem": "Done", "Tổng số giờ xem": "TotalHour" },
            Api: "LectureAssignment",
            data: { "Tổng số": "Total", "Đã làm": "Done" },
            chart: "Pie"
        },
        section5: {
            title: "Đề thi tự luyện ",
            rows: { "Tổng đề luyện": "Total", "Đạt được": "Percent", "Tổng số giờ làm": "TotalHour" },
            Api: "TestVoluntary",
            data: { "Tổng số": "Total", "Đã làm": "Done" },
            chart: "Bar"
        },
        section6: {
            title: "Đề thi được giao",
            rows: { "Tổng đề giao:": "Total", "Tổng đề làm:": "Done", "Thời gian làm:": "TotalHour" },
            Api: "TestAssignment",
            data: { "Đã xong": "Done", "Chưa xong": "NotYet" },
            chart: "Pie"
        },
        section7: {
            title: "Kỳ thi tham dự ",
            rows: {},
            Api: "ExamStudent",
            data: { "Tổng số": "Total", "Đã làm": "Done" },
            chart: "Bar"
        },
        section8: {
            title: "Kỳ thi tham dự ",
            rows: { "Số lớp học tham gia:": "Done", "Số thời gian học:": "TotalHour" },
            Api: "TutorStudent",
            data: { "Đã xong": "Done", "Chưa xong": "NotYet" },
            chart: "Pie"
        },
        section9: {
            title: "Số môn học",
            rows: { "Số môn học tham gia:": "Done" },
            Api: "SubjectStudent",
            data: { "Tổng số": "Total", "Đã làm": "Done" },
            chart: "Bar"
        },
        section10: {
            title: "Số Tài liệu xem",
            rows: { "Số tài liệu đã xem:": "Done" },
            Api: "FileStudent",
            data: { "Tổng số": "Total", "Đã làm": "Done" },
            chart: "Pie"
        },
    }

    const [isRightButtonVisible, setIsRightButtonVisible] = useState(true);

  const handleClick = (api) => {
    // Thực hiện các hành động khi nút được nhấn
    console.log(`Button with API ${api} clicked.`);

  };

  const handleToggleButtons = () => {
    setIsRightButtonVisible(!isRightButtonVisible);

  };


    const handleClickType = async (type) => {
        SetisLoading({ ...isLoading, [type]: true });
        console.log("isLoading:", isLoading);
        console.log("type:", type);
        const data = await GetApiLmsCountStudent(type);
        //đep dữ liệu vừa lấy vào result
        result[type] = data;
        SetisLoading({ ...isLoading, [type]: false });
        console.log("result:", result);
        console.log("isLoading:", isLoading);
        setShowChart({ ...showChart, [type]: true });
    }

    const handleHideChart = (type) => {
        setShowChart({ ...showChart, [type]: false });
        console.log("showChart:", showChart);
    }

    const GetCountDataExercise = async () => {
        const userName = 'admin';
        const apiUrl = `https://admin.metalearn.vn/MobileLogin/GetCountDataExercise?userName=${userName}`;
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            const responseData = await response.json();
            const data = responseData.Object;
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const handleClickExcersise = async () => {
        const data = await GetCountDataExercise();
        setExcersise(data)
        setHideExcersise(false);
    }
    const handleHideExcersise = () => {
        setHideExcersise(true);
    }

    
    useEffect(() => {
        console.log("excersise:", excersise);
    }, [excersise])


    return (
        <div style={{ width: "50%", marginTop: "50px" }}>
            <div>
                {Object.keys(sections).map((sectionKey, index) => {
                    const section = sections[sectionKey];
                    const { rows, data } = section;

                    // const lineChartData = {
                    //     labels: Object.keys(rows),
                    //     datasets: [
                    //         {
                    //             label: "Dữ liệu biểu đồ",
                    //             data: result[section.Api] ? Object.values(rows).map((row) => result[section.Api][row]) : [],
                    //             fill: false,
                    //             borderColor: "rgba(75, 192, 192, 1)",
                    //             borderWidth: 2,
                    //         },
                    //     ],
                    // };
                    // Tạo dữ liệu biểu đồ cho từng section
                    const lineChartData = {
                        labels: Object.keys(data),
                        datasets: [
                            {
                                label: "Dữ liệu biểu đồ",
                                data: result[section.Api] ?
                                    Object.values(data).map((dt) => {
                                        if (dt === "Minus") {
                                            return result[section.Api]["Done"] - result[section.Api]["Correct"];
                                        }
                                        else if (dt === "Percent") {
                                            return (result[section.Api]["Done"] / result[section.Api]["Total"]) * 100;
                                        }
                                        else if (dt === "NotYet") {
                                            return result[section.Api]["Total"] - result[section.Api]["Done"];
                                        }
                                        return result[section.Api][dt]
                                    }) : [],
                                fill: false,
                                borderColor: "rgba(75, 192, 192, 1)",
                                borderWidth: 2,
                            },
                        ],
                    };
                    const pieChartData = {
                        labels: Object.keys(data),
                        datasets: [
                            {
                                data: result[section.Api] ?
                                    Object.values(data).map((dt) => {
                                        if (dt === "Minus") {
                                            return result[section.Api]["Done"] - result[section.Api]["Correct"];
                                        }
                                        else if (dt === "Percent") {
                                            return (result[section.Api]["Done"] / result[section.Api]["Total"]) * 100;
                                        }
                                        else if (dt === "NotYet") {
                                            return result[section.Api]["Total"] - result[section.Api]["Done"];
                                        }
                                        return result[section.Api][dt]
                                    }) : [],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(75, 192, 192, 0.6)',
                                    'rgba(153, 102, 255, 0.6)',
                                ],
                                borderWidth: 1,
                            },
                        ],
                    };

                    return (



















                        <div key={index} className={cx("section")}>
                            <div className={cx("section-title")}>
                                <h1>{section.title}</h1>
                            </div>
                            <button className={cx("CountStudent-icon")} onClick={() => handleClickType(section.Api)}> <FontAwesomeIcon icon={faCircleArrowRight} /> </button>


                            {/* <div>
                                {isRightButtonVisible ? (
                                    <button className={cx('CountStudent-icon')} onClick={() => {
                                        handleToggleButtons();
                                        handleClickType(section.Api)
                                    }}>
                                        <FontAwesomeIcon icon={faCircleArrowRight} />
                                    </button>
                                ) : (
                                    <button className={cx('CountStudent-icon')} onClick={() =>
                                        {handleHideChart(section.Api);
                                        handleToggleButtons();
                                        }}>
                                    <FontAwesomeIcon icon={faCircleArrowDown} />
                                    </button>
                                )}

                                

                            </div> */}

                            
                            {result[section.Api] && showChart[section.Api] ? (
                                <div>

                                    <button className={cx("CountStudent-icon")} onClick={() => handleHideChart(section.Api)}> <FontAwesomeIcon icon={faCircleArrowDown} /> </button>
                                    

                                    <div className={cx("section-render")}>
        
                                        {/* <div className={cx("data-details")}>
                                            {Object.keys(rows).map((rowKey, rowIndex) => {
                                                const row = rows[rowKey];
                                                return (
                                                    <div key={rowIndex}>
                                                        <text>{rowKey}</text>
                                                        {row === "Minus" ? (
                                                            <text>{result[section.Api]["Done"] - result[section.Api]["Correct"]}</text>
                                                        ) : row === "Percent" ? (
                                                            <text>{(result[section.Api]["Done"] / result[section.Api]["Total"]) * 100}%</text>
                                                        ) : (
                                                            <text>{result[section.Api][row]}</text>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div> */}
                                        <div className={cx("chart-image")}>
                                            {/*{
                                                section.chart === "Bar" ? (
                                                    <Bar data={lineChartData} />
                                                ) : section.chart === "Pie" ? (
                                                    <Pie data={pieChartData} />
                                                ) : null
                                            } */}
                                        </div>
                                    </div>



                                    <div className={cx("data-details")}>
                                        {Object.keys(rows).map((rowKey, rowIndex) => {
                                            const row = rows[rowKey];
                                            return (
                                                <div key={rowIndex}>
                                                     <FontAwesomeIcon icon={faRightToBracket} />
                                                    <text style={{marginLeft: "15px"}}>{rowKey}</text>
                                                    {row === "Minus" ? (
                                                        <text>{result[section.Api]["Done"] - result[section.Api]["Correct"]}</text>
                                                    ) : row === "Percent" ? (
                                                        <text>{(result[section.Api]["Done"] / result[section.Api]["Total"]) * 100}%</text>
                                                    ) : (
                                                        <text>{result[section.Api][row]}</text>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                
                            ) : isLoading[section.Api] ? (
                                <h1>Loading...</h1>
                            ) : null}
                        </div>
                    );
                })}






                <div className={cx("section-last")}>
                    <h1>Bài tập khóa học</h1>
                    <button className={cx("CountStudent-icon")} onClick={handleClickExcersise}> <FontAwesomeIcon icon={faCircleArrowRight} /> </button>
                    {
                        hideExcersise === false ? (
                            <button className={cx("CountStudent-icon")} onClick={handleHideExcersise}> <FontAwesomeIcon icon={faCircleArrowDown} /> </button>
                        ) : (
                            null
                        )
                    }
                    {
                        excersise && hideExcersise === false ? excersise.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={cx("QuizObjCode")}>{item.QuizObjCode}</div>
                                    <div className={cx("LectName")}>{item.LectName}</div>
                                    {
                                        item.ListDataExam.map((itemExam, indexExam) => {
                                            const jsonArray = JSON.parse(itemExam.JsonData);
                                            return (
                                                <div key={indexExam}>
                                                    <p className={cx("create")}>{itemExam.CreatedBy}</p>
                                                    <p className={cx("date33")}>{itemExam.CreatedTime}</p>
                                                    <div className={cx("item-exam-content")} dangerouslySetInnerHTML={{ __html: itemExam.Content }} />
                                                    {
                                                        jsonArray.map((itemJson, indexJson) => {
                                                            return (
                                                                <div key={indexJson}>
                                                                     <span className={cx("itemJson-answer")}  dangerouslySetInnerHTML={{ __html: itemJson.Answer }} />    
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }) : null
                    }
                </div>
            </div>
        </div>
    );
}

export default CountStudent;
