import logo from "./logo.svg";
import React from "react";
import GreetingSection from "./component/GreetingSection";
import Nav from "./component/Nav";
import TitleSection from "./component/TitleSection";

function App() {
  return (
    <div>
      <Nav />
      <GreetingSection />
      <TitleSection />
    </div>
  );
}

export default App;
