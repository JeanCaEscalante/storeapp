import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { authLogin, authProfile } from '../services/authentication';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const AuthProfile = async (token) => {
    const logged = await authProfile(token);
    setUser(logged);
  };

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('token');
    if (loggedUserJSON) {
      AuthProfile(loggedUserJSON);
      setIsAuth(true);
      navigate('/');
    }
  }, []);

  const AuthLogin = async (object) => {
    try {
      const data = await authLogin(object);
      AuthProfile(data.access_token);
      setIsAuth(true);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const AuthLogout = () => {
    setUser(null);
    setIsAuth(false);
    localStorage.removeItem('token');
  };

  const value = useMemo(() => ({
    isAuth,
    user,
    AuthLogin,
    AuthLogout,
  }), [isAuth, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useUser = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useUser not contain AuthContext');
  }

  return context;
};
