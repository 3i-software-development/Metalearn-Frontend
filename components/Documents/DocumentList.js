import React from 'react'
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import DocumentCard from './DocumentCard';

const cx = classNames.bind(styles);

const DocumentList = ({ listDoc, handleSelectDoc }) => {
    
    return (
        <div className={cx("list-doc-container")}>
            <div className={cx("sort-container")}>
                {listDoc.map((e, index) => {
                    return <DocumentCard key={index} data={e} handleSelectDoc={handleSelectDoc} />
                })}
            </div>
        </div >
    )
}

export default DocumentList 