import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

const PayPalButton = ({ amount, onSuccess }) => {
  const clientId =
    "AWRX0ZHDL-7HKltEpaJHYTCZ8nsaR2bXj2WG9n4QnBEbvsZyCmuK_9Z56EbjfEGLcIjGqDJVOvS0vy5W"; // Thay thế bằng Client ID của bạn

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount.toString(),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(async (details) => {
      // console.log('detail: ' + details);

      const datas = {
        CreatedBy: "admin",
        PayerEmail: details.payer.email_address,
        PaymentAmount: details.purchase_units[0].amount.value,
        PaymentCurrency: details.purchase_units[0].amount.currency_code,
        PaymentLog: JSON.stringify(details),
        PaymentQuantity: 1,
        PaymentStatus: details.status,
        PaymentType: "paypal",
        TxnId: details.id,
      };
      console.log("check data: ", datas);
      console.log("check amount: ", amount)

      // try {
      //   const res = await axios.post("https://admin.metalearn.vn/MobileLogin/SaveTransactionHistory", datas)
      //   console.log("Thành công!", res);
      // } catch (error) {
      //   console.log(error)
      // }

      // try {
      //   const res = await axios.post("https://admin.metalearn.vn/MobileLogin/AddPoints", { points: amount, userName: 'admin'})
      //   console.log("Thành công add coin!", res);
      // } catch (error) {
      //   console.log(error)
      // }

      // Gọi hàm này khi thanh toán thành công
      onSuccess();
    });
  };

  return (
    <PayPalScriptProvider options={{ "client-id": clientId }}>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
