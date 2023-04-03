import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, AuthContextProps } from '../context/authContext';
import Logo from '../assets/logo.svg';
import { Sidebar } from './Sidebar';

export const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext) as AuthContextProps;

  return (
    <nav className="relative flex place-content-between mt-5 ">
      <img src={Logo} alt="Logo JS DOSE - Your Daily Dose of JS" className="w-40 md:w-[220px]" />
      <ul className="hidden md:flex gap-8 text-xl font-semibold leading-10">
        <li>
          <Link to="/about" className=" block px-3 py-0.5 hover:text-blue-400">O nas</Link>
        </li>
        <li>
          <Link to="/" className=" block px-3 py-0.5 hover:text-blue-400">Blog</Link>
        </li>
        <li>
          <Link to="/contact" className=" block px-3 py-0.5 hover:text-blue-400">Kontakt</Link>
        </li>
        {currentUser && (
          <li>
            <Link to="/write" className="block px-3 py-0.5 hover:text-blue-400">Utwórz post</Link>
          </li>
        )}
        {currentUser && (
        <li className="block px-3 py-0.5 text-blue-400 underline-offset-4 underline">
          {currentUser?.name}
        </li>
        )}
        {currentUser
          ? (
            <li>
              <Link
                to="/"
                className=" block px-3 py-0.5 hover:text-blue-400"
                onClick={logout}
              >
                Wyloguj
              </Link>
            </li>
          )
          : (
            <li>
              <Link
                to="/login"
                className="block px-3 py-0.5 hover:text-blue-400"
              >
                Logowanie
              </Link>
            </li>
          )}
      </ul>
      <Sidebar />
    </nav>
  );
};
