import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

const DocumentCard = ({ data, isSelected, handleSelectDoc }) => {

    const getFileName = (data) => {
        const fileArray = data.split("/");
        const tempFile = fileArray[fileArray.length - 1];
        const tempName = tempFile.split(".");
        const nameFile = tempName[0];
        return nameFile
    }

    const getFileType = (data) => {
        const fileArray = data.split("/");
        const tempFile = fileArray[fileArray.length - 1];
        const tempName = tempFile.split(".");
        const typeFile = tempName[tempName.length - 1];
        return typeFile.toLowerCase();
    }


    const displayIcon = () => {
        const type = getFileType(data.src);
        if (type === 'jpg' || type === 'svg' || type === 'png' || type === 'gif' || type === 'jpeg') {
            return <i className="fa-regular fa-image"></i>
        }
        if (type === 'zip' || type === 'rar') {
            return <i className="fa-regular fa-folder"></i>
        }
        if (type === 'mp4' || type === 'mpg' || type === 'mov') {
            return <i className="fa-solid fa-video"></i>
        }
        return <i className="fa-regular fa-file"></i>
    }
    return (
        <div
            className={cx('document-container', { 'selected': isSelected })}
            onClick={() => handleSelectDoc(data)}
        >
            <div className={cx('document-icon')}>{displayIcon()}</div>
            <div className={cx('document-content')}>
                <h4>{getFileName(data.src)}</h4>
                <div className={cx('document-detail')}>
                    <p>1.5Mb</p>
                    <p>1/2/2022</p>
                </div>
            </div>
        </div>
    );
};

export default DocumentCard