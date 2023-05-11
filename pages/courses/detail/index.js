import React, {useState, useEffect} from 'react'
import styles from './style.module.scss'
import Section from "@/components/Section/Section";
import { Tabs, Menu } from 'antd'
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import Tab from '@/components/Courses/Detail/Tab'
import Content from '@/components/Courses/Detail/Content'
import SliderBar from '@/components/Menu';

const items = [
  {
    label: 'Nội dung'
  },
  {
    label: 'Bài tập'
  },
  {
    label: 'Mở rộng'
  }
]

const Detail = () => {
  return (
    <div className={cx('layout')}>
      <div className={cx('header-detail')}>
        <h2 className={cx('left')}></h2>
        <h2 className={cx('center')}>Khoa hoc lap trinh</h2>
        <h2 className={cx('right')}>Danh sách</h2>
      </div>
      <div className={cx('layout-content')}>
        <div className={cx('layout-menu')}>
          <SliderBar />
        </div>
        <div className={cx('layout-video')}>
          <div className={cx('video-wrapper')}>
            <ReactPlayer 
              width="100%"
              height="100%"
              controls={true}
              url='https://www.youtube.com/watch?v=wWgIAphfn2U&ab_channel=GeeksforGeeks' />
          </div>
          {/* <video className={cx('video')} src='https://www.bigbuckbunny.org/' controls={true} /> */}
          <Tabs
            defaultActiveKey='1'
            tabBarStyle={{ color: 'chocolate' }}
            centered
            items={items.map((_, i) => {
              const id = String(i + 1)
              return {
                label: _.label,
                key: id,
                children: <Tab label={_.label} />
              }
            })} />
        </div>
        <div className={cx('content')}>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Detail