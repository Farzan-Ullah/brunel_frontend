import React, { useState } from "react";
import "../styles/components/QnASection.css";

export default function QnASection() {
  const questions = [
    "Do you offer freelancers?",
    "What’s the guarantee that I will be satisfied with the hired talent?",
    "Can I hire multiple talents at once?",
    "Why should I not go to an agency directly?",
    "Who can help me pick a right skillset and duration for me?",
  ];

  const answers = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, voluptatibus sed? Pariatur voluptates, eveniet nemo amet ullam molestias distinctio perspiciatis!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, voluptatibus sed? Pariatur voluptates, eveniet nemo amet ullam molestias distinctio perspiciatis!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, voluptatibus sed? Pariatur voluptates, eveniet nemo amet ullam molestias distinctio perspiciatis!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, voluptatibus sed? Pariatur voluptates, eveniet nemo amet ullam molestias distinctio perspiciatis!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, voluptatibus sed? Pariatur voluptates, eveniet nemo amet ullam molestias distinctio perspiciatis!",
  ];

  const [isOpen, setIsOpen] = useState(Array(questions.length).fill(false));

  const toggleCollapse = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <>
      <div className="qna-section">
        <div className="qna-heading">
          <p>What’s on your mind</p>
          <h2>Ask Questions</h2>
        </div>
        <div className="qna-content">
          {questions.map((question, index) => (
            <div className="qna-item" key={index}>
              <div className="qna-question">
                <h3>{question}</h3>
                <button
                  className="collapse-toggle"
                  onClick={() => toggleCollapse(index)}
                >
                  {isOpen[index] ? "-" : "+"}
                </button>
              </div>
              <div className={`qna-answer${isOpen[index] ? " open" : ""}`}>
                <p>{answers[index]}</p>
              </div>
              <hr className="divider" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
