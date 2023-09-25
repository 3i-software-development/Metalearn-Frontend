// TutorialList.js
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import TutorialBarItem from './TutorialBarItem';
import TutorialContent from './TutorialContent';

const cx = classNames.bind(styles);

const Tutorial = () => {
    const fakeData = [
        {
            id: 1,
            list_name: 'Documentation',
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
                {
                    id: 4,
                    title: 'Customize toolbar',
                    content: 'The toolbar of the React PDF viewer component is customizable. You can add your own button to the toolbar, or remove the existing buttons.',
                }
            ]
        },
        {
            id: 2,
            list_name: 'Getting started',
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
                }
            ]
        },
        {
            id: 2,
            list_name: 'Getting started',
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
                }
            ]
        },
    ];

    const [selectedBarItem, setSelectedBarItem] = useState(fakeData[0].data[0]);

    const handleSelectBarItem = (item) => {
        console.log(item);

        setSelectedBarItem(item);
    };

    return (
        <div className={cx('tutorial-container')}>
            <div className={cx('tutorial-bar-list')}>
                {fakeData.map((list) => (
                    <div key={list.id} className={cx('tutorial-list')}>
                        <h1 className={cx('list-name')}>{list.list_name}</h1>
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
                    </div>
                ))}
            </div>
            <TutorialContent content={selectedBarItem.content} item={selectedBarItem}/>
        </div>
    );
};

export default Tutorial;
