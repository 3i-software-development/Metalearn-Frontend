import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { AiOutlineDelete, AiOutlineDownload } from 'react-icons/ai';
import { Modal } from 'antd';
import PdfView from './PdfView';


// Thiết lập URL của tài liệu PDF


const cx = classNames.bind(styles);

const DocumentView = ({ valueDoc }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const getFileName = (data) => {
        const fileArray = data.split('/');
        const tempFile = fileArray[fileArray.length - 1];
        const tempName = tempFile.split('.');
        const nameFile = tempName[0];
        return nameFile;
    };

    const deleteModal = () => {
        return (
            <Modal
                title="Delete Document"
                centered
                visible={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
            >
                <p>Are you sure you want to delete?</p>
            </Modal>
        );
    };

    const downloadFile = () => {
        // Create a temporary anchor element to trigger the download
        const anchor = document.createElement('a');
        anchor.href = valueDoc.src; // Set the download URL
        anchor.download = getFileName(valueDoc.src); // Set the filename
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
        anchor.click();
    };

    const isImage = (url) => {
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp']; // Add more image extensions if needed
        const lowercasedUrl = url.toLowerCase();

        return imageExtensions.some(ext => lowercasedUrl.endsWith(ext));
    };

    const isPdf = (url) => {
        return url.toLowerCase().endsWith('.pdf');
    };

    return (
        <div className={cx('document-content-file')}>
            {deleteModal()}
            <div className={cx('document-infor')}>
                {/* infor of document
                <div>
                    <h2>{getFileName(valueDoc.src)}</h2>
                    <p>Size: 15Mb</p>
                    <p>Uploaded: 1/2/2022</p>
                    <p>Last opened: 1/2/2022</p>
                </div>
                */}
                <div>
                    <AiOutlineDelete onClick={() => setModalOpen(true)} />
                    <AiOutlineDownload onClick={downloadFile} /> {/* Add the download button */}
                </div>
            </div>
            <div>
                {!isImage(valueDoc.src) ? (
                    <div className={cx('document-iframe')}>
                        {
                            isPdf(valueDoc.src) ? (
                                <PdfView valueDoc={valueDoc} />
                            ) : (
                                <iframe
                                    src={`https://docs.google.com/gview?url=${encodeURIComponent(
                                        valueDoc.src
                                    )}&embedded=true`}
                                    title="PDF Viewer"
                                    width="100%"
                                    height="600"
                                    frameBorder="0"
                                ></iframe>
                            )
                        }
                    </div>
                ) : (
                    <div className={cx('document-image')}>
                        <img src={valueDoc.src} alt="Image" />
                    </div>
                )}

            </div>
        </div>
    );
};

export default DocumentView;
