import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter()
    const { query, query: { paymentProvider } } = router;
    const { vnp_Amount, vnp_BankCode, vnp_BankTranNo, vnp_CardType, vnp_OrderInfo, vnp_PayDate, vnp_ResponseCode, vnp_TmnCode, vnp_TransactionNo, vnp_TxnRef, vnp_SecureHash } = query;

    return (
        <>
            <h1>Payment Callback for</h1>
            <h2>{paymentProvider}</h2>
            <p>Amount: {vnp_Amount}</p>
            <p>Bank Code: {vnp_BankCode}</p>
            <p>Bank Transaction No: {vnp_BankTranNo}</p>
            <p>Card Type: {vnp_CardType}</p>
            <p>Order Info: {vnp_OrderInfo}</p>
            <p>Pay Date: {vnp_PayDate}</p>
            <p>Response Code: {vnp_ResponseCode}</p>
            <p>Tmn Code: {vnp_TmnCode}</p>
            <p>Transaction No: {vnp_TransactionNo}</p>
            <p>Txn Ref: {vnp_TxnRef}</p>
            <p>Secure Hash: {vnp_SecureHash}</p>
        </>
    )
}