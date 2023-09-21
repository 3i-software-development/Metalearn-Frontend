import React, { useState } from "react";
import styles from './style.module.scss'; // Import SCSS styles for classNames
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Subject = () => {
    const [selected, setSelected] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const fakeData = [
        {
            id: 1,
            name: 'Toán',
            questions: [
                {
                    id: 1,
                    content: '1 + 1 = ?',
                },
                {
                    id: 2,
                    content: '1 + 2 = ?',
                },
            ]
        },
        {
            id: 2,
            name: 'Lý',
            questions: [
                {
                    id: 1,
                    content: '1 + 3 = ?',
                },
                {
                    id: 2,
                    content: '1 + 4 = ?',
                },
            ]
        },
    ];

    const filteredSubjects = fakeData.filter(item =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleSelect = (item) => {
        setSelected(item);
    }

    return (
        <div className={cx("subject")}>
            <div className={cx("subject-list")}>
                <h1 className={cx("subject-title")}>Subject</h1>
                <div className={cx("search-bar")}>
                    <input
                        type="text"
                        placeholder="Search subjects"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className={cx("search-input")}
                    />
                </div>
                <div className={cx("subject-items")}>
                    {filteredSubjects.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(item)}
                            className={cx("subject-item", { "selected": selected === item })}
                        >
                            <h2>{item.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            {selected && (
                <div className={cx("subject-content__detail")}>
                    <h2>{selected.name}</h2>
                    <div className={cx("subject-questions")}>
                        <div className={cx("question-list")}>
                            {selected.questions.map((item, index) => (
                                <div key={index} className={cx("question-item")}>
                                    <p>{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Subject;
