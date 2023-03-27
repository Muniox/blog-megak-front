import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import chevronDoubleDown from '../assets/chevron-double-down.svg';

export const CollapsibleList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-5 border-blue-400 border md:hidden">
      <button
        type="button"
        className={`block w-full text-left text-blue-400 text-xl font-light leading-10 relative px-4 py-1  border-b ${isOpen && 'border-blue-400'}`}
        onClick={toggleList}
      >
        Kategorie
        <img src={chevronDoubleDown} alt="" className="w-6 absolute top-1/2 right-3 -translate-y-1/2" />
      </button>
      {isOpen && (
        <ul className="leading-6 transition duration-200">
          <li>
            <NavLink
              to="/"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              Wszystkie
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/?cat=react"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              React
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/?cat=vanilla%20javascript"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              Vanilla JavaScript
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/?cat=node"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              Node
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/?cat=express"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              Express
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/?cat=typescript"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              TypeScript
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/?cat=nestjs"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              NestJS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/?cat=other"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              Other
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};
