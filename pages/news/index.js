import TabItem from '@/components/News/TabsItem'
import Section from '@/components/Section/Section'
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import React from 'react'

const cx = classNames.bind(styles);

const Index = () => {
  return (
    <div className={cx('news-container')}>
      <Section>
        <TabItem />
      </Section>
    </div>
  )
}

export default Index