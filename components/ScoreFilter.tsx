import { useGetFilter } from "@/context/FilterContext";
import React, { useState } from "react";

interface ScoreFilterProps {
  handleFilter: (filterQuery: any) => void;
 
}


const ScoreFilter: React.FC<ScoreFilterProps> = ({ handleFilter }) => {
  
  const contextValue = useGetFilter()
  const { filter, setFilter } = contextValue;
  
  const stepValues = Array.from({ length: 91 }, (_, index) =>
    (index * 0.1).toFixed(1)
  );

  const [score, setScore] = useState<string>("1.0");

  const handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newScore = event.target.value;
    setScore(newScore);
  };


  const handleScoreSubmit = () => {
     
     const updatedFilter = {
       ...filter,
       score: +score === 1 ? +score : +score/10,
     };

     setFilter(updatedFilter);
     handleFilter(updatedFilter);
   };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-purple-600">Score</h3>
        <button
          className="bg-purple-600 text-black rounded-full py-1 px-2 font-bold hover:bg-purple-400"
          onClick={handleScoreSubmit}
        >
          Submit
        </button>
      </div>
      <input
        className="mt-2 w-full h-2 light:bg-white-600 rounded-lg appearance-none cursor-pointer dark:bg-purple-700"
        type="range"
        min={1}
        max={99}
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


