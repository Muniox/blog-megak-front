import React, {
  FormEvent, useEffect, useState,
} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios, { AxiosError } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { sanitizer } from '../utils/sanitizer';
// import { Modal } from '../components/Modal';

export const Write = () => {
  const { state } = useLocation();

  const [title, setTitle] = useState(sanitizer(state?.title) || '');
  const [value, setValue] = useState(sanitizer(state?.desc) || '');
  const [file, setFile] = useState<string | Blob | null>(null);
  const [category, setCat] = useState(state?.category || '');
  // inna metoda, zamiast w jednym inpucie zrobimy w kilku, Register jest przykladem jednego inputa

  useEffect(() => {
    setTitle(sanitizer(state?.title));
    setValue(sanitizer(state?.desc));
    setFile(null);
    setCat(state?.category);
  }, [state?.category, state?.desc, state?.title]);

  // Modal
  // const [error, setError] = useState<[boolean, string | undefined]>([false, '']);

  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  const upload = async () => {
    try {
      const formData = new FormData();
      if (file) {
        formData.append('file', file);
        const res = await axios.post(`${import.meta.env.VITE_PATH}api/upload`, formData, {
          withCredentials: true,
        });
        return res.data;
      }
    } catch (err) {
      if (axios.isAxiosError<AxiosError, Record<string, unknown>>(err)) {
        console.log(err.response?.data?.message);
      }
    }
  };

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      // eslint-disable-next-line no-unused-expressions
      if (state) {
        await axios.put(`${import.meta.env.VITE_PATH}posts/${state.id}`, {
          title,
          desc: value,
          category,
          img: file ? imgUrl : '',
        }, { withCredentials: true });
        navigate(`/posts/${state?.id}`);
        console.log('update');
      } else {
        const res = await axios.post(`${import.meta.env.VITE_PATH}posts/`, {
          title,
          desc: value,
          category,
          img: file ? imgUrl : '',
          date: format(Date.now(), 'yyyy-MM-dd HH:mm:ss'),
        }, {
          withCredentials: true,
        });
        navigate(`/posts/${res.data.postId}`);
      }
      // powinno nawigować zamiast do głównej to do tego postu!
    } catch (err) {
      if (axios.isAxiosError<AxiosError>(err)) {
        console.log(err.response?.data.message);
        // const errorMessage = err.response?.data?.message as string;
        // setError([true, errorMessage]);
      }
    }
  };
  // { error[0] && <Modal isClose={() => setError([false, ''])} errorMessage={error[1]} />}

  return (
    <div className="mt-10 flex flex-col gap-5 md:flex-grow md:flex-row">
      <div className="flex flex-col flex-1 gap-10">
        <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <div className="flex flex-grow flex-1">
          <ReactQuill
            className="flex flex-grow flex-col"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-3">
          <h1
            className="text-xl font-semibold"
          >
            Publish Post
          </h1>
          <p className="font-semibold">
            Status:
            <span className="ml-2 text-blue-400">
              Draft
            </span>
          </p>
          <p className="font-semibold">
            Visibility:
            <span className="ml-2 text-blue-400">
              Public
            </span>
          </p>

          <label className="rounded-full px-5 py-2 text-blue-400 border-blue-400 border text-base hover:bg-blue-400 hover:text-white transition duration-300 cursor-pointer" htmlFor="file">
            <input style={{ display: 'none' }} type="file" name="" id="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
            Upload Image
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-full px-5 py-2 text-blue-400 border-blue-400 border text-base hover:bg-blue-400 hover:text-white transition duration-300"
            >
              Save as draft
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-full px-5 py-2 text-blue-400 border-blue-400 border text-base hover:bg-blue-400 hover:text-white transition duration-300"
            >
              Publish
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <h1 className="font-semibold text-xl mb-2">Category</h1>
          <div className="">
            <label htmlFor="react" className="flex gap-1 items-center cursor-pointer py-2">
              <input type="radio" checked={category === 'React'} name="category" value="React" id="react" className="cursor-pointer" onChange={(e) => setCat(e.target.value)} />
              React
            </label>
          </div>
          <div className="">
            <label htmlFor="vanilla" className="flex gap-1 items-center cursor-pointer py-2">
              <input type="radio" checked={category === 'Vanilla JavaScript'} name="category" value="Vanilla JavaScript" id="vanilla" className="cursor-pointer" onChange={(e) => setCat(e.target.value)} />
              Vanilla JavaScript
            </label>
          </div>
          <div className="">
            <label htmlFor="node" className="flex gap-1 items-center cursor-pointer py-2">
              <input type="radio" checked={category === 'Node'} name="category" value="Node" id="node" className="cursor-pointer" onChange={(e) => setCat(e.target.value)} />
              Node
            </label>
          </div>
          <div className="">
            <label htmlFor="express" className="flex gap-1 items-center cursor-pointer py-2">
              <input type="radio" checked={category === 'Express'} name="category" value="Express" id="express" className="cursor-pointer" onChange={(e) => setCat(e.target.value)} />
              Express
            </label>
          </div>
          <div className="">
            <label htmlFor="typescript" className="flex gap-1 items-center cursor-pointer py-2">
              <input type="radio" checked={category === 'TypeScript'} name="category" value="TypeScript" id="typescript" className="cursor-pointer" onChange={(e) => setCat(e.target.value)} />
              TypeScript
            </label>
          </div>
          <div className="">
            <label htmlFor="nest" className="flex gap-1 items-center cursor-pointer py-2">
              <input type="radio" checked={category === 'NestJS'} name="category" value="NestJS" id="nest" className="cursor-pointer" onChange={(e) => setCat(e.target.value)} />
              NestJS
            </label>
          </div>
          <div className="">
            <label htmlFor="other" className="flex gap-1 items-center cursor-pointer py-2">
              <input type="radio" checked={category === 'Other'} name="category" value="Other" id="other" className="cursor-pointer" onChange={(e) => setCat(e.target.value)} />
              Other
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
