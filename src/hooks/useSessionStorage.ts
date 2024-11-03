import { useCallback } from 'react';

export const useSessionStorage = () => {
  const setItem = useCallback((key: string, value: string) => {
    sessionStorage.setItem(key, value);
  }, []);

  const getItem = useCallback((key: string) => {
    return sessionStorage.getItem(key) || null;
  }, []);

  const removeItem = useCallback((key: string) => {
    sessionStorage.removeItem(key);
  }, []);

  return { setItem, getItem, removeItem };
};
