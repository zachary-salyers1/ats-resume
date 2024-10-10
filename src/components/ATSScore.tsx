import React, { useState } from 'react';

interface ATSScoreProps {
  onScoreUpdate: (score: number) => void;
}

const ATSScore: React.FC<ATSScoreProps> = ({ onScoreUpdate }) => {
  const [score, setScore] = useState<number>(0);

  const handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newScore = parseInt(event.target.value, 10);
    setScore(newScore);
    onScoreUpdate(newScore);
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="range"
        min="0"
        max="100"
        value={score}
        onChange={handleScoreChange}
        className="w-full"
      />
      <span className="font-semibold">{score}%</span>
    </div>
  );
};

export default ATSScore;