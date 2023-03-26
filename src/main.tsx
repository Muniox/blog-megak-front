import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.pcss';
import { AuthContextProvider } from './context/authContext';

// @TODO zmienić nesting na tailwind nesting https://tailwindcss.com/docs/using-with-preprocessors#nesting
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  // </React.StrictMode>
);
