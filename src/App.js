import React from 'react';
import Button from './Button';
import { ThemeProvider } from './theme-context';

const themes = {
  light: {
    background: '#eeeeee',
  },
  dark: {
    background: '#222222',
  },
};

export const UserContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

function App() {
  return (
    <ThemeProvider>
      <Button />
    </ThemeProvider>
  );
}

export default App;
