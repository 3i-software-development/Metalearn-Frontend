import React from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(style);

const CollectionItem = ({ item, handleSelectItem }) => {
    const handleClick = (item) => {
        handleSelectItem(item);
    }
    return (
        <div style={{marginBottom: '10px'}}>
            <div style={{marginLeft: '10px'}}>
                <div style={{display: 'flex'}}>
                    <p><i className="fa-solid fa-thumbtack"></i></p>
                    <p style={{marginLeft: '5px'}}>{item.type} [{item.total}]</p>
                </div>
                <div onClick={() => handleClick(item)}><Image src={item.image} alt="quiz image" width={400} height={200} /></div>
            </div>
        </div>
    );
}

export default CollectionItem;