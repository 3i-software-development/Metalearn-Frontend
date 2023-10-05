import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import DocumentCategoryItem from './DocumentCategoryItem';
import imgDoc from '../../public/categori/ct1.jpg';
import imgDoc2 from '../../public/categori/ct2.jpg';

const cx = classNames.bind(styles);

const DocumentCategory = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState('connected');


  // fakedata for Document Item
  const imgDoc3 = { ...imgDoc2, src: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", height: null, width: null }
  const imgDoc4 = { ...imgDoc2, src: "https://file-examples.com/storage/fec36b918d65009119ed030/2017/02/file-sample_100kB.doc", height: null, width: null }
  const fakedata = [imgDoc4, imgDoc2, imgDoc3, imgDoc, imgDoc2, imgDoc3, imgDoc, imgDoc2, imgDoc3, imgDoc, imgDoc2, imgDoc3, imgDoc4]
  const fakedata1 = [imgDoc2, imgDoc3, imgDoc, imgDoc2, imgDoc3, imgDoc4]
  const fakedata2 = [imgDoc2, imgDoc3, imgDoc]

  const Receive = [
    { id: 1, name: 'Toán', exams: 10, questions: 100, data: fakedata },
    { id: 2, name: 'Lý', exams: 10, questions: 100, data: fakedata1 },
    { id: 3, name: 'Hóa', exams: 10, questions: 100, data: fakedata2 },
    { id: 4, name: 'Sinh', exams: 10, questions: 100, data: fakedata },
  ];
  const Read = [
    { id: 10, name: 'Công nghệ', exams: 10, questions: 100, data: fakedata },
    { id: 11, name: 'Tin học', exams: 10, questions: 100, data: fakedata1 },
    { id: 5, name: 'Văn', exams: 10, questions: 100, data: fakedata1 },
  ];

  const handleItemClick = (item) => {
    // Set the selected item to the clicked item
    setSelectedItem(item);
  };

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
                {Receive.map((item) => (
                  <div
                    className={cx('document-category-name', {
                      'selected': selectedItem && selectedItem.id === item.id,
                    })}
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                  >
                    <h2>{item.name}</h2>
                    <p>số đề thi: {item.exams}</p>
                    <p>số câu hỏi: {item.questions}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'requests' && (
              <div className={cx('user-list')}>
                {Read.map((item) => (
                  <div
                    className={cx('document-category-name', {
                      'selected': selectedItem && selectedItem.id === item.id,
                    })}
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                  >
                    <h2>{item.name}</h2>
                    <p>số đề thi: {item.exams}</p>
                    <p>số câu hỏi: {item.questions}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={cx('document-category-item')}>
          {selectedItem && <DocumentCategoryItem name={selectedItem.name} data={selectedItem.data} />}
        </div>
      </div>
    </div>
  );
};

export default DocumentCategory;
