import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext, AuthContextProps } from '../context/authContext';

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { currentUser, logout } = useContext(AuthContext) as AuthContextProps;

  return (
    <>
      {showSidebar ? (
        <button
          type="button"
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50 md:hidden"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="absolute z-30 flex items-center cursor-pointer right-2.5 top-1/2 md:hidden -translate-y-1/2"
          fill="#363636"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10" />
          <rect y="30" width="100" height="10" />
          <rect y="60" width="100" height="10" />
        </svg>
      )}

      <div
        className={`top-0 right-0 bottom-0 w-[65vw] sm:w-[45vw] bg-gray-600 p-10 pl-20 text-white fixed navbar-full z-40  ease-in-out duration-300 overflow-y-scroll ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <nav className="mt-16 text-xl font-semibold text-white">
          <ul className="leading-10">
            {currentUser && (
              <li className="leading-10 block py-3 underline-offset-4 underline">
                {currentUser?.name}
              </li>
            )}
            {currentUser && (
              <li>
                <NavLink to="/write" className={({ isActive }) => (isActive ? 'leading-10 block py-3 text-blue-400' : 'leading-10 block py-3')} onClick={() => setShowSidebar(!showSidebar)}>Utwórz post</NavLink>
              </li>
            )}
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'leading-10 block py-3 text-blue-400' : 'leading-10 block py-3')} onClick={() => setShowSidebar(!showSidebar)}>O nas</NavLink>
            </li>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'leading-10 block py-3 text-blue-400' : 'leading-10 block py-3')} onClick={() => setShowSidebar(!showSidebar)}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'leading-10 block py-3 text-blue-400' : 'leading-10 block py-3')} onClick={() => setShowSidebar(!showSidebar)}>Kontakt</NavLink>
            </li>
            {currentUser
              ? (
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'leading-10 block py-3 text-blue-400' : 'leading-10 block py-3')}
                    onClick={() => { logout(); setShowSidebar(!showSidebar); }}
                  >
                    Wyloguj
                  </NavLink>
                </li>
              )
              : (
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) => (isActive ? 'leading-10 block py-3 text-blue-400' : 'leading-10 block py-3')}
                    onClick={() => setShowSidebar(!showSidebar)}
                  >
                    Logowanie
                  </NavLink>
                </li>
              )}
          </ul>
        </nav>
      </div>
    </>
  );
};
