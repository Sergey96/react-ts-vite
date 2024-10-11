import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '~store/store';

interface IUser {
  avatar: string;
  banReason: string;
  banned: false;
  city: string;
  city_id: number;
  email: string;
  id: number;
  login: string;
  name: string;
  patronymic: string;
  phone: string;
  sex: string;
  surname: string;
}

interface ICity {
  id: number;
  name: string;
  country: string;
  region: string;
  region_fias_id: string;
  city_fias_id: string;
  timezone: string;
  geo_lat: string;
  geo_lon: string;
}

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    user: {} as IUser,
    cities: [] as ICity[],
    city: 0 as ICity['id'],
  },
  reducers: {
    setMe(state, action) {
      state.user = action.payload;
    },
    setCities(state, action) {
      state.cities = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
  },
});

export const { setMe, setCities, setCity } = UserSlice.actions;
export default UserSlice.reducer;

export const getMe = (state: RootState) => state.user.user;

export const getCities = (state: RootState) => state.user.cities;

export const getCity = (state: RootState) => state.user.city;
