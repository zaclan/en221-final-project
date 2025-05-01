import React from 'react';

interface Circle {
  id: number;
  name: string;
  color: string;
  hoverColor: string;
  backgroundEmoji: string;
}

interface CirclePickerProps {
  selectedCircle: number;
  onCircleSelect: (id: number) => void;
}

const circles: Circle[] = [
  { id: 1, name: "Limbo", color: "bg-[#2f3225]", hoverColor: "hover:bg-[#454937]", backgroundEmoji: "👻" },
  { id: 2, name: "Lust", color: "bg-[#8b0000]", hoverColor: "hover:bg-[#a52a2a]", backgroundEmoji: "💘" },
  { id: 3, name: "Gluttony", color: "bg-[#2c1810]", hoverColor: "hover:bg-[#3e5f5c]", backgroundEmoji: "🍖" },
  { id: 4, name: "Greed", color: "bg-[#2a1f1f]", hoverColor: "hover:bg-[#b08d57]", backgroundEmoji: "🤑" },
  { id: 5, name: "Wrath", color: "bg-[#8b0000]", hoverColor: "hover:bg-[#ff4500]", backgroundEmoji: "😡" },
  { id: 6, name: "Heresy", color: "bg-[#611212]", hoverColor: "hover:bg-[#1c1c1c]", backgroundEmoji: "🔥" },
  { id: 7, name: "Violence", color: "bg-[#7b1e1e]", hoverColor: "hover:bg-[#2c0000]", backgroundEmoji: "🗡️" },
  { id: 8, name: "Fraud", color: "bg-[#2d0031]", hoverColor: "hover:bg-[#000000]", backgroundEmoji: "🎭" },
  { id: 9, name: "Treachery", color: "bg-[#0f1c2e]", hoverColor: "hover:bg-[#1f4e69]", backgroundEmoji: "🥶" },
];

const BackgroundPattern: React.FC<{ emoji: string }> = ({ emoji }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="grid grid-cols-6 gap-12 p-8 animate-float">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="flex justify-center">
            <span className="text-6xl opacity-[0.25] transform rotate-12 transition-all duration-700 hover:opacity-[0.12]">
              {emoji}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CirclePicker: React.FC<CirclePickerProps> = ({ selectedCircle, onCircleSelect }) => {
  return (
    <div className="flex flex-col space-y-1">
      {circles.map((circle) => (
        <button
          key={circle.id}
          onClick={() => onCircleSelect(circle.id)}
          className={`
            p-3 rounded-md text-center transition-all duration-500
            ${selectedCircle === circle.id 
              ? `${circle.color} scale-105 shadow-lg font-bold backdrop-blur-sm border border-white/10` 
              : `${circle.color} bg-opacity-80 hover:bg-opacity-100 ${circle.hoverColor}`}
            text-white
            relative overflow-hidden group
          `}
        >
          <BackgroundPattern emoji={circle.backgroundEmoji} />
          <span className="text-lg relative z-10 drop-shadow-md font-semibold">{circle.name}</span>
          {/* Animated overlay for selected circle */}
          {selectedCircle === circle.id && (
            <div className="absolute inset-0 bg-white opacity-5 animate-pulse" />
          )}
          {/* Hover effect */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        </button>
      ))}
    </div>
  );
};

export default CirclePicker; 