import '../styles/calculator.css';
import { useState } from 'react';
import CalculatorInput from './CalculatorInput';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';

const getColor = (string) => {
  const orangeElements = ['÷', 'x', '-', '+', '='];
  const index = orangeElements.findIndex((element) => element === string);
  if (index !== -1) {
    return 'orange';
  }
  return 'gray';
};

const onClickHandler = (state, buttonName, setState) => {
  setState(calculate(state, buttonName));
};

const Calculator = () => {
  const initialState = {
    total: '0',
    next: null,
    operation: null,
  };
  const [state, setState] = useState(initialState);

  const buttonValues = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x',
    '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div data-testid="calculator" className="calculator">
      <CalculatorInput state={state} />
      <div className="calculator-buttons">
        {buttonValues.map((element) => (
          <CalculatorButton
            key={element}
            content={element}
            color={getColor(element)}
            onClick={onClickHandler}
            state={state}
            setState={setState}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
