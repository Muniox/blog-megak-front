import React, { FC } from 'react';
import { formatDistanceToNow, format } from 'date-fns';
import { Link } from 'react-router-dom';
import { pl } from 'date-fns/locale';
import { PostEntityResponse } from 'types';
import defaultUserImg from '../assets/deafult_author.svg';

export const Post: FC<PostEntityResponse> = (props) => {
  const {
    id, title, desc, img, date, category, author,
  } = props;

  const shortDesc = desc.length > 300 ? `${desc.substring(0, 300)}...` : desc;
  const postDate = new Date(date);
  const now = new Date();
  const isWithin7Days = (now.getTime() - postDate.getTime()) <= 7 * 24 * 60 * 60 * 1000;

  const postPublishTime = isWithin7Days
    ? formatDistanceToNow(postDate, { addSuffix: true, locale: pl })
    : format(postDate, 'dd-MM-yyyy');

  return (
    <div className="mt-20 flex flex-col max-w-[580px] items-start mx-auto xl:flex-row xl:max-w-full xl:gap-10 xl:place-content-between xl:odd:flex-row-reverse">
      <img src={`/upload/${img}`} alt="" className="rounded-3xl xl:order-last" />
      <div>
        <div className="flex gap-8 mt-4 w-full xl:mt-0">
          <p className="font-bold hidden md:inline">
            Opublikowane:
            <span className="text-blue-400 ml-2">{postPublishTime}</span>
          </p>
          <p className="font-bold hidden md:inline">
            Kategoria:
            <span className="text-blue-400 ml-2">
              {category}
            </span>
          </p>
        </div>
        <Link to={`${import.meta.env.VITE_PATH}posts/${id}`}>
          <h2 className="font-light text-2xl mt-2 leading-8 md:text-3xl hover:text-blue-400">
            {title}
          </h2>
        </Link>
        <div className="flex items-center gap-6 mt-3">
          <img src={defaultUserImg} alt="zdjęcie autora postu" />
          <p className="font-bold">
            Autor:
            <span className="text-blue-400 ml-2">{author}</span>
          </p>
        </div>
        <p className="mt-3 font-light leading-8 text-xl">
          {shortDesc}
        </p>
        <Link to={`${import.meta.env.VITE_PATH}posts/${id}`}>
          <button
            type="button"
            className="rounded-full px-5 py-2 mt-3 text-blue-400 border-blue-400 border text-base md:text-xl hover:bg-blue-400 hover:text-white transition"
          >
            Czytaj więcej
          </button>
        </Link>
      </div>
    </div>
  );
};
