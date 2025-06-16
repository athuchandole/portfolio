import React, { useState, useEffect, useRef } from "react";
import "./FAQs.css";

const faqData = [
  {
    question: "What is your development stack?",
    answer:
      "I specialize in React, Node.js, and MongoDB. React allows for building responsive and dynamic user interfaces with reusable components. Node.js provides a powerful backend runtime environment that supports scalable server-side applications. MongoDB, a NoSQL database, enables flexible and schema-less data modeling..."
  },
  {
    question: "Do you offer freelance services?",
    answer:
      "Yes, I am available for freelance projects, both short- and long-term. My areas of expertise include building full-stack applications, UI/UX integration, and backend APIs."
  },
  {
    question: "What projects have you worked on?",
    answer:
      "I have worked on SaaS platforms, e-commerce sites, and custom CMS applications, focusing on clean architecture and responsive UI."
  }
];

const FAQs = ({ theme }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const itemRefs = useRef([]);

  const handleScroll = () => {
    const viewportCenter = window.innerHeight / 2;
    let closestIndex = null;
    let closestDistance = Infinity;

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const distance = Math.abs(viewportCenter - elementCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== openIndex) {
      setOpenIndex(closestIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openIndex]);

  return (
    <div
      className="faq-container"
      style={{ color: theme.text, backgroundColor: theme.background }}
    >
      <h2 className="faq-title" style={{ color: theme.warning }}>FAQs</h2>
      <p className="faq-subtitle" style={{ color: theme.subtext }}>
        Curious minds, we've got you covered
      </p>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="faq-item"
            ref={(el) => (itemRefs.current[index] = el)}
            style={{
              background: theme.card,
              boxShadow: `0 2px 5px ${theme.shadow}`
            }}
          >
            <button
              className="faq-question"
              onClick={() =>
                setOpenIndex((prev) => (prev === index ? null : index))
              }
              style={{ color: theme.text }}
            >
              {item.question}
              <span
                className={`faq-icon ${openIndex === index ? "open" : ""}`}
              >
                ▼
              </span>
            </button>
            <div
              className={`faq-answer-wrapper ${openIndex === index ? "open" : ""}`}
            >
              <p className="faq-answer" style={{ color: theme.subtext }}>
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
