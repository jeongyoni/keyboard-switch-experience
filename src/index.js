import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 이상에서는 createRoot 사용
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);