import React from 'react'
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Script from 'next/script';

const cx = classNames.bind(styles);

const DocumentView = ({ valueDoc }) => {
    return (
        <div>
            <Script id={valueDoc.src} strategy="">
                {`let iframe = document.getElementById('document-iframe');
                let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                let iframeContent = iframeDocument.getElementsByTagName('body');
                iframeContent[0].style.display = "flex"
                iframeContent[0].style.justifyContent = "center";
                iframeContent[0].style.alignItems = "center";
                console.log(1)
            `}
            </Script>
            <iframe src={valueDoc.src} id="document-iframe" className={cx("document-iframe")} allowFullScreen>
            </iframe>
        </div >
    )
}

export default DocumentView