import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { formatDistanceToNow, format } from 'date-fns';
import { PostEntityResponse } from 'types';
import { pl } from 'date-fns/locale'; // better is date-fns
import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';
import { AuthContext, AuthContextProps } from '../context/authContext';
import { sanitizer } from '../utils/sanitizer';
import defaultUserImg from '../assets/deafult_author.svg';

export const Single = () => {
  const [post, setPost] = useState<PostEntityResponse | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split('/')[2];

  const { currentUser } = useContext(AuthContext) as AuthContextProps;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get<PostEntityResponse | null>(`${import.meta.env.VITE_PATH}posts/${postId}`);
        setPost(await res.data); // nie dodałem await i spowodowało problemy wydajnościowe
      } catch (error) {
        console.log(error);
      }
    })();
  }, [postId]);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_PATH}posts/${postId}`, {
        withCredentials: true,
      });
      console.log(res.data);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const postDate = new Date(post ? post.date : new Date());
  const now = new Date();
  const isWithin7Days = (now.getTime() - postDate.getTime()) <= 7 * 24 * 60 * 60 * 1000;

  const postPublishTime = isWithin7Days
    ? formatDistanceToNow(postDate, { addSuffix: true, locale: pl })
    : format(postDate, 'dd-MM-yyyy');

  return post ? (
    <div className="flex-grow mt-10">
      <div className="flex gap-5 flex-col xl:flex-row">
        <img
          src={`../upload/${post.img}`}
          alt="główny obraz"
          className="order-1 xl:order-2"
        />
        <div className="xl:order-1 order-2 flex-grow">
          <div className="flex sm:flex-row gap-3 sm:gap-5 sm:text-xl sm:items-center font-bold">
            <img src={defaultUserImg} alt="zdjęcie autora postu" className="max-w-[60px]" />
            <div className="flex flex-col">
              <p>
                Autor:
                <span className="text-blue-400 ml-2">{post.author}</span>
              </p>
              <p>
                Opublikowano:
                <span className="text-blue-400 ml-2">{postPublishTime}</span>
              </p>
            </div>
          </div>
          <h1 className="text-xl md:text-5xl my-10 font-semibold hidden xl:block">{post.title}</h1>
          {currentUser
            ? currentUser.name === post.author && (
              <div className="flex gap-10 mt-10">
                <Link to={`/write?edit=${post.id}`} state={post}>
                  <img src={Edit} alt="Edit" />
                  Edytuj
                </Link>
                <button
                  type="button"
                  onClick={handleDelete}
                >
                  <img
                    src={Delete}
                    alt="Delete"
                  />
                  Usuń
                </button>
              </div>
            )
            : null}
        </div>
      </div>
      <div>
        <h1 className="text-xl md:text-5xl mt-10 font-semibold xl:hidden">{post.title}</h1>
        <div className="post-single mt-10" dangerouslySetInnerHTML={{ __html: sanitizer(post.desc) }} />
      </div>
    </div>
  )
    : <div> brak posta</div>;
};
