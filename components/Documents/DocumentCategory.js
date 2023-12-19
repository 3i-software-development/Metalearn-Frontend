import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import imgDoc from '../../public/categori/ct1.jpg';
import imgDoc2 from '../../public/categori/ct2.jpg';
import DocumentList from './DocumentList';
import DocumentView from './DocumentView';

const cx = classNames.bind(styles);

const DocumentCategory = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState('connected');
  const [valueDoc, setValueDoc] = useState(imgDoc);


  const imgDoc3 = { ...imgDoc2, src: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", height: null, width: null }
  const imgDoc4 = { ...imgDoc2, src: "https://file-examples.com/storage/fec36b918d65009119ed030/2017/02/file-sample_100kB.doc", height: null, width: null }

  const Receive = [
    imgDoc, imgDoc3, imgDoc4, imgDoc2, imgDoc
  ];
  const Read = [
    imgDoc3, imgDoc4, imgDoc2, imgDoc
  ];

  const handleSelectDoc = (document) => {
    setValueDoc(document)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className={cx('document-page')}>
      <div className={cx('document-layout')}>

        <div className={cx('document-category-name-list')}>
          <div className={cx('tab-bar')}>
            <button
              className={cx('tab-button', { active: activeTab === 'connected' })}
              onClick={() => handleTabChange('connected')}
            >
              Được giao
            </button>
            <button
              className={cx('tab-button', { active: activeTab === 'requests' })}
              onClick={() => handleTabChange('requests')}
            >
              Đã đọc
            </button>
          </div>
          <div className={cx('tab-content')}>
            {activeTab === 'connected' && (
              <div className={cx('user-list')}>
                <DocumentList listDoc={Receive} handleSelectDoc={handleSelectDoc} />
              </div>
            )}

            {activeTab === 'requests' && (
              <div className={cx('user-list')}>
                <DocumentList listDoc={Read} handleSelectDoc={handleSelectDoc} />
              </div>
            )}
          </div>
        </div>
        <div className={cx('document-category-item')}>
          <DocumentView valueDoc={valueDoc} />
        </div>
      </div>
    </div>
  );
};

export default DocumentCategory;
