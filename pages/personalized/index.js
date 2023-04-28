import Personalized from '@/components/Personalized/Personalized'
import React from 'react'
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Section from '@/components/Section/Section';
const cx = classNames.bind(styles);
const index = () => {
  return (
    <Section>
      <Personalized/>
    </Section>
  )
}

export default index