import Calculator from '../components/Calculator';
import '../styles/CalculatorRoute.css';

const CalculatorRoute = () => (
  <div className="calculator-container">
    <p className="calculator-text">Lets do some math</p>
    <Calculator />
  </div>
);

export default CalculatorRoute;
