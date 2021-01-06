import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('dark_mode', false);

  useEffect(() => {
    darkMode
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
