import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { hydrate } from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


hydrate(<App />, document.getElementById('root'));