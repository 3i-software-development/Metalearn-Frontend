import React from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(style);

const CollectionItem = ({ data }) => {
    return (
        <div style={{marginBottom: '10px'}}>
            <div style={{marginLeft: '10px'}}>
                <div style={{display: 'flex'}}>
                    <p><i class="fa-solid fa-thumbtack"></i></p>
                    <p style={{marginLeft: '5px'}}>Câu hỏi Quiz [{data.total_quiz}]</p>
                </div>
                <div><Image src={data.image} alt="quiz image" width={400} height={200} /></div>
            </div>
            <div style={{marginLeft: '10px', marginTop: '15px'}}>
                <div style={{display: 'flex'}}>
                    <p><i class="fa-solid fa-thumbtack"></i></p>
                    <p style={{marginLeft: '5px'}}>Đề thi [{data.total_exam}]</p>
                </div>
                <div><Image src={data.image} alt="quiz image" width={400} height={200} /></div>
            </div>
            <div style={{marginLeft: '10px', marginTop: '15px'}}>
                <div style={{display: 'flex'}}>
                    <p><i class="fa-solid fa-thumbtack"></i></p>
                    <p style={{marginLeft: '5px'}}>Câu hỏi và câu trả lời [{data.total_question}]</p>
                </div>
                <div><Image src={data.image} alt="quiz image" width={400} height={200} /></div>
            </div>
            <div style={{marginLeft: '10px', marginTop: '15px'}}>
                <div style={{display: 'flex'}}>
                    <p><i class="fa-solid fa-thumbtack"></i></p>
                    <p style={{marginLeft: '5px'}}>File [{data.total_file}]</p>
                </div>
                <div><Image src={data.image} alt="quiz image" width={400} height={200} /></div>
            </div>
        </div>
    );
}

export default CollectionItem;