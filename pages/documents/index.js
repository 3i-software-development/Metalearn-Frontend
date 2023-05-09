import DocumentList from '@/components/Documents/DocumentList'
import DocumentView from '@/components/Documents/DocumentView'
import Section from '@/components/Section/Section'
import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import DocumentSearch from '@/components/Documents/DocumentSearch';
import imgDoc from '../../public/categori/ct1.jpg';
import imgDoc2 from '../../public/categori/ct2.jpg';
import DocumentUpload from '@/components/Documents/DocumentUpload';

const cx = classNames.bind(styles);

const Index = () => {
  const imgDoc3 = { ...imgDoc2, src: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", height: null, width: null }
  const data = [imgDoc, imgDoc2, imgDoc3, imgDoc, imgDoc2, imgDoc3, imgDoc, imgDoc2, imgDoc3, imgDoc, imgDoc2, imgDoc3]

  const [valueDoc, setValueDoc] = useState(imgDoc);

  const handleSelectDoc = (document) => {
    setValueDoc(document)
  }

  return (
    <Section>
      <h1 className={cx("title")}>Add new document</h1>
      <DocumentUpload />
      <h1 className={cx("title")}>My Document</h1>
      <hr />
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