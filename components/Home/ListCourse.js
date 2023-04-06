import React,{useState,useEffect} from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import ListCourses from '../ListCourse/ListCourses';


const cx = classNames.bind(styles);

const ListCourse = () => {

  const [btnact,setBtnact] = useState(1)

  return (
    <div className={cx('list-course-container')}>
        <h1 className={cx('h1')}>
            Vô vàn khóa học , tài liệu , đề thi để lựa chọn
        </h1>
        <p className={cx('text-p')}>Chọn lựa từ +100 000 video ,tài liệu chất lượng được cập nhật hàng ngày</p>
        <div className={cx('list-btn')}>
            <button className={cx('active')}>Tiếng Anh</button>
            <button>Toán học</button>
            <button>Word</button>
            <button>Excel</button>
            <button>Lập trình</button>
            <button>Đồ họa</button>
            <button>Tester</button>
        </div>
        <div className={cx('list-main')}>
            <h2>Mở rộng cơ hội nghề nghiệp với ngoại ngữ</h2>
            <p className={cx('text-p')}>Với sự phát triển của nền kinh tế toàn cầu và sự liên kết giữa các quốc gia, tiếng Anh đã trở thành ngôn ngữ chính thức của giao tiếp quốc tế. Việc thành thạo tiếng Anh giúp bạn có thể tham gia vào các cuộc họp, đối thoại và thương lượng với đối tác nước ngoài một cách hiệu quả. Điều này sẽ giúp bạn tạo được niềm tin và đánh giá cao trong mắt các đồng nghiệp và cấp quản lý, từ đó tạo ra cơ hội thăng tiến trong công việc. </p>
            <Link href='/subjects' className={cx('explore')}>Xem thêm</Link>
            
            <ListCourses/>
        </div>
    </div>
  )
}

export default ListCourse