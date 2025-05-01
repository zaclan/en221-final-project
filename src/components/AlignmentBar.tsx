import React from 'react';

interface AlignmentBarProps {
  alignment: number; // 0-100, where 0 is Order and 100 is Chaos
  theme: {
    bg: string;
    text: string;
    accent: string;
  };
}

const AlignmentBar: React.FC<AlignmentBarProps> = ({ alignment, theme }) => {
  return (
    <div className="p-3 rounded-lg bg-black bg-opacity-20">
      <h3 className={`text-sm font-semibold mb-3 ${theme.text}`}>Alignment</h3>
      <div className="relative h-2 bg-gradient-to-r from-white via-white to-white bg-opacity-30 rounded-full overflow-hidden">
        <div
          className="absolute top-0 h-2 w-0.5 bg-white shadow-lg"
          style={{ left: `${alignment}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1.5 text-xs">
        <span className={`${theme.text}`}>Order</span>
        <span className={`${theme.text}`}>Chaos</span>
      </div>
    </div>
  );
};

export default AlignmentBar; 