import React from 'react';

interface SinStatsProps {
  severity: number;
  regret: number;
  defiance: number;
  theme: {
    bg: string;
    text: string;
    accent: string;
    overlay: string;
  };
}

const StatBar: React.FC<{ value: number; label: string; theme: SinStatsProps['theme'] }> = ({ value, label, theme }) => {
  return (
    <div className="mb-1.5">
      <div className="flex justify-between mb-1">
        <span className={`text-xs font-medium ${theme.text}`}>{label}</span>
        <span className={`text-xs ${theme.text} opacity-75`}>{value}/10</span>
      </div>
      <div className="w-full bg-black bg-opacity-20 rounded-full h-1.5 overflow-hidden">
        <div
          className={`h-1.5 rounded-full transition-all duration-500 bg-current opacity-30`}
          style={{ width: `${value * 10}%` }}
        ></div>
      </div>
    </div>
  );
};

const SinStats: React.FC<SinStatsProps> = ({ severity, regret, defiance, theme }) => {
  return (
    <div className="p-3 rounded-lg bg-black bg-opacity-20 backdrop-blur-sm relative overflow-hidden">
      {/* Theme overlay */}
      <div className={`absolute inset-0 pointer-events-none ${theme.overlay}`} />
      
      <div className="relative z-10">
        <h3 className={`text-sm font-semibold mb-3 ${theme.text} drop-shadow`}>Sin Stats</h3>
        <StatBar value={severity} label="Severity" theme={theme} />
        <StatBar value={regret} label="Regret" theme={theme} />
        <StatBar value={defiance} label="Defiance" theme={theme} />
      </div>
    </div>
  );
};

export default SinStats; 