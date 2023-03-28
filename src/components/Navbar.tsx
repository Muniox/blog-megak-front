import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { Sidebar } from './Sidebar';

export const Navbar = () => (
  <nav className="relative flex place-content-between mt-5 ">
    <img src={Logo} alt="Logo JS DOSE - Your Daily Dose of JS" className="w-40 md:w-[220px]" />
    <ul className="hidden md:flex gap-8 text-xl font-semibold leading-10">
      <li>
        <Link to="/" className=" block px-3 py-0.5 hover:text-blue-400">O nas</Link>
      </li>
      <li>
        <Link to="/" className=" block px-3 py-0.5 hover:text-blue-400">Blog</Link>
      </li>
      <li>
        <Link to="/" className=" block px-3 py-0.5 hover:text-blue-400">Kontakt</Link>
      </li>
      <li>
        <Link to="/login" className=" block px-3 py-0.5 hover:text-blue-400">Logowanie</Link>
      </li>
    </ul>
    <Sidebar />
  </nav>
);
