import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import Section from "@/components/Section/Section";
import { Tabs } from 'antd'
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
  const [idTab, setIdTab] = useState(1)
  return (
    <Section>
      <div className='page-main page-3-columns'>
        <div className='sidebar-left'>
          <SliderBar />
        </div>
        <div className={cx('content')}>
          <h1>01 - Khoa hoc lap trinh HTML- lap trinh</h1>
          <div className={cx('video-wrapper')}>
            <ReactPlayer
              width="100%"
              height="100%"
              controls={true}
              url='https://www.youtube.com/watch?v=wWgIAphfn2U&ab_channel=GeeksforGeeks' />
          </div>
          <Tabs
            defaultActiveKey='1'
            tabBarStyle={{ color: 'chocolate' }}
            centered
            items={items.map((_, i) => {
              const id = String(i + 1)
              return {
                label: (
                  <span className={cx('tab-label')}>
                    {_.label}
                  </span>
                ),
                key: id,
              }
            })}
            onChange={e => setIdTab(e)} />
          <Tab id={idTab} />
        </div>
        <div className='sidebar-right'>
          <h2 style={{ textAlign: 'center' }}>Danh sách</h2>
          <Content />
        </div>
      </div>
    </Section>
  )
}

export default Detail