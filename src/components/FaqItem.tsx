import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string | JSX.Element;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-gray-400 py-4">
      <div className="cursor-pointer flex justify-between" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-lg font-bold mx-4">{question}</p>
        <div className='pr-4 font-extrabold'>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p className="mx-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQItem;
