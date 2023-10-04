import React from "react";
import { Calculator } from "../models/models";
import SingleCalculation from "./SingleCalculation";

interface props {
  calculations: Array<Calculator>;
  setCalculations: React.Dispatch<React.SetStateAction<Array<Calculator>>>;
  result: number
  setResult: React.Dispatch<React.SetStateAction<number>>;
}

const CalculationList: React.FC<props> = ({
  calculations,
  setCalculations,
  result,
  setResult,
}) => {
  return (
    <div className="container">
      <span className="calculations__heading">Active Calculations</span>
      {calculations?.map((calculation, index) => (
        <SingleCalculation
          calculations={calculations}
          calculation={calculation}
          key={calculation.id}
          setCalculations={setCalculations}
          result={result}
          setResult={setResult}
         index={index}/>
      ))}
    </div>

  );
};

export default CalculationList;
