import { client, get, post } from './API';

export const auth = {
  me: () => get('/client-users/me'),
  system_set_token(token: string) {
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  login: (login: string, password: string) =>
    post('/auth/login', { login, password }),
  logout: () => get('/auth/logout'),
};
