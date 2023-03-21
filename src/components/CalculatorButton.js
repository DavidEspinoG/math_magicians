import PropTypes from 'prop-types';
import '../styles/CalculatorButton.css';

const CalculatorButton = ({
  content, color, onClick, state, setState,
}) => (
  <div
    className={`calculator-button ${color} ${content === '0' ? 'large' : ''}`}
    onClick={() => {
      onClick(state, content, setState);
    }}
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        onClick(state, content, setState);
      }
    }}
    role="button"
    tabIndex="0"
  >
    <span>{content}</span>
  </div>
);

CalculatorButton.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  state: PropTypes.instanceOf(Object).isRequired,
  setState: PropTypes.func.isRequired,
};

CalculatorButton.defaultProps = {
  color: 'gray',
};

export default CalculatorButton;
