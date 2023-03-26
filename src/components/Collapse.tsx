import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import chevronDoubleDown from '../assets/chevron-double-down.svg';

export const CollapsibleList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mt-5 border-blue-400 border">
        <button
          type="button"
          className={`block w-full text-left text-blue-400 text-xl font-light leading-10 relative px-4 py-1  border-b ${isOpen && 'border-blue-400'}`}
          onClick={toggleList}
        >
          Kategorie
          <img src={chevronDoubleDown} alt="" className="w-6 absolute top-1/2 right-3 -translate-y-1/2" />
        </button>
        {isOpen && (
        <ul className="leading-6 transition ease-in-out delay-150">
          <li>
            <Link
              to="/"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              Wszystkie
            </Link>
          </li>
          <li>
            <Link
              to="/?cat=react"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              React
            </Link>
          </li>
          <li>
            <Link
              to="/?cat=vanilla%20javascript"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              Vanilla JavaScript
            </Link>
          </li>
          <li>
            <Link
              to="/?cat=node"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              Node
            </Link>
          </li>
          <li>
            <Link
              to="/?cat=express"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              Express
            </Link>
          </li>
          <li>
            <Link
              to="/?cat=typescript"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              TypeScript
            </Link>
          </li>
          <li>
            <Link
              to="/?cat=nestjs"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              NestJS
            </Link>
          </li>
          <li>
            <Link
              to="/?cat=other"
              className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3"
              onClick={() => setIsOpen(false)}
            >
              Other
            </Link>
          </li>
        </ul>
        )}
      </div>
      <hr
        className="my-2 h-0.5 border-t-0 bg-blue-400 opacity-100 dark:opacity-50"
      />
    </>
  );
};
