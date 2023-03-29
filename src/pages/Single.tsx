import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { formatDistanceToNow, format } from 'date-fns';
import { PostEntityResponse } from 'types';
import { pl } from 'date-fns/locale'; // better is date-fns
import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';
import { AuthContext, AuthContextProps } from '../context/authContext';

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
        console.log(res.data, postId);
        setPost(await res.data); // nie dodałem await i spowodowało problemy wydajnościowe
      } catch (error) {
        console.log(error);
      }
    })();
  }, [postId]);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_PATH}posts/${postId}`);
      console.log(res.data);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const postDate = new Date(post.date);
  const now = new Date();
  const isWithin7Days = (now.getTime() - postDate.getTime()) <= 7 * 24 * 60 * 60 * 1000;

  const postPublishTime = isWithin7Days
    ? formatDistanceToNow(postDate, { addSuffix: true, locale: pl })
    : format(postDate, 'dd-MM-yyyy');

  return (
    <div className="">
      <div className="">
        <img
          src={`../upload/${post.img}`}
          alt="główny obraz"
        />
        <div className="">
          {post.img && (
            <img
              src={post.img}
              alt=""
            />
          )}
          <div className="">
            <span>{post.author}</span>
            <p>
              {postPublishTime}
            </p>
          </div>
          { currentUser
            ? currentUser.name === post.author && (
              <div className="">
                <Link to="/write?edit=2" state={post}>
                  <img src={Edit} alt="" />
                </Link>
                <button
                  type="button"
                  onClick={handleDelete}
                >
                  <img
                    src={Delete}
                    alt="delete post"
                  />
                </button>
              </div>
            )
            : null}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
    </div>
  );
};
