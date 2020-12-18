import React from 'react';

export const themes = {
  light: {
    name: 'light',
    primaryColor: 'pink',
    secondaryColor: 'lightblue',
  },
  dark: {
    name: 'dark',
    primaryColor: 'deeppink',
    secondaryColor: 'deepblue',
  },
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
