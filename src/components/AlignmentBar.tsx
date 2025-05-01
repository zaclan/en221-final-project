import React from 'react';

interface AlignmentBarProps {
  alignment: number; // 0-100, where 0 is Order and 100 is Chaos
  theme: {
    bg: string;
    text: string;
    accent: string;
    overlay: string;
  };
}

const AlignmentBar: React.FC<AlignmentBarProps> = ({ alignment, theme }) => {
  return (
    <div className="p-3 rounded-lg bg-black bg-opacity-20 backdrop-blur-sm relative overflow-hidden">
      {/* Theme overlay */}
      <div className={`absolute inset-0 pointer-events-none ${theme.overlay}`} />
      
      <div className="relative z-10">
        <h3 className={`text-sm font-semibold mb-3 ${theme.text} drop-shadow`}>Alignment</h3>
        <div className="relative h-2 bg-gradient-to-r from-current via-current to-current opacity-30 rounded-full overflow-hidden">
          <div
            className="absolute top-0 h-2 w-0.5 bg-current shadow-lg"
            style={{ left: `${alignment}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-1.5 text-xs">
          <span className={`${theme.text} drop-shadow-sm`}>Order</span>
          <span className={`${theme.text} drop-shadow-sm`}>Chaos</span>
        </div>
      </div>
    </div>
  );
};

export default AlignmentBar; 