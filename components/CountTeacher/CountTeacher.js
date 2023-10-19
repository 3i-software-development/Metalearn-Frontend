// import React, { useState } from "react";
// import styles from "./style.module.scss";
// import classNames from "classnames/bind";
// import { Bar } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     BarElement,
//     CategoryScale,
//     Tooltip,
//     Legend,
//     registerables,
// } from "chart.js";

// // Register Chart.js components
// ChartJS.register(...registerables, BarElement, CategoryScale, Tooltip, Legend);

// const cx = classNames.bind(styles);

// const CountTeacher = () => {
//     // State to track the selected item index
//     const [selectedItem, setSelectedItem] = useState(null);

//     // State to track the selected item data
//     const [itemStates, setItemStates] = useState({});

//     // Number of teacher data
//     const fakeData = [
//         {
//             type: "Câu hỏi tự luyện",
//             data: {
//                 Total: 100,
//                 Done: 50,
//                 Right: 30,
//                 Wrong: 20,
//                 Hours: 10,
//             },
//         },
//         {
//             type: "Câu hỏi được giao3",
//             data: {
//                 Total: 200,
//                 Done: 50,
//                 Right: 20,
//                 Wrong: 30,
//                 Hours: 15,
//             },
//         },
//         {
//             type: "Câu hỏi được giao",
//             data: {
//                 Total: 100,
//                 Done: 50,
//                 Right: 30,
//                 Wrong: 40,
//                 Hours: 5,
//             },
//         },
//         {
//             type: "Câu hỏi được giao1",
//             data: {
//                 Total: 100,
//                 Done: 50,
//                 Right: 30,
//                 Wrong: 40,
//                 Hours: 5,
//             },
//         },
//         {
//             type: "Câu hỏi được giao2",
//             data: {
//                 Total: 100,
//                 Done: 50,
//                 Right: 30,
//                 Wrong: 40,
//                 Hours: 5,
//             },
//         },
//     ];

//     // Handle item click
//     const handleClick = (item) => {
//         setSelectedItem(item);
//         setItemStates({
//             ...itemStates,
//             [item.type]: !itemStates[item.type],
//         });
//     };

//     // Define data for the linear chart
//     const lineChartData = {
//         labels: Object.keys(selectedItem?.data || {}),
//         datasets: [
//             {
//                 label: selectedItem?.type || "",
//                 data: Object.values(selectedItem?.data || {}),
//                 fill: false,
//                 borderColor: "rgba(75, 192, 192, 1)",
//                 borderWidth: 2,
//             },
//         ],
//     };

//     // Define options for the linear chart
//     const lineChartOptions = {
//         scales: {
//             y: {
//                 beginAtZero: true,
//             },
//         },
//     };

//     return (
//         <div className={cx("count-teacher-container")}>
//             <div className={cx("count-teacher")}>
//                 {fakeData.map((item, index) => (
//                     <div key={index} className={cx("count-teacher-item-container")}>
//                         <div
//                             className={cx("count-teacher-item", {
//                                 "count-teacher-item--selected": selectedItem === item,
//                             })}
//                             onClick={() => handleClick(item)}
//                         >
//                             <div className={cx("count-teacher-item__type")}>{item.type}</div>
//                         </div>
//                         <div className={cx("type-info")}>
//                             {itemStates[item.type] && (
//                                 <div>
//                                     <h4>Tổng số: {item.data.Total}</h4>
//                                     <h4>Đã làm: {item.data.Done}</h4>
//                                     <h4>Số câu đúng {item.data.Right}: 60</h4>
//                                     <h4>Số câu sai: {item.data.Wrong}</h4>
//                                     <h4>Tổng số giờ làm: {item.data.Hours}</h4>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className={cx("chart")}>
//                 {selectedItem !== null && (
//                     <div>
//                         <Bar data={lineChartData} options={lineChartOptions} />
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CountTeacher;

import React, { useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
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

const CountTeacher = () => {
    // State để theo dõi thông tin về item được chọn hiện tại
    const [selectedItem, setSelectedItem] = useState(null);

    // Number of teacher data
    const fakeData = [
        {
            type: "Câu hỏi tự luyện",
            data: {
                Total: 100,
                Done: 50,
                Right: 30,
                Wrong: 20,
                Hours: 10,
            },
        },
        {
            type: "Câu hỏi được giao3",
            data: {
                Total: 200,
                Done: 50,
                Right: 20,
                Wrong: 30,
                Hours: 15,
            },
        },
        {
            type: "Câu hỏi được giao",
            data: {
                Total: 100,
                Done: 50,
                Right: 30,
                Wrong: 40,
                Hours: 5,
            },
        },
        {
            type: "Câu hỏi được giao1",
            data: {
                Total: 100,
                Done: 50,
                Right: 30,
                Wrong: 40,
                Hours: 5,
            },
        },
        {
            type: "Câu hỏi được giao2",
            data: {
                Total: 100,
                Done: 50,
                Right: 30,
                Wrong: 40,
                Hours: 5,
            },
        },
    ];

    // Handle item click
    const handleClick = (item) => {
        // Ẩn item trước đó nếu có
        if (selectedItem && selectedItem.type === item.type) {
            setSelectedItem(null);
        } else {
            // Hiển thị item mới được chọn
            setSelectedItem(item);
        }
    };

    // Define data for the linear chart
    const lineChartData = {
        labels: Object.keys(selectedItem?.data || {}),
        datasets: [
            {
                label: selectedItem?.type || "",
                data: Object.values(selectedItem?.data || {}),
                fill: false,
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
            },
        ],
    };

    // Define options for the linear chart
    const lineChartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className={cx("count-teacher-container")}>
            <div className={cx("count-teacher")}>
                {fakeData.map((item, index) => (
                    <div key={index} className={cx("count-teacher-item-container")}>
                        <div
                            className={cx("count-teacher-item", {
                                "count-teacher-item--selected": selectedItem === item,
                            })}
                            onClick={() => handleClick(item)}
                        >
                            <div className={cx("count-teacher-item__type")}>{item.type}</div>
                        </div>
                        <div className={cx("type-info")}>
                            {selectedItem && selectedItem.type === item.type && (
                                <div>
                                    <h4>Tổng số: {item.data.Total}</h4>
                                    <h4>Đã làm: {item.data.Done}</h4>
                                    <h4>Số câu đúng: {item.data.Right}</h4>
                                    <h4>Số câu sai: {item.data.Wrong}</h4>
                                    <h4>Tổng số giờ làm: {item.data.Hours}</h4>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className={cx("chart")}>
                {selectedItem && (
                    <div className={cx("chart-image")}>
                        <Bar data={lineChartData} options={lineChartOptions} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountTeacher;

