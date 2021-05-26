import ApiService from 'utils/ApiService';
import React, { createContext, useState } from 'react';
import { random_colors } from 'utils/helpers';
import { withRouter } from 'react-router-dom';

const AppContext = createContext();
const Provider = AppContext.Provider;
const AuthConsumer = AppContext.Consumer;

const { post, put } = ApiService();

const store = props => {
  const auth = localStorage.is_authenticated
  ? JSON.parse(localStorage.is_authenticated)
  : false;
  const [is_authenticated, setAuthValue] = useState(auth);
  const [isLogoutLoading, setIsLogoutLoading] = useState(false);

  const value = {
  signIn: signIn,
  signOut: signOut,
  verify: verify,
  forgot: forgot,
  reset: reset,
  isLogoutLoading: isLogoutLoading,
  setAuthValue: setAuthValue,
  is_authenticated: is_authenticated,
  };

  function forgot(body) {
  return post('/auth/forgot-password', body)
    .then(res => res)
    .catch(err => {
    throw err.data;
    });
  }


  return <Provider value={value}>{props.children}</Provider>;
};

const AuthProvider = withRouter(Auth);
export { AuthContext, AuthProvider, AuthConsumer };
