import React from "react";
import { Menu, Icon} from 'antd'
import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import classNames from "classnames/bind";
import styles from './style.module.scss'
const cx = classNames.bind(styles);

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Bai 1', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null),
    getItem('Item 2', 'g2', null),
  ]),
  {
    type: 'divider',
  },
  getItem('Bai 2', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null),
  ]),
  {
    type: 'divider',
  },
  getItem('Bai 3', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

const Content = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div className={cx('content-layout')}>
      <Menu
        mode="inline"
        style={{width: '100%'}}>
        <Menu.SubMenu key="1" title="Phần 1 = Giới thiệu">
          <Menu.Item>Item 1</Menu.Item>
        </Menu.SubMenu>
        <Menu.Divider />
        <Menu.SubMenu key="2" title="Phần 2">
          <Menu.Item>Item 2</Menu.Item>
        </Menu.SubMenu>
        <Menu.Divider />
        <Menu.SubMenu key="3" title="Phần 3">
          <Menu.Item>Item 3</Menu.Item>
        </Menu.SubMenu>
        <Menu.Divider />
    </Menu>
    </div>
  );
}

export default Content