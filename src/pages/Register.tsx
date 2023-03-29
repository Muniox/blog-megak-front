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
    <div
      className="mt-8 flex-grow flex flex-col items-center justify-center gap-10"
    >
      <h1 className="text-4xl">
        Rejestracja
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex mt-6 gap-10 justify-center items-center flex-col"
      >
        <label
          htmlFor="name"
          className="relative border-amber-400"
        >
          <input
            required
            type="text"
            placeholder=" "
            name="name"
            autoComplete="off"
            onChange={handleChange}
            className="w-[220px] sm:w-full text-2xl border-2 rounded-lg transition duration-200 focus:border-blue-400 focus:ring-blue-400 myNameInput myInput relative z-20 bg-transparent"
          />
          <span
            className="text-2xl absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-200 px-1 text-gray-400 input-text z-10"
          >
            Pseudonim
          </span>
        </label>

        <label
          htmlFor="password"
          className="relative border-amber-400"
        >
          <input
            required
            type="email"
            placeholder=" "
            name="email"
            autoComplete="off"
            onChange={handleChange}
            className="w-[220px] sm:w-full text-2xl border-2 rounded-lg transition duration-200 focus:border-blue-400 focus:ring-blue-400 myPasswordInput myInput relative z-20 bg-transparent"
          />
          <span
            className="text-2xl absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-200 px-1 text-gray-400 input-text z-10"
          >
            Email
          </span>
        </label>

        <label
          htmlFor="password"
          className="relative border-amber-400"
        >
          <input
            required
            type="password"
            placeholder=" "
            name="password"
            autoComplete="off"
            onChange={handleChange}
            className="w-[220px] sm:w-full text-2xl border-2 rounded-lg transition duration-200 focus:border-blue-400 focus:ring-blue-400 myPasswordInput myInput relative z-20 bg-transparent"
          />
          <span
            className="text-2xl absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-200 px-1 text-gray-400 input-text z-10"
          >
            Hasło
          </span>
        </label>

        <button
          type="submit"
        >
          Zarejestruj
        </button>
        {err && <p>{err}</p>}
        <span>
          Czy masz już swoje konto?
          <Link to="/login"> Logowanie</Link>
        </span>
      </form>
    </div>
  );
};
