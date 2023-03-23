import React, { useState } from 'react';
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
            <a href="/" className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3">React</a>
          </li>
          <li>
            <a href="/" className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3">Vanilla JavaScript</a>
          </li>
          <li>
            <a href="/" className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3">Node</a>
          </li>
          <li>
            <a href="/" className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3">Express</a>
          </li>
          <li>
            <a href="/" className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3">TypeScript</a>
          </li>
          <li>
            <a href="/" className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3">NestJS</a>
          </li>
          <li>
            <a href="/" className="w-full block hover:text-white hover:bg-blue-400 px-4 py-3">Other</a>
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
