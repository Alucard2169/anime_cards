import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { SearchTermProvider } from './context/appContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchTermProvider>
        <App />
  </SearchTermProvider>
  </React.StrictMode>
);

