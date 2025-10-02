import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../styles/Accordion.css';

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="accordion">
      <button
        className="accordion-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="accordion-answer">{answer}</div>}
    </div>
  );
};

export default Accordion;
