import React from 'react';
import { Link } from 'react-router-dom';
import Programmer from '../assets/programmer.svg';
import Arrow from '../assets/arrow.svg';

export const Header = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('menu');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className=" z-30">
      <div className="md:flex xl:mt-10 md:mt-24">
        <div>
          <h1 className="font-bold text-2xl text-center mt-5 md:text-left md:text-5xl xl:text-7xl">
            JavaScript
            <span className="block font-extralight md:text-3xl md:mt-10">
              Blog o JavaScript
            </span>
          </h1>
          <p className="hidden md:block text-xl font-light md:mt-10 xl:mt-20 leading-10">
            Node, React, Express oraz inne rzeczy powiązane z JavaScriptem –
            o tym piszemy na naszym blogu poświęconym technologiom JS.
            Przedstawiamy zarówno podstawową wiedzę dla początkujących,
            jak i bardziej zaawansowane tematy z zakresu JavaScript.
          </p>
        </div>
        <img src={Programmer} alt="Programista" className="mx-auto mt-4 md:max-w-[483px] xl:max-w-none xl:min-w-[702px] xl:mt-10" />
      </div>
      <div className="md:flex md:items-center gap-3">
        <Link to="/register">
          <button
            type="button"
            className="rounded-full primary-gradient text-white px-8 py-4 font-semibold text-xl block mx-auto md:mx-0 mt-5 xl:mt-0"
          >
            Zarejestruj się
          </button>
        </Link>
        <p className="hidden md:inline">jeśli chcesz do nas dołączyć oraz pomóc w rozwijaniu bloga.</p>
      </div>
      <div className="mt-5 flex justify-center">
        <button type="button" onClick={handleClickScroll}>
          <img src={Arrow} alt="" className="max-w-[70px] md:max-w-[90]" />
        </button>
      </div>
    </header>
  );
};
