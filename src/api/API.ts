import axios from 'axios';
import { getCookie } from '~utils/cookie';

import { auth } from './auth';
import { users } from './users';

export const BASE_URL = import.meta.env.VITE_BACK_URL;

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const Api = {
  auth,
  users,
};
interface IResultRequest {
  success: boolean;
  error: string;
  code: number;
  data: any;
}

export const get = async (url: string) => {
  try {
    const response = await client.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return {
      success: true,
      code: 200,
      data: response.data?.data,
      error: '',
    } as IResultRequest;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        error:
          error?.response?.data?.message ?? 'Ошибка получения данных с сервера',
        code: error?.response?.status ?? 500,
        data: null,
      } as IResultRequest;
    }
    return {
      success: false,
      error: 'Ошибка получения данных с сервера',
      code: 400,
      data: null,
    } as IResultRequest;
  }
};

export const fakeGet = async (response: any) =>
  ({
    success: true,
    code: 200,
    data: response,
    error: '',
  }) as IResultRequest;

export const post = async (url: string, data: any) => {
  try {
    const response = await client.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return {
      success: true,
      code: 200,
      data: response.data?.data,
      error: '',
    } as IResultRequest;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        error: error?.response?.data?.message ?? '',
        code: error?.response?.status,
        data: null,
      } as IResultRequest;
    }
    return {
      success: false,
      error: 'Ошибка отправки данных на сервер',
      code: 400,
      data: null,
    } as IResultRequest;
  }
};

const token = getCookie('token');
if (token) {
  auth.system_set_token(token);
}
