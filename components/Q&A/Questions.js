import React, { useState } from "react";
import QuestionItem from "./QuestionItem";
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

const Questions = () => {
    const fakeData = [
        {
            id: 1,
            subject: 'Toán',
            questions: [
                {
                    id: 1,
                    content: '1 + 1 = ?',
                    comments: [{ id: 1, content: '2' }, { id: 2, content: '3' }, { id: 1, content: '2' }, { id: 2, content: '3' }, { id: 1, content: '2' }, { id: 2, content: '3' }, { id: 1, content: '2' }, { id: 2, content: '3' }]
                },
                {
                    id: 2,
                    content: '1 + 2 = ?',
                    comments: [{ id: 1, content: '2' }, { id: 2, content: '3' }]
                },
                {
                    id: 2,
                    content: '1 + 2 = ?',
                    comments: [{ id: 1, content: '2' }, { id: 2, content: '3' }]
                },
                {
                    id: 2,
                    content: '1 + 2 = ?',
                    comments: [{ id: 1, content: '2' }, { id: 2, content: '3' }]
                },
                {
                    id: 2,
                    content: '1 + 2 = ?',
                    comments: [{ id: 1, content: '2' }, { id: 2, content: '3' }]
                },
            ]
        },
        {
            id: 2,
            subject: 'Lý',
            questions: [
                {
                    id: 1,
                    content: '1 + 3 = ?',
                    comments: [{ id: 1, content: '2xxxx' }, { id: 2, content: '3đe' }]
                },
                {
                    id: 2,
                    content: '1 + 4 = ?',
                    comments: [{ id: 1, content: '2aaa' }, { id: 2, content: '3ee' }]
                },
            ]
        },
        {
            id: 3,
            subject: 'Toán',
            questions: [
                {
                    id: 1,
                    content: '1 + 1 = ?',
                    comments: [{ id: 1, content: '2' }, { id: 2, content: '3' }, { id: 1, content: '2' }, { id: 2, content: '3' }, { id: 1, content: '2' }, { id: 2, content: '3' }]
                },
                {
                    id: 2,
                    content: '1 + 2 = ?',
                    comments: [{ id: 1, content: '2' }, { id: 2, content: '3' }]
                },
            ]
        },
        {
            id: 4,
            subject: 'Lý',
            questions: [
                {
                    id: 1,
                    content: '1 + 3 = ?',
                    comments: [{ id: 1, content: '2xxxx' }, { id: 2, content: '3đe' }]
                },
                {
                    id: 2,
                    content: '1 + 4 = ?',
                    comments: [{ id: 1, content: '2aaa' }, { id: 2, content: '3ee' }]
                },
            ]
        },
    ]

    const [selectedGroup, setSelectedGroup] = useState(fakeData[0])
    const handleSelectGroup = (question) => {
        setSelectedGroup(question)
    }
    return (
        <div className={cx("questions-container")}>
            <div>
                {
                    fakeData.map((group, index) => {
                        return (
                            <div key={index} onClick={() => handleSelectGroup(group)}>
                                <div className={cx(
                                    'group', // Default class when the condition is not met
                                    { 'selected-group': selectedGroup && group.id === selectedGroup.id }
                                )}  >
                                    <div className={cx('group-name')}>
                                        {group.subject}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <QuestionItem group={selectedGroup} />
        </div>
    )
}

export default Questions;