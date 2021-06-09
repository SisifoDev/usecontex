import React from 'react';

export const themes = {
    light: {
        name: 'light',
        foreground: '#2A3B47',
        background: '#FBFBFE'
    },
    dark: {
        name: 'dark',
        foreground: '#EFF3F5',
        background: '#272F40'
    }
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;