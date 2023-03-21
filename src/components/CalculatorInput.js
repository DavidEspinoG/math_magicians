import PropTypes from 'prop-types';
import '../styles/CalculatorInput.css';

const CalculatorInput = ({ state }) => {
  // const { total, next } = state;
  const toShow = (obj) => {
    if (obj.total === '0' && !obj.next && !obj.operation) {
      return '0';
    }
    if (!obj.total && !obj.next && !obj.operation) {
      return '0';
    }
    if (obj.next && !obj.total) {
      return obj.next;
    }
    if (!obj.next && obj.total && obj.operation) {
      return obj.total;
    }
    if (obj.next && obj.total && obj.operation) {
      return obj.next;
    }
    return obj.total;
  };
  return (
    <div className="calculator-input">
      <span>{ toShow(state) }</span>
    </div>
  );
};

CalculatorInput.propTypes = {
  state: PropTypes.instanceOf(Object).isRequired,
};
export default CalculatorInput;
