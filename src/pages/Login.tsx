import React, {
  ChangeEvent,
  FormEvent, useContext, useState,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext, AuthContextProps } from '../context/authContext';

interface AxiosError {
  message: string;
  errors: Record<string, string[]>
}

export const Login = () => {
  const [inputs, setInputs] = useState({
    name: '',
    password: '',
  });

  const [err, setError] = useState<string | undefined | null>(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext) as AuthContextProps;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate('/');
    } catch (error) {
      if (axios.isAxiosError<AxiosError, Record<string, unknown>>(error)) {
        setError(error.response?.data?.message);
      }
    }
  };

  return (
    <div className="mt-8 flex-grow flex flex-col items-center justify-center gap-10">
      <h1
        className="text-4xl"
      >
        Logowanie
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
            onChange={handleChange}
            id="name"
            placeholder=" "
            autoComplete="off"
            name="name"
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
            type="password"
            onChange={handleChange}
            id="password"
            placeholder=" "
            autoComplete="off"
            name="password"
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
          className="rounded-full primary-gradient text-white px-8 py-4 font-semibold text-xl duration-300"
        >
          Zaloguj
        </button>
        {err && <p className="text-red-600">{err}</p>}
        <span className="flex flex-col gap-6 sm:flex-row sm:items-center">
          Nie masz jeszcze konta?

          <Link to="/register">
            <button
              type="button"
              className="rounded-full primary-gradient text-white px-4 py-3 font-semibold text-sm duration-300 mx-auto block"
            >
              Zarejestruj się
            </button>
          </Link>
        </span>
      </form>
    </div>
  );
};
