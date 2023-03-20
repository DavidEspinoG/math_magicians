import PropTypes from 'prop-types';
import '../styles/CalculatorButton.css';

const CalculatorButton = ({ content, color }) => (
  <div className={`calculator-button ${color}`}>
    <span>{content}</span>
  </div>
);

CalculatorButton.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
};

CalculatorButton.defaultProps = {
  color: 'gray',
};

export default CalculatorButton;
