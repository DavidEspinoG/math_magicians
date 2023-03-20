import '../styles/calculator.css';
import CalculatorInput from './CalculatorInput';
import CalculatorButton from './CalculatorButton';

const getColor = (string) => {
  const orangeElements = ['÷', '×', '-', '+', '='];
  const index = orangeElements.findIndex((element) => element === string);
  if (index !== -1) {
    return 'orange';
  }
  return 'gray';
};

const Calculator = () => {
  const buttonValues = ['AC', '+/-', '%', '÷', '7', '8', '9', '×',
    '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className="calculator">
      <CalculatorInput number={0} />
      <div className="calculator-buttons">
        {buttonValues.map((element) => (
          <CalculatorButton
            key={element}
            content={element}
            color={getColor(element)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
