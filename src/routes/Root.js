import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Root.css';

const Root = () => (
  <>
    <Header />
    <hr className="line" />
    <Outlet />
  </>
);

export default Root;
