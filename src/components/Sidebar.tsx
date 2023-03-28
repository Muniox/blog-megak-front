import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

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
            <li>
              <Link to="/" className="leading-10 block py-3">O nas</Link>
            </li>
            <li>
              <Link to="/" className="leading-10 block py-3">Blog</Link>
            </li>
            <li>
              <Link to="/" className="leading-10 block py-3">Kontakt</Link>
            </li>
            <li>
              <Link to="/login" className="leading-10 block py-3">Logowanie</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
