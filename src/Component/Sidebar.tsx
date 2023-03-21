import React, { useState } from 'react';

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          type="button"
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50 sm:hidden"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="absolute z-30 flex items-center cursor-pointer right-2.5 top-1/2 sm:hidden -translate-y-1/2"
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
        className={`top-0 right-0 w-[65vw] bg-gray-600 p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white">
          I am a sidebar
        </h3>
      </div>
    </>
  );
};
