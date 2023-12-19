import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons"; // Import biểu tượng
import styles from "./OnlineClasses.module.scss"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Tab } from "@mui/material";
import TabItem from "./TabItem";
import { GetListMyTutorSchedule } from "@/pages/api/CallAPI"
import { set } from "react-hook-form";

const cx = classNames.bind(styles);

function OnlineClasses() {
    const [teacher, setTeacher] = useState('');
    const [student, setStudent] = useState('admin');
    const [activeTab, setActiveTab] = useState('join');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        if (tab === 'join' && tab !== activeTab) {
            setTeacher('admin');
            setStudent('');
            fetchData()
        } else if (tab === 'manage' && tab !== activeTab) {
            setTeacher('');
            setStudent('admin');
            fetchData()
        }
    }
    const [listMyTutorSchedule, setListMyTutorSchedule] = useState([]);

    async function fetchData() {
        try {
            const res = await GetListMyTutorSchedule(teacher, student);
            setListMyTutorSchedule(res.Object);
        } catch (error) {
            // Handle any errors here
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    console.log(listMyTutorSchedule);

    return (
        <div className={cx('Online-page')}>
            <div className={cx('document-layout')}>

                <div className={cx('document-category-name-list')}>
                    <div className={cx('tab-bar')}>
                        <button
                            className={cx('tab-button', { active: activeTab === 'join' })}
                            onClick={() => handleTabChange('join')}
                        >
                            Tham gia {listMyTutorSchedule.CountStudent}
                        </button>
                        <button
                            className={cx('tab-button', { active: activeTab === 'manage' })}
                            onClick={() => handleTabChange('manage')}
                        >
                            Quản lý {listMyTutorSchedule.CountTeacher}
                        </button>
                    </div>
                    <div className={cx('tab-content')}>
                        {activeTab === 'join' && (
                            <div className={cx('manage')}>
                                <TabItem list={listMyTutorSchedule.List} />
                            </div>
                        )}

                        {activeTab === 'manage' && (
                            <div className={cx('user-list')}>
                                <TabItem list={listMyTutorSchedule.List} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnlineClasses