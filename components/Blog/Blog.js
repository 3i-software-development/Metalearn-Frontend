import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import BlogBarItem from './BlogBarItem';
import BlogContent from './BlogContent';

const cx = classNames.bind(styles);

const TreeNode = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNode = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cx('tree-node')}>
      <div onClick={toggleNode} className={cx('tree-node-label')}>
        {label}
        <span className={cx('tree-node-icon', isOpen ? 'open' : 'closed')}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      {isOpen && <div className={cx('tree-node-children')}>{children}</div>}
    </div>
  );
};

const Blog = () => {
    const fakeData = [
        {
            id: 1,
            list_name: 'ten ten',
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
            list_name: 'Bài văn mẫu',
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
            list_name: 'May tinh',
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
        setSelectedBarItem(item);
    };

    return (
        <div className={cx('blog-container')}>
          <div className={cx('blog-bar-list')}>
            {fakeData.map((list) => (
              <TreeNode key={list.id} label={list.list_name}>
                {list.data.map((item) => (
                  <BlogBarItem
                    key={item.id}
                    title={item.title}
                    item={item}
                    isSelected={item === selectedBarItem}
                    handleSelectBarItem={handleSelectBarItem}
                  />
                ))}
              </TreeNode>
            ))}
          </div>
          <BlogContent content={selectedBarItem.content} item={selectedBarItem} />
        </div>
      );
    };
    
    export default Blog;
