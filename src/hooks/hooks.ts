import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useAppNavigation = (url = '/') => {
  const navigate = useNavigate();
  const callback = useCallback(
    (param = '') => {
      if (typeof param === 'string') {
        navigate(`${url || '/'}${param}`);
      } else {
        navigate(`${url || '/'}`);
      }
    },
    [navigate, url],
  );

  return callback;
};
