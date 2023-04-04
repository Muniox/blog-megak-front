import React, {
  FormEvent, useState,
} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { sanitizer } from '../utils/sanitizer';

export const Write = () => {
  const { state } = useLocation();
  console.log(useLocation());
  const [title, setTitle] = useState(sanitizer(state?.title) || '');
  const [value, setValue] = useState(sanitizer(state?.desc) || '');
  const [file, setFile] = useState<string | Blob | null>(null);
  const [category, setCat] = useState(state?.category || '');
  // inna metoda, zamiast w jednym inpucie zrobimy w kilku, Register jest przykladem jednego inputa

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
      console.log(err);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      // eslint-disable-next-line no-unused-expressions
      state ? await axios.put(`${import.meta.env.VITE_PATH}posts/${state.id}`, {
        title, desc: value, category, img: file ? imgUrl : '',
      }, { withCredentials: true }) : await axios.post(`${import.meta.env.VITE_PATH}posts/`, {
        title,
        desc: value,
        category,
        img: file ? imgUrl : '',
        date: format(Date.now(), 'yyyy-MM-dd HH:mm:ss'),
      }, {
        withCredentials: true,
      });
      navigate('/'); // powinno nawigować zamiast do głównej to do tego postu!
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <div className="">
        <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <div className="">
          <ReactQuill className="" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="">
        <div className="">
          <h1>Publish</h1>
          <span>
            <b>Status: </b>
            {' '}
            Draft
          </span>
          <span>
            <b>Visibility: </b>
            {' '}
            Public
          </span>
          <label className="" htmlFor="file">
            <input style={{ display: 'none' }} type="file" name="" id="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
            Upload Image
          </label>
          <div className="buttons">
            <button type="button">Save as draft</button>
            <button type="button" onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="">
            <label htmlFor="react">
              <input type="radio" checked={category === 'React'} name="category" value="React" id="react" onChange={(e) => setCat(e.target.value)} />
              React
            </label>
          </div>
          <div className="">
            <label htmlFor="vanilla">
              <input type="radio" checked={category === 'Vanilla JavaScript'} name="category" value="Vanilla JavaScript" id="vanilla" onChange={(e) => setCat(e.target.value)} />
              Vanilla JavaScript
            </label>
          </div>
          <div className="">
            <label htmlFor="node">
              <input type="radio" checked={category === 'Node'} name="category" value="Node" id="node" onChange={(e) => setCat(e.target.value)} />
              Node
            </label>
          </div>
          <div className="">
            <label htmlFor="express">
              <input type="radio" checked={category === 'Express'} name="category" value="Express" id="express" onChange={(e) => setCat(e.target.value)} />
              Express
            </label>
          </div>
          <div className="">
            <label htmlFor="typescript">
              <input type="radio" checked={category === 'TypeScript'} name="category" value="TypeScript" id="typescript" onChange={(e) => setCat(e.target.value)} />
              TypeScript
            </label>
          </div>
          <div className="">
            <label htmlFor="nest">
              <input type="radio" checked={category === 'NestJS'} name="category" value="NestJS" id="nest" onChange={(e) => setCat(e.target.value)} />
              NestJS
            </label>
          </div>
          <div className="">
            <label htmlFor="other">
              <input type="radio" checked={category === 'Other'} name="category" value="Other" id="other" onChange={(e) => setCat(e.target.value)} />
              Other
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
