import React from 'react'
import classNames from "classnames/bind";
import styles from './style.module.scss'
const cx = classNames.bind(styles);
import {BsFillCursorFill, BsFileEarmarkTextFill, BsUpload, BsFillChatLeftTextFill} from 'react-icons/bs'
import {AiOutlineMenu, AiTwotoneContainer} from 'react-icons/ai'

const Content = () => {
  return (
      <p className={cx('tab-title-text')}>Góp phần hình thành và phát triển năng lực toán học với yêu cầu cần đạt: thực hiện được các thao tác tính toán ở mức độ
    đơn giản; nêu và trả lời được câu hỏi khi lập luận, giải quyết vấn đề đơn giản và thiết thực nhất trong cuộc sống; lựa chọn được
    các phép toán và công thức số học để trình bày, diễn đạt (nói hoặc viết) được các nội dung, ý tưởng, cách thức giải quyết vấn đề;
    sử dụng được ngôn ngữ toán học kết hợp với ngôn ngữ thông thường, động tác hình thể để biểu đạt các nội dung toán học ở
    những tình huống đơn giản; sử dụng được các công cụ, phương tiện học toán đơn giản để thực hiện các nhiệm vụ học tập toán
    đơn giản
      </p>
  )
}

const Exercise = () => {
  const data = [
    {title: 'Khi đặt vào hai đầu dây dẫn một hiệu điện thế 12V thì cường độ dòng điện chạy qua nó là 0,5A. nếu điện thế đặt vào hai đầu dây dẫn đó tăng lên đến 36V thì cường độ chạy qua nó là bao nhiêu.'},
    {title: 'Vậy cường độ dòng điện chạy qua dây dẫn khi U'},
    {title: 'Cường độ dòng điện chạy qua một dây dẫn là 1,5A khi đó được mắc vào hiệu điện thế 12V. Muốn dòng điện chạy qua dây dẫn đó tăng thêm 0,5A thì hiệu điện thế phải là bao nhiêu ?'}
  ]
  return (
    data?.map((e, i) => {
      return (
        <div key={i} className={cx('tab-title-text')}>
          <h2 key={i} className={cx('tab-text-exercise')} >
            {e.title}
          </h2>
          <hr className={cx('hr')} />
        </div>
      )
    })
  )
}

const Extend = () => {
  const data = [
    {title: 'Giới thiệu khóa học', icon: <BsFillCursorFill size={20} />},
    {title: 'Chứng chỉ khóa học', icon: <BsFileEarmarkTextFill size={20} />},
    {title: 'Chia sẻ khóa học', icon: <BsUpload size={20} />},
    {title: 'Hỏi đáp', icon: <BsFillChatLeftTextFill size={20} />},
    {title: 'Tài liệu tham khảo', icon: <AiOutlineMenu size={20} />},
    {title: 'Tương tác', icon: <AiTwotoneContainer size={20} />}
  ]
  return (
    data?.map((e, i) => {
      return (
        <div className={cx('tab-text-extend')} key={i}>
          <span style={{color: '#808080', paddingRight: '1rem'}}>{e?.icon}</span>
          <h2 style={{fontSize: '1.4rem', verticalAlign: 'middle', color: '#808080'}}>{e.title}</h2>
        </div>
      )
    })
  )
}

const Tab = ({ id }) => {
  return (
    <>
      {id == 1 && <Content />}
      {id == 2 && <Exercise />}
      {id == 3 && <Extend />}
    </>
  )
}

export default Tab