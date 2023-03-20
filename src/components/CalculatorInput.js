import PropTypes from 'prop-types';
import '../styles/CalculatorInput.css';

const CalculatorInput = ({ number }) => (
  <div className="calculator-input">
    <span>{number}</span>
  </div>
);

CalculatorInput.propTypes = {
  number: PropTypes.number,
};
CalculatorInput.defaultProps = {
  number: 0,
};
export default CalculatorInput;
