import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

export const Register = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [err, setError] = useState<string | undefined | null>(null);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_PATH}users/register`, inputs);
      navigate('/login');
    } catch (error) {
      if (axios.isAxiosError<AxiosError, Record<string, unknown>>(error)) {
        setError(error.response?.data?.message);
      }
    }
  };
  return (
    <div className="">
      <h1>Rejestracja</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="pseudonim"
          name="name"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="hasło"
          name="password"
          onChange={handleChange}
        />
        <button
          type="submit"
        >
          Zarejestruj
        </button>
        {err && <p>{err}</p>}
        <span>
          Czy masz już swoje konto?
          <Link to="/login">Logowanie</Link>
        </span>
      </form>
    </div>
  );
};
