import React, { useState } from "react";
import styles from './style.module.scss'; // Import SCSS styles for classNames
import classNames from 'classnames/bind';
import { Bar } from 'react-chartjs-2';
ChartJS.register(...registerables, BarElement, CategoryScale, Tooltip, Legend);
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    Tooltip,
    Legend,
    registerables,
  } from "chart.js";

const cx = classNames.bind(styles);

const CountStudent = () => {

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
            type: 'Câu hỏi được giao',
            data: {
                Total: 200,
                Done: 50,
                Right: 20,
                Wrong: 30,
                Hours: 15,
            },
        },
        {
            type: 'Câu hỏi được giao',
            data: {
                Total: 100,
                Done: 50,
                Right: 30,
                Wrong: 40,
                Hours: 5,
            },
        },
    ];

    // State to track the selected item index
    const [selectedItem, setSelectedItem] = useState(null);

    // State to track the selected item data
    const handleClick = (item) => {
        setSelectedItem(item);
    };

    // Define data for the linear chart
    const lineChartData = {
        labels: Object.keys(selectedItem?.data || {}), // Assumes selectedItem.data exists
        datasets: [
            {
                label: selectedItem?.type || '',
                data: Object.values(selectedItem?.data || {}),
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)', // Adjust the color as needed
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
        <div className={cx('count-student-container')}>
            <div className={cx('count-student')}>
                {fakeData.map((item, index) => (
                    <div
                        className={cx('count-student-item', {
                            'count-teacher-item--selected': selectedItem === item,
                        })}
                        onClick={() => handleClick(item)}
                    >
                        <p className={cx('count-student-item__type')}>{item.type}</p>
                    </div>
                ))}
            </div>
            <div className={cx('chart')}>
                {selectedItem !== null && (
                    <div>
                        <Bar data={lineChartData} options={lineChartOptions} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default CountStudent;
