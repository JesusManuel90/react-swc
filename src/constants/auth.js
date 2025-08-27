export const AUTH_CONSTANTS = {
  FAKE_CREDENTIALS: {
    username: 'admin',
    password: '1234',
    email: 'admin@email.com',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  },
  
  STORAGE_KEYS: {
    AUTH_TOKEN: 'fake-jwt-token',
    USER_DATA: 'user',
  },
  
  MESSAGES: {
    LOGIN_SUCCESS: 'Inicio de sesión exitoso',
    LOGIN_ERROR: 'Credenciales incorrectas',
    LOGOUT_SUCCESS: 'Sesión cerrada exitosamente',
    UNAUTHORIZED: 'No tienes permisos para acceder a esta página',
  }
};