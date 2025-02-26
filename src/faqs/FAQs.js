import React, { useState } from "react";
import "./FAQs.css";

const faqData = [
  { question: "What is your development stack?", answer: "I specialize in React, Node.js, and MongoDB." },
  { question: "Do you offer freelance services?", answer: "Yes, I am available for freelance projects." },
  { question: "What projects have you worked on?", answer: "I have worked on various web applications and SaaS platforms." }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQs</h2>
      <p className="faq-subtitle">Curious minds, we've got you covered</p>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>▼</span>
            </button>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
