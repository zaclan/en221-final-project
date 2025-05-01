import React from 'react';
import SinStats from './SinStats';
import AlignmentBar from './AlignmentBar';

interface CircleDetailsProps {
  circle: {
    id: number;
    name: string;
    description: string;
    featuredSoul: {
      name: string;
      avatar: string;
      quote: string;
    };
    stats: {
      severity: number;
      regret: number;
      defiance: number;
    };
    alignment: number;
  };
  theme: {
    bg: string;
    text: string;
    accent: string;
  };
}

const CircleDetails: React.FC<CircleDetailsProps> = ({ circle, theme }) => {
  return (
    <div className={`h-full bg-gradient-to-b ${theme.accent} rounded-lg shadow-lg transition-colors duration-700 flex flex-col`}>
      <div className="p-4 flex-1 overflow-y-auto">
        <h2 className={`text-xl font-bold mb-3 ${theme.text}`}>{circle.name}</h2>
        <p className={`${theme.text} mb-4 text-sm opacity-90`}>{circle.description}</p>
        
        <div className="mb-4">
          <h3 className={`text-lg font-semibold mb-2 ${theme.text}`}>Featured Soul</h3>
          <div className={`flex items-center space-x-3 p-3 rounded-lg bg-black bg-opacity-20`}>
            <div className="w-12 h-12 bg-black bg-opacity-30 rounded-full flex items-center justify-center">
              <span className="text-xl">{circle.featuredSoul.avatar || '👤'}</span>
            </div>
            <div>
              <h4 className={`font-medium text-sm ${theme.text}`}>{circle.featuredSoul.name}</h4>
              <p className={`${theme.text} opacity-75 italic text-sm`}>"{circle.featuredSoul.quote}"</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <SinStats
            severity={circle.stats.severity}
            regret={circle.stats.regret}
            defiance={circle.stats.defiance}
            theme={theme}
          />
          <AlignmentBar 
            alignment={circle.alignment}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

export default CircleDetails; 