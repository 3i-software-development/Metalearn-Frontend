import React, { useState, useEffect } from "react";
import styles from './style.module.scss'; // Import SCSS styles for classNames
import classNames from 'classnames/bind';
import { GetApiLmsCountStudent } from "@/pages/api/CallAPI_H"
import { set } from "react-hook-form";

import { Bar } from "react-chartjs-2";
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

    const [isLoading, setIsLoading] = useState(false);

    const [result, setResult] = useState({
        QuizVoluntary: {},
        QuizAssignment: {},
        LectureVoluntary: {},
        LectureAssignment: {},
        TestVoluntary: {},
        TestAssignment: {},
        ExamStudent: {},
        TutorStudent: {},
        SubjectStudent: {},
        FileStudent: {},
    });

    const sections = {
        section1: {
            title: "Câu hỏi tự luyện",
            rows: { "Tổng số:": "Total", "Đã làm": "Done", "Số Câu đúng": "Correct", "Số câu sai": "Minus", "Tổng số giờ làm": "TotalHour" },
            Api: "QuizVoluntary"
        },
        section2: {
            title: "Câu hỏi được giao",
            rows: { "Tổng số:": "Total", "Đã làm": "Done", "Số Câu đúng": "Correct", "Số câu sai": "Minus", "Tổng số giờ làm": "TotalHour" },
            Api: "QuizAssignment"
        },
        section3: {
            title: "Bài giảng tự luyện",
            rows: { "Đã xem": "Total", "Tổng số giờ xem": "Done" },
            Api: "LectureVoluntary"
        },
        section4: {
            title: "Bài giảng được giao ",
            rows: { "Tổng số": "Total", "Đã xem": "Done", "Tổng số giờ xem": "TotalHour" },
            Api: "LectureAssignment"
        },
        section5: {
            title: "Đề thi tự luyện ",
            rows: { "Tổng đề luyện": "Total", "Đạt được": "Percent", "Tổng số giờ làm": "TotalHour" },
            Api: "TestVoluntary"
        },
        section6: {
            title: "Đề thi được giao",
            rows: { "Tổng đề giao:": "Total", "Tổng đề làm:": "Done", "Thời gian làm:": "TotalHour" },
            Api: "TestAssignment"
        },
        section7: {
            title: "Kỳ thi tham dự ",
            rows: {},
            Api: "ExamStudent"
        },
        section8: {
            title: "Kỳ thi tham dự ",
            rows: { "Số lớp học tham gia:": "Done", "Số thời gian học:": "TotalHour" },
            Api: "TutorStudent"
        },
        section9: {
            title: "Số môn học",
            rows: { "Số môn học tham gia:": "Done" },
            Api: "SubjectStudent"
        },
        section10: {
            title: "Số Tài liệu xem",
            rows: { "Số tài liệu đã xem:": "Done" },
            Api: "FileStudent"
        },
    }

    const GetApiLmsCountStudent = async (type) => {
        const userId = '0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06';
        const apiUrl = `https://admin.metalearn.vn/MobileLogin/GetApiLmsCountStudent?userId=${userId}&type=${type}`;

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
            const data = JSON.parse(responseData[type]);

            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const handleClickType = async (type) => {
        setIsLoading(true);
        console.log("type:", type);
        const result = await GetApiLmsCountStudent(type);
        //đep dữ liệu vừa lấy vào result
        setResult({
            ...result,
            [type]: result,
        });
        setIsLoading(false);
    }



    return (
        <div style={{ width: "50%", marginTop: "50px" }}>
            <div>
                {Object.keys(sections).map((sectionKey, index) => {
                    const section = sections[sectionKey];
                    const { rows } = section;

                    // Tạo dữ liệu biểu đồ cho từng section
                    const lineChartData = {
                        labels: Object.keys(rows),
                        datasets: [
                            {
                                label: "Dữ liệu biểu đồ",
                                data: result[section.Api] ? Object.values(rows).map((row) => result[section.Api][row]) : [],
                                fill: false,
                                borderColor: "rgba(75, 192, 192, 1)",
                                borderWidth: 2,
                            },
                        ],
                    };

                    return (
                        <div key={index} className={cx("section")}>
                            <div className={cx("section-title")}>
                                <h1>{section.title}</h1>
                            </div>
                            <button onClick={() => handleClickType(section.Api)}>Click me</button>
                            {result[section.Api] ? (
                                <div>
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
                                    <Bar data={lineChartData} /> {/* Vẽ biểu đồ cho mỗi section */}
                                </div>
                            ) : isLoading ? (
                                <h1>Loading...</h1>
                            ) : null}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CountStudent;
