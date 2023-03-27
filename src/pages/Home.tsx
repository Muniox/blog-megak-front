import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { PostEntityResponse } from 'types';
import Shape from '../assets/shape.svg';
import { CollapsibleList } from '../components/Collapse';
import Glass from '../assets/glass.svg';
import { Header } from '../components/Header';
import { Post } from '../components/Post';

export const Home = () => {
  // @TODO ogranicz description do 200 znaków
  const [posts, setPosts] = useState<PostEntityResponse[] | []>([]);

  const cat = useLocation().search;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get<PostEntityResponse[]>(`${import.meta.env.VITE_PATH}posts${cat}`);
        setPosts(await res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [cat]);

  return (
    <>
      <Header />
      <img
        src={Shape}
        alt="decoration shape"
        className="absolute top-32 right-1/2 translate-x-1/2 z-10 hidden xl:inline w-[1400px]"
      />
      <main className="mt-8 flex-grow" id="menu">
        <form className="relative max-w-min mx-auto md:ml-auto md:mr-0 mt-5">
          <input
            type="text"
            placeholder="szukaj tematu"
            className="w-48 md:w-64 shadow-sm rounded-full bg-gray-200 placeholder:text-gray-500 pr-14 pl-5 border-0"
          />
          <button
            type="button"
            className="absolute top-1/2 right-4 -translate-y-1/2"
          >
            <img src={Glass} alt="szkło powiększające" className="w-7" />
          </button>
        </form>
        <CollapsibleList />
        <div className="mt-5">
          <ul className="flex place-content-between">
            <li>
              <Link
                to="/"
                className="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
              >
                Wszystkie
              </Link>
            </li>
            <li>
              <Link
                to="?cat=react"
                className="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
              >
                React
              </Link>
            </li>
            <li>
              <Link
                to="/?cat=vanilla%20javascript"
                className="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
              >
                Vanilla JavaScript
              </Link>
            </li>
            <li>
              <Link
                to="/?cat=node"
                className="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
              >
                Node
              </Link>
            </li>
            <li>
              <Link
                to="/?cat=express"
                className="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
              >
                Express
              </Link>
            </li>
            <li>
              <Link
                to="/?cat=typescript"
                className="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
              >
                TypeScript
              </Link>
            </li>
            <li>
              <Link
                to="/?cat=nestjs"
                className="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
              >
                NestJS
              </Link>
            </li>
            <li>
              <Link
                to="/?cat=other"
                className="w-full xl:text-base md:block hover:text-blue-400 px-4 py-3 md:text-sm hidden"
              >
                Other
              </Link>
            </li>
          </ul>
          <hr
            className="my-2 h-0.5 border-t-0 bg-blue-400 opacity-100 dark:opacity-50"
          />
        </div>
        <div className="font-light leading-9 text-base md:text-base md:leading-6 md:tracking-wide">
          W naszej codziennej pracy w wielu projektach używamy technologii JavaScript,
          szczególnie Express oraz React.
          Na naszym blogu staramy się nieskomplikowanym językiem
          przybliżyć Ci specyfikę tych technologii,
          a także pokazać ich zastosowanie w praktyce.
          Artykuły tworzymy na bazie wieloletniego doświadczenia naszych specjalistów,
          więc o rzetelność informacji nie musisz się martwić.
        </div>
        {posts.length === 0 ? <div className="text-2xl text-center mt-10 font-light"> Brak postów</div>
          : posts.map((post) => (
            <Post
              id={post.id}
              title={post.title}
              desc={post.desc}
              img={post.img}
              date={post.date}
              category={post.category}
              author={post.author}
              key={post.id}
            />
          ))}
      </main>
    </>
  );
};
