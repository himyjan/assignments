import React, { useRef, useEffect } from "react";

export default function Paypal({ merchantId }) {
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          console.log("AboveData", data);
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: 650.0,
                },
                payee: {
                  email_address: merchantId,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log("Data", data);
          console.log(order, merchantId);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      {merchantId}
      <div ref={paypal}></div>
    </div>
  );
}
