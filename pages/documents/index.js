import DocumentList from '@/components/Documents/DocumentList'
import DocumentView from '@/components/Documents/DocumentView'
import Section from '@/components/Section/Section'
import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import DocumentSearch from '@/components/Documents/DocumentSearch';
import imgDoc from '../../public/categori/ct1.jpg';
import imgDoc2 from '../../public/categori/ct2.jpg';

const cx = classNames.bind(styles);

const Index = () => {
  const imgDoc3 = { ...imgDoc2, src: "doc.doc" }
  const data = [imgDoc, imgDoc2, imgDoc3]

  const [valueDoc, setValueDoc] = useState(imgDoc);

  const handleSelectDoc = (document) => {
    console.log(document)
    setValueDoc(document)
  }

  return (
    <Section>
      <div className={cx("document-content")}>
        <div className={cx("document-search-list")}>
          <DocumentSearch />
          <DocumentList listDoc={data} handleSelectDoc={handleSelectDoc} />
        </div>
        <DocumentView valueDoc={valueDoc} />
      </div>
    </Section>
  )
}

export default Index