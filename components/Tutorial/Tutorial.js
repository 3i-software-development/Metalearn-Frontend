import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import TutorialBarItem from './TutorialBarItem';
import TutorialContent from './TutorialContent';

const cx = classNames.bind(styles);

const Tutorial = () => {
    const fakeData = [
        {
            list_name: 'React PDF Viewer',
            data: [
                {
                    id: 1,
                    title: 'Documentation',
                    content: 'Welcome to the React PDF viewer documentation. This page covers everything you need to get started with the React PDF viewer component.',
                },
                {
                    id: 2,
                    title: 'Getting started',
                    content: "React PDF Viewer is powered by React hooks completely. So it requires React 16.8 or later. If you are using TypeScript, then it requires TypeScript 3.8 or later",
                }
            ]
        },
        {
            list_name: 'React Viewer',
            data: [
                {
                    id: 1,
                    title: 'Documentation',
                    content: 'Welcome to the React PDF viewer documentation. This page covers everything you need to get started with the React PDF viewer component.',
                },
                {
                    id: 2,
                    title: 'Getting started',
                    content: "React PDF Viewer is powered by React hooks completely. So it requires React 16.8 or later. If you are using TypeScript, then it requires TypeScript 3.8 or later",
                },
                {
                    id: 3,
                    title: 'Basic usage',
                    content: 'The following code snippet shows how to use the React PDF viewer component in your React application.',
                },
            ]
        },
        {
            list_name: 'React PDF Viewerzzz',
            data: [
                {
                    id: 1,
                    title: 'Documentation',
                    content: 'Welcome to the React PDF viewer documentation. This page covers everything you need to get started with the React PDF viewer component.',
                },
                {
                    id: 2,
                    title: 'Getting started',
                    content: "React PDF Viewer is powered by React hooks completely. So it requires React 16.8 or later. If you are using TypeScript, then it requires TypeScript 3.8 or later",
                }
            ]
        },
    ];

    // Trạng thái của mục được chọn và danh sách mở / đóng
    const [selectedBarItem, setSelectedBarItem] = useState(fakeData[0]);
    const [openList, setOpenList] = useState(-1); // Sử dụng -1 để chỉ hiện danh sách khi đã nhấp vào nút "toggle"

    // Xử lý khi chọn một mục
    const handleSelectBarItem = (item) => {
        setSelectedBarItem(item);
    };

    // Xử lý khi nhấp vào nút "toggle-button" để mở / đóng danh sách
    const toggleList = (listIndex) => {
        setOpenList(openList === listIndex ? -1 : listIndex); // Đặt -1 để đóng danh sách nếu đã mở hoặc mở danh sách nếu đã đóng
    };

    return (
        <div>
            <div className={cx('tutorial-container')}>
                <div className={cx('tutorial-sidebar')}>
                    {fakeData.map((list, listIndex) => (
                        <div key={listIndex}>
                            <button className={cx('toggle-button')} onClick={() => toggleList(listIndex)}>
                                <h3>{list.list_name}</h3>
                            </button>
                            {openList === listIndex && ( // Chỉ hiển thị danh sách nếu openList === listIndex
                                <div className={cx('tutorial-bar')}>
                                    {list.data.map((item) => (
                                        <TutorialBarItem
                                            key={item.id}
                                            title={item.title}
                                            item={item}
                                            isSelected={item === selectedBarItem}
                                            handleSelectBarItem={handleSelectBarItem}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <TutorialContent content={selectedBarItem.content} />
            </div>
        </div>
    );
};

export default Tutorial;
