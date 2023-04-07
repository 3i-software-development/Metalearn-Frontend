import React,{useState,useEffect} from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import ListCourses from '../ListCourse/ListCourses';
import { ListSubject } from '@/public/data';
import { GetListExam,GetListClass,GetListDoc } from '@/pages/api/CallAPI';


const cx = classNames.bind(styles);

const ListCourse = () => {

  const ListExam = GetListExam();
  const ListClass = GetListClass();
  const ListDoc = GetListDoc();

  const [btnact,setBtnact] = useState(0);
  console.log(ListExam.data)

  return (
    <div className={cx('list-course-container')}>
        <h1 className={cx('h1')}>
            Vô vàn khóa học , tài liệu , đề thi để lựa chọn
        </h1>
        <p className={cx('text-p')}>Chọn lựa từ hàng trăm nghìn câu hỏi ,tài liệu ,lớp học chất lượng được cập nhật hàng ngày</p>
        <div className={cx('list-btn')}>
          {ListSubject.map((item,index)=>
          <button className={cx(btnact==index && 'active')} key={index} onClick={()=>setBtnact(index)}>{item}</button>
          )}
            
            
        </div>
        <div className={cx('list-main')}>
            <h2>Mở rộng cơ hội nghề nghiệp với ngoại ngữ</h2>
            <p className={cx('text-p')}>Với sự phát triển của nền kinh tế toàn cầu và sự liên kết giữa các quốc gia, tiếng Anh đã trở thành ngôn ngữ chính thức của giao tiếp quốc tế. Việc thành thạo tiếng Anh giúp bạn có thể tham gia vào các cuộc họp, đối thoại và thương lượng với đối tác nước ngoài một cách hiệu quả. Điều này sẽ giúp bạn tạo được niềm tin và đánh giá cao trong mắt các đồng nghiệp và cấp quản lý, từ đó tạo ra cơ hội thăng tiến trong công việc. </p>
            <Link href='/subjects' className={cx('explore')}>Xem thêm</Link>
            <h3>Danh sách đề thi</h3>
            {ListExam.data && <ListCourses data={ListExam.data.query} exam/>}
            {/* <h3>Danh sách lớp hoc</h3>
            {ListClass.data && <ListCourses data={ListClass.data}/>} */}
            <h3>Danh sách tài liệu</h3>
            {ListDoc.data && <ListCourses data={ListDoc.data.Object.data1} doc/>}

        </div>
    </div>
  )
}

export default ListCourse