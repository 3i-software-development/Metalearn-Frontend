import React, { useState, useEffect } from 'react';
import classNames from "classnames/bind";
import styles from './TestAPI02.module.scss'
import TestAPIItem from "./TestAPIItem";
// import { GetListStatusCardJoB } from "@/pages/api/CallAPI"
import { GetAllPinComment } from "@/pages/api/CallAPITest"



const cx = classNames.bind(styles);

function TestAPI02() {
    const [activeTab, setActiveTab] = useState('join');
    const [teacher, setTeacher] = useState('');
    const [student, setStudent] = useState('admin');


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

    const [allPinComment, setAllPinComment] = useState();

    async function fetchData() {
        try {
            const res = await GetAllPinComment();
            setAllPinComment(res); // Gán mảng dữ liệu từ API vào state boardData
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log(allPinComment);
    }, [allPinComment])

    // console.log(allPinExam);
    return (
        <div className={cx('Online-page')}>
            <div className={cx('document-layout')}>
                <div className={cx('document-category-name-list')}>
                    <div className={cx('tab-bar')}>
                        <button
                            className={cx('tab-button', { active: activeTab === 'join' })}
                            onClick={() => handleTabChange('join')}
                        >
                        </button>
                        <button
                            className={cx('tab-button', { active: activeTab === 'manage' })}
                            onClick={() => handleTabChange('manage')}
                        >
                        </button>
                    </div>
                    <div className={cx('tab-content')}>
                        {activeTab === 'join' && (
                            <div className={cx('manage')}>
                                <TestAPIItem list={allPinComment} />
                            </div>
                        )}

                        {activeTab === 'manage' && (
                            <div className={cx('user-list')}>
                                <TestAPIItem list={allPinComment} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestAPI02;