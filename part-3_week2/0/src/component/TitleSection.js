import { useState } from "react";
import ContentBox from "./ContentBox";

const TitleSection = () => {
  const [newDiv, setNewDiv] = useState("");

  return (
    <section className="title">
      <h2>Section Title</h2>
      <ContentBox />
      <button
        className="reveal"
        onClick={() => {
          setNewDiv(<ContentBox />);
        }}
      >
        Call to Action
      </button>
      <div>{newDiv}</div>
    </section>
  );
};

export default TitleSection;
