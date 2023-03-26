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
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" onChange={handleChange} />
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
