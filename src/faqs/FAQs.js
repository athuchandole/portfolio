import React, { useState, useEffect, useRef } from "react";
import "./FAQs.css";

const faqData = [
  {
    question: "What is your development stack?",
    answer:
      "I specialize in React, Node.js, and MongoDB. React allows for building responsive and dynamic user interfaces with reusable components. Node.js provides a powerful backend runtime environment that supports scalable server-side applications. MongoDB, a NoSQL database, enables flexible and schema-less data modeling, which is ideal for modern applications. Together, this stack—commonly referred to as the MERN stack—offers a full JavaScript development experience, which improves productivity and consistency across both frontend and backend development. I also integrate other tools and frameworks such as Express.js, Redux, and Tailwind CSS depending on project needs. With this stack, I can rapidly develop and deploy full-stack web applications with robust functionality and intuitive design."
  },
  {
    question: "What is your development stack?",
    answer:
      "I specialize in React, Node.js, and MongoDB. React allows for building responsive and dynamic user interfaces with reusable components. Node.js provides a powerful backend runtime environment that supports scalable server-side applications. MongoDB, a NoSQL database, enables flexible and schema-less data modeling, which is ideal for modern applications. Together, this stack—commonly referred to as the MERN stack—offers a full JavaScript development experience, which improves productivity and consistency across both frontend and backend development. I also integrate other tools and frameworks such as Express.js, Redux, and Tailwind CSS depending on project needs. With this stack, I can rapidly develop and deploy full-stack web applications with robust functionality and intuitive design."
  },
  {
    question: "What is your development stack?",
    answer:
      "I specialize in React, Node.js, and MongoDB. React allows for building responsive and dynamic user interfaces with reusable components. Node.js provides a powerful backend runtime environment that supports scalable server-side applications. MongoDB, a NoSQL database, enables flexible and schema-less data modeling, which is ideal for modern applications. Together, this stack—commonly referred to as the MERN stack—offers a full JavaScript development experience, which improves productivity and consistency across both frontend and backend development. I also integrate other tools and frameworks such as Express.js, Redux, and Tailwind CSS depending on project needs. With this stack, I can rapidly develop and deploy full-stack web applications with robust functionality and intuitive design."
  },
  // Add more if needed
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio > 0.8 &&
            entry.target.dataset.index
          ) {
            const index = parseInt(entry.target.dataset.index);
            setOpenIndex(index);
          }
        });
      },
      {
        threshold: [0.8], // Adjust if needed
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="faq-center-line"></div>
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>
        <p className="faq-subtitle">Curious minds, we've got you covered</p>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq-item"
              data-index={index}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {item.question}
                <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>▼</span>
              </button>
              <div
                className={`faq-answer-wrapper ${openIndex === index ? "open" : ""
                  }`}
              >
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQs;
