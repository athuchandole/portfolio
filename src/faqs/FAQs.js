import React, { useState } from "react";
import "./FAQs.css";

const faqData = [
  { question: "What is your development stack?", answer: "I specialize in React, Node.js, and MongoDB." },
  { question: "Do you offer freelance services?", answer: "Yes, I am available for freelance projects." },
  { question: "What projects have you worked on?", answer: "I have worked on various web applications and SaaS platforms." },
  { question: "Do you provide UI/UX design?", answer: "I collaborate with designers but primarily focus on development." },
  { question: "Can I see your portfolio?", answer: "Yes, you can check my portfolio on my website." },
  { question: "What is your preferred programming language?", answer: "JavaScript and Python are my go-to languages." },
  { question: "Do you contribute to open-source?", answer: "Yes, I actively contribute to open-source projects on GitHub." },
  { question: "What services do you offer?", answer: "I offer web development, API integrations, and consulting." },
  { question: "Do you have experience with cloud platforms?", answer: "Yes, I have experience with AWS and Firebase." },
  { question: "Can you build a full-stack application?", answer: "Yes, I build full-stack applications using MERN stack." }
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
