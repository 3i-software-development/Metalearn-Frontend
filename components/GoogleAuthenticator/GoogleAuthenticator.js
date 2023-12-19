import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import QRCode from 'qrcode.react';

const cx = classNames.bind(styles);

const GoogleAuthenticator = () => {
    const [qrCodeImage, setQrCodeImage] = useState(null); // Initialize the state with null

    const string = 'Y56995948AJSJFJDHFAKGHSW27AH3A';
    const generateQRCode = () => {
        setQrCodeImage(<QRCode value={string} size={256} />);
    };
    useEffect(() => {
        generateQRCode();
    }, []);

    return (
        <div className={cx('google-authenticator-page')}>
            <div className={cx('title')}>
                <text>
                    Bảo mật 2 lớp chưa được kích hoạt
                </text>
            </div>
            <div className={cx('first-step')}>
                <h2>Bước 1</h2>
                <div className={cx('image-qr')}>
                    {qrCodeImage}
                </div>
            </div>
            <div className={cx('second-step')}>
                <h2>Bước 2</h2>
                <text>
                    Hoặc bạn có thể nhập mã bên dưới vào ứng dụng xác thực của bạn
                </text>
                <div>
                    <text>
                        {string}
                    </text>

                </div>
            </div>
            <div className={cx('verify')}>
                <button>Bảo mật 2 lớp chưa được kích hoạt</button>
            </div>
        </div>
    );
}

export default GoogleAuthenticator;
