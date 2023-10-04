import React, {useEffect, useState} from "react";
import {useRef} from "react";
import {AiFillEdit, AiFillDelete} from "react-icons/ai";
import {MdDone} from "react-icons/md";
import {Calculator} from "../models/models";

const SingleCalculation: React.FC<{
    index: number;
    calculation: Calculator;
    calculations: Array<Calculator>;
    setCalculations: React.Dispatch<React.SetStateAction<Array<Calculator>>>;
    result: number;
    setResult: React.Dispatch<React.SetStateAction<number>>;
}> = ({ calculation, calculations, setCalculations, result, setResult}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editOperand, setEditOperand] = useState<string>(calculation.operand);

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const handleEdit = (e: React.FormEvent, id: number, currentOperand: string) => {
        e.preventDefault();
        setCalculations(
            calculations.map((calculation) => (calculation.id === id ? {
                ...calculation,
                operand: editOperand
            } : calculation))
        );
        setResult(result + (Number(editOperand) - Number(currentOperand)));
        setEdit(false);
    };

    const handleDelete = (id: number, operand: string) => {
        setCalculations(calculations.filter((calculation) => calculation.id !== id));
        setResult(result - Number(operand));
    };

    const handleDisabled = (id: number, operand: string, isDisabled: boolean) => {
        setCalculations(
            calculations.map((calculation) =>
                calculation.id === id ? {...calculation, isDisabled: !calculation.isDisabled} : calculation
            )
        );

        if (!isDisabled) {
            setResult(result - Number(operand));
        } else {
            setResult(result + Number(operand));
        }

    };

    return (
        <form
            onSubmit={(e) => handleEdit(e, calculation.id, calculation.operand)}
        >
            {edit ? (
                <input
                    value={editOperand}
                    onChange={(e) => setEditOperand(e.target.value)}
                    className="calculations__single--text"
                    ref={inputRef}
                />
            ) : calculation.isDisabled ? (
                <span className="calculations__single--text"
                      style={{textDecoration: 'line-through'}}>{calculation.operand}</span>
            ) : (
                <span className="calculations__single--text">{calculation.operand}</span>
            )}
            <div>
        <span
            className="icon"
            onClick={() => {
                if (!edit && !calculation.isDisabled) {
                    setEdit(!edit);
                }
            }}
        >
          <AiFillEdit/>
        </span>
                <span className="icon" onClick={() => handleDelete(calculation.id, calculation.operand)}>
          <AiFillDelete/>
        </span>
                <span className="icon"
                      onClick={() => handleDisabled(calculation.id, calculation.operand, calculation.isDisabled)}>
          <MdDone/>
        </span>
            </div>
        </form>
    );
};

export default SingleCalculation;