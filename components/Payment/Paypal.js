import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess }) => {
  const clientId = "AWRX0ZHDL-7HKltEpaJHYTCZ8nsaR2bXj2WG9n4QnBEbvsZyCmuK_9Z56EbjfEGLcIjGqDJVOvS0vy5W"; // Thay thế bằng Client ID của bạn

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
    return actions.order.capture().then((details) => {
      console.log(details);
      onSuccess(); // Gọi hàm này khi thanh toán thành công
    });
  };

  return (
    <PayPalScriptProvider options={{ "client-id": clientId }}>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;