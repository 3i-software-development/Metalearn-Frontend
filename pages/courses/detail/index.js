import React from 'react'
import styles from './style.module.scss'
import Section from "@/components/Section/Section";
import {Tabs} from 'antd'
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import { BsFillCameraVideoOffFill } from "react-icons/bs";
import {AiOutlineLeft} from 'react-icons/ai'
import Link from 'next/link';

const items = [
  {
    label: 'Danh sách'
  },
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

const Content = ({label}) => {
  return (
    <div className={cx('content-layout')}>
      <h1>{label}</h1>
    </div>
  )
}

const Detail = () => {
  return (
    <Section>
      <div className={cx('header-detail')}>
        <AiOutlineLeft size={30} />
        <h2 className={cx('title')}>Khoa hoc lap trinh</h2>
        <BsFillCameraVideoOffFill size={30} />
      </div>
      <div className={cx('background')}></div>
      <div className={cx('content')}>
        <Tabs
        defaultActiveKey='1'
        centered
        items={items.map((_, i) => {
          const id = String(i + 1)
          return {
            label: _.label,
            key: id,
            children: <Content label={_.label} />
          }
        })} />
      </div>
    </Section>
  )
}

export default Detail