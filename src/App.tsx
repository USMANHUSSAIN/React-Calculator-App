import React, {useState} from "react";
import "./App.css";
import InputField from "./components/InputField";
import CalculationList from "./components/CalculationList";
import {Calculator} from "./models/models";
import InputOperator from "./components/InputOperator";

const App: React.FC = () => {
    const [operator, setOperator] = useState<string>("+");
    const [operand, setOperand] = useState<string>("");
    const [result, setResult] = useState<number>(0);
    const [calculations, setCalculations] = useState<Array<Calculator>>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (operand) {
            setCalculations([...calculations, {id: Date.now(), operator, operand, isDisabled: false}]);

            if (operator === '+') {
                setResult(result + Number(operand));
            } else {
                setResult(result - Number(operand));
            }

            setOperand("");
        }
    };

    return (
        <>
            <div className="App">
                <span className="heading">React Calculator App</span>
                <InputOperator operator={operator} setOperator={setOperator}/>
                <InputField operand={operand} setOperand={setOperand} handleAdd={handleAdd}/>
                <CalculationList
                    calculations={calculations}
                    setCalculations={setCalculations}
                    result={result}
                    setResult={setResult}
                />
                <h1>Result: {result}</h1>
            </div>
        </>
    );
};

export default App;
