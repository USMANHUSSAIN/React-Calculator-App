import React from "react";
import "./styles.css";

interface props {
    operator: string;
    setOperator: React.Dispatch<React.SetStateAction<string>>;
}

const InputOperator: React.FC<props> = ({operator, setOperator}) => {

    return (
        <form
            className="input"
        >
            <select onChange={(e) => setOperator(e.target.value)} className="input__box" value={operator}>
                <option value="+">Plus (+)</option>
                <option value="-">Minus (-)</option>
            </select>
        </form>
    );
};

export default InputOperator;
