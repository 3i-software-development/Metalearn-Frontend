import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import TutorialContent from './TutorialContent';
import TreeViewComponent from './TreeViewComponent';

const cx = classNames.bind(styles);

const Tutorial = () => {
  const treeData = [
    {
      nodeId: "1",
      label: "Applications",
      children: [
        {
          nodeId: "2",
          label: "Calendar",
          content: 'Welcome to the React PDF viewer documentation. This page covers everything you need to get started with the React PDF viewer component.',
        },
        {
          nodeId: "3",
          label: "Contacts",
          content: "React PDF Viewer is powered by React hooks completely. So it requires React 16.8 or later. If you are using TypeScript, then it requires TypeScript 3.8 or later",
        },
      ],
    },
    {
      nodeId: "4",
      label: "Documents",
      children: [
        {
          nodeId: "5",
          label: "Notes",
          content: 'Welcome to the React PDF viewer documentation. This page covers everything you need to get started with the React PDF viewer component.',
        },
        {
          nodeId: "6",
          label: "Presentations",
          content: 'to the React PDF viewer documentation. This page covers everything you need to get started with the React PDF viewer component.',
        },
      ],
    },
  ];

    const [selectedBarItem, setSelectedBarItem] = useState(treeData[0].children[0]);

    const handleSelectBarItem = (item) => {
        setSelectedBarItem(item);
    };

    return (
        <div className={cx('tutorial-container')}>
          <div className={cx('tutorial-container-1')}>
              <TreeViewComponent treeData={treeData} handleSelectBarItem={handleSelectBarItem}/>
          </div>

          <div className={cx('tutorial-container-2')}>
              <TutorialContent content={selectedBarItem.content} item={selectedBarItem} />
          </div>
        </div>
      );
    };
    
    export default Tutorial;
