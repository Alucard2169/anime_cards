import React, { useState } from "react";

const ScoreFilter: React.FC = () => {
  
  
  const stepValues = Array.from({ length: 91 }, (_, index) =>
    (index * 0.1).toFixed(1)
  );

  const [score, setScore] = useState<string>("1.0");

  const handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newScore = event.target.value;
    setScore(newScore);
   
  };

  return (
    <div>
      <h3 className="text-purple-600">Score</h3>
      <input
        className="mt-2 w-full h-2 light:bg-white-600 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
        type="range"
        min={0}
        max={100}
        step={1}
        value={parseFloat(score).toString()} // Convert the score to match the range values
        onChange={handleScoreChange}
        list="score-values"
      />
      <datalist id="score-values">
        {stepValues.map((value, index) => (
          <option key={index} value={value} />
        ))}
      </datalist>
      <p className="text-purple-600 mt-4">
        Selected Score: <span className="text-white">{+score / 10}</span>
      </p>
    </div>
  );
};

export default ScoreFilter;


