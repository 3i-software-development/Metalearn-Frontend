import React, { useState } from "react";
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Connection = () => {
    const [activeTab, setActiveTab] = useState('connected'); // 'connected' or 'requests'
    const a = {
        id: 2,
        avatar: "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
        name: "Jane Doe",
        status: "offline"
    }

    const connectedUserList = [
        {
            id: 1,
            avatar: "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
            name: "John Doe",
            status: "online"
        },
        {
            id: 2,
            avatar: "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
            name: "Jane Doe",
            status: "offline"
        }, a, a, a
        // Add more users as needed
    ]

    const requestList = [
        {
            id: 1,
            avatar: "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
            name: "Johnssssssss Doe",
            status: "online"
        },
        {
            id: 2,
            avatar: "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
            name: "Jkssss Doe",
            status: "online"
        }, a, a, a
        // Add more users as needed
    ]

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    const handleDecline = (userId) => {
        // Add your logic to handle declining a request here
        console.log(`Decline user with ID: ${userId}`);
    }

    return (
        <div className={cx('connection')}>
            <div className={cx('tab-bar')}>
                <button
                    className={cx('tab-button', { active: activeTab === 'connected' })}
                    onClick={() => handleTabChange('connected')}
                >
                    Connected Users
                </button>
                <button
                    className={cx('tab-button', { active: activeTab === 'requests' })}
                    onClick={() => handleTabChange('requests')}
                >
                    Request List
                </button>
            </div>

            <div className={cx('tab-content')}>
                {activeTab === 'connected' && (
                    <div className={cx('user-list')}>
                        {connectedUserList.map((user) => (
                            <div key={user.id} className={cx('user-item')}>
                                <img src={user.avatar} alt={user.name} className={cx('user-avatar')} />
                                <div className={cx('user-info')}>
                                    <div className={cx('user-name')}>{user.name}</div>
                                    <div className={cx('user-status')}>{user.status}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'requests' && (
                    <div className={cx('user-list')}>
                        {requestList.map((user) => (
                            <div key={user.id} className={cx('user-item')}>
                                <img src={user.avatar} alt={user.name} className={cx('user-avatar')} />
                                <div className={cx('user-info')}>
                                    <div className={cx('user-name')}>{user.name}</div>
                                    <div className={cx('user-status')}>{user.status}</div>
                                </div>
                                <button
                                    className={cx('decline-button')}
                                    onClick={() => handleDecline(user.id)}
                                >
                                    Decline
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Connection;
