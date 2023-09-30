import React from "react";
import { TreeView, TreeItem } from "@mui/x-tree-view";
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { useAuth } from '@/hooks/authContext';


const cx = classNames.bind(styles);

const TreeViewComponent = ({ treeData, handleSelectBarItem }) => {
  const { saveSetting } = useAuth();
  const handleClick = (childItem) => {
    handleSelectBarItem(childItem);
  };
  const divStyleLeft = {
    size: saveSetting["Menu trái"].size + "px",
    color: saveSetting["Menu trái"].color,
    fontFamily: saveSetting["Menu trái"].style,
  };


  return (
    <div className={cx('tree-view-list')}>

      <TreeView
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto", "& .MuiTreeItem-label": { fontSize: divStyleLeft.size }}} style={divStyleLeft} 
      >
        {treeData.map((item) => (
          <TreeItem key={item.nodeId} nodeId={item.nodeId} label={item.label}>
            {item.children && (
              <>
                {item.children.map((childItem) => (
                  <TreeItem
                    key={childItem.nodeId}
                    nodeId={childItem.nodeId}
                    label={childItem.label}
                    onClick={() => handleClick(childItem)}
                  />
                ))}
              </>
            )}
          </TreeItem>
        ))}
      </TreeView>
    </div>
  );
};

export default TreeViewComponent;
