import React, {useRef} from "react";
import "./styles.css";

interface props {
    operator: string;
    setOperator: React.Dispatch<React.SetStateAction<string>>;
}

const InputOperator: React.FC<props> = ({operator, setOperator}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className="input"
        >
            <select onChange={(e) => setOperator(e.target.value)} className="input__box" value={operator}
                    ref={inputRef}>
                <option value="+">Plus (+)</option>
                <option value="-">Minus (-)</option>
            </select>
        </form>
    );
};

export default InputOperator;
