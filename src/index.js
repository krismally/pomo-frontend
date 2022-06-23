import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import SettingsContextProvider from './context/ConfigContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SettingsContextProvider>
    <Router>
     <App />
    </Router>
  </SettingsContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
