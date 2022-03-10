import React, { useCallback, useMemo, useState } from 'react';
import Button from './Button';
import Test from './Test';
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
  toggleTheme: () => { },
});

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  // useCallback called once, memo is used to compare 'increment' function by reference and decide if the child should be rerendered
  const increment = useCallback(() => { setCount(c => c + 1) }, [setCount]);

  // useMemo called on change of the array
  const sumArray = useMemo(() => {
    console.log('useMemo called again');
    return array.join();
  }, [array]);

  return (
    <ThemeProvider>
      <Button />
      <Test increment={increment} />
      <div>{count}</div>
      <div>{sumArray}</div>
      <button onClick={() => setArray([1,2,3,4,5])}>Set new array to test useMemo</button>
    </ThemeProvider>
  );
}

export default App;
