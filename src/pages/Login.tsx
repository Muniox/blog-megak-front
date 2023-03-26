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
    <div className="mt-8 flex-grow">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="relative inline-block border-amber-400"
        >
          <input
            type="text"
            name="name"
            onChange={handleChange}
            id="name"
            className="text-2xl border-2 rounded-lg transition duration-200 focus:border-blue-400 focus:ring-blue-400"
          />
          <span className="text-4xl text absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-200 input-text px-1 text-gray-500 font-light">Name</span>
        </label>

        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        <button type="submit">Login</button>
        {err && <p>{err}</p>}
        <span>
          Don &apos;t you have an account?
          <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};
