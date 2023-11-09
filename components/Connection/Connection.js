import React, { useState, useEffect } from "react";
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { GetListConnectionWait, GetListConnectionEnabled, GetListConnectionSent, GetUsers } from "@/pages/api/CallAPI_H"
import { set } from "react-hook-form";
import { useAuth } from "@/hooks/authContext";

const cx = classNames.bind(styles);

const Connection = () => {
    const [activeTab, setActiveTab] = useState('connected'); // 'connected' or 'requests'
    const [listConnectionWait, setListConnectionWait] = useState([]);
    const [listConnectionEnabled, setListConnectionEnabled] = useState([]);
    const [listConnectionSent, setListConnectionSent] = useState([]);
    const [listUser, setListUser] = useState([]);

    const { userName } = useAuth();
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    const handleDecline = (userId) => {
        // Add your logic to handle declining a request here
        console.log(`Decline user with ID: ${userId}`);
    }

    async function fetchDataListConnectionEnabled() {
        try {
            const res = await GetListConnectionEnabled(userName);
            setListConnectionEnabled(res);
        } catch (error) {
            // Handle any errors here
        }
    }

    async function fetchDataListConnectionWait() {
        try {
            const res = await GetListConnectionWait(userName);
            setListConnectionWait(res);
        } catch (error) {
            // Handle any errors here
        }
    }

    async function fetchDataListConnectionSent() {
        try {
            const res = await GetListConnectionSent(userName);
            setListConnectionSent(res);
        }
        catch (error) {

        }
    }
    async function fetchDataListUser() {
        try {
            const res = await GetUsers();
            setListUser(res.Object);
        }
        catch (error) {

        }
    }
    useEffect(() => {
        fetchDataListConnectionEnabled();
        fetchDataListConnectionWait();
        fetchDataListConnectionSent();
        fetchDataListUser();
    }, []);

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
                        {/* {connectedUserList.map((user) => (
                            <div key={user.id} className={cx('user-item')}>
                                <img src={user.avatar} alt={user.name} className={cx('user-avatar')} />
                                <div className={cx('user-info')}>
                                    <div className={cx('user-name')}>{user.name}</div>
                                    <div className={cx('user-status')}>{user.status}</div>
                                </div>
                            </div>
                        ))} */}
                        {listConnectionEnabled.map((user, index) => (
                            <div key={index} className={cx('user-item')}>
                                <img  src={`https://admin.metalearn.vn${user.Picture}`} alt={user.UserName} className={cx('user-avatar')} />
                                <div className={cx('user-info')}>
                                    <div className={cx('user-name')}>{user.UserName}</div>
                                    <div className={cx('user-full-name')}>{user.FullName}</div>
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

                {activeTab === 'requests' && (
                    <div className={cx('user-list')}>
                        {/* {requestList.map((user) => (
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
                        ))} */}
                        {listConnectionWait.map((user, index) => (
                            <div key={index} className={cx('user-item')}>
                                <img src={`https://admin.metalearn.vn${user.Picture}`} alt={user.UserName} className={cx('user-avatar')} />
                                <div className={cx('user-info')}>
                                    <div className={cx('user-name')}>{user.UserName}</div>
                                    <div className={cx('user-full-name')}>{user.FullName}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Connection;
