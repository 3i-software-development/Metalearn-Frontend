import Section from '@/components/Section/Section'
import React, { useState } from 'react'
import DocumentCategory from '@/components/Documents/DocumentCategory';
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

const Index = () => {

  return (
    <Section>
        <DocumentCategory />
    </Section>
  )
}

export default Index