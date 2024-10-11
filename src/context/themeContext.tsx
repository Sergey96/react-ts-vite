import { createContext, useState } from 'react';
import { THEME_NAMES } from '~themes/theme';

export const ThemeContext = createContext<IThemeContext>({
  theme: THEME_NAMES.BLUE,
  setTheme: () => {},
});

interface IAppContextProvider {
  children: React.ReactNode;
}

export interface IThemeContext {
  theme: THEME_NAMES;
  setTheme: (theme: THEME_NAMES) => void;
}

export const ThemeContextProvider: React.FC<IAppContextProvider> = ({
  children,
}) => {
  const [theme, setTheme] = useState<IThemeContext['theme']>(THEME_NAMES.BLUE);

  const toggleTheme = (value: IThemeContext['theme']) => {
    setTheme(value);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: toggleTheme } as IThemeContext}>
      {children}
    </ThemeContext.Provider>
  );
};
