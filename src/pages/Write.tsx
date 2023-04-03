import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

export const Write = () => {
  const { state } = useLocation();
  console.log(useLocation());
  const [value, setValue] = useState(state?.title || '');
  const [title, setTitle] = useState(state?.desc || '');
  const [file, setFile] = useState<string | Blob | null>(null);
  const [category, setCat] = useState(state?.cat || '');
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

  const handleSubmit = async (e: any) => {
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
        <div className="editorContainer">
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
              <input type="radio" checked={category === 'React'} name="react" value="React" id="react" onChange={(e) => setCat(e.target.value)} />
              React
            </label>
          </div>
          <div className="">
            <label htmlFor="science">
              <input type="radio" checked={category === 'science'} name="cat" value="science" id="science" onChange={(e) => setCat(e.target.value)} />
              Science
            </label>
          </div>
          <div className="">
            <label htmlFor="technology">
              <input type="radio" checked={category === 'technology'} name="cat" value="technology" id="technology" onChange={(e) => setCat(e.target.value)} />
              Technology
            </label>
          </div>
          <div className="">
            <label htmlFor="cinema">
              <input type="radio" checked={category === 'cinema'} name="cat" value="cinema" id="cinema" onChange={(e) => setCat(e.target.value)} />
              Cinema
            </label>
          </div>
          <div className="">
            <label htmlFor="design">
              <input type="radio" checked={category === 'design'} name="cat" value="design" id="design" onChange={(e) => setCat(e.target.value)} />
              Design
            </label>
          </div>
          <div className="">
            <label htmlFor="food">
              <input type="radio" checked={category === 'food'} name="cat" value="food" id="food" onChange={(e) => setCat(e.target.value)} />
              Food
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
