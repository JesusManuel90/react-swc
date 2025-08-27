import {AUTH_CONSTANTS} from "../constants/auth";


export const fakeAuth = async (credentials) => {
  const { username, password } = credentials;

  await new Promise((res) => setTimeout(res, 800));

  if (username === AUTH_CONSTANTS.FAKE_CREDENTIALS.username && password === AUTH_CONSTANTS.FAKE_CREDENTIALS.password) {
    const user = {
      id: "1",
      username: AUTH_CONSTANTS.FAKE_CREDENTIALS.username,
      email: AUTH_CONSTANTS.FAKE_CREDENTIALS.email,
    };

    const token = AUTH_CONSTANTS.FAKE_CREDENTIALS.token;

    return { user, token };
  }

  throw new Error("Credenciales inválidas");
};