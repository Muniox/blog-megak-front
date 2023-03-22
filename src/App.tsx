import React, { FC } from 'react';
import Logo from './assets/logo.svg';
import Programmer from './assets/programmer.svg';
import { Sidebar } from './Component/Sidebar';
import { CollapsibleList } from './Component/Collapse';
import Glass from './assets/glass.svg';
import defaultUserImg from './assets/deafult_author.svg';

// @TODO zaimportować google fonts do reacta

export const App: FC = () => (
  <div className="container mx-auto fix-min-h-screen max-w-screen-xl p-2.5 flex flex-col">
    <header className="mt-5">
      <nav className="relative flex place-content-between">
        <img src={Logo} alt="Logo JS DOSE - Your Daily Dose of JS" className="w-40" />
        <ul className="hidden md:flex gap-8 text-xl">
          <li>
            <a href="/" className="leading-10 block px-3 py-0.5 hover:text-blue-400">O nas</a>
          </li>
          <li>
            <a href="/" className="leading-10 block px-3 py-0.5 hover:text-blue-400">Blog</a>
          </li>
          <li>
            <a href="/" className="leading-10 block px-3 py-0.5 hover:text-blue-400">Kontakt</a>
          </li>
          <li>
            <a href="/" className="leading-10 block px-3 py-0.5 hover:text-blue-400">Logowanie</a>
          </li>
        </ul>
        <Sidebar />
      </nav>
      <h1 className="font-bold text-2xl text-center mt-5">
        JavaScript
        <span className="block font-extralight">
          Blog o JavaScript
        </span>
      </h1>
      <img src={Programmer} alt="Programista" className="mx-auto mt-4 " />
      <button
        type="button"
        className="rounded-full primary-gradient text-white px-8 py-4 font-semibold text-xl mt-5 block mx-auto"
      >
        Zarejestruj się
      </button>
    </header>
    <main className="mt-8 flex-grow">
      <form className="relative max-w-min mx-auto">
        <input
          type="text"
          placeholder="szukaj tematu"
          className="w-48 shadow-sm rounded-full bg-gray-200 placeholder:text-gray-500 pr-14"
        />
        <button
          type="button"
          className="absolute top-1/2 right-4 -translate-y-1/2"
        >
          <img src={Glass} alt="szkło powiększające" className="w-7" />
        </button>
      </form>
      <CollapsibleList />
      <div className="font-light leading-8">
        W naszej codziennej pracy w wielu projektach używamy technologii JavaScript,
        szczególnie Express oraz React.
        Na naszym blogu staramy się nieskomplikowanym językiem
        przybliżyć Ci specyfikę tych technologii,
        a także pokazać ich zastosowanie w praktyce.
        Artykuły tworzymy na bazie wieloletniego doświadczenia naszych specjalistów,
        więc o rzetelność informacji nie musisz się martwić.
      </div>

      <div className="mt-20 flex flex-col max-w-[580px] items-start mx-auto">
        <img src="/upload/default.png" alt="" className="rounded-3xl" />
        <h2 className="font-light text-2xl mt-2 leading-10">Programowanie aplikacji - jaki framework wybrać?</h2>
        <div className="flex items-center gap-5 mt-3">
          <img src={defaultUserImg} alt="zdjęcie autora postu" />
          <p className="font-bold">
            Autor:
            <span className="text-blue-400 ml-2">John Doe</span>
          </p>
        </div>
        <p className="mt-3 font-light leading-8">
          Programowanie aplikacji to trudny proces, którego
          powodzenie zależy od wybrania odpowiednich technologii.
          JavaScript to obecnie podstawa praktycznie wszystkich aplikacji webowych.
        </p>
        <button
          type="button"
          className="rounded-full px-5 py-2 mt-3 text-blue-400 border-blue-400 border"
        >
          Czytaj więcej
        </button>
      </div>
    </main>
    <footer>
      <hr
        className="mb-2 mt-10 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
      />
      <h3 className="text-sm">
        <span className="font-bold">2023 </span>
        Blog przygotowany pod zaliczenie projektu z kursu megak
      </h3>
      <p className="font-light text-xs mt-3">
        Projekt korzysta z ciasteczek, aby zwiększyć twoją wygodę korzystania ze strony.
        Poprzez rejestracje na tej stronie zezwalasz nam na ich używanie.
      </p>
    </footer>
  </div>
);
