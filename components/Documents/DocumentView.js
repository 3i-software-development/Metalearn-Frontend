import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { BsArrowsFullscreen, BsDownload } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { Modal } from 'antd';

const cx = classNames.bind(styles);

const DocumentView = ({ valueDoc }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const getFileName = (data) => {
        const fileArray = data.split("/");
        const tempFile = fileArray[fileArray.length - 1];
        const tempName = tempFile.split(".");
        const nameFile = tempName[0];
        return nameFile
    }


    const deleteModal = () => {
        return (
            <Modal
                title="Delete Document"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
            >
                <p>Are you sure you want to delete your account?</p>
            </Modal>
        )
    }

    return (
        <div className={cx('document-content')}>
            {deleteModal()}
            <div className={cx('document-infor')}>
                <div>
                    <h2>{getFileName(valueDoc.src)}</h2>
                    <p>Size: 15Mb</p>
                    <p>Uploaded: 1/2/2022</p>
                    <p>Last opented: 1/2/2022</p>
                </div>
                <div>
                    <a href={valueDoc.src} target="_blank"><BsArrowsFullscreen /></a>
                    <BsDownload />
                    <AiOutlineDelete onClick={() => setModalOpen(true)} />
                </div>
            </div >
            <div className={cx('document-iframe')}>
                <iframe src={valueDoc.src} width={valueDoc.width || '100%'} height={valueDoc.height || '100%'} allowFullScreen="true" scrolling='No' frameBorder="0"></iframe>
            </div>
        </div >
    )
}

export default DocumentView