
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  credentials: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, credentials }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
      <p className="italic text-gray-700 mb-4">{quote}</p>
      <div className="font-semibold">
        <span className="block">{author}</span>
        <span className="text-sm text-gray-600">{credentials}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
