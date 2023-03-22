import React, { FC } from 'react';
import { CollapsibleList } from './components/Collapse';
import Glass from './assets/glass.svg';
import defaultUserImg from './assets/deafult_author.svg';
import { Header } from './components/Header';

// @TODO zaimportować google fonts do reacta

export const App: FC = () => (
  <div className="container mx-auto fix-min-h-screen max-w-screen-xl p-2.5 flex flex-col">
    <Header />
    <main className="mt-8 flex-grow">
      <form className="relative max-w-min mx-auto">
        <input
          type="text"
          placeholder="szukaj tematu"
          className="w-50 shadow-sm rounded-full bg-gray-200 placeholder:text-gray-500 pr-14 pl-5 border-0"
        />
        <button
          type="button"
          className="absolute top-1/2 right-4 -translate-y-1/2"
        >
          <img src={Glass} alt="szkło powiększające" className="w-7" />
        </button>
      </form>
      <CollapsibleList />
      <div className="font-light leading-9 text-base md:text-xl md:leading-8 md:tracking-wide">
        W naszej codziennej pracy w wielu projektach używamy technologii JavaScript,
        szczególnie Express oraz React.
        Na naszym blogu staramy się nieskomplikowanym językiem
        przybliżyć Ci specyfikę tych technologii,
        a także pokazać ich zastosowanie w praktyce.
        Artykuły tworzymy na bazie wieloletniego doświadczenia naszych specjalistów,
        więc o rzetelność informacji nie musisz się martwić.
      </div>

      <div className="mt-20 flex flex-col max-w-[580px] items-start mx-auto xl:flex-row xl:max-w-full">
        <img src="/upload/default.png" alt="" className="rounded-3xl xl:order-last" />
        <div>
          <div className="flex gap-3 mt-4 w-full xl:mt-0">
            <p className="font-bold hidden md:inline">
              Opublikowane:
              <span className="text-blue-400 ml-2">10-03-200</span>
            </p>
            <p className="font-bold hidden md:inline">
              Kategoria:
              <span className="text-blue-400 ml-2">Vanilla JavaScript</span>
            </p>
          </div>
          <h2 className="font-light text-2xl mt-2 leading-8">Programowanie aplikacji - jaki framework wybrać?</h2>
          <div className="flex items-center gap-5 mt-3">
            <img src={defaultUserImg} alt="zdjęcie autora postu" />
            <p className="font-bold">
              Autor:
              <span className="text-blue-400 ml-2">John Doe</span>
            </p>
          </div>
          <p className="mt-3 font-light leading-8 text-xl">
            Programowanie aplikacji to trudny proces, którego
            powodzenie zależy od wybrania odpowiednich technologii.
            JavaScript to obecnie podstawa praktycznie wszystkich aplikacji webowych.
          </p>
          <button
            type="button"
            className="rounded-full px-5 py-2 mt-3 text-blue-400 border-blue-400 border text-xl"
          >
            Czytaj więcej
          </button>
        </div>
      </div>
    </main>
    <footer className="pb-3">
      <hr
        className="mb-2 mt-10 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
      />
      <h3 className="text-sm md:text-base">
        <span className="font-bold">2023 </span>
        Blog przygotowany pod zaliczenie projektu z kursu megak
      </h3>
      <p className="font-light text-xs mt-3 md:text-sm">
        Projekt korzysta z ciasteczek, aby zwiększyć twoją wygodę korzystania ze strony.
        Poprzez rejestracje na tej stronie zezwalasz nam na ich używanie.
      </p>
    </footer>
  </div>
);
