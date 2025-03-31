// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // App.js 임포트
import { BrowserRouter as Router } from 'react-router-dom'; // React Router

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Router로 감싸줘야 한다 */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
