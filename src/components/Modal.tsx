import React, { FC } from 'react';
import ReactDOM from 'react-dom';

interface Props {
    errorMessage: string;
    isClose: any
}

export const Modal: FC<Props> = ({ errorMessage, isClose }) => ReactDOM.createPortal(
  <div className="w-1/2 border-gray-500 border-2 fixed top-0 left-0 bg-white">
    <div className="">
      <h2>Error</h2>
      <p>{errorMessage}</p>
      <button type="button" onClick={isClose}>Close</button>
    </div>
  </div>,
  document.body, // Element DOM, do którego ma zostać wstrzyknięty modal
);
