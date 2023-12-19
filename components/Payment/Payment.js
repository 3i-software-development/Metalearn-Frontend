import React from "react";
import styles from './style.module.scss'; // Import SCSS styles for classNames
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Payment = () => {
    const fakeData = [
        {
            date: '2021-01-01',
            amount: 100,
            method: 'Credit Card',
            status: 'Paid'
        },
        {
            date: '2021-01-01',
            amount: 100,
            method: 'Credit Card',
            status: 'Paid'
        }
    ];

    return (
        <div className={cx("payment")}>
            <div className={cx("payment__title")}>
                <h1>Payment</h1>
            </div>
            <div className={cx("payment__history")}>
                <h2>Payment History</h2>
                <table className={cx("payment__history__table")}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Method</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fakeData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.amount}</td>
                                <td>{item.method}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Payment;
