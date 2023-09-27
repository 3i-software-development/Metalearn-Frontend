import React, { useState } from "react";
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RoomList = ({JoinList, ManageList, handleRoomSelect}) => {
    const [activeTab, setActiveTab] = useState('connected'); // 'connected' or 'requests'

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    const handleDecline = (userId) => {
        // Add your logic to handle declining a request here
        console.log(`Decline user with ID: ${userId}`);
    }
    const handleSelect = (room) => {
        handleRoomSelect(room)
    }

    return (
        <div className={cx('connection')}>
            <div className={cx('tab-bar')}>
                <button
                    className={cx('tab-button', { active: activeTab === 'connected' })}
                    onClick={() => handleTabChange('connected')}
                >
                    Tham gia
                </button>
                <button
                    className={cx('tab-button', { active: activeTab === 'requests' })}
                    onClick={() => handleTabChange('requests')}
                >
                    Quản lý
                </button>
            </div>

            <div className={cx('tab-content')}>
                {activeTab === 'connected' && (
                    <div className={cx('user-list')}>
                        {JoinList.map((room, index) => (
                            <div key={index} className={cx('user-item')} onClick={() => handleSelect(room)}>
                                <div className={cx('user-info')}>
                                    <div className={cx('user-name')}>{room.title}</div>
                                    <div className={cx('user-status')}>{room.author}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'requests' && (
                    <div className={cx('user-list')}>
                        {ManageList.map((room, index) => (
                            <div key={index} className={cx('user-item')} onClick={() => handleSelect(room)}>
                                <div className={cx('user-info')}>
                                    <div className={cx('user-name')}>{room.title}</div>
                                    <div className={cx('user-status')}>{room.author}</div>
                                </div>
                                <button
                                    className={cx('decline-button')}
                                    onClick={() => handleDecline(room.id)}
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

export default RoomList;
