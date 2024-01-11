import { useRouter } from 'next/router'
import PaymentCallBackComponent from '@/components/PaymentCallBack/paymentCallBackComponent';

export default function Page() {
    const router = useRouter()
    // const { query, query: { paymentProvider } } = router;
    // const { vnp_Amount, vnp_BankCode, vnp_BankTranNo, vnp_CardType, vnp_OrderInfo, vnp_PayDate, vnp_ResponseCode, vnp_TmnCode, vnp_TransactionNo, vnp_TxnRef, vnp_SecureHash } = query;

    return (
        <>
            <PaymentCallBackComponent router={router} />
        </>
    )
}