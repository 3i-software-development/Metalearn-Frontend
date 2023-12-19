import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Mission02.module.scss';
import { GetListBoardLms, GetListStatusCardJob } from '@/pages/api/CallAPI';
import { faPen, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);



function Mission02({selected}) {
  const [boardData, setBoardData] = useState([]);
  const [cardJob, setCardJob] = useState([]);

  const [itemStates, setItemStates] = useState({
    question1: false,
    question2: false,
    question3: false,
})

const handleItemClick = (itemName) => {
    // Khi nhấp vào một phần tử, chỉ cập nhật trạng thái của phần tử đó
    setItemStates({
        ...itemStates,
        [itemName]: !itemStates[itemName],
    });
  };

  
  async function fetchData01() {
    try {
      const res = await GetListStatusCardJob();
      setCardJob(res.Object); // Gán mảng dữ liệu từ API vào state boardData
    } catch (error) {
      console.error('Error fetching data 3999:', error);
    }
  }

  async function fetchData() {
    try {
      const res = await GetListBoardLms('0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06');
      setBoardData(res.Object); // Gán mảng dữ liệu từ API vào state boardData
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  useEffect(() => {
    fetchData();
    fetchData01();
  }, []);


  return (
    <div className={cx("divall")}>
      <h1 className={cx("Mission-Title-01")}>Thông Tin Chung</h1>
      <div className={cx("Mission-status")}>
        <h3 className={cx("Mission-status-01")}>Đã xem: 2</h3>
        <h3 className={cx("Mission-status-02")}>Đồng ý: 2</h3>
        <h3 className={cx("Mission-status-03")}>Từ Chối: 0</h3>
      </div>
      {/* <h3 className={cx("Mission-Title-02")}>{selected.LmsTaskName}</h3> */}
      <h5 className={cx("Mission-Title-03")}>Admintrator Đã xem [24/10/2023 14:02:49]</h5>

      <div className={cx("Misstion02-Date")}>
          <div>
              <div style={{display: "flex", alignItems: "center"}}>
                  <i class="fa-solid fa-clock"></i>
                  <h4 className={cx("Misstion02-Date-Start")}>Ngày bắt đầu</h4>
              </div>
              <h4 className={cx("date")}>17/10/2023</h4>
          </div>

          <div className={cx("Misstion02-Date-02")}>
              <div style={{display: "flex", alignItems: "center"}}>
                  <i class="fa-solid fa-clock"></i>
                  <h4 className={cx("Misstion02-Date-End")}>Ngày hoàn thành</h4>
              </div>
              <h4 className={cx("date")}>29/10/2023</h4>
          </div>
      </div>

      <div>
          <div className={cx("Mission-Item")}>
              <i class="fa-solid fa-battery-full"></i>
              <h3 className={cx("Mission-Item-title")} onClick={() => handleItemClick("question1")}>Trạng thái</h3>
          </div>
          {itemStates.question1 && (
              <ul>
                {cardJob.map(card => (
                    <li className={cx("Mission-Item-list")} key={card.Value}><input type="radio" name="jhk" />{card.Value}</li>
                ))}
              </ul>
          )}
      </div>



      <div>
          <div className={cx("Mission-Item")}>
              <i class="fa-solid fa-table-list"></i>
              <h3 className={cx("Mission-Item-title")} onClick={() => handleItemClick("question2")}>Bảng nhiệm vụ</h3>
          </div>

          {itemStates.question2 && (
              <ul>
                {boardData.map(board => (
                    <li className={cx("Mission-Item-list")} key={board.BoardID}><input type="radio" name="jhk" />{board.BoardName}</li>
                ))}
              </ul>
              )}
      </div>

      <div>
          <div className={cx("Mission-Item")}>
              <i class="fa-solid fa-list"></i>
              <h3 className={cx("Mission-Item-title")} onClick={() => handleItemClick("question3")}>Danh sách nhiệm vụ</h3>
          </div>

          <div>
              {itemStates.question3 && (
                  <ul>
                      <li className={cx("Mission-Item-list")} ><input type="radio" name="jhk" />Thi thử</li>
                  </ul>
                  )}
          </div>     
      </div>

      <div className={cx("yes-none")}>
        <p className={cx("yes-none-01")}>Từ chối</p>
        <p className={cx("yes-none-02")}>Đồng ý</p>

      </div>

      <div className={cx("Mission-hhh")}>
          <FontAwesomeIcon className={cx("Mission-hhh-01")} icon={faArrowCircleRight} />
          <h2 className={cx("Mission-hhh-02")}>Ghi chú</h2>
          <FontAwesomeIcon className={cx("Mission-hhh-03")} icon={faPen} />
      </div>

    </div>
  );
}

export default Mission02;
