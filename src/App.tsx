import React, { FC } from 'react';
import Logo from './assets/logo.svg';
import Programmer from './assets/programmer.svg';
import { Sidebar } from './Component/Sidebar';

// @TODO zaimportować google fonts do reacta

export const App: FC = () => (
  <div className="container mx-auto fix-min-h-screen max-w-screen-xl">
    <header className="p-2.5 mt-5">
      <nav className="relative">
        <img src={Logo} alt="Logo JS DOSE - Your Daily Dose of JS" className="w-40" />
        <Sidebar />
      </nav>
      <h1 className="font-bold text-2xl text-center mt-5">
        JavaScript
        <span className="block font-extralight">
          Blog o JavaScript
        </span>
      </h1>
      <img src={Programmer} alt="Programmer" className="mx-auto mt-4" />
      <button
        type="button"
        className="rounded-full primary-gradient text-white px-8 py-4 font-semibold text-xl mt-5 block mx-auto"
      >
        Zarejestruj się
      </button>
    </header>
    <main>
      <input
        type="text"
        placeholder="szukaj tematu"
        className="px-3 py-1 w-48 block mx-auto rounded-full bg-gray-200 placeholder:text-gray-500"
      />
    </main>
    <footer>
      to jest footer
    </footer>
  </div>
);
