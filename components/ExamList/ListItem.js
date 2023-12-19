import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";

const cx = classNames.bind(style);

const ListItem = ({ data }) => {
  const completionPercentage = data.progress + '%';

  return (
    <div className={cx('exam-container')}>
      <div className={cx('exam-section')}>
        <div style={{ margin: '5px' }}>
          <p><i class="fa-solid fa-file-pen fa-2xl"></i></p>
        </div>
        <div>
          <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{data.title}</p>
          <div style={{ display: 'flex', color: 'gold' }}>
            <p><i class="fa-regular fa-star"></i></p>
            <p><i class="fa-regular fa-star"></i></p>
            <p><i class="fa-regular fa-star"></i></p>
            <p><i class="fa-regular fa-star"></i></p>
            <p><i class="fa-regular fa-star"></i></p>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between',
       marginLeft: '35px', marginRight:'35px' }}>
        <p style={{ fontSize: '16px' }}>Tác giả: {data.author}</p>
        
        <p></p>
        <p style={{ fontSize: '16px' }}>{data.number_questions}</p>
      </div>
      <p style={{
        fontSize: '16px',
        marginLeft: '35px'
      }}>{data.date}</p>
      <div className={cx('progress-bar')}>
        <div className={cx('progress')} style={{ width: `${data.progress}%` }}>
          <span className={cx('completion')}>{completionPercentage}</span>
        </div>
      </div>
      <p style={{ fontSize: '16px', marginLeft: '35px' }}>Giá: {data.price} [{data.status}]</p>
      <p style={{
        fontSize: '16px', color: 'purple',
        marginLeft: '35px'
      }}>Môn học: {data.subject}</p>
      <div style={{justifyContent: 'space-around', display: 'flex',
       marginTop: '10px', marginBottom:'10px'}}>
        <p><i class="fa-solid fa-circle-question fa-xl"></i></p>
        <p><i class="fa-solid fa-thumbtack fa-xl"></i></p>
        <p><i class="fa-solid fa-download fa-xl"></i></p>
      </div>
    </div>
  );
};

export default ListItem;