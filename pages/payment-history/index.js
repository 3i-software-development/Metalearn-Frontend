import { CaretLeftOutlined } from "@ant-design/icons";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import { useRouter } from "next/router";



const cx = classNames.bind(style);


const Index = () => {
  const router = useRouter()

    const history = [
        {
            id: "fb79f910-cda9-46b1-b6a7-bf8027d8659f - [MOMOPAY]",
            price: 10000,
            coin: 10,
            date: "06-07-2023",
            time: "10:50:52"
        },
        {
            id: "fb79f910-cda9-46b1-b6a7-bf8027d8659f - [MOMOPAY]",
            price: 120000,
            coin: 120,
            date: "06-07-2023",
            time: "10:50:52"
        },
        {
            id: "fb79f910-cda9-46b1-b6a7-bf8027d8659f - [MOMOPAY]",
            price: 50000,
            coin: 60,
            date: "06-07-2023",
            time: "10:50:52"
        },  {
            id: "fb79f910-cda9-46b1-b6a7-bf8027d8659f - [MOMOPAY]",
            price: 50000,
            coin: 10,
            date: "06-07-2023",
            time: "10:50:52"
        },
    ];
    const handlePrevious = () => {
        router.push('/payment')
    }
    return (
        <div className={cx("payment-history")}>
            <div className={cx("header")}>
                <CaretLeftOutlined onClick={()=> handlePrevious()}  style={{ width: '5%', fontSize: '35px', marginLeft: '12px' }} />
                <h4 style={{ width: '95%', textAlign: 'center', fontSize: '35px' }}>Lịch sử giao dịch</h4>
            </div>
            <div className={cx("body-payment-history")}></div>
            {
                history.map((item, index) => {
                    return (
                        <>
                            <div className={cx("body-item")}>
                                <p style={{ fontWeight: 500 }}>{item.id}</p>
                                <p style={{ color: "red" }}>- {item.price} VND</p>
                                <p style={{ color: '#50c878' }}>+ {item.coin}</p>
                                <span style={{ fontWeight: 500, margin: "4px 12px 4px 0" }}>{item.date}</span>
                                <span style={{ fontWeight: 500, margin: "4px 12px 4px 0" }}>{item.time}</span>
                                <hr style={{ border: '1px dashed #ccc', marginTop: '6px' }} />
                            </div>
                        </>
                    )
                })
            }



        </div>
    )

}
export default Index;