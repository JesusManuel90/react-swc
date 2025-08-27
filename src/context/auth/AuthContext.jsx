import { createContext, useState, useEffect, useMemo } from 'react';
import { AUTH_CONSTANTS } from '../../constants/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem(AUTH_CONSTANTS.STORAGE_KEYS.AUTH_TOKEN));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem(AUTH_CONSTANTS.STORAGE_KEYS.USER_DATA);
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, [token]);

  const value = useMemo(() => ({
    user,
    token,
    loading,
    setUser,
    setToken,
    setLoading,
    isAuthenticated: !!token
  }), [user, token, loading]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };