import React, { useState } from "react";
import styles from './style.module.scss'; // Import SCSS styles for classNames
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CountStudent() {
    // Tạo một mảng state để theo dõi trạng thái của từng phần tử
    const [itemStates, setItemStates] = useState({
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
        question6: false,
        question7: false,
        question8: false,
        question9: false,
        question10: false,
        question11: false,
    })

    const handleItemClick = (itemName) => {
        // Khi nhấp vào một phần tử, chỉ cập nhật trạng thái của phần tử đó
        setItemStates({
            ...itemStates,
            [itemName]: !itemStates[itemName],
        });
    };

    return (
        <div style={{ width: "50%", marginTop: "50px" }}>

            <h1 style={{ marginBottom: "40px", zIndex: 1 }}>Tính Chuyên Cần Học Viên</h1>
           
            <div style={{display: "flex", alignItems: "center", marginTop: "17px", position: "relative"}}>
                <i class="fa-solid fa-puzzle-piece"></i>
                    <h2 style={{marginLeft: "10px"}}>Câu hỏi tự luyện</h2>
                <i className={`fa-solid ${itemStates.question1 ? 'fa-arrow-down' : 'fa-arrow-right'}`} style={{ position: "absolute", right: "380px" }}
                    onClick={() => handleItemClick("question1")}></i>
            </div>
            {itemStates.question1 && (
                <div style={{ marginTop: "17px" }}>
                    <h4>Tổng số: 591,626</h4>
                    <h4>Đã làm: 105</h4>
                    <h4>Số câu đúng: 60</h4>
                    <h4>Số câu sai: 45</h4>
                    <h4>Tổng số giờ làm: 1</h4>
                </div>
            )}


            <div style={{display: "flex", alignItems: "center", marginTop: "17px", position: "relative" }}>
                <i class="fa-solid fa-puzzle-piece"></i>
                    <h2 style={{marginLeft: "10px"}}>Câu hỏi được giao</h2>
                    <i className={`fa-solid ${itemStates.question2 ? 'fa-arrow-down' : 'fa-arrow-right'}`} style={{ position: "absolute", right: "380px" }}
                    onClick={() => handleItemClick("question2")}></i>
            </div>
            {itemStates.question2 && (
                <div style={{ marginTop: "17px" }}>
                    <h4>Tổng số: 27</h4>
                    <h4>Đã làm: 6</h4>
                    <h4>Số câu đúng: 2</h4>
                    <h4>Số câu sai: 4</h4>
                    <h4>Tổng số giờ làm: 0</h4>
                </div>
            )}


            <div style={{display: "flex", alignItems: "center", marginTop: "17px", position: "relative" }}>
                <i class="fa-solid fa-chalkboard-user"></i>
                    <h2 style={{marginLeft: "10px"}}>Bài giảng tự luyện</h2>
                    <i className={`fa-solid ${itemStates.question3 ? 'fa-arrow-down' : 'fa-arrow-right'}`} style={{ position: "absolute", right: "380px" }}
                    onClick={() => handleItemClick("question3")}></i>
            </div>
            {itemStates.question3 && (
                <div style={{ marginTop: "17px" }}>
                    <h4>Đã xem: 55</h4>
                    <h4>Tổng số giờ xem: 1</h4>
                </div>
            )}


            <div style={{display: "flex", alignItems: "center", marginTop: "17px", position: "relative" }}>
                <i class="fa-solid fa-chalkboard-user"></i>
                    <h2 style={{marginLeft: "10px"}}>Bài giảng được giao</h2>
                    <i className={`fa-solid ${itemStates.question4 ? 'fa-arrow-down' : 'fa-arrow-right'}`} style={{ position: "absolute", right: "380px" }}
                    onClick={() => handleItemClick("question4")}></i>
            </div>
            {itemStates.question4 && (
                <div style={{ marginTop: "17px" }}>
                    <h4>Tổng số: 11</h4>
                    <h4>Đã xem: 3</h4>
                    <h4>Tổng số giờ xem: 0</h4>
                </div>
            )}


            <div style={{display: "flex", alignItems: "center", marginTop: "17px", position: "relative" }}>
                <i class="fa-solid fa-file-circle-question"></i>
                    <h2 style={{marginLeft: "10px"}}>Đề thi tữ luyện</h2>
                    <i className={`fa-solid ${itemStates.question5 ? 'fa-arrow-down' : 'fa-arrow-right'}`} style={{ position: "absolute", right: "380px" }}
                    onClick={() => handleItemClick("question5")}></i>
            </div>
            {itemStates.question5 && (
                <div style={{ marginTop: "17px" }}>
                    <h4>Tổng để luyện: 20,553</h4>
                    <h4>Đạt được: 0.33%</h4>
                    <h4>Số câu đúng: 60</h4>
                    <h4>Thời gian: 3 giờ</h4>
                </div>
            )}


            <div style={{display: "flex", alignItems: "center", marginTop: "17px", position: "relative" }}>
                <i class="fa-solid fa-file-circle-question"></i>
                    <h2 style={{marginLeft: "10px"}}>Đề thi được giao</h2>
                    <i className={`fa-solid ${itemStates.question6 ? 'fa-arrow-down' : 'fa-arrow-right'}`} style={{ position: "absolute", right: "380px" }}
                    onClick={() => handleItemClick("question6")}></i>
            </div>
            {itemStates.question6 && (
                <div style={{ marginTop: "17px" }}>
                    <h4>Tổng để giao: 15</h4>
                    <h4>Tổng để làm: 9</h4>
                    <h4>Thời gian làm: 0 giờ</h4>
                    
                </div>
            )}


            <div style={{display: "flex", alignItems: "center", marginTop: "17px", position: "relative" }}>
                <i class="fa-solid fa-file-lines"></i>
                    <h2 style={{marginLeft: "10px"}}>Kỳ thi tham dự</h2>
                    <i className={`fa-solid ${itemStates.question7 ? 'fa-arrow-down' : 'fa-arrow-right'}`} style={{ position: "absolute", right: "380px" }}
                    onClick={() => handleItemClick("question7")}></i>
            </div>
            {itemStates.question7 && (
                <div style={{ marginTop: "17px" }}>
                    <h4>Tổng số: 591,626</h4>
                    <h4>Đã làm: 105</h4>
                    <h4>Số câu đúng: 60</h4>
                    <h4>Số câu sai: 45</h4>
                    <h4>Tổng số giờ làm: 1</h4>
                </div>
            )}


            <div style={{display: "flex", alignItems: "center", marginTop: "17px", position: "relative" }}>
                <i class="fa-solid fa-laptop-file"></i>
                    <h2 style={{marginLeft: "10px"}}>Học online</h2>
                    <i className={`fa-solid ${itemStates.question8 ? 'fa-arrow-down' : 'fa-arrow-right'}`} style={{ position: "absolute", right: "380px" }}
                    onClick={() => handleItemClick("question8")}></i>
            </div>
            {itemStates.question8 && (
                <div style={{ marginTop: "17px" }}>
                    <h4>Số lớp học tham gia: 15</h4>
                    <h4>Số thời gian học: 64115 giờ</h4>
                </div>
            )}


            <div style={{display: "flex", alignItems: "center", marginTop: "17px", position: "relative" }}>
                <i class="fa-solid fa-shapes"></i>
                    <h2 style={{marginLeft: "10px"}}>Số môn học</h2>
                    <i className={`fa-solid ${itemStates.question9 ? 'fa-arrow-down' : 'fa-arrow-right'}`} style={{ position: "absolute", right: "380px" }}
                    onClick={() => handleItemClick("question9")}></i>
            </div>
            {itemStates.question9 && (
                <div style={{ marginTop: "17px" }}>
                    <h4>Số môn học tham gia: 46</h4>
                </div>
            )}


            <div style={{display: "flex", alignItems: "center", marginTop: "17px", position: "relative" }}>
                <i class="fa-solid fa-file-lines"></i>
                    <h2 style={{marginLeft: "10px"}}>Số tài liệu xem</h2>
                    <i className={`fa-solid ${itemStates.question10 ? 'fa-arrow-down' : 'fa-arrow-right'}`} style={{ position: "absolute", right: "380px" }}
                    onClick={() => handleItemClick("question10")}></i>
            </div>
            {itemStates.question10 && (
                <div style={{ marginTop: "17px" }}>
                    <h4>Số tài liệu đã xem: 8</h4>
                </div>
            )}


            <div style={{display: "flex", alignItems: "center", marginTop: "17px", position: "relative" }}>
                <i class="fa-solid fa-file-lines"></i>
                    <h2 style={{marginLeft: "10px"}}>Bài tập khóa học</h2>
                    <i className={`fa-solid ${itemStates.question11 ? 'fa-arrow-down' : 'fa-arrow-right'}`} style={{ position: "absolute", right: "380px" }}
                    onClick={() => handleItemClick("question11")}></i>
            </div>
            {itemStates.question11 && (
                <div style={{ marginTop: "17px" }}>
                    <h2>Hello</h2>
                    <h3>Câu 6: Đối vs ren nhìn thấy dùng nét liền đậm vẽ:</h3>
                    <p>1. Đường đính ren</p>
                    <p>2. Đường giớn hạn ren </p>
                    <p>3. Cả $A$ và $B$ điều dùng</p>
                    <p>4. Đáp án khác</p>
                </div>
            )}

           
        </div>
    );
}

export default CountStudent;
