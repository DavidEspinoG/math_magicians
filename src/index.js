import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';
import Root from './routes/Root';
import CalculatorRoute from './routes/CalculatorRoute';
import HomeRoute from './routes/HomeRoute';
import QuoteRoute from './routes/QuoteRoute';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomeRoute />,
      },
      {
        path: '/calculator',
        element: <CalculatorRoute />,
      },
      {
        path: '/quote',
        element: <QuoteRoute />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
