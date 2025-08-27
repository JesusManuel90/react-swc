import { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import { fakeAuth } from "../../api/fakeAuth";
import { AUTH_CONSTANTS } from "../../constants/auth";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { setUser, setToken, setLoading, ...contextValues } = context;

  const login = async (credentials) => {
    try {
      setLoading(true);
      const { user, token } = await fakeAuth(credentials);
      
      setUser(user);
      setToken(token);
      localStorage.setItem(AUTH_CONSTANTS.STORAGE_KEYS.AUTH_TOKEN, token);
      localStorage.setItem(AUTH_CONSTANTS.STORAGE_KEYS.USER_DATA, JSON.stringify(user));

      return { 
        success: true, 
        message: 'Inicio de sesión exitoso',
        user,
        token
      };
    } catch (error) {
      return { 
        success: false, 
        error: error.message,
        message: 'Credenciales inválidas. Verifica tu usuario y contraseña.'
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(AUTH_CONSTANTS.STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(AUTH_CONSTANTS.STORAGE_KEYS.USER_DATA);
    
    return {
      success: true,
      message: 'Sesión cerrada exitosamente'
    };
  };

  return {
    ...contextValues,
    login,
    logout
  };
};