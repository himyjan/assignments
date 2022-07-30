import { useState } from "react";

const Hamburger = () => {
  const [style, setStyle] = useState({ position: "absolute" });
  const [effect, setEffect] = useState("");

  function openSideBar() {
    if (effect === "open") {
      setEffect("");
      setStyle({ position: "absolute" });
    } else {
      setEffect("open");
      setStyle({ position: "fixed" });
    }
  }

  return (
    <label for="switch" onClick={openSideBar} style={style}>
      <div className={`menu-btn ${effect}`}>
        <div className="menu-btn-item"></div>
      </div>
    </label>
  );
};

export default Hamburger;
