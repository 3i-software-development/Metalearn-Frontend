import CollectionMain from '@/components/Collection/CollectionMain';
import MyExam from '@/components/Collection/MyExam';
import Section from '@/components/Section/Section';
import React from 'react'
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

const Index = () => {
  return (
    <Section>
      <div className={cx("class-content")}>
        <CollectionMain />
        <MyExam />
      </div>
    </Section>
  );
}

export default Index;