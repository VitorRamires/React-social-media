import React from 'react';
import { TOKEN_POST, USER_GET } from '../src/api';

export const UserContext = React.createContext();

export const UseStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(false);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const response = await fetch(url, options);
    const token = await response.json();
    window.localStorage.setItem('token', token.token);
    getUser(token.token);
  }

  return (
    <div>
      <UserContext.Provider value={{ userLogin, data, login }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};
