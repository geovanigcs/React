import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Styles/global-styles.css';
import { Home } from './Temp/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

