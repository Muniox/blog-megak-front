import React, {
  createContext, useEffect, useState, ReactNode, useMemo,
} from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { SimpleEntityResponse } from 'types';

interface User {
  name: string;
  password: string;
}

export interface AuthContextProps {
  currentUser: SimpleEntityResponse['userInfo'] | null;
  login: (inputs: User) => Promise<void>;
  logout: () => Promise<void>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<SimpleEntityResponse['userInfo'] | null>(
    JSON.parse(localStorage.getItem('user') || 'null'),
  );

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  const contextValue: AuthContextProps = useMemo(() => {
    const login = async (inputs: User) => {
      const res = await axios.post<SimpleEntityResponse>(`${import.meta.env.VITE_PATH}users/login`, inputs);
      setCurrentUser(res.data.userInfo);
    };

    const logout = async () => {
      await axios.post(`${import.meta.env.VITE_PATH}users/logout`);
      setCurrentUser(null);
    };

    return {
      currentUser,
      login,
      logout,
    };
  }, [currentUser]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
