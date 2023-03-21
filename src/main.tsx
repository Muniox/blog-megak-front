import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.pcss';

// @TODO zmienić nesting na tailwind mesting https://tailwindcss.com/docs/using-with-preprocessors#nesting
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
