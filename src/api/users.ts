import { get, post } from './API';

export const users = {
  list: () => get('/users/all'),
  get: (id: string) => get(`/users/${id}`),
  delete: (id: string) => get(`/users/delete/${id}`),
  role: (id: string, role: string) => {
    const values = {
      userId: Number.parseInt(id, 10),
      value: role,
    };
    return post('/users/role/', values);
  },
  add: (data: any) => {
    const values = {
      ...data,
      role: Number.parseInt(data.role, 10),
    };
    return post('/users', values);
  },
  password: (id: string, password: any) => {
    const values = {
      id: Number.parseInt(id, 10),
      password,
    };
    return post('/users/password', values);
  },
};
