import React from 'react';

interface Circle {
  id: number;
  name: string;
  color: string;
}

interface CirclePickerProps {
  selectedCircle: number;
  onCircleSelect: (id: number) => void;
  theme: {
    bg: string;
    text: string;
    accent: string;
  };
}

const circles: Circle[] = [
  { id: 1, name: "Limbo", color: "bg-stone-800" },
  { id: 2, name: "Lust", color: "bg-red-800" },
  { id: 3, name: "Gluttony", color: "bg-yellow-800" },
  { id: 4, name: "Greed", color: "bg-amber-800" },
  { id: 5, name: "Wrath", color: "bg-orange-800" },
  { id: 6, name: "Heresy", color: "bg-purple-800" },
  { id: 7, name: "Violence", color: "bg-pink-800" },
  { id: 8, name: "Fraud", color: "bg-indigo-800" },
  { id: 9, name: "Treachery", color: "bg-blue-800" },
];

const CirclePicker: React.FC<CirclePickerProps> = ({ selectedCircle, onCircleSelect, theme }) => {
  return (
    <div className="flex flex-col space-y-1">
      {circles.map((circle) => (
        <button
          key={circle.id}
          onClick={() => onCircleSelect(circle.id)}
          className={`
            p-2 rounded-md text-left transition-all duration-300
            ${selectedCircle === circle.id 
              ? `${circle.color} ${theme.text} shadow-lg font-semibold scale-105` 
              : `bg-opacity-50 hover:bg-opacity-75 ${circle.color} ${theme.text}`}
          `}
        >
          <span className="text-sm">{circle.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CirclePicker; 