import React, { useState } from "react";
import "./App.css";
import PayPal from "./components/PayPal";

function App() {
  const [checkout, setCheckOut] = useState(false);
  const merchants = [
    "sb-6qr3l18065515@business.exle.com",
    "sb-zjkk418908825@business.example.com",
  ];
  const paypalContent = merchants.map((merchant) => (
    <PayPal merchantId={merchant} />
  ));

  return <div className="App">{paypalContent}</div>;
}

export default App;
