import React from 'react';
import Programmer from '../assets/programmer.svg';
import { Navbar } from './Navbar';

export const Header = () => (
  <header className="mt-5">
    <Navbar />
    <h1 className="font-bold text-2xl text-center mt-5">
      JavaScript
      <span className="block font-extralight">
        Blog o JavaScript
      </span>
    </h1>
    <img src={Programmer} alt="Programista" className="mx-auto mt-4 " />
    <button
      type="button"
      className="rounded-full primary-gradient text-white px-8 py-4 font-semibold text-xl mt-5 block mx-auto"
    >
      Zarejestruj się
    </button>
  </header>
);
