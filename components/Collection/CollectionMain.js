import React, { useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import CollectionItem from "./CollectionItem";
import Exam from "../Collection/elements/Exam";
import File from "../Collection/elements/File";
import Quiz from "../Collection/elements/Quiz";
import Questions from "../Collection/elements/Questions";

const cx = classNames.bind(style);

const CollectionMain = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const fakeData = [
        {
            name: 'Questions',
            type: 'Câu hỏi và trả lời',
            total: 1,
            image: 'https://c.files.bbci.co.uk/18145/production/_113692689_quiz_1.png',
        },
        {
            name: 'Exam',
            type: 'Đề thi',
            total: 2,
            image: 'https://c.files.bbci.co.uk/18145/production/_113692689_quiz_1.png',
        },
        {
            name: 'Quiz',
            type: 'Câu hỏi Quiz',
            total: 0,
            image: 'https://c.files.bbci.co.uk/18145/production/_113692689_quiz_1.png',
        },
        {
            name: 'File',
            type: 'Tài liệu',
            total: 0,
            image: 'https://c.files.bbci.co.uk/18145/production/_113692689_quiz_1.png',
        },
    ];

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };

    let content;

    if (!selectedItem) {
        content = null;
    } else {
        switch (selectedItem.name) {
            case 'Quiz':
                content = <Quiz />;
                break;
            case 'File':
                content = <File />;
                break;
            case 'Questions':
                content = <Questions />;
                break;
            case 'Exam':
                content = <Exam />;
                break;
            // Add more cases for other types as needed
            default:
                content = null;
        }
    }

    return (
        <div className={cx('main-section')}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ marginTop: '7px', marginRight: '5px' }}><i className="fa-solid fa-thumbtack"></i></p>
                <h2>Ghim dữ liệu</h2>
            </div>
            <div className={cx("main-container")}>
                <div className={cx("main-list")}>
                    {fakeData.map((item, index) => (
                        <CollectionItem key={index} item={item} handleSelectItem={handleSelectItem} />
                    ))}
                </div>
                <div className={cx("content")}>
                    {content}
                </div>
            </div>
        </div>
    );
}

export default CollectionMain;
