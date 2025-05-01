import React from 'react';
import SinStats from './SinStats';

interface CircleDetailsProps {
  circle: {
    id: number;
    name: string;
    description: string;
    sin: string;
    characterStory: string;
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
    emojis: {
      severity: string;
      regret: string;
      defiance: string;
    };
    alignment: number;
  };
  theme: {
    bg: string;
    text: string;
    accent: string;
    overlay: string;
  };
}

const CircleDetails: React.FC<CircleDetailsProps> = ({ circle, theme }) => {
  return (
    <div className={`h-full bg-gradient-to-b ${theme.accent} rounded-lg shadow-lg transition-all duration-700 flex flex-col relative overflow-hidden backdrop-blur-sm`}>
      {/* Theme overlay */}
      <div className={`absolute inset-0 pointer-events-none ${theme.overlay}`} />
      
      <div className="p-4 flex-1 overflow-y-auto relative z-10">
        <h2 className={`text-2xl font-extrabold mb-2 ${theme.text} drop-shadow-lg`}>{circle.name}</h2>
        <div className={`text-base ${theme.text} opacity-90 mb-3 font-bold italic`}>{circle.sin}</div>
        <p className={`${theme.text} mb-4 text-base font-medium opacity-90`}>{circle.description}</p>
        
        <div className="mb-4">
          <h3 className={`text-xl font-bold mb-2 ${theme.text} drop-shadow`}>Featured Soul</h3>
          <div className={`flex items-center space-x-3 p-3 rounded-lg bg-black bg-opacity-20 backdrop-blur-sm`}>
            <div className="w-14 h-14 bg-black bg-opacity-30 rounded-full flex items-center justify-center text-3xl">
              {circle.featuredSoul.avatar}
            </div>
            <div>
              <h4 className={`font-bold text-base ${theme.text}`}>{circle.featuredSoul.name}</h4>
              <p className={`${theme.text} opacity-75 italic text-base mt-1`}>"{circle.featuredSoul.quote}"</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className={`text-xl font-bold mb-2 ${theme.text} drop-shadow`}>Character Story</h3>
          <div className={`p-3 rounded-lg bg-black bg-opacity-20 backdrop-blur-sm`}>
            <p className={`${theme.text} text-base opacity-90`}>{circle.characterStory}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-black bg-opacity-20 backdrop-blur-sm">
            <h3 className={`text-lg font-bold mb-3 ${theme.text} drop-shadow`}>Sin Stats</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-base font-semibold ${theme.text}`}>Severity</span>
                  <span className="text-xl">{circle.emojis.severity}</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-base font-semibold ${theme.text}`}>Regret</span>
                  <span className="text-xl">{circle.emojis.regret}</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-base font-semibold ${theme.text}`}>Defiance</span>
                  <span className="text-xl">{circle.emojis.defiance}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleDetails; 