import React, { FC } from 'react';
import Logo from './assets/logo.svg';
import { Sidebar } from './Component/Sidebar';

// @TODO zaimportować google fonts do reacta

export const App: FC = () => (
  <div className="container mx-auto border-4 fix-min-h-screen max-w-screen-xl relative">
    <Sidebar />
    <header className="px-2.5 mt-5">
      <img src={Logo} alt="Logo JS DOSE - Your Daily Dose of JS" className="w-1/2 max-w-min" />
    </header>
    <main>
      to jest main
    </main>
    <footer>
      to jest footer
    </footer>
  </div>
);
