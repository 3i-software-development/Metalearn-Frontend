import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import classNames from "classnames/bind";
import styles from "./style.module.scss"; // Import SCSS styles for classNames
import Image from 'next/image'; // Import the next/image component

// Import the SCSS styles using classNames/bind

const cx = classNames.bind(styles);

export default function PaymentCallBackComponent({ router }) {
    const { query, query: { paymentProvider } } = router;

    switch (paymentProvider) {
        case 'momo':
            return <MomoPaymentCallBackComponent router={router} />
        case 'vnpay':
            return <VnpayPaymentCallBackComponent router={router} />
    }
    const { vnp_Amount, vnp_BankCode, vnp_BankTranNo, vnp_CardType, vnp_OrderInfo, vnp_PayDate, vnp_ResponseCode, vnp_TmnCode, vnp_TransactionNo, vnp_TxnRef, vnp_SecureHash } = query;
    const formattedAmount = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(vnp_Amount);


    return (
        <div className={cx('container-page')}>
        </div>
    );
}

const VnpayPaymentCallBackComponent = ({ router }) => {
    const { query, query: { paymentProvider } } = router;
    const { vnp_Amount, vnp_BankCode, vnp_BankTranNo, vnp_CardType, vnp_OrderInfo, vnp_PayDate, vnp_ResponseCode, vnp_TmnCode, vnp_TransactionNo, vnp_TxnRef, vnp_SecureHash } = query;
    //remove 2 0 at the end of amount
    const vnp_Amount_removedZero = vnp_Amount.slice(0, vnp_Amount.length - 2);
    const formattedAmount = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(vnp_Amount_removedZero);
    return (
        <div className={cx('container-page')}>
            <div className={cx('container')}>
                <Image className={cx('icon')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2AgB3oBS5MQf4r5nnmeITwN-dKaByDlARw&usqp=CAU" alt="checked" width={100} height={100} />
                <div className={cx('payment-sucess')}>You have completed your payment</div>
                <div className={cx('payment-provider')}>Method used {paymentProvider}</div>
                <div className={cx('vnp_Amount')}>Amount {formattedAmount}</div>
                <div className={cx('bank-info')}>
                    <div className={cx('vnp_BankCode')}>BankCode {vnp_BankCode}</div>
                    <div className={cx('vnp_BankTranNo')}>BankTranNo {vnp_BankTranNo}</div>
                </div>
                <div>
                    <div className={cx('vnp_CardType')}><span style={{ fontWeight: 'bold' }}>Cardtype</span> {vnp_CardType}</div>
                    <div className={cx('vnp_OrderInfo')}><span style={{ fontWeight: 'bold' }}>OrderInfo </span> {vnp_OrderInfo}</div>
                    <div className={cx('vnp_PayDate')}><span style={{ fontWeight: 'bold' }}>PayDate </span> {vnp_PayDate}</div>
                    <div className={cx('vnp_ResponseCode')}><span style={{ fontWeight: 'bold' }}>ResponseCode </span> {vnp_ResponseCode}</div>
                    <div className={cx('vnp_TmnCode')}><span style={{ fontWeight: 'bold' }}>TmnCode </span> {vnp_TmnCode}</div>
                    <div className={cx('vnp_TransactionNo')}><span style={{ fontWeight: 'bold' }}>TransactionNo </span> {vnp_TransactionNo}</div>
                    <div className={cx('vnp_TxnRef')}><span style={{ fontWeight: 'bold' }}>TxnRef </span> {vnp_TxnRef}</div>
                </div>
                <div className={cx('vnp_SecureHash')} style={{ wordWrap: 'break-word' }}>
                    <span style={{ fontWeight: 'bold' }}>SecureHash</span> {vnp_SecureHash}
                </div>
            </div>
        </div>
    );
}

const MomoPaymentCallBackComponent = ({ router }) => {
    const { query, query: { paymentProvider } } = router;
    const { amount, message, orderId, orderInfo, partnerCode, payType, responseTime, signature, status, transId } = query;
    const formattedAmount = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    // const formattedAmount = amount;
    return (
        <div className={cx('container-page')}>
            <div className={cx('container')}>
                <Image className={cx('icon')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2AgB3oBS5MQf4r5nnmeITwN-dKaByDlARw&usqp=CAU" alt="checked" width={100} height={100} />
                <div className={cx('payment-sucess')}>You have completed your payment</div>
                <div className={cx('payment-provider')}>Method used {paymentProvider}</div>
                <div className={cx('vnp_Amount')}>Amount {formattedAmount}</div>
                <div className={cx('momo-orderinfo-container')}>
                    <div className={cx('vnp_OrderInfo')}><span style={{ fontWeight: 'bold' }}>OrderInfo</span> {orderInfo}</div>
                    <div className={cx('vnp_OrderId')}><span style={{ fontWeight: 'bold' }}>orderId</span> {orderId}</div>
                    <div className={cx('vnp_PartnerCode')}><span style={{ fontWeight: 'bold' }}>partnerCode</span> {partnerCode}</div>
                    <div className={cx('vnp_PayType')}><span style={{ fontWeight: 'bold' }}>payType</span> {payType}</div>
                    <div className={cx('vnp_ResponseTime')}><span style={{ fontWeight: 'bold' }}>responseTime</span> {responseTime}</div>
                    <div className={cx('vnp_TransId')}><span style={{ fontWeight: 'bold' }}>transId</span> {transId}</div>
                    <div className={cx('vnp_Message')}><span style={{ fontWeight: 'bold' }}>message</span> {message}</div>
                    <div className={cx('vnp_Status')}><span style={{ fontWeight: 'bold' }}>status</span> {status}</div>
                </div>
                <div className={cx('vnp_SecureHash')} style={{ wordWrap: 'break-word' }}>
                    <span style={{ fontWeight: 'bold' }}>signature</span> {signature}
                </div>
            </div>
        </div>
    )
}

