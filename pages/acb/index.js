
import Section from '@/components/Section/Section';
import React from 'react'
import classNames from "classnames/bind";
import Acb from '@/components/Acb/Acb';
import styles from "./style.module.scss";
import MyExam from '@/components/Collection/MyExam';

const cx = classNames.bind(styles);

const Index = () => {
  return (
    <Section>
      <div className={cx("class-content")}>
        <Acb /> 
      </div>
    </Section>
  );
}

export default Index;