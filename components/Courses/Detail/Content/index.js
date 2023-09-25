import React from "react";
import { Menu, Icon} from 'antd'
import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import classNames from "classnames/bind";
import styles from './style.module.scss'
const cx = classNames.bind(styles);
import {BiTable} from 'react-icons/bi'

const Content = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  const menu = ({text}) => {
    return (
      <div className={cx('menu-layout')}>
        <BiTable />
        <span>{text}</span>
      </div>
    )
  }

  return (
    <div className={cx('content-layout')}>
      <Menu
        mode="inline"
        style={{width: '100%', fontSize: '1rem'}}>
        <Menu.SubMenu key="1" title="Phần 1 = Giới thiệu" style={{fontSize: '1rem'}}>
          <Menu.Item>Thời không sai lệch</Menu.Item>
          <Menu.Item>Bạch Nguyệt Quang và nốt chu sa</Menu.Item>
        </Menu.SubMenu>
        <Menu.Divider />
    </Menu>
    </div>
  );
}

export default Content