import { useState } from "react";

const GreetingSection = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome Message");
  return (
    <section
      className="greeting"
      onClick={() => {
        setWelcomeMessage("Have a good time!");
      }}
    >
      <h1>{welcomeMessage}</h1>
    </section>
  );
};

export default GreetingSection;
