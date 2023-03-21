import React, { useState } from 'react';

export const CollapsibleList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        type="button"
        className="mt-10"
        onClick={toggleList}
      >
        Kategorie
      </button>
      {isOpen && (
        <ul className="mt-2">
          <li>
            <a href="/">React</a>
          </li>
          <li>
            <a href="/">Vanilla JavaScript</a>
          </li>
          <li>
            <a href="/">Node</a>
          </li>
          <li>
            <a href="/">Express</a>
          </li>
          <li>
            <a href="/">TypeScript</a>
          </li>
          <li>
            <a href="/">NestJS</a>
          </li>
          <li>
            <a href="/">Other</a>
          </li>
        </ul>
      )}
    </div>
  );
};
