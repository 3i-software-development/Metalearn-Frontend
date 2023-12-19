import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import BlogContent from './BlogContent';
import TreeViewComponent from './TreeViewComponent';

const cx = classNames.bind(styles);

const Blog = () => {
  const treeData = [
    {
      nodeId: "1",
      label: "Applications",
      children: [
        {
          nodeId: "2",
          label: "Calendar",
          date: "Mar 23, 2019",
          author: "John Doe",
          content: 'Welcome to the React PDF viewer documentation. This page covers everything you need to get started with the React PDF viewer component.',
        },
        {
          nodeId: "3",
          label: "Contacts",
          date: "Mar 23, 2019",
          author: "John Doe",
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
          date: "Mar 23, 2019",
          author: "John Doe",
          content: 'Welcome to the React PDF viewer documentation. This page covers everything you need to get started with the React PDF viewer component.',
        },
        {
          nodeId: "6",
          label: "Presentations",
          date: "Mar 23, 2019",
          author: "John Doe",
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
        <div className={cx('blog-container')}>
            <div className={cx('blog-container-1')}>      
                <TreeViewComponent treeData={treeData} handleSelectBarItem={handleSelectBarItem}/>
            </div>
  
          <div className={cx('blog-container-2')}>
              <BlogContent content={selectedBarItem.content} item={selectedBarItem} />
          </div>


          
        </div>
      );
    };
    
    export default Blog;
