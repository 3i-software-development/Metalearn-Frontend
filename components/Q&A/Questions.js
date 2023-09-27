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
                    comments: [{ id: 1, content: '2', name: 'Jake' }, { id: 2, content: '3', name: 'Down' }]
                },
                {
                    id: 2,
                    content: '1 + 2 = ?',
                    comments: [{ id: 1, content: '2', name: 'Jake' }, { id: 2, content: '3', name: 'Jake' }]
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
                    comments: [{ id: 1, content: '2xxxx', name: 'Jake' }, { id: 2, content: '3đe', name: 'Jake' }]
                },
                {
                    id: 2,
                    content: '1 + 4 = ?',
                    comments: [{ id: 1, content: '2aaa', name: 'Jake' }, { id: 2, content: '3ee', name: 'Jake' }]
                },
            ]
        },
    ]

    const [selectedGroup, setSelectedGroup] = useState(fakeData[0]);
    const [newQuestion, setNewQuestion] = useState(""); // State for the new question input

    const handleSelectGroup = (question) => {
        setSelectedGroup(question);
    };

    const handleNewQuestionChange = (e) => {
        setNewQuestion(e.target.value);
    };

    const handleAddQuestion = () => {
        // Create a new question object
        const newQuestionObj = {
            id: selectedGroup.questions.length + 1,
            content: newQuestion,
            comments: [],
        };

        // Add the new question to the selected group's questions array
        setSelectedGroup((prevGroup) => ({
            ...prevGroup,
            questions: [...prevGroup.questions, newQuestionObj],
        }));

        // Clear the new question input
        setNewQuestion("");
    };

    return (
        <div className={cx("questions-container")}>
            <div>
                {fakeData.map((group, index) => {
                    return (
                        <div key={index} onClick={() => handleSelectGroup(group)}>
                            <div
                                className={cx(
                                    "group", // Default class when the condition is not met
                                    { "selected-group": selectedGroup && group.id === selectedGroup.id }
                                )}
                            >
                                <div className={cx("group-name")}>{group.subject}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                <div className={cx("new-question")}>
                    {/* Input for creating a new question */}
                    <input
                        type="text"
                        placeholder="Enter a new question..."
                        value={newQuestion}
                        onChange={handleNewQuestionChange}
                    />
                    <button onClick={handleAddQuestion}>Add</button>
                </div>
                <QuestionItem group={selectedGroup} />
            </div>
        </div>
    );
};

export default Questions;